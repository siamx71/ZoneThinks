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
      className={cn('flex flex-col max-w-3xl mb-10 sm:mb-14', alignmentClasses[align], className)}
    >
      {badge && (
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-cyan mb-3">
          // {badge}
        </span>
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

export default SectionHeading;
