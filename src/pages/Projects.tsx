import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, RotateCcw } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ProjectItem } from '@/data/projects';
import { useAdmin } from '@/context/AdminContext';
import { cn } from '@/utils/cn';
import { staggerContainer, fadeIn } from '@/animations/variants';

type CategoryFilter = 'All' | 'Websites' | 'SaaS' | 'E-commerce' | 'Dashboard' | 'Landing Pages';

const categories: CategoryFilter[] = ['All', 'Websites', 'SaaS', 'E-commerce', 'Dashboard', 'Landing Pages'];

export const Projects: React.FC = () => {
  const { projects } = useAdmin();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="relative pb-24">
      <SEO
        title="Portfolio & Case Studies | ZoneThinks IT"
        description="Explore our curated portfolio of award-winning web platforms, SaaS applications, headless commerce experiences, and high-converting marketing portals."
      />

      {/* Hero Header */}
      <section className="pt-12 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Client Showcase</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Crafted with <span className="text-gradient-cyan">Artistic Precision</span> & Rigor.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Every project represents a tailored partnership engineered to conquer complex technical challenges and produce measurable revenue growth.
            </p>
          </motion.div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 cursor-pointer',
                  activeCategory === cat
                    ? 'bg-brand-cyan text-black shadow-glow-cyan font-bold scale-105'
                    : 'bg-surface-overlay text-text-secondary hover:text-text-primary border border-edge/30'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <p className="text-text-secondary text-sm font-medium">
                No projects found in "{activeCategory}".
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-black text-xs font-heading font-bold shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
