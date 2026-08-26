import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, X, Check, ExternalLink, ShieldCheck, Sparkles, Trash2 } from 'lucide-react';
import { getStoredApiKey, setStoredApiKey } from '@/services/fridayAiService';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';

interface FridayApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FridayApiKeyModal: React.FC<FridayApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getStoredApiKey());
      setIsSaved(false);
    }
  }, [isOpen]);

  const handleSave = () => {
    setStoredApiKey(apiKey);
    setIsSaved(true);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  const handleClear = () => {
    setStoredApiKey('');
    setApiKey('');
    setIsSaved(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className={cn(
              "relative w-full max-w-lg rounded-2xl border shadow-2xl p-6 overflow-hidden z-10",
              "bg-surface-raised border-edge/40 text-text-primary",
              "dark:bg-background-surface dark:border-white/10 dark:shadow-glow-cyan/10"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-edge/20 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-text-primary">
                    Google AI SDK Configuration
                  </h3>
                  <p className="text-xs text-text-muted">
                    Connect Gemini 2.0 / 1.5 Flash for Friday AI
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-overlay dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="py-4 space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-xs text-text-secondary flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <p>
                  Your Google Gemini API Key is stored securely in your browser's local storage and used directly for real-time generative responses. If no key is set, Friday runs on ZoneThinks IT's built-in intelligent reasoning engine.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-1.5">
                  Google AI / Gemini API Key
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border text-sm font-mono transition-all outline-none",
                      "bg-surface-sunken border-edge/40 focus:border-brand-cyan text-text-primary",
                      "dark:bg-black/40 dark:border-white/10 dark:focus:border-brand-cyan"
                    )}
                  />
                  {apiKey && (
                    <button
                      onClick={() => setApiKey('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-text-primary"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-text-muted">
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-brand-cyan hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Get a free Gemini API Key from Google AI Studio
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-edge/20 dark:border-white/10">
              {apiKey ? (
                <button
                  onClick={handleClear}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove Key
                </button>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSave}
                  className="shadow-glow-cyan"
                >
                  {isSaved ? (
                    <>
                      <Check className="w-4 h-4 mr-1 text-emerald-400" /> Saved!
                    </>
                  ) : (
                    'Save Key'
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
