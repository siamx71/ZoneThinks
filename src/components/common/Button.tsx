import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'purple' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-xl gap-1.5',
    md: 'px-6 py-3 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-8 py-3.5 text-base font-bold rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-brand-cyan text-slate-950 font-extrabold hover:bg-cyan-300 hover:scale-[1.02] active:scale-[0.98] shadow-glow-cyan border border-cyan-300 transition-all duration-200',
    secondary:
      'bg-surface-raised hover:bg-surface-overlay text-text-primary border border-edge/40 backdrop-blur-md transition-all duration-200 hover:border-brand-cyan/60 shadow-sm font-bold',
    outline:
      'bg-transparent text-text-primary border border-edge/50 hover:border-brand-cyan hover:text-brand-cyan transition-all duration-200 font-semibold',
    purple:
      'bg-brand-purple text-white hover:bg-purple-600 transition-all duration-200 shadow-glow-purple font-bold',
    ghost:
      'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-overlay transition-colors font-medium',
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-heading tracking-wide transition-all select-none active:scale-[0.98] cursor-pointer';

  const combinedClass = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const innerContent = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span className="font-heading">{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClass}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={combinedClass}
      {...props}
    >
      {innerContent}
    </motion.button>
  );
};
