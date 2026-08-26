import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronDown, Sparkles, Cpu } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ThinkingBadgeProps {
  thoughtProcess: string;
  isThinking?: boolean;
}

export const ThinkingBadge: React.FC<ThinkingBadgeProps> = ({ thoughtProcess, isThinking = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isThinking) {
    return (
      <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 dark:bg-brand-cyan/10 dark:border-brand-cyan/30 dark:text-brand-cyan text-xs font-mono mb-3 w-fit shadow-sm">
        <Cpu className="w-4 h-4 animate-spin text-sky-600 dark:text-brand-cyan" style={{ animationDuration: '3s' }} />
        <span className="flex items-center gap-1.5 font-semibold">
          Friday is analyzing requirements...
          <span className="inline-flex gap-1 ml-1">
            <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-sky-600 dark:bg-brand-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </span>
      </div>
    );
  }

  if (!thoughtProcess) return null;

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "group flex items-center justify-between gap-3 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 shadow-sm",
          "bg-slate-100/90 hover:bg-slate-200/80 border border-slate-300/80 text-slate-800",
          "dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:border-brand-cyan/40"
        )}
      >
        <div className="flex items-center gap-2 font-bold text-sky-800 dark:text-brand-cyan">
          <Brain className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
          <span className="text-[11px] tracking-wide">🧠 Thought Process</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-sky-200/70 text-sky-900 dark:bg-brand-cyan/20 dark:text-brand-cyan font-bold border border-sky-300/50 dark:border-brand-cyan/30">
            Strategy
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400 group-hover:text-sky-700 dark:group-hover:text-brand-cyan" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden mt-2"
          >
            <div className={cn(
              "p-3.5 rounded-2xl border text-xs font-mono leading-relaxed whitespace-pre-line shadow-sm",
              "bg-slate-50 border-slate-200 text-slate-800 font-medium",
              "dark:bg-[#0c1017]/95 dark:border-white/10 dark:text-gray-200"
            )}>
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-800 dark:text-brand-cyan mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Reasoning & Customer Satisfaction Blueprint:
              </div>
              {thoughtProcess}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
