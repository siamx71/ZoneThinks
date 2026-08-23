import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Play,
  Terminal,
  Layers,
  Code,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { ClientMarquee } from '@/components/interactive/ClientMarquee';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { TechOrbit } from '@/components/interactive/TechOrbit';
import { ProcessTimeline } from '@/components/interactive/ProcessTimeline';
import { agencyData } from '@/data/agency';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { testimonialsData } from '@/data/testimonials';
import { fadeIn, staggerContainer } from '@/animations/variants';

export const Home: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="ZoneThinks IT | World-Class Web Development & Digital Engineering"
        description="We build high-performance web applications, scalable SaaS ecosystems, and conversion-driven digital experiences for world-class brands."
      />

      {/* Symmetrical Dual-Sided Hero Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_60%_50%_at_5%_20%,rgba(0,242,254,0.18),transparent_70%),radial-gradient(ellipse_60%_50%_at_95%_20%,rgba(139,92,246,0.18),transparent_70%)] pointer-events-none opacity-90" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy & Actions */}
            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              animate="show"
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Status Badge */}
              <motion.div
                variants={fadeIn('up', 0.1)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-overlay/80 border border-brand-cyan/30 text-brand-cyan mb-6 backdrop-blur-md shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Generation Digital Product Agency</span>
              </motion.div>

              {/* Dramatic Headline */}
              <motion.h1
                variants={fadeIn('up', 0.2)}
                className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-text-primary tracking-tight leading-[1.08] uppercase"
              >
                WE BUILD <span className="text-gradient-cyan">DIGITAL EXPERIENCES</span> THAT GROW BUSINESSES.
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                variants={fadeIn('up', 0.3)}
                className="mt-6 text-base sm:text-xl text-text-secondary font-normal leading-relaxed max-w-2xl"
              >
                ZoneThinks IT engineers high-speed web platforms, enterprise SaaS ecosystems, and bespoke conversion engines. We merge architectural rigor with cutting-edge UI design.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={fadeIn('up', 0.4)}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
              >
                <Button
                  to="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
                <Button
                  to="/projects"
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  View Our Work
                </Button>
              </motion.div>

              {/* Micro-Trust Signals */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-edge/20"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Client Avatar"
                      className="w-8 h-8 rounded-full border-2 border-surface-raised object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                      alt="Client Avatar"
                      className="w-8 h-8 rounded-full border-2 border-surface-raised object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop"
                      alt="Client Avatar"
                      className="w-8 h-8 rounded-full border-2 border-surface-raised object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-text-muted">
                      5.0 (50+ Verified Client Reviews)
                    </span>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-edge/30 hidden sm:block" />

                <div className="text-[11px] font-mono text-text-secondary flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Sub-1s LCP Load Guarantee</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Glowing Canvas Frame */}
              <div className="relative rounded-3xl bg-gradient-to-b from-brand-cyan/20 to-brand-purple/20 p-1 backdrop-blur-2xl border border-edge/30 shadow-2xl">
                <div className="rounded-[22px] bg-surface-raised p-5 sm:p-6 overflow-hidden relative">
                  
                  {/* Mock IDE / Dashboard Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-edge/20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-text-muted flex items-center gap-1">
                        <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                        ZoneThinks_Core.tsx
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                      LIVE 60FPS
                    </span>
                  </div>

                  {/* Simulated High-Tech Code & System Telemetry */}
                  <div className="space-y-2 font-mono text-xs text-text-secondary">
                    <div className="text-text-muted">// Deploying Next.js Edge Architecture</div>
                    <div>
                      <span className="text-brand-purple font-bold">const</span>{' '}
                      <span className="text-brand-cyan font-bold">enterpriseApp</span> ={' '}
                      <span className="text-brand-purple font-bold">await</span>{' '}
                      <span className="text-amber-500 dark:text-amber-300 font-bold">buildPlatform</span>({'{'}
                    </div>
                    <div className="pl-4">
                      performance: <span className="text-emerald-500 dark:text-emerald-400 font-bold">"100/100"</span>,
                    </div>
                    <div className="pl-4">
                      framework: <span className="text-brand-cyan font-bold">"React 19 & Next.js"</span>,
                    </div>
                    <div className="pl-4">
                      animations: <span className="text-brand-purple font-bold">"Framer Motion"</span>,
                    </div>
                    <div className="pl-4">
                      uptime: <span className="text-emerald-500 dark:text-emerald-400 font-bold">"99.99%"</span>,
                    </div>
                    <div>{'}'});</div>
                  </div>

                  {/* Visual UI Preview Box */}
                  <div className="mt-5 p-4 rounded-xl bg-surface-overlay border border-edge/20 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-brand-cyan/20 text-brand-cyan flex items-center justify-center font-bold text-xs">
                          ZT
                        </div>
                        <span className="text-xs font-bold text-text-primary">Revenue Pipeline Velocity</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-500 dark:text-emerald-400 font-bold">+240.5%</span>
                    </div>

                    {/* Mini Wave Chart Graphic */}
                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      {[30, 45, 38, 60, 52, 75, 68, 92, 85, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.6, delay: i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-brand-purple/40 to-brand-cyan rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Floating Metric 1 */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    className="absolute -top-3 -right-3 p-3 rounded-2xl bg-surface-raised/95 backdrop-blur-xl border border-brand-cyan/40 shadow-glow-cyan flex items-center gap-2 text-xs"
                  >
                    <div className="p-1.5 rounded-lg bg-brand-cyan text-black font-bold">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">+148% CRO</div>
                      <div className="text-[10px] text-text-muted">Conversion Rate</div>
                    </div>
                  </motion.div>

                  {/* Floating Metric 2 */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                    className="absolute -bottom-3 -left-3 p-3 rounded-2xl bg-surface-raised/95 backdrop-blur-xl border border-brand-purple/40 shadow-glow-purple flex items-center gap-2 text-xs"
                  >
                    <div className="p-1.5 rounded-lg bg-brand-purple text-white font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">&lt;0.5s Load</div>
                      <div className="text-[10px] text-text-muted">Core Web Vitals</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CLIENT TRUST MARQUEE */}
      {/* ========================================================================= */}
      <ClientMarquee />

      {/* ========================================================================= */}
      {/* 3. STATISTICS SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col items-center text-center">
              <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-cyan mb-2">
                <AnimatedCounter value={85} suffix="+" />
              </span>
              <span className="text-sm font-semibold text-text-primary font-heading">
                Projects Delivered
              </span>
              <span className="text-xs font-mono text-text-muted mt-1">
                Zero-defect launches
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col items-center text-center">
              <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-purple mb-2">
                <AnimatedCounter value={50} suffix="+" />
              </span>
              <span className="text-sm font-semibold text-text-primary font-heading">
                Happy Global Clients
              </span>
              <span className="text-xs font-mono text-text-muted mt-1">
                Across 14 countries
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col items-center text-center">
              <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-cyan mb-2">
                <AnimatedCounter value={99} suffix="%" />
              </span>
              <span className="text-sm font-semibold text-text-primary font-heading">
                Client Satisfaction
              </span>
              <span className="text-xs font-mono text-text-muted mt-1">
                Based on NPS surveys
              </span>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col items-center text-center">
              <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-purple mb-2">
                <AnimatedCounter value={4} suffix="+ Yrs" />
              </span>
              <span className="text-sm font-semibold text-text-primary font-heading">
                Proven Track Record
              </span>
              <span className="text-xs font-mono text-text-muted mt-1">
                Engineering excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 relative bg-surface-overlay/40 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full-Stack Capabilities"
            title="Engineered for"
            highlightedText="Maximum Scale & Speed"
            subtitle="From bespoke web portals to multi-tenant SaaS applications, we deliver end-to-end digital solutions designed to outperform."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 8).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button
              to="/services"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All 10 Core Capabilities & Deliverables
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURED PROJECTS SHOWCASE */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Case Studies</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight leading-tight">
                Crafted with <span className="text-gradient-cyan">Artistic Precision</span> & Rigor
              </h2>
            </div>

            <Button
              to="/projects"
              variant="primary"
              size="md"
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
            >
              View All Projects
            </Button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. HOW WE WORK (PROCESS TIMELINE) */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-surface-overlay/30 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Proven Methodology"
            title="How We Turn Ideas Into"
            highlightedText="World-Class Software"
            subtitle="A transparent, battle-tested 7-phase delivery framework that eliminates guesswork and ensures on-time launches."
          />

          <ProcessTimeline />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TECHNOLOGY STACK */}
      {/* ========================================================================= */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Modern Tech Stack"
            title="Built with the World's"
            highlightedText="Most Modern Technologies"
            subtitle="We build exclusively on industry-standard, production-proven frameworks ensuring supreme velocity and zero technical debt."
          />

          <TechOrbit />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. TESTIMONIALS CAROUSEL */}
      {/* ========================================================================= */}
      <section className="py-24 relative bg-surface-overlay/40 border-t border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-4">
                <Star className="w-3.5 h-3.5 fill-brand-cyan" />
                <span>Client Validation</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight leading-tight">
                Don't Just Take Our Word. <span className="text-gradient-cyan">Hear From Leaders</span>.
              </h2>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-surface-raised border border-edge/30 hover:border-brand-cyan/40 text-text-secondary hover:text-text-primary transition-colors shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-surface-raised border border-edge/30 hover:border-brand-cyan/40 text-text-secondary hover:text-text-primary transition-colors shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards Grid / Active Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-brand-cyan hover:underline transition-colors"
            >
              <span>Read all client success stories & metrics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
