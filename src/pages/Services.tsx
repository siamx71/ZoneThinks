import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  Layout,
  Server,
  ShoppingBag,
  Palette,
  Layers,
  Sparkles,
  Cpu,
  Zap,
  ShieldCheck,
  Check,
  ArrowRight,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { servicesData, ServiceItem } from '@/data/services';
import { fadeIn, staggerContainer } from '@/animations/variants';
import { cn } from '@/utils/cn';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layout,
  Server,
  ShoppingBag,
  Palette,
  Layers,
  Sparkles,
  Cpu,
  Zap,
  ShieldCheck
};

export const Services: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const ActiveIcon = iconMap[activeService.iconName] || Globe;

  return (
    <div className="relative pb-24">
      <SEO
        title="Digital Products Built for Growth | ZoneThinks IT Services"
        description="Explore our 10 core engineering capabilities: Full-Stack Web Development, Next.js Frontend, Cloud Backend APIs, Headless E-Commerce, UI/UX Systems, SaaS Platforms, Redesign, API Integrations, Performance Optimization, and Continuous Support."
      />

      {/* Services Hero */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={staggerContainer(0.1, 0)}
              initial="hidden"
              animate="show"
              className="lg:col-span-7"
            >
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
                // Engineering & Design Services
              </span>

              <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-[1.08]">
                Digital Products <span className="text-gradient-cyan">Built for Growth</span>.
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal max-w-2xl">
                ZoneThinks IT delivers end-to-end digital craftsmanship. From greenfield SaaS architectures to high-converting commerce funnels, our senior engineering pods guarantee sub-second performance and production-grade stability.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
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
                  Explore Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Visual Engineering Hero Teaser */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5"
            >
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-edge/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 animate-ping" />
                    <span className="text-xs font-mono font-bold text-text-primary">10 Core Capabilities</span>
                  </div>
                  <span className="text-xs font-mono text-brand-cyan font-bold">100% In-House</span>
                </div>

                <div className="space-y-3">
                  {servicesData.slice(0, 5).map((s, idx) => {
                    const SIcon = iconMap[s.iconName] || Globe;
                    return (
                      <div
                        key={s.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-surface-overlay/60 border border-edge/20 text-xs text-text-secondary"
                      >
                        <div className="flex items-center gap-3">
                          <SIcon className="w-4 h-4 text-brand-cyan" />
                          <span className="font-heading font-semibold text-text-primary">{s.title}</span>
                        </div>
                        <span className="font-mono text-[11px] text-text-muted">{s.timeline}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid (10 Core Services) */}
      <section className="py-16 bg-surface-overlay/30 border-y border-edge/20" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Service Suite"
            title="Complete Engineering"
            highlightedText="From Concept to Scale"
            subtitle="Explore our comprehensive array of modern web development, UI/UX architecture, and cloud infrastructure services."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.iconName] || Globe;
              const isSelected = service.id === selectedServiceId;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={cn(
                    "group p-7 rounded-3xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer",
                    "bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass hover:-translate-y-1.5",
                    isSelected ? "border-brand-cyan/60 ring-2 ring-brand-cyan/20" : "hover:border-brand-cyan/40"
                  )}
                >
                  <div>
                    {/* Header: Icon & Service Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform shadow-glow-cyan">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-brand-cyan font-bold tracking-wider">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="font-heading font-extrabold text-xl text-text-primary mb-3 group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6 font-normal">
                      {service.shortDesc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-overlay border border-edge/20 text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-edge/20 flex items-center justify-between text-xs font-heading font-bold text-text-primary group-hover:text-brand-cyan transition-colors">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive Interactive Specification Panel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Active Service Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan shadow-glow-cyan">
                    <ActiveIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-brand-cyan font-bold uppercase tracking-wider block">
                      Detailed Architectural Scope
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-primary">
                      {activeService.title}
                    </h2>
                  </div>
                </div>

                <p className="text-base text-text-secondary leading-relaxed font-normal">
                  {activeService.fullDesc}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                  <Clock className="w-4 h-4 text-brand-cyan" />
                  <span>Estimated Delivery Sprint: <strong className="text-text-primary">{activeService.timeline}</strong></span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-text-muted font-bold block">
                    Core Technology Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeService.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-surface-overlay border border-edge/30 text-text-primary font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire for {activeService.title}
                  </Button>
                </div>
              </div>

              {/* Right Column: Deliverables & Key Benefits */}
              <div className="lg:col-span-6 lg:pl-6 lg:border-l border-edge/20 space-y-8">
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-4">
                    Guaranteed Deliverables:
                  </h3>
                  <div className="space-y-2.5">
                    {activeService.deliverables.map((deliv, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-surface-overlay/80 border border-edge/20 text-xs sm:text-sm text-text-secondary"
                      >
                        <div className="p-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-surface-overlay border border-brand-cyan/20">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-brand-cyan mb-3">
                    Strategic Business ROI:
                  </h4>
                  <ul className="space-y-2">
                    {activeService.keyBenefits.map((benefit, i) => (
                      <li key={i} className="text-xs sm:text-sm text-text-secondary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-cyan/10 via-brand-purple/10 to-brand-cyan/10 border border-brand-cyan/30 text-center space-y-6">
            <h3 className="font-heading font-black text-2xl sm:text-4xl text-text-primary">
              Ready to Architect Your Next Digital Platform?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Schedule an architecture discovery session with our senior engineers and receive a comprehensive project blueprint within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Schedule Architecture Call
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
