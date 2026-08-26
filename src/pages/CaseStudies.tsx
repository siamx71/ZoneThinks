import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Zap,
  Users,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { useAdmin } from '@/context/AdminContext';
import { staggerContainer, fadeIn } from '@/animations/variants';

export const CaseStudies: React.FC = () => {
  const { projects } = useAdmin();
  return (
    <div className="relative pb-24">
      <SEO
        title="Case Studies & Business ROI | ZoneThinks IT"
        description="Read in-depth data case studies showing how ZoneThinks IT drives 2.4x conversion increases, 48% faster load times, and massive pipeline growth."
      />

      {/* Hero */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
              // Client Case Studies & Metrics
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Data-Backed <span className="text-gradient-cyan">Transformation</span> Stories.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              We judge the success of our software by the quantifiable impact it delivers to our clients' bottom line. Explore the numbers, strategies, and engineering breakthroughs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* High-Level Highlight Metric Cards */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-surface-raised border border-brand-cyan/30 shadow-card-light dark:shadow-glow-cyan text-center flex flex-col items-center justify-center">
              <span className="font-heading font-black text-5xl text-gradient-cyan mb-2">2.4x</span>
              <span className="font-heading font-bold text-base text-text-primary">Conversion Increase</span>
              <span className="text-xs font-mono text-text-muted mt-1">Average across client redesigns</span>
            </div>

            <div className="p-8 rounded-3xl bg-surface-raised border border-brand-purple/30 shadow-card-light dark:shadow-glow-purple text-center flex flex-col items-center justify-center">
              <span className="font-heading font-black text-5xl text-gradient-purple mb-2">-58%</span>
              <span className="font-heading font-bold text-base text-text-primary">Faster Load Time</span>
              <span className="text-xs font-mono text-text-muted mt-1">Sub-second Core Web Vitals</span>
            </div>

            <div className="p-8 rounded-3xl bg-surface-raised border border-emerald-500/30 shadow-card-light dark:shadow-glow-emerald text-center flex flex-col items-center justify-center">
              <span className="font-heading font-black text-5xl text-emerald-500 dark:text-emerald-400 mb-2">120K+</span>
              <span className="font-heading font-bold text-base text-text-primary">Monthly Active Users</span>
              <span className="text-xs font-mono text-text-muted mt-1">Scaled on Next.js platforms</span>
            </div>

            <div className="p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass text-center flex flex-col items-center justify-center">
              <span className="font-heading font-black text-5xl text-amber-500 dark:text-amber-400 mb-2">99.9%</span>
              <span className="font-heading font-bold text-base text-text-primary">Uptime Guarantee</span>
              <span className="text-xs font-mono text-text-muted mt-1">Enterprise cloud SLAs</span>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Case Studies Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left: Image & Metrics */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-surface-overlay border border-edge/20">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-center">
                          <div className="text-brand-cyan font-bold font-mono text-base">{m.value}</div>
                          <div className="text-[10px] text-text-muted font-mono truncate">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Business Problem, Strategy, Result */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {project.client} • {project.industry}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-primary">
                    {project.title}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                    <div>
                      <strong className="text-text-primary block font-heading mb-1 text-sm">The Challenge:</strong>
                      <p className="line-clamp-2 text-text-secondary">{project.challenge}</p>
                    </div>
                    <div>
                      <strong className="text-text-primary block font-heading mb-1 text-sm">The Solution & Strategy:</strong>
                      <p className="line-clamp-2 text-text-secondary">{project.solution}</p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button
                      to={`/projects/${project.slug}`}
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read Full Case Study
                    </Button>
                    <span className="text-xs font-mono text-text-muted">
                      Delivered in {project.timeline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
