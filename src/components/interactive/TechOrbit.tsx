import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Globe,
  FileCode,
  Palette,
  Sparkles,
  Server,
  Share2,
  Database,
  Zap,
  FolderGit2,
  FileText,
  Cloud,
  Figma,
  GitBranch
} from 'lucide-react';
import { techStackData } from '@/data/technologies';
import { cn } from '@/utils/cn';

const iconLookup: Record<string, React.ElementType> = {
  Code2,
  Globe,
  FileCode,
  Palette,
  Sparkles,
  Server,
  Share2,
  Database,
  Zap,
  FolderGit2,
  FileText,
  Cloud,
  Figma,
  GitBranch
};

export const TechOrbit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & Cloud', 'Databases & CMS', 'Design & Tooling'];

  const filteredTech =
    activeCategory === 'All'
      ? techStackData
      : techStackData.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

      {/* Animated Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence>
          {filteredTech.map((tech) => {
            const IconComp = iconLookup[tech.icon] || Code2;
            return (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="group relative p-5 rounded-2xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 hover:bg-surface-overlay transition-all duration-300 flex flex-col justify-between shadow-card-light dark:shadow-glass"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/50 group-hover:scale-110 group-hover:shadow-glow-cyan transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-overlay text-text-muted border border-edge/20 font-bold">
                    {tech.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-base text-text-primary group-hover:text-brand-cyan transition-colors mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
