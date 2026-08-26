import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { ProjectItem, projectsData as defaultProjects } from '@/data/projects';
import { PricingTier, pricingPlans as defaultPricing } from '@/data/pricing';
import { db, rtdb, auth, isFirebaseConfigured } from '@/lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { ref, onValue, set } from 'firebase/database';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

export type OrderStatus = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled';

export interface PurchaseOrder {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  companyName?: string;
  planId: string;
  planName: string;
  billingCycle: 'One-Time Project' | 'Monthly Retainer';
  price: string;
  timeline: string;
  projectRequirements: string;
  status: OrderStatus;
  createdAt: string;
}

export interface AdminSnapshot {
  isAuthenticated: boolean;
  isGatewayUnlocked: boolean;
  projects: ProjectItem[];
  pricingPlans: PricingTier[];
  purchaseOrders: PurchaseOrder[];
  _lastUpdated?: number;
}

const sampleOrders: PurchaseOrder[] = [
  {
    id: 'ZT-ORD-1094',
    clientName: 'Alexander Hayes',
    clientEmail: 'alex.hayes@vertexbiotech.io',
    clientPhone: '+1 (415) 890-2341',
    companyName: 'Vertex BioTech',
    planId: 'business',
    planName: 'Business Scale',
    billingCycle: 'One-Time Project',
    price: '$9,500',
    timeline: '4 - 6 Weeks',
    projectRequirements: 'Complete redesign of our web platform with Next.js 15, custom interactive DNA-mesh 3D animations, and lead automation pipeline.',
    status: 'In Progress',
    createdAt: '2026-08-24 14:32',
  },
  {
    id: 'ZT-ORD-1095',
    clientName: 'Elena Rostova',
    clientEmail: 'elena@novafinance.co.uk',
    clientPhone: '+44 20 7946 0912',
    companyName: 'Nova Financial UK',
    planId: 'professional',
    planName: 'Enterprise SaaS',
    billingCycle: 'Monthly Retainer',
    price: '$7,800/mo',
    timeline: '6 - 10 Weeks',
    projectRequirements: 'Multi-tenant wealth tech portal with real-time portfolio analytics, biometric authentication, and custom billing tiers.',
    status: 'Pending',
    createdAt: '2026-08-25 18:15',
  },
];

// Helper to safely load initial snapshot from localStorage or defaults
const loadInitialSnapshot = (): AdminSnapshot => {
  if (typeof window === 'undefined') {
    return {
      isAuthenticated: false,
      isGatewayUnlocked: false,
      projects: defaultProjects,
      pricingPlans: defaultPricing,
      purchaseOrders: sampleOrders,
      _lastUpdated: 0,
    };
  }

  let isAuthenticated = false;
  let isGatewayUnlocked = false;
  let projects = defaultProjects;
  let pricingPlans = defaultPricing;
  let purchaseOrders = sampleOrders;
  let _lastUpdated = 0;

  try {
    const authVal = localStorage.getItem('zt_admin_auth');
    if (authVal === 'true') isAuthenticated = true;

    const gateVal = sessionStorage.getItem('zt_gateway_unlocked');
    if (gateVal === 'true') isGatewayUnlocked = true;

    const savedProjects = localStorage.getItem('zt_projects_data');
    if (savedProjects) projects = JSON.parse(savedProjects);

    const savedPricing = localStorage.getItem('zt_pricing_data');
    if (savedPricing) pricingPlans = JSON.parse(savedPricing);

    const savedOrders = localStorage.getItem('zt_purchase_orders');
    if (savedOrders) purchaseOrders = JSON.parse(savedOrders);

    const savedUpdated = localStorage.getItem('zt_last_updated');
    if (savedUpdated) _lastUpdated = Number(savedUpdated);
  } catch (_) {}

  return {
    isAuthenticated,
    isGatewayUnlocked,
    projects,
    pricingPlans,
    purchaseOrders,
    _lastUpdated,
  };
};

class FirebaseRealtimeSnapshotStore {
  private snapshot: AdminSnapshot = loadInitialSnapshot();
  private listeners: Set<() => void> = new Set();
  private channel: BroadcastChannel | null = null;
  private isSyncingWithServer = false;

