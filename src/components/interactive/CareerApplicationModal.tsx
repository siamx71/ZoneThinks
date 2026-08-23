import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { JobPosition } from '@/data/careers';
import { Button } from '@/components/common/Button';

interface CareerApplicationModalProps {
  position: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CareerApplicationModal: React.FC<CareerApplicationModalProps> = ({
  position,
  isOpen,
  onClose
}) => {
  const [applicant, setApplicant] = useState({
    fullName: '',
    email: '',
    portfolioUrl: '',
    githubUrl: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !position) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    setSubmitted(false);
    setApplicant({ fullName: '', email: '', portfolioUrl: '', githubUrl: '', notes: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-surface-raised border border-edge/30 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-surface-overlay text-text-muted hover:text-text-primary hover:bg-surface-subtle transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-text-primary">
                Application Received!
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary max-w-md leading-relaxed">
                Thank you for applying for the <span className="text-brand-cyan font-semibold">{position.title}</span> role. Our engineering leadership reviews applications within 5 business days.
              </p>
              <Button onClick={handleClose} variant="primary" size="sm" className="mt-4">
                Close Window
              </Button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-cyan">
                  {position.department} • {position.type}
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-text-primary mt-1">
                  Apply for {position.title}
                </h3>
                <p className="text-xs text-text-muted font-mono mt-1">
                  Compensation: {position.salaryRange}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicant.fullName}
                    onChange={(e) => setApplicant({ ...applicant, fullName: e.target.value })}
                    placeholder="Marcus Thorne"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicant.email}
                    onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1 font-bold">
                      Portfolio / Website URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={applicant.portfolioUrl}
                      onChange={(e) => setApplicant({ ...applicant, portfolioUrl: e.target.value })}
                      placeholder="https://yourportfolio.dev"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1 font-bold">
                      GitHub Profile URL (Optional)
                    </label>
                    <input
                      type="url"
                      value={applicant.githubUrl}
                      onChange={(e) => setApplicant({ ...applicant, githubUrl: e.target.value })}
                      placeholder="https://github.com/username"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-text-muted mb-1 font-bold">
                    Why ZoneThinks IT? (Brief note)
                  </label>
                  <textarea
                    rows={3}
                    value={applicant.notes}
                    onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                    placeholder="Highlight recent projects or open source contributions..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={submitting}
                    className="w-full justify-center"
                    rightIcon={submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  >
                    {submitting ? 'Submitting Application...' : 'Send Application'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
