import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, BookOpen, Clock, Calendar, ArrowRight, RotateCcw } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { BlogCard } from '@/components/cards/BlogCard';
import { blogPostsData, BlogPost } from '@/data/blogPosts';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/animations/variants';

type CategoryFilter = 'All' | 'Web Development' | 'React' | 'UI/UX' | 'Business' | 'SEO';

const categories: CategoryFilter[] = ['All', 'Web Development', 'React', 'UI/UX', 'Business', 'SEO'];

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      activeCategory === 'All' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative pb-24">
      <SEO
        title="Engineering & Design Insights | ZoneThinks IT"
        description="Deep dives into React 19, Next.js performance, high-conversion UI/UX systems, dark aesthetics, and technical SEO architecture."
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
              // Engineering & Product Insights
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Insights on <span className="text-gradient-cyan">Modern Web Craftsmanship</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Practical analysis, benchmark tests, and architectural frameworks written directly by our senior engineers and design directors.
            </p>
          </motion.div>

          {/* Search & Category Filter Controls */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
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

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & topics..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-surface-raised border border-edge/30 text-text-primary placeholder:text-text-muted text-xs focus:outline-none focus:border-brand-cyan shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <p className="text-text-secondary text-sm font-medium">
                No articles found matching "{searchQuery || activeCategory}".
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-black text-xs font-heading font-bold shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