  constructor() {
    if (typeof window !== 'undefined') {
      // 1. Same-device multi-tab BroadcastChannel
      try {
        if ('BroadcastChannel' in window) {
          this.channel = new BroadcastChannel('zt_admin_realtime_sync');
          this.channel.onmessage = (event) => {
            if (event.data && event.data.type === 'SYNC_SNAPSHOT') {
              this.applyIncomingSnapshot(event.data.snapshot, false);
            }
          };
        }
      } catch (_) {}

      // 2. Storage event fallback
      window.addEventListener('storage', () => {
        const fresh = loadInitialSnapshot();
        this.applyIncomingSnapshot(fresh, false);
      });

      // 3. Multi-Device Realtime WebSocket listener (Vite Dev Server Plugin)
      try {
        if (import.meta && (import.meta as any).hot) {
          (import.meta as any).hot.on('zt_cloud_snapshot_sync', (data: any) => {
            if (data && data.projects) {
              this.applyIncomingSnapshot(data, false);
            }
          });
        }
      } catch (_) {}

      // 4. Multi-Device Firebase Cloud Realtime Listener (Firestore & Realtime Database)
      this.initFirebaseRealtimeListeners();

      // 5. Initial fetch from server API for multi-device sync
      this.fetchServerSnapshot();

      // 6. Fast background delta sync (every 2.5s & on window focus)
      setInterval(() => {
        this.fetchServerSnapshot();
      }, 2500);

      window.addEventListener('focus', () => {
        this.fetchServerSnapshot();
      });
    }
  }

