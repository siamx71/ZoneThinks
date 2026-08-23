import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { TestimonialItem } from '@/data/testimonials';
import { cardHover } from '@/animations/variants';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-all duration-300 shadow-card-light dark:shadow-glass overflow-hidden"
    >
      {/* Glow ambient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all pointer-events-none" />

      <div>
        {/* Top Header: Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <Quote className="w-8 h-8 text-edge/60 group-hover:text-brand-cyan/40 transition-colors" />
        </div>

        {/* Highlight Metric Pill */}
        {testimonial.highlightMetric && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-4 font-mono">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{testimonial.highlightMetric}</span>
          </div>
        )}

        {/* Quote Text */}
        <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed mb-8 font-normal">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Client Profile */}
      <div className="pt-6 border-t border-edge/20 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.clientName}
          className="w-12 h-12 rounded-full object-cover border border-edge/30"
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-heading font-bold text-sm text-text-primary group-hover:text-brand-cyan transition-colors">
            {testimonial.clientName}
          </span>
          <span className="text-xs text-text-muted">
            {testimonial.role}, <span className="text-text-secondary font-semibold">{testimonial.company}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};
