import React from 'react';
import { motion } from 'framer-motion';
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
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '@/data/services';
import { cardHover } from '@/animations/variants';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

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

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const IconComponent = iconMap[service.iconName] || Globe;

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-colors duration-300 shadow-card-light dark:shadow-glass overflow-hidden"
    >
      {/* Ambient background hover glow */}
      <div className="absolute -right-20 -top-20 w-44 h-44 rounded-full bg-brand-cyan/10 blur-3xl group-hover:bg-brand-cyan/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header: Icon & Category Indicator */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/50 group-hover:scale-105 group-hover:shadow-glow-cyan transition-all duration-300">
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="font-mono text-xs text-text-muted font-bold">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-extrabold text-xl text-text-primary group-hover:text-brand-cyan transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-6 font-normal">
          {service.shortDesc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {service.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-surface-overlay border border-edge/20 text-text-secondary group-hover:border-edge/40 transition-colors"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-md text-[11px] font-mono text-text-muted bg-surface-overlay">
              +{service.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Link */}
      <div className="pt-4 border-t border-edge/20 flex items-center justify-between">
        <Link
          to={`/services#${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:underline transition-colors"
        >
          <span>Explore Capabilities</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] font-mono text-text-muted">
          {service.timeline}
        </span>
      </div>
    </motion.div>
  );
};
