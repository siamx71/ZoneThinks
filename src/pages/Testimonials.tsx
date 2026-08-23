import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Button } from '@/components/common/Button';
import { testimonialsData } from '@/data/testimonials';
import { staggerContainer } from '@/animations/variants';

export const Testimonials: React.FC = () => {
  return (
    <div className="relative pb-24">
      <SEO
        title="Client Reviews & Testimonials | ZoneThinks IT"
        description="Read what CTOs, founders, and product directors say about partnering with ZoneThinks IT for their mission-critical web applications."
      />

      {/* Hero */}
      <section className="pt-12 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-6">
              <Star className="w-3.5 h-3.5 fill-brand-cyan" />
              <span>Verified Client Validation</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Trusted by Ambitious <span className="text-gradient-cyan">Founders & CTOs</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Hear directly from the technology leaders and entrepreneurs who have accelerated their businesses with our digital engineering pods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Video & Interview Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-2">
                Engineering Partnership
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-text-primary mb-4">
                "ZoneThinks IT gave our company the technical velocity of a $100M Series C startup."
              </h2>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                From sub-50ms data streaming to zero-downtime database migrations, our clients treat us as their unfair technological advantage.
              </p>
              <Button to="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start Your Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
