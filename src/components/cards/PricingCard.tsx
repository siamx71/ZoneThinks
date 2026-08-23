import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, Clock, RefreshCw } from 'lucide-react';
import { PricingTier } from '@/data/pricing';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  plan: PricingTier;
  billingCycle: 'project' | 'monthly';
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle }) => {
  const isMonthly = billingCycle === 'monthly';
  const price = isMonthly ? plan.monthlyPrice : plan.projectPrice;
  const priceSub = isMonthly ? plan.monthlyPriceSub : plan.projectPriceSub;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 backdrop-blur-xl',
        plan.popular
          ? 'bg-surface-raised border-2 border-brand-cyan/70 shadow-glow-cyan md:-translate-y-2'
          : 'bg-surface-raised border border-edge/30 hover:border-brand-cyan/40 shadow-card-light dark:shadow-glass'
      )}
    >
      {/* Popular Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-heading font-extrabold uppercase tracking-wider bg-brand-cyan text-black shadow-glow-cyan flex items-center gap-1.5 z-10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{plan.badge}</span>
        </div>
      )}

      <div>
        {/* Plan Header */}
        <div className="mb-6">
          <h3 className="font-heading font-black text-2xl text-text-primary mb-2">
            {plan.name}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed font-normal min-h-[36px]">
            {plan.tagline}
          </p>
        </div>

        {/* Price Display */}
        <div className="mb-6 pb-6 border-b border-edge/20">
          <div className="flex items-baseline gap-2">
            <span className="font-heading font-extrabold text-4xl sm:text-5xl text-text-primary tracking-tight">
              {price}
            </span>
          </div>
          <span className="text-xs font-mono text-text-muted mt-1 block font-medium">
            {priceSub}
          </span>
        </div>

        {/* Delivery & Revisions info pills */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-surface-overlay border border-edge/20 flex flex-col gap-1">
            <span className="text-[10px] text-text-muted uppercase flex items-center gap-1 font-bold">
              <Clock className="w-3 h-3 text-brand-cyan" /> Timeline
            </span>
            <span className="text-text-primary font-semibold">{plan.deliveryTimeline}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-surface-overlay border border-edge/20 flex flex-col gap-1">
            <span className="text-[10px] text-text-muted uppercase flex items-center gap-1 font-bold">
              <RefreshCw className="w-3 h-3 text-brand-cyan" /> Revisions
            </span>
            <span className="text-text-primary font-semibold truncate">{plan.revisionPolicy.split(' ')[0]} {plan.revisionPolicy.split(' ')[1]}</span>
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-text-primary mb-3">
            What's Included:
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
              {feature.included ? (
                <div className="p-0.5 rounded-full bg-brand-cyan/20 text-brand-cyan shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
              ) : (
                <div className="p-0.5 rounded-full bg-surface-overlay text-text-muted shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5" />
                </div>
              )}
              <span
                className={
                  feature.included ? 'text-text-secondary font-normal' : 'text-text-muted line-through'
                }
              >
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Button
        to="/contact"
        variant={plan.popular ? 'primary' : 'secondary'}
        size="md"
        className="w-full justify-center"
      >
        {plan.ctaText}
      </Button>
    </motion.div>
  );
};
