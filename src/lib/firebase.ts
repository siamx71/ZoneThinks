import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getDatabase, Database } from 'firebase/database';
import { getAuth, Auth } from 'firebase/auth';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

const env = (import.meta as any).env || {};

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyCLTvNlEv7QApj8b1-tFH1cZ-QJ7lmYMc0",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "zonethinksit-aebb0.firebaseapp.com",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "zonethinksit-aebb0",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "zonethinksit-aebb0.firebasestorage.app",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1069925622822",
  appId: env.VITE_FIREBASE_APP_ID || "1:1069925622822:web:9ac7f90f3455e77d9db2e7",
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID || "G-X0H4S9EN1N",
  databaseURL: env.VITE_FIREBASE_DATABASE_URL || "https://zonethinksit-aebb0-default-rtdb.firebaseio.com",
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let appInstance: FirebaseApp | null = null;
let dbInstance: Firestore | null = null;
let rtdbInstance: Database | null = null;
let authInstance: Auth | null = null;
let analyticsInstance: Analytics | null = null;

if (isFirebaseConfigured) {
  try {
    appInstance = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    dbInstance = getFirestore(appInstance);
    
    try {
      rtdbInstance = getDatabase(appInstance);
    } catch (_) {}

    authInstance = getAuth(appInstance);

    if (typeof window !== 'undefined') {
      isSupported().then((supported) => {
        if (supported && appInstance) {
          analyticsInstance = getAnalytics(appInstance);
        }
      }).catch(() => {});
    }
  } catch (err) {
    console.warn('[Firebase] Initialization notice:', err);
  }
}

export const app = appInstance;
export const db = dbInstance;
export const rtdb = rtdbInstance;
export const auth = authInstance;
export const analytics = analyticsInstance;
