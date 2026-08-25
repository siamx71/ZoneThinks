import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingBag,
  FolderGit2,
  BadgeDollarSign,
  Plus,
  Trash2,
  Edit3,
  Search,
  ExternalLink,
  LogOut,
  Sparkles,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Globe,
  Sun,
  Moon,
  ChevronRight,
  X,
  Save,
  RotateCcw,
  Eye,
  Layers,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { useAdmin, PurchaseOrder, OrderStatus } from '@/context/AdminContext';
import { ProjectItem } from '@/data/projects';
import { PricingTier } from '@/data/pricing';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/common/Button';
import { SEO } from '@/components/common/SEO';
import { NotFound } from '@/pages/NotFound';
import { cn } from '@/utils/cn';

type AdminTab = 'overview' | 'orders' | 'projects' | 'pricing';

export const AdminDashboard: React.FC = () => {
  const {
    isAuthenticated,
    isGatewayUnlocked,
    lockGateway,
    logout,
    projects,
    addProject,
    updateProject,
    deleteProject,
    resetProjects,
    pricingPlans,
    updatePricingPlan,
    resetPricing,
    purchaseOrders,
    updateOrderStatus,
    deleteOrder,
  } = useAdmin();

  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // If accessed directly via URL bar without secret email submission, hide portal completely
  if (!isGatewayUnlocked && !isAuthenticated) {
    return <NotFound />;
  }

  // Protect route if gateway was unlocked but not authenticated
  React.useEffect(() => {
    if (!isAuthenticated && isGatewayUnlocked) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, isGatewayUnlocked, navigate]);

  // Search & Filters
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState<string>('All');
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<PurchaseOrder | null>(null);

  // Project Modal State (Add / Edit)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState<Omit<ProjectItem, 'id'>>({
    slug: '',
    title: '',
    client: '',
    category: 'Websites',
    industry: '',
    shortDesc: '',
    fullOverview: '',
    challenge: '',
    solution: '',
    designProcess: ['Research & Wireframing', 'High-Fidelity UI Design'],
    devProcess: ['Modular Component Architecture', 'API & Database Integration'],
    features: ['High-Speed Edge Delivery', 'Responsive Layouts'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    metrics: [{ label: 'Performance', value: '100/100', description: 'Core Web Vitals score' }],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    galleryImages: [],
    timeline: '3 - 4 Weeks',
    year: 2026,
    liveUrl: 'https://zonethinks.it',
  });

  const [techInput, setTechInput] = useState('');
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  // Professional Custom Confirmation Dialog State
  interface ConfirmDialogState {
    isOpen: boolean;
    title: string;
    message: string;
    targetName?: string;
    confirmLabel: string;
    variant: 'danger' | 'warning' | 'info';
    onConfirm: () => void;
  }

  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({
    isOpen: false,
    title: '',
    message: '',
    confirmLabel: 'Confirm',
    variant: 'danger',
    onConfirm: () => {},
  });

  const openConfirm = (config: Omit<ConfirmDialogState, 'isOpen'>) => {
    setConfirmDialog({ ...config, isOpen: true });
  };

  const closeConfirm = () => {
    setConfirmDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const showNotification = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3000);
  };

  // Filtered Orders
  const filteredOrders = purchaseOrders.filter((ord) => {
    const matchesSearch =
      ord.clientName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      ord.clientEmail.toLowerCase().includes(orderSearch.toLowerCase()) ||
      ord.planName.toLowerCase().includes(orderSearch.toLowerCase()) ||
      ord.id.toLowerCase().includes(orderSearch.toLowerCase());

    const matchesStatus =
      orderStatusFilter === 'All' || ord.status === orderStatusFilter;

    return matchesSearch && matchesStatus;
  });

  const pendingOrdersCount = purchaseOrders.filter((o) => o.status === 'Pending').length;

  // Project Form Handlers
  const handleOpenAddProject = () => {
    setEditingProjectId(null);
    setProjectForm({
      slug: `custom-project-${Date.now().toString().slice(-4)}`,
      title: '',
      client: '',
      category: 'Websites',
      industry: '',
      shortDesc: '',
      fullOverview: '',
      challenge: '',
      solution: '',
      designProcess: ['Client Requirements & Discovery', 'High-Fidelity Prototype'],
      devProcess: ['Full-Stack Implementation', 'Quality Assurance & Launch'],
      features: ['Lightning Fast Performance', 'SEO & Conversion Optimized'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      metrics: [{ label: 'Conversion', value: '+120%', description: 'Growth in engagement' }],
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      galleryImages: [],
      timeline: '3 - 4 Weeks',
      year: 2026,
      liveUrl: 'https://zonethinks.it',
    });
    setTechInput('React, TypeScript, Next.js');
    setIsProjectModalOpen(true);
  };

  const handleOpenEditProject = (p: ProjectItem) => {
    setEditingProjectId(p.id);
    setProjectForm({
      slug: p.slug,
      title: p.title,
      client: p.client,
      category: p.category,
      industry: p.industry,
      shortDesc: p.shortDesc,
      fullOverview: p.fullOverview,
      challenge: p.challenge,
      solution: p.solution,
      designProcess: p.designProcess,
      devProcess: p.devProcess,
      features: p.features,
      technologies: p.technologies,
      metrics: p.metrics,
      heroImage: p.heroImage,
      galleryImages: p.galleryImages,
      timeline: p.timeline,
      year: p.year,
      liveUrl: p.liveUrl,
    });
    setTechInput(p.technologies.join(', '));
    setIsProjectModalOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const updatedData = {
      ...projectForm,
      technologies: techArray.length > 0 ? techArray : ['React', 'Tailwind CSS'],
      slug:
        projectForm.slug.trim() ||
        projectForm.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    };

    if (editingProjectId) {
      updateProject(editingProjectId, updatedData);
      showNotification('Project updated successfully!');
    } else {
      addProject(updatedData);
      showNotification('New project added to portfolio!');
    }
    setIsProjectModalOpen(false);
  };

  // Status Badge Helper
  const renderStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <Clock className="w-3 h-3" />
            <span>Pending Review</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
            <TrendingUp className="w-3 h-3" />
            <span>In Progress</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>Completed</span>
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
            <XCircle className="w-3 h-3" />
            <span>Cancelled</span>
          </span>
        );
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-surface-base text-text-primary flex flex-col font-sans">
      <SEO
        title="Admin Control Panel | ZoneThinks IT"
        description="Live management dashboard for projects, pricing, and purchase orders."
      />

      {/* Top Notification Toast */}
      <AnimatePresence>
        {notificationMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 px-4 py-3 rounded-2xl bg-brand-cyan text-black font-heading font-bold text-xs shadow-glow-cyan flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>{notificationMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 1. ADMIN HEADER BAR */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-surface-raised/95 backdrop-blur-xl border-b border-edge/20 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand & Badge */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-surface-overlay border border-brand-cyan/40 flex items-center justify-center text-brand-cyan font-heading font-black text-base shadow-glow-cyan">
                ZT
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm tracking-tight text-text-primary">
                  ZoneThinks<span className="text-brand-cyan">.IT</span>
                </span>
                <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-bold">
                  Admin Control Engine
                </span>
              </div>
            </Link>

            {pendingOrdersCount > 0 && (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {pendingOrdersCount} New Orders
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-surface-overlay border border-edge/30 text-text-secondary hover:text-brand-cyan transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-surface-overlay border border-edge/30 text-text-secondary hover:text-text-primary transition-colors"
              title="Toggle Theme"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                lockGateway();
                navigate('/');
              }}
              className="p-2 rounded-xl bg-surface-overlay border border-rose-500/30 text-rose-500 hover:bg-rose-500/10 transition-colors"
              title="Logout & Lock Portal"
              aria-label="Logout & Lock Portal"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. ADMIN NAVIGATION TABS */}
      {/* ========================================================================= */}
      <div className="bg-surface-raised border-b border-edge/20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-2 py-2.5 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
              activeTab === 'overview'
                ? 'bg-brand-cyan text-slate-950 shadow-glow-cyan'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-overlay'
            )}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Overview & KPIs</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap relative',
              activeTab === 'orders'
                ? 'bg-brand-cyan text-slate-950 shadow-glow-cyan'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-overlay'
            )}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Purchase Orders</span>
            {pendingOrdersCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                {pendingOrdersCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
              activeTab === 'projects'
                ? 'bg-brand-cyan text-slate-950 shadow-glow-cyan'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-overlay'
            )}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Projects Manager ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('pricing')}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
              activeTab === 'pricing'
                ? 'bg-brand-cyan text-slate-950 shadow-glow-cyan'
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-overlay'
            )}
          >
            <BadgeDollarSign className="w-4 h-4" />
            <span>Pricing Plans Editor</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MAIN DASHBOARD CONTENT AREA */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8">
        
        {/* TAB 1: OVERVIEW & KPIS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-6 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-text-muted font-bold">Estimated Pipeline</span>
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <BadgeDollarSign className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-heading font-black text-3xl text-emerald-500 dark:text-emerald-400">
                  $35,800
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-2">Active client inquiries & deals</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-text-muted font-bold">Purchase Orders</span>
                  <div className="p-2 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-heading font-black text-3xl text-gradient-cyan">
                  {purchaseOrders.length}
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-2">{pendingOrdersCount} pending action</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-text-muted font-bold">Live Portfolio</span>
                  <div className="p-2 rounded-xl bg-brand-purple/10 text-brand-purple">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-heading font-black text-3xl text-gradient-purple">
                  {projects.length}
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-2">Showcase case studies</div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase text-text-muted font-bold">Pricing Tiers</span>
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-heading font-black text-3xl text-text-primary">
                  {pricingPlans.length} Active
                </div>
                <div className="text-[11px] font-mono text-text-muted mt-2">Dynamic packages configured</div>
              </div>
            </div>

            {/* Recent Orders Section */}
            <div className="p-6 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-edge/20">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-text-primary flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-cyan" />
                    <span>Recent Purchase Orders</span>
                  </h3>
                  <p className="text-xs text-text-muted mt-0.5">Orders submitted through website pricing packages</p>
                </div>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-cyan hover:underline"
                >
                  <span>View All ({purchaseOrders.length})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-edge/20 text-text-muted uppercase font-mono text-[10px]">
                      <th className="pb-3 font-semibold">Order ID</th>
                      <th className="pb-3 font-semibold">Client</th>
                      <th className="pb-3 font-semibold">Selected Plan</th>
                      <th className="pb-3 font-semibold">Billing & Price</th>
                      <th className="pb-3 font-semibold">Status</th>
                      <th className="pb-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-edge/10">
                    {purchaseOrders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="hover:bg-surface-overlay/50 transition-colors">
                        <td className="py-3.5 font-mono font-bold text-brand-cyan">{order.id}</td>
                        <td className="py-3.5">
                          <div className="font-bold text-text-primary">{order.clientName}</div>
                          <div className="text-[11px] text-text-muted">{order.clientEmail}</div>
                        </td>
                        <td className="py-3.5 font-semibold text-text-primary">{order.planName}</td>
                        <td className="py-3.5">
                          <span className="font-bold text-emerald-500 dark:text-emerald-400">{order.price}</span>
                          <span className="text-[10px] text-text-muted block">({order.billingCycle})</span>
                        </td>
                        <td className="py-3.5">{renderStatusBadge(order.status)}</td>
                        <td className="py-3.5 text-right">
                          <button
                            onClick={() => setSelectedOrderDetails(order)}
                            className="px-3 py-1.5 rounded-lg bg-surface-overlay hover:bg-brand-cyan/15 hover:text-brand-cyan text-text-secondary font-semibold transition-colors"
                          >
                            Review
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div
                onClick={handleOpenAddProject}
                className="group p-6 rounded-2xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 hover:bg-surface-overlay/80 cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-text-primary group-hover:text-brand-cyan transition-colors">
                      Add New Custom Project
                    </h4>
                    <p className="text-xs text-text-secondary">Publish a new case study to the website portfolio</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-text-muted group-hover:translate-x-1 transition-transform" />
              </div>

              <div
                onClick={() => setActiveTab('pricing')}
                className="group p-6 rounded-2xl bg-surface-raised border border-edge/30 hover:border-brand-purple/50 hover:bg-surface-overlay/80 cursor-pointer transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 text-brand-purple group-hover:scale-110 transition-transform">
                    <BadgeDollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-text-primary group-hover:text-brand-purple transition-colors">
                      Update Pricing & Packages
                    </h4>
                    <p className="text-xs text-text-secondary">Modify package prices, taglines, and feature lists</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-text-muted group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PURCHASE ORDERS */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-black text-2xl text-text-primary">
                  Purchase Orders Management
                </h3>
                <p className="text-xs text-text-secondary">
                  Real-time client package requests, scopes, and direct purchase orders
                </p>
              </div>

              {/* Search & Status Filter */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    placeholder="Search by client, plan or ID..."
                    className="pl-9 pr-4 py-2 rounded-xl bg-surface-raised border border-edge/30 focus:border-brand-cyan text-xs outline-none text-text-primary w-56"
                  />
                </div>

                <div className="flex items-center rounded-xl bg-surface-raised border border-edge/30 p-1">
                  {['All', 'Pending', 'In Progress', 'Completed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setOrderStatusFilter(st)}
                      className={cn(
                        'px-2.5 py-1 rounded-lg text-xs font-semibold transition-all',
                        orderStatusFilter === st
                          ? 'bg-brand-cyan text-black font-bold'
                          : 'text-text-secondary hover:text-text-primary'
                      )}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Orders Table */}
            <div className="p-6 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-edge/20 text-text-muted uppercase font-mono text-[10px]">
                      <th className="pb-3 font-semibold">Order ID</th>
                      <th className="pb-3 font-semibold">Date</th>
                      <th className="pb-3 font-semibold">Client</th>
                      <th className="pb-3 font-semibold">Package Plan</th>
                      <th className="pb-3 font-semibold">Investment</th>
                      <th className="pb-3 font-semibold">Status</th>
                      <th className="pb-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-edge/10">
                    {filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-text-muted text-sm">
                          No purchase orders match your filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-surface-overlay/50 transition-colors">
                          <td className="py-4 font-mono font-bold text-brand-cyan">{order.id}</td>
                          <td className="py-4 font-mono text-text-muted">{order.createdAt}</td>
                          <td className="py-4">
                            <div className="font-bold text-text-primary">{order.clientName}</div>
                            <div className="text-[11px] text-text-muted">
                              {order.companyName ? `${order.companyName} • ` : ''}
                              {order.clientEmail}
                            </div>
                          </td>
                          <td className="py-4">
                            <span className="font-semibold text-text-primary">{order.planName}</span>
                            <span className="text-[10px] text-text-muted block">{order.timeline}</span>
                          </td>
                          <td className="py-4">
                            <span className="font-bold text-emerald-500 dark:text-emerald-400">{order.price}</span>
                            <span className="text-[10px] text-text-muted block">({order.billingCycle})</span>
                          </td>
                          <td className="py-4">{renderStatusBadge(order.status)}</td>
                          <td className="py-4 text-right space-x-2">
                            <button
                              onClick={() => setSelectedOrderDetails(order)}
                              className="px-3 py-1.5 rounded-lg bg-surface-overlay hover:bg-brand-cyan/15 hover:text-brand-cyan font-semibold transition-colors"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => {
                                openConfirm({
                                  title: 'Delete Purchase Order',
                                  message: 'Are you sure you want to permanently remove this client purchase order from the system?',
                                  targetName: `Order #${order.id} • ${order.clientName} (${order.planName})`,
                                  confirmLabel: 'Delete Order',
                                  variant: 'danger',
                                  onConfirm: () => {
                                    deleteOrder(order.id);
                                    showNotification(`Order #${order.id} removed.`);
                                    closeConfirm();
                                  },
                                });
                              }}
                              className="p-1.5 rounded-lg text-text-muted hover:text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                              title="Delete Order"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS MANAGER (CRUD) */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-black text-2xl text-text-primary">
                  Projects Portfolio Manager
                </h3>
                <p className="text-xs text-text-secondary">
                  Add custom projects, update case studies, and sync live changes to the portfolio
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    openConfirm({
                      title: 'Reset Portfolio Showcase',
                      message: 'Are you sure you want to revert all projects to the original factory sample showcase? Custom added projects will be erased.',
                      targetName: `${projects.length} Total Portfolio Projects`,
                      confirmLabel: 'Reset to Defaults',
                      variant: 'warning',
                      onConfirm: () => {
                        resetProjects();
                        showNotification('Projects reset to default portfolio.');
                        closeConfirm();
                      },
                    });
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-text-muted hover:text-text-primary bg-surface-raised border border-edge/30 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Default</span>
                </button>

                <Button
                  onClick={handleOpenAddProject}
                  variant="primary"
                  size="md"
                  rightIcon={<Plus className="w-4 h-4" />}
                >
                  Add Custom Project
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-3xl bg-surface-raised border border-edge/30 overflow-hidden shadow-card-light dark:shadow-glass flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-overlay">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/75 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-text-muted mb-1">
                        {project.client} • {project.year}
                      </div>
                      <h4 className="font-heading font-bold text-base text-text-primary line-clamp-1 mb-2">
                        {project.title}
                      </h4>
                      <p className="text-xs text-text-secondary line-clamp-2 mb-4 font-normal">
                        {project.shortDesc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-overlay border border-edge/20 text-text-secondary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-edge/20 flex items-center justify-between text-xs">
                      <Link
                        to={`/projects/${project.slug}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-brand-cyan hover:underline font-semibold"
                      >
                        <span>Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenEditProject(project)}
                          className="p-1.5 rounded-lg bg-surface-overlay hover:bg-brand-cyan/15 hover:text-brand-cyan text-text-secondary transition-colors"
                          title="Edit Project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            openConfirm({
                              title: 'Delete Portfolio Project',
                              message: 'Are you sure you want to permanently remove this case study project from your live portfolio website?',
                              targetName: `"${project.title}" (${project.client})`,
                              confirmLabel: 'Delete Project',
                              variant: 'danger',
                              onConfirm: () => {
                                deleteProject(project.id);
                                showNotification(`Project "${project.title}" deleted.`);
                                closeConfirm();
                              },
                            });
                          }}
                          className="p-1.5 rounded-lg bg-surface-overlay hover:bg-rose-500/15 hover:text-rose-500 text-text-muted transition-colors cursor-pointer"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRICING PLANS EDITOR (CRUD) */}
        {activeTab === 'pricing' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-heading font-black text-2xl text-text-primary">
                  Pricing Plans & Packages Editor
                </h3>
                <p className="text-xs text-text-secondary">
                  Edit price points, monthly retainers, badges, and features list with live website synchronization
                </p>
              </div>

              <button
                onClick={() => {
                  openConfirm({
                    title: 'Reset Pricing Plans',
                    message: 'Are you sure you want to revert all pricing tiers, retainers, and features back to standard agency rates?',
                    targetName: `${pricingPlans.length} Total Pricing Packages`,
                    confirmLabel: 'Reset Pricing',
                    variant: 'warning',
                    onConfirm: () => {
                      resetPricing();
                      showNotification('Pricing reset to defaults.');
                      closeConfirm();
                    },
                  });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-text-muted hover:text-text-primary bg-surface-raised border border-edge/30 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Factory Defaults</span>
              </button>
            </div>

            {/* Editable Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="p-6 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-edge/20 pb-3">
                    <div>
                      <h4 className="font-heading font-black text-xl text-text-primary">
                        {plan.name}
                      </h4>
                      <span className="text-[10px] font-mono text-text-muted uppercase">
                        Tier ID: {plan.id}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="text-xs font-semibold text-text-secondary flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={plan.popular || false}
                          onChange={(e) =>
                            updatePricingPlan(plan.id, { popular: e.target.checked })
                          }
                          className="rounded text-brand-cyan focus:ring-0"
                        />
                        <span>Featured Badge</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Project Price */}
                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase block mb-1">
                        One-Time Project Price
                      </label>
                      <input
                        type="text"
                        value={plan.projectPrice}
                        onChange={(e) =>
                          updatePricingPlan(plan.id, { projectPrice: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-sm font-bold text-text-primary outline-none"
                      />
                    </div>

                    {/* Monthly Price */}
                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase block mb-1">
                        Monthly Retainer Price
                      </label>
                      <input
                        type="text"
                        value={plan.monthlyPrice}
                        onChange={(e) =>
                          updatePricingPlan(plan.id, { monthlyPrice: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-purple text-sm font-bold text-text-primary outline-none"
                      />
                    </div>
                  </div>

                  {/* Tagline */}
                  <div>
                    <label className="text-[11px] font-bold text-text-secondary uppercase block mb-1">
                      Tagline Description
                    </label>
                    <input
                      type="text"
                      value={plan.tagline}
                      onChange={(e) =>
                        updatePricingPlan(plan.id, { tagline: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none"
                    />
                  </div>

                  {/* Delivery Timeline & Badge */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase block mb-1">
                        Delivery Timeline
                      </label>
                      <input
                        type="text"
                        value={plan.deliveryTimeline}
                        onChange={(e) =>
                          updatePricingPlan(plan.id, { deliveryTimeline: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-text-secondary uppercase block mb-1">
                        Top Badge Text (e.g. Most Popular)
                      </label>
                      <input
                        type="text"
                        value={plan.badge || ''}
                        onChange={(e) =>
                          updatePricingPlan(plan.id, { badge: e.target.value || undefined })
                        }
                        placeholder="Leave blank for none"
                        className="w-full px-3 py-2 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div className="pt-2 text-right">
                    <span className="text-[11px] font-mono text-emerald-500 dark:text-emerald-400 font-semibold">
                      Auto-saved to live website
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 4. MODAL: ORDER DETAILS & STATUS CONTROLLER */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedOrderDetails && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOrderDetails(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-xl bg-surface-raised border border-edge/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              <div className="flex items-start justify-between border-b border-edge/20 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-brand-cyan">
                    {selectedOrderDetails.id}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-text-primary">
                    Purchase Order Details
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedOrderDetails(null)}
                  className="p-1 rounded-lg text-text-muted hover:text-text-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Details List */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-edge/10">
                  <span className="text-text-muted">Client Name:</span>
                  <span className="font-bold text-text-primary">{selectedOrderDetails.clientName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-edge/10">
                  <span className="text-text-muted">Email Address:</span>
                  <a href={`mailto:${selectedOrderDetails.clientEmail}`} className="text-brand-cyan hover:underline font-mono">
                    {selectedOrderDetails.clientEmail}
                  </a>
                </div>
                {selectedOrderDetails.clientPhone && (
                  <div className="flex justify-between py-2 border-b border-edge/10">
                    <span className="text-text-muted">Phone:</span>
                    <span className="font-mono text-text-primary">{selectedOrderDetails.clientPhone}</span>
                  </div>
                )}
                {selectedOrderDetails.companyName && (
                  <div className="flex justify-between py-2 border-b border-edge/10">
                    <span className="text-text-muted">Company:</span>
                    <span className="font-bold text-text-primary">{selectedOrderDetails.companyName}</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-edge/10">
                  <span className="text-text-muted">Package:</span>
                  <span className="font-bold text-text-primary">{selectedOrderDetails.planName} ({selectedOrderDetails.billingCycle})</span>
                </div>
                <div className="flex justify-between py-2 border-b border-edge/10">
                  <span className="text-text-muted">Price:</span>
                  <span className="font-bold text-emerald-500 dark:text-emerald-400 font-mono text-sm">{selectedOrderDetails.price}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-edge/10">
                  <span className="text-text-muted">Order Date:</span>
                  <span className="font-mono text-text-muted">{selectedOrderDetails.createdAt}</span>
                </div>

                <div className="py-2">
                  <span className="text-text-muted block mb-1 font-semibold">Client Project Scope & Notes:</span>
                  <div className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-text-secondary leading-relaxed">
                    {selectedOrderDetails.projectRequirements}
                  </div>
                </div>
              </div>

              {/* Status Updater */}
              <div className="p-4 rounded-2xl bg-surface-overlay/80 border border-edge/20 space-y-2">
                <label className="text-xs font-bold text-text-primary uppercase block">
                  Update Order Status:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Pending', 'In Progress', 'Completed', 'Cancelled'] as OrderStatus[]).map((st) => (
                    <button
                      key={st}
                      onClick={() => {
                        updateOrderStatus(selectedOrderDetails.id, st);
                        setSelectedOrderDetails({ ...selectedOrderDetails, status: st });
                        showNotification(`Status updated to "${st}"`);
                      }}
                      className={cn(
                        'py-1.5 px-2 rounded-lg text-xs font-bold transition-all',
                        selectedOrderDetails.status === st
                          ? 'bg-brand-cyan text-black shadow-sm'
                          : 'bg-surface-raised border border-edge/30 text-text-secondary hover:text-text-primary'
                      )}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 5. MODAL: ADD / EDIT PROJECT (CRUD) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProjectModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-2xl bg-surface-raised border border-edge/30 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto space-y-6"
            >
              <div className="flex items-start justify-between border-b border-edge/20 pb-4">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-text-primary">
                    {editingProjectId ? 'Edit Project' : 'Add Custom Project'}
                  </h3>
                  <p className="text-xs text-text-muted">Changes reflect on live website immediately</p>
                </div>
                <button
                  onClick={() => setIsProjectModalOpen(false)}
                  className="p-1 rounded-lg text-text-muted hover:text-text-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProject} className="space-y-4">
                {/* Title & Client */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Project Title *</label>
                    <input
                      type="text"
                      required
                      value={projectForm.title}
                      onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                      placeholder="e.g. NextGen FinTech Portal"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Client Name *</label>
                    <input
                      type="text"
                      required
                      value={projectForm.client}
                      onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })}
                      placeholder="e.g. Global Capital Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none"
                    />
                  </div>
                </div>

                {/* Category & Industry */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Category</label>
                    <select
                      value={projectForm.category}
                      onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none"
                    >
                      <option value="Websites">Websites</option>
                      <option value="SaaS">SaaS</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Dashboard">Dashboard</option>
                      <option value="Landing Pages">Landing Pages</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Industry</label>
                    <input
                      type="text"
                      value={projectForm.industry}
                      onChange={(e) => setProjectForm({ ...projectForm, industry: e.target.value })}
                      placeholder="e.g. FinTech & AI"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none"
                    />
                  </div>
                </div>

                {/* Hero Image URL */}
                <div>
                  <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Hero Image URL</label>
                  <input
                    type="url"
                    value={projectForm.heroImage}
                    onChange={(e) => setProjectForm({ ...projectForm, heroImage: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                  />
                </div>

                {/* Short Description */}
                <div>
                  <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Short Summary (Card Preview)</label>
                  <textarea
                    rows={2}
                    value={projectForm.shortDesc}
                    onChange={(e) => setProjectForm({ ...projectForm, shortDesc: e.target.value })}
                    placeholder="Concise overview of what was engineered..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none resize-none"
                  />
                </div>

                {/* Full Overview */}
                <div>
                  <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Full Overview & Case Study</label>
                  <textarea
                    rows={3}
                    value={projectForm.fullOverview}
                    onChange={(e) => setProjectForm({ ...projectForm, fullOverview: e.target.value })}
                    placeholder="Detailed architecture and outcomes..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none resize-none"
                  />
                </div>

                {/* Tech Stack (Comma separated) */}
                <div>
                  <label className="text-xs font-bold text-text-secondary uppercase block mb-1">
                    Technologies (Comma separated)
                  </label>
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    placeholder="React, TypeScript, Next.js, Tailwind CSS"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                  />
                </div>

                {/* Timeline & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Timeline</label>
                    <input
                      type="text"
                      value={projectForm.timeline}
                      onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                      placeholder="e.g. 4 - 6 Weeks"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-text-secondary uppercase block mb-1">Live URL (Optional)</label>
                    <input
                      type="url"
                      value={projectForm.liveUrl || ''}
                      onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                      placeholder="https://clientapp.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan text-xs text-text-primary outline-none font-mono"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="pt-4 border-t border-edge/20 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsProjectModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-text-secondary hover:text-text-primary"
                  >
                    Cancel
                  </button>
                  <Button type="submit" variant="primary" size="md">
                    {editingProjectId ? 'Save Project Changes' : 'Create & Publish Project'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* ========================================================================= */}
      {/* 6. MODAL: PROFESSIONAL CONFIRMATION & ALERT DIALOG */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {confirmDialog.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeConfirm}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative w-full max-w-md bg-surface-raised border rounded-3xl p-6 sm:p-7 shadow-2xl z-10 space-y-5 overflow-hidden",
                confirmDialog.variant === 'danger'
                  ? "border-rose-500/40 shadow-rose-950/40"
                  : "border-amber-500/40 shadow-amber-950/40"
              )}
            >
              {/* Top Neon Accent Glow Line */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-1.5",
                  confirmDialog.variant === 'danger'
                    ? "bg-gradient-to-r from-rose-500 via-red-400 to-rose-600"
                    : "bg-gradient-to-r from-amber-400 via-brand-purple to-amber-500"
                )}
              />

              {/* Icon & Title Header */}
              <div className="flex items-start gap-4 pt-1">
                <div
                  className={cn(
                    "p-3 rounded-2xl shrink-0 flex items-center justify-center",
                    confirmDialog.variant === 'danger'
                      ? "bg-rose-500/15 border border-rose-500/30 text-rose-500 shadow-sm"
                      : "bg-amber-500/15 border border-amber-500/30 text-amber-500 shadow-sm"
                  )}
                >
                  {confirmDialog.variant === 'danger' ? (
                    <Trash2 className="w-6 h-6" />
                  ) : (
                    <AlertTriangle className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-black text-xl text-text-primary leading-tight">
                    {confirmDialog.title}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">
                    {confirmDialog.message}
                  </p>
                </div>
              </div>

              {/* Highlight Target Badge / Info Box */}
              {confirmDialog.targetName && (
                <div className="p-3 rounded-xl bg-surface-overlay/80 border border-edge/20 flex items-center gap-2 text-xs font-mono">
                  <span className="text-text-muted">Target:</span>
                  <span className="font-bold text-text-primary truncate">
                    {confirmDialog.targetName}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeConfirm}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-overlay border border-edge/20 transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={confirmDialog.onConfirm}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-xs font-heading font-bold text-white transition-all shadow-md cursor-pointer flex items-center gap-2",
                    confirmDialog.variant === 'danger'
                      ? "bg-rose-600 hover:bg-rose-500 shadow-rose-600/30 hover:scale-[1.02]"
                      : "bg-amber-600 hover:bg-amber-500 shadow-amber-600/30 hover:scale-[1.02]"
                  )}
                >
                  <span>{confirmDialog.confirmLabel}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
