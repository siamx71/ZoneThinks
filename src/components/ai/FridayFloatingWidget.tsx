import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, MessageSquare, PhoneCall, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';

export const FridayFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide on dedicated AI Assistant or Admin pages
  if (
    location.pathname === '/ai-assistant' ||
    location.pathname === '/friday' ||
    location.pathname.startsWith('/admin')
  ) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Prompt Flyout Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              "absolute bottom-16 right-0 w-84 sm:w-90 p-5 rounded-3xl border shadow-2xl overflow-hidden",
              "bg-white/95 text-slate-900 border-slate-200/90 shadow-slate-900/15 backdrop-blur-2xl",
              "dark:bg-[#0B0F19]/95 dark:text-white dark:border-white/10 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            )}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-sky-500/25">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xs tracking-tight text-slate-900 dark:text-white">
                    Friday
                  </h4>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Solutions Architect • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close Friday popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 my-3.5 leading-relaxed font-medium">
              Need instant pricing estimation, tech architecture consultation, or want to speak with Friday via live voice?
            </p>

            <Link
              to="/ai-assistant"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-heading font-bold text-xs shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open Friday Chat & Voice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full border shadow-xl transition-all duration-300 group cursor-pointer",
          "bg-white/95 border-slate-200 text-slate-900 hover:border-sky-500/60 hover:shadow-sky-500/20 backdrop-blur-xl",
          "dark:bg-[#0B0F19]/90 dark:border-white/15 dark:text-white dark:hover:border-brand-cyan/60 dark:hover:shadow-[0_0_30px_rgba(0,242,254,0.25)]"
        )}
        aria-label="Open Friday Assistant"
      >
        {/* Glowing Status & Icon */}
        <div className="relative flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white dark:border-[#0B0F19]" />
        </div>

        {/* Clean Name */}
        <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-slate-900 dark:text-white">
          Friday
        </span>

        {/* Subtle Pulse Badge */}
        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-brand-cyan animate-pulse" />
      </motion.button>
    </div>
  );
};

export default FridayFloatingWidget;
