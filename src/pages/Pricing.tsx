import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, X, HelpCircle, Shield, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PricingCard } from '@/components/cards/PricingCard';
import { Button } from '@/components/common/Button';
import { pricingPlans } from '@/data/pricing';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/animations/variants';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project');

  return (
    <div className="relative pb-24">
      <SEO
        title="Pricing & Investment Plans | ZoneThinks IT"
        description="Transparent pricing models for web development, full-stack SaaS builds, and dedicated engineering pods on monthly retainer."
      />

      {/* Hero */}
      <section className="pt-12 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent & Predictable Investment</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Invest in <span className="text-gradient-cyan">Uncompromising Quality</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              No hidden fees, no junior developers, no surprise invoices. Choose between fixed-scope milestone delivery or dedicated agile engineering pods.
            </p>
          </motion.div>

          {/* Billing Cycle Toggle */}
          <div className="mt-12 inline-flex items-center p-1.5 rounded-full bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
            <button
              onClick={() => setBillingCycle('project')}
              className={cn(
                'px-6 py-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 cursor-pointer',
                billingCycle === 'project'
                  ? 'bg-brand-cyan text-black shadow-glow-cyan'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              Project-Based Scope
            </button>
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-6 py-2.5 rounded-full text-xs font-heading font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer',
                billingCycle === 'monthly'
                  ? 'bg-brand-cyan text-black shadow-glow-cyan'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              <span>Monthly Dedicated Pod</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-brand-purple/20 text-brand-purple border border-brand-purple/30 font-bold">
                FLEXIBLE
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl text-text-primary">
            Need a custom enterprise scope or SLA?
          </h3>
          <p className="text-text-secondary text-sm max-w-xl mx-auto">
            We regularly architect custom multi-quarter development roadmaps for established brands and venture-backed organizations.
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Schedule an Architecture Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
