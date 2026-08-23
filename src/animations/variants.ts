import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none', delay = 0, duration = 0.4): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const scaleIn = (delay = 0, duration = 0.3): Variants => {
  return {
    hidden: { scale: 0.95, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      },
    },
  };
};

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.01,
    y: -4,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export const textReveal = {
  hidden: { y: '100%', opacity: 0 },
  show: (i: number = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: i * 0.05,
    },
  }),
};

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 1,
  },
};
