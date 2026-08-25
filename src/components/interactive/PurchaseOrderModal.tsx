import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CreditCard,
  Building,
  User,
  Mail,
  Phone,
  FileText,
  Clock
} from 'lucide-react';
import { PricingTier } from '@/data/pricing';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/common/Button';

interface PurchaseOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingTier | null;
  defaultCycle?: 'project' | 'monthly';
}

export const PurchaseOrderModal: React.FC<PurchaseOrderModalProps> = ({
  isOpen,
  onClose,
  plan,
  defaultCycle = 'project'
}) => {
  const { createOrder } = useAdmin();
  const [billingCycle, setBillingCycle] = useState<'One-Time Project' | 'Monthly Retainer'>(
    defaultCycle === 'monthly' ? 'Monthly Retainer' : 'One-Time Project'
  );

  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    companyName: '',
    projectRequirements: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!plan) return null;

  const currentPrice =
    billingCycle === 'One-Time Project'
      ? plan.projectPrice
      : `${plan.monthlyPrice}/mo`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.clientName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.clientEmail.trim() || !formData.clientEmail.includes('@')) {
      setErrorMsg('Please provide a valid business email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = createOrder({
        clientName: formData.clientName.trim(),
        clientEmail: formData.clientEmail.trim(),
        clientPhone: formData.clientPhone.trim() || undefined,
        companyName: formData.companyName.trim() || undefined,
        planId: plan.id,
        planName: plan.name,
        billingCycle,
        price: currentPrice,
        timeline: plan.deliveryTimeline,
        projectRequirements:
          formData.projectRequirements.trim() ||
          `Requested ${plan.name} (${billingCycle}) package with standard delivery.`,
      });

      setIsSubmitting(false);
      setConfirmedOrderId(orderId);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00F2FE', '#8B5CF6', '#10B981'],
        });
      } catch (_) {}
    }, 800);
  };

  const handleReset = () => {
    setConfirmedOrderId(null);
    setFormData({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      companyName: '',
      projectRequirements: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-surface-raised border border-edge/30 rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Top Cyan Glowing Accent Line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan" />

            {/* Header */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-edge/20">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Purchase Order & Kickoff</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
                  {confirmedOrderId ? 'Order Confirmed!' : `Secure ${plan.name}`}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-text-muted hover:text-text-primary hover:bg-surface-overlay transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 pt-6">
              {confirmedOrderId ? (
                /* Order Success Confirmation Screen */
                <div className="text-center py-4 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-glow-emerald">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-xl text-text-primary">
                      Thank You, {formData.clientName}!
                    </h4>
                    <p className="text-sm text-text-secondary max-w-md mx-auto">
                      Your purchase order has been routed directly to our engineering leadership pod for priority onboarding.
                    </p>
                  </div>

                  {/* Receipt Summary Card */}
                  <div className="p-5 rounded-2xl bg-surface-overlay/70 border border-edge/20 text-left space-y-3 font-mono text-xs max-w-md mx-auto">
                    <div className="flex justify-between border-b border-edge/20 pb-2">
                      <span className="text-text-muted">ORDER ID:</span>
                      <span className="text-brand-cyan font-bold">{confirmedOrderId}</span>
                    </div>
                    <div className="flex justify-between border-b border-edge/20 pb-2">
                      <span className="text-text-muted">PACKAGE:</span>
                      <span className="text-text-primary font-bold">{plan.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-edge/20 pb-2">
                      <span className="text-text-muted">BILLING:</span>
                      <span className="text-text-primary">{billingCycle}</span>
                    </div>
                    <div className="flex justify-between border-b border-edge/20 pb-2">
                      <span className="text-text-muted">AMOUNT:</span>
                      <span className="text-emerald-500 dark:text-emerald-400 font-bold">{currentPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">STATUS:</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold uppercase text-[10px]">
                        Received (Pending Review)
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-center">
                    <Button onClick={handleReset} variant="primary" size="md">
                      Done & Return to Site
                    </Button>
                  </div>
                </div>
              ) : (
                /* Order Input Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selected Plan Summary Banner */}
                  <div className="p-4 rounded-2xl bg-surface-overlay/80 border border-brand-cyan/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-extrabold text-lg text-text-primary">
                          {plan.name}
                        </span>
                        {plan.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-brand-cyan/15 text-brand-cyan font-bold border border-brand-cyan/30">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                        <span>Timeline: {plan.deliveryTimeline}</span>
                      </p>
                    </div>

                    {/* Cycle Toggle */}
                    <div className="flex rounded-xl bg-surface-raised p-1 border border-edge/30">
                      <button
                        type="button"
                        onClick={() => setBillingCycle('One-Time Project')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          billingCycle === 'One-Time Project'
                            ? 'bg-brand-cyan text-slate-950 font-bold shadow-sm'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Project ({plan.projectPrice})
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillingCycle('Monthly Retainer')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          billingCycle === 'Monthly Retainer'
                            ? 'bg-brand-purple text-white font-bold shadow-sm'
                            : 'text-text-secondary hover:text-text-primary'
                        }`}
                      >
                        Monthly ({plan.monthlyPrice})
                      </button>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-cyan" />
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) =>
                          setFormData({ ...formData, clientName: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.clientEmail}
                        onChange={(e) =>
                          setFormData({ ...formData, clientEmail: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-brand-cyan" />
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Acme Innovations"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.clientPhone}
                        onChange={(e) =>
                          setFormData({ ...formData, clientPhone: e.target.value })
                        }
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Notes */}
                  <div>
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                      Project Details / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectRequirements}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectRequirements: e.target.value,
                        })
                      }
                      placeholder="Briefly describe your goals, target launch date, or any specific integrations needed..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Trust Badge */}
                  <div className="flex items-center justify-between text-[11px] text-text-muted border-t border-edge/20 pt-4">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      Zero upfront charge. NDA & SLA agreement provided upon review.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors"
                    >
                      Cancel
                    </button>

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={isSubmitting}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Submitting Order...' : 'Confirm & Submit Order'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