  private initFirebaseRealtimeListeners() {
    if (!isFirebaseConfigured) return;

    try {
      // Auto-authenticate with Firebase to guarantee read/write authorization
      const currentAuth = auth;
      if (currentAuth && !currentAuth.currentUser) {
        signInAnonymously(currentAuth).catch(() => {});
      }

      // Listen to Firestore real-time snapshot
      if (db) {
        const snapshotDocRef = doc(db, 'system_snapshot', 'main');
        onSnapshot(
          snapshotDocRef,
          (docSnap) => {
            if (docSnap.exists()) {
              const cloudData = docSnap.data() as Partial<AdminSnapshot>;
              this.applyIncomingSnapshot(cloudData, false);
            }
          },
          (err) => {
            console.warn('[Firestore] Snapshot stream warning:', err.message);
          }
        );
      }

      // Listen to Realtime Database onValue snapshot
      if (rtdb) {
        const rtdbRef = ref(rtdb, 'system_snapshot');
        onValue(
          rtdbRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const val = snapshot.val() as Partial<AdminSnapshot>;
              this.applyIncomingSnapshot(val, false);
            }
          },
          (err) => {
            console.warn('[RealtimeDB] Snapshot stream warning:', err.message);
          }
        );
      }
    } catch (err) {
      console.warn('[Firebase] Listener error:', err);
    }
  }

  public getSnapshot = (): AdminSnapshot => {
    return this.snapshot;
  };

  public getServerSnapshot = (): AdminSnapshot => {
    return {
      isAuthenticated: false,
      isGatewayUnlocked: false,
      projects: defaultProjects,
      pricingPlans: defaultPricing,
      purchaseOrders: sampleOrders,
      _lastUpdated: 0,
    };
  };

  public subscribe = (listener: () => void): (() => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private applyIncomingSnapshot = (incoming: Partial<AdminSnapshot>, broadcast: boolean = false) => {
    if (!incoming || !incoming.projects || !Array.isArray(incoming.projects)) return;

    const incomingUpdated = incoming._lastUpdated || 0;
    const currentUpdated = this.snapshot._lastUpdated || 0;

    const hasChanged =
      JSON.stringify(incoming.projects) !== JSON.stringify(this.snapshot.projects) ||
      JSON.stringify(incoming.pricingPlans) !== JSON.stringify(this.snapshot.pricingPlans) ||
      JSON.stringify(incoming.purchaseOrders) !== JSON.stringify(this.snapshot.purchaseOrders);

    if (hasChanged || incomingUpdated > currentUpdated) {
      this.snapshot = {
        ...this.snapshot,
        projects: incoming.projects || this.snapshot.projects,
        pricingPlans: incoming.pricingPlans || this.snapshot.pricingPlans,
        purchaseOrders: incoming.purchaseOrders || this.snapshot.purchaseOrders,
        _lastUpdated: Math.max(incomingUpdated, Date.now()),
      };
      this.emitChange(broadcast, false);
    }
  };

  private async fetchServerSnapshot() {
    if (this.isSyncingWithServer || typeof window === 'undefined') return;
    try {
      this.isSyncingWithServer = true;
      const res = await fetch('/api/snapshot', {
        headers: { 'Cache-Control': 'no-cache' },
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
          this.applyIncomingSnapshot(data, false);
        }
      }
    } catch (_) {
    } finally {
      this.isSyncingWithServer = false;
    }
  }

  private async pushCloudSnapshot(snapshot: AdminSnapshot) {
    if (typeof window === 'undefined') return;

    // 1. Push to Vite Dev Server
    try {
      fetch('/api/snapshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(snapshot),
      }).catch(() => {});
    } catch (_) {}

    // 2. Push to Firebase Cloud Firestore
    if (isFirebaseConfigured && db) {
      try {
        const snapshotDocRef = doc(db, 'system_snapshot', 'main');
        await setDoc(snapshotDocRef, {
          projects: snapshot.projects,
          pricingPlans: snapshot.pricingPlans,
          purchaseOrders: snapshot.purchaseOrders,
          _lastUpdated: snapshot._lastUpdated || Date.now(),
        }, { merge: true });
      } catch (err) {
        console.warn('[Firestore] Sync push warning:', err);
      }
    }

    // 3. Push to Firebase Realtime Database
    if (isFirebaseConfigured && rtdb) {
      try {
        const rtdbRef = ref(rtdb, 'system_snapshot');
        await set(rtdbRef, {
          projects: snapshot.projects,
          pricingPlans: snapshot.pricingPlans,
          purchaseOrders: snapshot.purchaseOrders,
          _lastUpdated: snapshot._lastUpdated || Date.now(),
        });
      } catch (err) {
        console.warn('[RealtimeDB] Sync push warning:', err);
      }
    }
  }

  private emitChange = (broadcast: boolean = true, pushToCloud: boolean = true) => {
    // Synchronously notify all React 18 useSyncExternalStore subscribers (0ms UI lag)
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (_) {}
    });

    // Synchronously persist to localStorage for offline access
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('zt_admin_auth', this.snapshot.isAuthenticated ? 'true' : 'false');
        localStorage.setItem('zt_projects_data', JSON.stringify(this.snapshot.projects));
        localStorage.setItem('zt_pricing_data', JSON.stringify(this.snapshot.pricingPlans));
        localStorage.setItem('zt_purchase_orders', JSON.stringify(this.snapshot.purchaseOrders));
        localStorage.setItem('zt_last_updated', String(this.snapshot._lastUpdated || Date.now()));
      } catch (_) {}

      // Broadcast to other tabs on same device
      if (broadcast && this.channel) {
        try {
          this.channel.postMessage({
            type: 'SYNC_SNAPSHOT',
            snapshot: this.snapshot,
          });
        } catch (_) {}
      }

      // Push to Cloud / Server for multi-device live sync
      if (pushToCloud) {
        this.pushCloudSnapshot(this.snapshot);
      }
    }
  };

  // Gateway Security Operations
  public unlockGateway = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('zt_gateway_unlocked', 'true');
    }
    this.snapshot = { ...this.snapshot, isGatewayUnlocked: true };
    this.emitChange(false, false);
  };

  public lockGateway = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('zt_gateway_unlocked');
    }
    this.snapshot = { ...this.snapshot, isGatewayUnlocked: false, isAuthenticated: false };
    this.emitChange(true, false);
  };

  // Auth Operations
  public login = (email: string, pass: string): boolean => {
    const adminPass = (typeof window !== 'undefined' && localStorage.getItem('zt_admin_custom_pass')) || 'admin123';
    const cleanEmail = email.trim().toLowerCase();
    if ((cleanEmail === 'sceamhasan8@gmail.com' || cleanEmail === 'admin@zonethinks.it') && pass === adminPass) {
      this.snapshot = { ...this.snapshot, isAuthenticated: true };
      this.emitChange(true, false);

      // Authenticate with Firebase to enable authorized cloud sync
      const currentAuth = auth;
      if (currentAuth) {
        signInWithEmailAndPassword(currentAuth, cleanEmail, pass).catch(() => {
          signInAnonymously(currentAuth).catch(() => {});
        });
      }

      return true;
    }
    return false;
  };

  public logout = () => {
    this.lockGateway();
  };

  // Projects Operations (Instant Local Snapshot + Cloud Multi-Device Push)
  public addProject = (project: Omit<ProjectItem, 'id'>) => {
    const newId = `proj-${Date.now()}`;
    const newProject: ProjectItem = { ...project, id: newId };
    this.snapshot = {
      ...this.snapshot,
      projects: [newProject, ...this.snapshot.projects],
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  public updateProject = (id: string, updated: Partial<ProjectItem>) => {
    this.snapshot = {
      ...this.snapshot,
      projects: this.snapshot.projects.map((p) =>
        p.id === id ? { ...p, ...updated } : p
      ),
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  public deleteProject = (id: string) => {
    this.snapshot = {
      ...this.snapshot,
      projects: this.snapshot.projects.filter((p) => p.id !== id),
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  public resetProjects = () => {
    this.snapshot = {
      ...this.snapshot,
      projects: defaultProjects,
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  // Pricing Operations
  public updatePricingPlan = (id: string, updated: Partial<PricingTier>) => {
    this.snapshot = {
      ...this.snapshot,
      pricingPlans: this.snapshot.pricingPlans.map((plan) =>
        plan.id === id ? { ...plan, ...updated } : plan
      ),
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  public resetPricing = () => {
    this.snapshot = {
      ...this.snapshot,
      pricingPlans: defaultPricing,
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  // Purchase Order Operations
  public createOrder = (
    order: Omit<PurchaseOrder, 'id' | 'createdAt' | 'status'>
  ): string => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const orderId = `ZT-ORD-${randomNum}`;
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(
      now.getDate()
    ).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(
      now.getMinutes()
    ).padStart(2, '0')}`;

    const newOrder: PurchaseOrder = {
      ...order,
      id: orderId,
      status: 'Pending',
      createdAt: formattedDate,
    };

    this.snapshot = {
      ...this.snapshot,
      purchaseOrders: [newOrder, ...this.snapshot.purchaseOrders],
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
    return orderId;
  };

  public updateOrderStatus = (orderId: string, status: OrderStatus) => {
    this.snapshot = {
      ...this.snapshot,
      purchaseOrders: this.snapshot.purchaseOrders.map((ord) =>
        ord.id === orderId ? { ...ord, status } : ord
      ),
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };

  public deleteOrder = (orderId: string) => {
    this.snapshot = {
      ...this.snapshot,
      purchaseOrders: this.snapshot.purchaseOrders.filter((ord) => ord.id !== orderId),
      _lastUpdated: Date.now(),
    };
    this.emitChange(true, true);
  };
}

export const adminStore = new FirebaseRealtimeSnapshotStore();

export interface AdminContextType extends AdminSnapshot {
  unlockGateway: () => void;
  lockGateway: () => void;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  addProject: (project: Omit<ProjectItem, 'id'>) => void;
  updateProject: (id: string, updated: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  resetProjects: () => void;
  updatePricingPlan: (id: string, updated: Partial<PricingTier>) => void;
  resetPricing: () => void;
  createOrder: (order: Omit<PurchaseOrder, 'id' | 'createdAt' | 'status'>) => string;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  deleteOrder: (orderId: string) => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const snapshot = useSyncExternalStore(
    adminStore.subscribe,
    adminStore.getSnapshot,
    adminStore.getServerSnapshot
  );

  const value: AdminContextType = {
    ...snapshot,
    unlockGateway: adminStore.unlockGateway,
    lockGateway: adminStore.lockGateway,
    login: adminStore.login,
    logout: adminStore.logout,
    addProject: adminStore.addProject,
    updateProject: adminStore.updateProject,
    deleteProject: adminStore.deleteProject,
    resetProjects: adminStore.resetProjects,
    updatePricingPlan: adminStore.updatePricingPlan,
    resetPricing: adminStore.resetPricing,
    createOrder: adminStore.createOrder,
    updateOrderStatus: adminStore.updateOrderStatus,
    deleteOrder: adminStore.deleteOrder,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context) {
    return context;
  }

  const snapshot = useSyncExternalStore(
    adminStore.subscribe,
    adminStore.getSnapshot,
    adminStore.getServerSnapshot
  );

  return {
    ...snapshot,
    unlockGateway: adminStore.unlockGateway,
    lockGateway: adminStore.lockGateway,
    login: adminStore.login,
    logout: adminStore.logout,
    addProject: adminStore.addProject,
    updateProject: adminStore.updateProject,
    deleteProject: adminStore.deleteProject,
    resetProjects: adminStore.resetProjects,
    updatePricingPlan: adminStore.updatePricingPlan,
    resetPricing: adminStore.resetPricing,
    createOrder: adminStore.createOrder,
    updateOrderStatus: adminStore.updateOrderStatus,
    deleteOrder: adminStore.deleteOrder,
  };
};
