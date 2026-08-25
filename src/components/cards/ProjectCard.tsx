import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { cardHover } from '@/animations/variants';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden flex flex-col shadow-card-light dark:shadow-glass"
    >
      {/* Mockup / Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-overlay">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.94] group-hover:brightness-100"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Top Badges: Category & Year */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface-raised/90 backdrop-blur-md border border-edge/30 text-brand-cyan shadow-sm">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/60 backdrop-blur-md text-slate-200 border border-white/10">
            {project.year}
          </span>
        </div>

        {/* Floating Highlight Metric */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-brand-cyan/30 text-white text-xs font-semibold shadow-lg">
            <TrendingUp className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
            <span>{project.metrics[0].label}:</span>
            <span className="text-brand-cyan font-bold">{project.metrics[0].value}</span>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-2">
            <span>{project.client}</span>
            <span>•</span>
            <span>{project.industry}</span>
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed mb-6 font-normal">
            {project.shortDesc}
          </p>

          {/* Technology pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-surface-overlay border border-edge/20 text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-overlay text-text-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom CTA Link */}
        <div className="pt-4 border-t border-edge/20 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:underline transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <span className="text-xs font-mono text-text-muted">
            {project.timeline}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
