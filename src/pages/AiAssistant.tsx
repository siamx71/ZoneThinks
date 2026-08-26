import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Radio, 
  Brain, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  MessageSquare,
  Globe2,
  Clock,
  Check,
  TrendingUp,
  Layers,
  Code
} from 'lucide-react';
import { FridayChat } from '@/components/ai/FridayChat';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export const AiAssistant: React.FC = () => {
  const [selectedProjectType, setSelectedProjectType] = useState<'landing' | 'webapp' | 'enterprise'>('webapp');
  const [estimateScope, setEstimateScope] = useState<string>('$3,999 - $7,500 • 3-5 Weeks');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleScopeChange = (type: 'landing' | 'webapp' | 'enterprise') => {
    setSelectedProjectType(type);
    if (type === 'landing') {
      setEstimateScope('$1,499 - $2,999 • 1-2 Weeks');
    } else if (type === 'webapp') {
      setEstimateScope('$3,999 - $7,999 • 3-5 Weeks');
    } else {
      setEstimateScope('$9,999+ • 6-10 Weeks');
    }
  };

  return (
    <>
      <SEO
        title="Friday AI - Digital Solutions Architect | ZoneThinks IT"
        description="Consult with Friday, ZoneThinks IT's lead AI Solutions Architect. Get instant web project estimations, tech stack advice, and live voice consultations."
        keywords="Friday AI, Web development AI consultant, ZoneThinks IT, AI project estimator, Next.js architecture, AI voice consultant"
      />

      <div className="relative min-h-screen pt-2 sm:pt-4 pb-16 overflow-hidden">
        {/* Background Ambient Neon Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-brand-cyan/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Modern Minimalist Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-edge/40 bg-surface-raised/80 text-text-secondary text-xs font-mono mb-2.5 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ZoneThinks IT • AI Solutions Pod</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight"
            >
              Meet <span className="text-gradient-cyan">Friday</span>.
              <br />
              <span className="text-text-secondary text-xl sm:text-2xl lg:text-3xl font-semibold">
                Your Digital Solutions Architect.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="mt-2 text-xs sm:text-sm text-text-secondary max-w-lg mx-auto leading-relaxed"
            >
              Consult on web development, project timelines, and technical architecture in English or বাংলা.
            </motion.p>
          </div>

          {/* Main Workspace Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Chat Experience (8 Cols) */}
            <div className="lg:col-span-8 w-full">
              <FridayChat />
            </div>

            {/* Right: Quick Tools & Agency Knowledge (4 Cols) */}
            <div className="lg:col-span-4 space-y-5">
              {/* Interactive Scope & Price Estimator Widget */}
              <div className={cn(
                "p-5 sm:p-6 rounded-3xl border shadow-lg transition-all",
                "bg-white/95 border-slate-200/90 shadow-slate-900/5 text-slate-900",
                "dark:bg-[#090D14]/90 dark:border-white/10 dark:text-white"
              )}>
                <div className="flex items-center justify-between mb-3 text-sky-700 dark:text-brand-cyan font-heading font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    <span>Project Scope Estimator</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-brand-cyan/15 dark:text-brand-cyan font-bold uppercase">
                    Live
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 leading-relaxed font-medium">
                  Select your project tier to view our standard architecture timeline and investment range:
                </p>

                <div className="space-y-2 mb-3.5">
                  {[
                    { id: 'landing', label: '🚀 Brand Site / Landing Page', tier: 'Starter' },
                    { id: 'webapp', label: '⚡ Custom SaaS / Web App', tier: 'Growth' },
                    { id: 'enterprise', label: '🏢 Enterprise Cloud System', tier: 'Scale' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScopeChange(item.id as any)}
                      className={cn(
                        "w-full flex items-center justify-between p-2.5 sm:p-3 rounded-2xl border text-xs font-semibold transition-all text-left shadow-sm",
                        selectedProjectType === item.id
                          ? "bg-sky-50 border-sky-500 text-sky-800 dark:bg-brand-cyan/20 dark:border-brand-cyan dark:text-brand-cyan"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-300 dark:hover:border-brand-cyan/40"
                      )}
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 uppercase font-mono text-slate-700 dark:bg-black/40 dark:border-white/10 dark:text-slate-300">
                        {item.tier}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Estimate Display Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-black/40 border border-sky-300 dark:border-brand-cyan/30 text-center shadow-sm">
                  <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-bold uppercase tracking-wider">Estimated Scope</span>
                  <div className="text-sm sm:text-base font-heading font-extrabold text-sky-800 dark:text-brand-cyan mt-0.5">
                    {estimateScope}
                  </div>
                </div>

                <div className="mt-3.5">
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1.5 text-xs rounded-xl font-bold border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-white/20 dark:text-white">
                      <span>Book Free Strategy Call</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Agency Superiority Highlights Card */}
              <div className={cn(
                "p-5 sm:p-6 rounded-3xl border shadow-lg space-y-3",
                "bg-white/95 border-slate-200/90 shadow-slate-900/5 text-slate-900",
                "dark:bg-[#090D14]/90 dark:border-white/10 dark:text-white"
              )}>
                <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-sky-600 dark:text-brand-cyan" />
                  Why ZoneThinks IT?
                </h4>

                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">100% Custom Next.js 14:</strong> No slow WordPress plugins. Zero-bloat code with 98+ PageSpeed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">High Conversion (3.8x ROI):</strong> Tailor-made UI/UX designed to turn visitors into buyers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">Local & Global Payments:</strong> Seamless bKash, Nagad, Cards & Stripe 1-click checkouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900 dark:text-white">Free Warranty Support:</strong> Weekly live demos, bug-fix guarantee, and 24/7 SLA.</span>
                  </li>
                </ul>
              </div>

              {/* Start Project CTA Card */}
              <div className="p-5 sm:p-6 rounded-3xl border border-sky-300 dark:border-brand-cyan/40 bg-gradient-to-br from-sky-50 via-cyan-50 to-white dark:from-brand-cyan/20 dark:via-blue-600/10 dark:to-transparent shadow-md">
                <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white mb-1">
                  Ready to scale your business?
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-300 mb-3.5 leading-relaxed font-medium">
                  Our senior engineering pod is ready to build your custom web product with sub-second speeds.
                </p>
                <Link to="/contact">
                  <Button variant="primary" size="sm" className="w-full shadow-md text-xs font-bold rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white">
                    Start Your Project With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiAssistant;
