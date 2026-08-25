import React from 'react';
import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text' | 'card' | 'badge' | 'button';
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rect',
  count = 1,
}) => {
  const baseClass =
    "relative overflow-hidden bg-surface-overlay/80 border border-edge/20 rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite] before:bg-gradient-to-r before:from-transparent before:via-brand-cyan/15 dark:before:via-white/10 before:to-transparent";

  const variantClasses = {
    rect: "h-24 w-full rounded-2xl",
    circle: "w-12 h-12 rounded-full",
    text: "h-4 w-3/4 rounded-md",
    card: "h-80 w-full rounded-3xl",
    badge: "h-7 w-36 rounded-full",
    button: "h-11 w-36 rounded-xl",
  };

  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={cn(baseClass, variantClasses[variant], className)}
        />
      ))}
    </>
  );
};

// Full Page Skeleton Screen (For route transitions and cold load state)
export const PageSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Hero Header Skeleton */}
      <div className="space-y-6 max-w-3xl">
        <Skeleton variant="badge" className="w-48 bg-brand-cyan/10 border-brand-cyan/20" />
        <Skeleton className="h-12 sm:h-16 w-11/12 rounded-2xl" />
        <Skeleton className="h-6 w-4/5 rounded-lg" />
        <Skeleton className="h-5 w-3/5 rounded-lg" />

        <div className="flex items-center gap-4 pt-4">
          <Skeleton variant="button" className="w-36 rounded-full" />
          <Skeleton variant="button" className="w-36 rounded-full" />
        </div>
      </div>

      {/* Metric Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-surface-raised border border-edge/30 space-y-3"
          >
            <Skeleton className="h-10 w-20 rounded-lg" />
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-3 w-20 rounded-md" />
          </div>
        ))}
      </div>

      {/* Content Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-6">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-surface-raised border border-edge/30 overflow-hidden space-y-4 p-5 sm:p-6"
          >
            <Skeleton className="aspect-[16/10] w-full rounded-2xl" />
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-24 rounded-full" />
              <Skeleton className="h-6 w-4/5 rounded-lg" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
            </div>
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-5 w-16 rounded-md" />
              <Skeleton className="h-5 w-16 rounded-md" />
              <Skeleton className="h-5 w-16 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
