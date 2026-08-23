import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, HelpCircle, Search, RotateCcw } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { faqData, FAQItem } from '@/data/faq';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/animations/variants';

type CategoryFilter = 'All' | 'General' | 'Process & Timeline' | 'Pricing & Contracts' | 'Tech Stack & Security';

const categories: CategoryFilter[] = ['All', 'General', 'Process & Timeline', 'Pricing & Contracts', 'Tech Stack & Security'];

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true, 'faq-2': true });
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pb-24">
      <SEO
        title="Frequently Asked Questions (FAQ) | ZoneThinks IT"
        description="Find answers to common questions regarding our web development timelines, tech stack, pricing models, intellectual property, and SLA guarantees."
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
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarity & Transparency</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Frequently Asked <span className="text-gradient-cyan">Questions</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Everything you need to know about our engineering standards, project delivery workflows, contracts, and post-launch support.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <div className="mt-12 max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. timeline, pricing, IP, React)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-surface-raised border border-edge/30 text-text-primary placeholder:text-text-muted text-xs sm:text-sm focus:outline-none focus:border-brand-cyan shadow-sm"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 cursor-pointer',
                    activeCategory === cat
                      ? 'bg-brand-cyan text-black shadow-glow-cyan font-bold'
                      : 'bg-surface-overlay text-text-secondary hover:text-text-primary border border-edge/30'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={cn(
                    'rounded-2xl border transition-all duration-300 overflow-hidden',
                    isOpen
                      ? 'bg-surface-raised border-brand-cyan/50 shadow-card-light dark:shadow-glass'
                      : 'bg-surface-raised/70 border-edge/30 hover:border-edge/60'
                  )}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 select-none focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-brand-cyan font-bold">
                        {faq.id.replace('faq-', '0')}.
                      </span>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-text-primary">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-text-muted transition-transform duration-300 shrink-0',
                        isOpen && 'transform rotate-180 text-brand-cyan'
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-edge/20 text-xs sm:text-sm text-text-secondary leading-relaxed space-y-3 font-normal mt-2">
                          <p>{faq.answer}</p>
                          <div className="pt-2">
                            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-surface-overlay text-brand-cyan border border-edge/20 font-semibold">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <p className="text-text-secondary text-sm font-medium">
                No matching answers found for "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-black text-xs font-heading font-bold shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Direct Help Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-surface-overlay border border-edge/30 space-y-4">
            <h3 className="font-heading font-bold text-xl text-text-primary">
              Have a question not listed here?
            </h3>
            <p className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
              Our engineering leadership is available to discuss custom architecture, NDAs, security certifications, or specialized procurement requirements.
            </p>
            <div className="pt-2">
              <Button to="/contact" variant="primary" size="md">
                Ask Our Principal Architects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
