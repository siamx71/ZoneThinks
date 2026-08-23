import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';

const projectTypes = [
  'Web Development',
  'SaaS Application',
  'Headless E-Commerce',
  'UI/UX Redesign',
  'Dedicated Engineering Pod'
];

const budgetRanges = [
  '$5k - $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k - $100k+'
];

const timelines = [
  'Immediate (<1 mo)',
  'Standard (1-2 mos)',
  'Flexible (3+ mos)'
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Web Development',
    budget: '$10k - $25k',
    timeline: 'Standard (1-2 mos)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid work email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please include a brief description of your project.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F2FE', '#8B5CF6', '#10B981']
        });
      } catch (err) {
        // Safe fallback if canvas not available
      }
    }, 1100);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      projectType: 'Web Development',
      budget: '$10k - $25k',
      timeline: 'Standard (1-2 mos)',
      message: ''
    });
  };

  return (
    <div className="relative p-6 sm:p-10 xl:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass backdrop-blur-xl">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 flex flex-col items-center text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-glow-emerald">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="max-w-md space-y-2">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-primary">
                Inquiry Received!
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Thank you, <span className="text-brand-cyan font-bold">{formData.fullName}</span>. A Senior Solutions Architect from ZoneThinks IT has received your project briefing and will review your scope within 24 hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface-overlay border border-edge/20 text-xs sm:text-sm font-mono text-text-secondary max-w-md w-full text-left space-y-1.5">
              <div><span className="text-text-muted">Project Type:</span> {formData.projectType}</div>
              <div><span className="text-text-muted">Estimated Budget:</span> {formData.budget}</div>
              <div><span className="text-text-muted">Target Timeline:</span> {formData.timeline}</div>
            </div>

            <Button
              onClick={handleReset}
              variant="secondary"
              size="md"
            >
              Submit Another Inquiry
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Error Banner */}
            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs sm:text-sm flex items-center gap-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. Project Type Chips */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary mb-3.5 font-heading">
                1. What are we building together?
              </label>
              <div className="flex flex-wrap gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={cn(
                      'px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold font-heading transition-all duration-200 border cursor-pointer',
                      formData.projectType === type
                        ? 'bg-brand-cyan text-black border-cyan-400 font-bold shadow-glow-cyan'
                        : 'bg-surface-overlay text-text-secondary border-edge/30 hover:border-edge/60'
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Budget Range Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary mb-3.5 font-heading">
                2. Anticipated Investment Scope
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {budgetRanges.map((budget) => (
                  <button
                    type="button"
                    key={budget}
                    onClick={() => setFormData({ ...formData, budget })}
                    className={cn(
                      'px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-200 border text-center cursor-pointer',
                      formData.budget === budget
                        ? 'bg-brand-purple text-white border-purple-400 shadow-glow-purple'
                        : 'bg-surface-overlay text-text-secondary border-edge/30 hover:border-edge/60'
                    )}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Timeline */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary mb-3.5 font-heading">
                3. Expected Launch Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {timelines.map((timeline) => (
                  <button
                    type="button"
                    key={timeline}
                    onClick={() => setFormData({ ...formData, timeline })}
                    className={cn(
                      'px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-200 border text-center cursor-pointer',
                      formData.timeline === timeline
                        ? 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40 font-bold'
                        : 'bg-surface-overlay text-text-secondary border-edge/30 hover:border-edge/60'
                    )}
                  >
                    {timeline}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Contact Details Inputs */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-text-primary mb-4 font-heading">
                4. Your Contact Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 font-bold">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@apexcapital.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 font-bold">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Apex Global Capital"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 font-bold">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 5. Project Brief Message */}
            <div>
              <label className="block text-xs font-mono text-text-muted mb-1.5 font-bold">
                Project Overview & Goals *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about what you want to build, any technical challenges, or specific benchmark sites you admire..."
                className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-sm sm:text-base focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                <span>NDA & Confidentiality Guaranteed</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
                rightIcon={
                  isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )
                }
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
