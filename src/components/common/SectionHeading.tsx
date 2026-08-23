import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { fadeIn } from '@/animations/variants';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  highlightedText,
  subtitle,
  align = 'center',
  className
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <motion.div
      variants={fadeIn('up', 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignmentClasses[align], className)}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-4 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.15]">
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient-cyan">{highlightedText}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
