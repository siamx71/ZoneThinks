import React from 'react';
import { cn } from '@/utils/cn';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text' | 'card' | 'badge';
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rect',
  count = 1
}) => {
  const baseClass = "relative overflow-hidden bg-surface-overlay/80 border border-edge/20 rounded-xl before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 dark:before:via-white/5 before:to-transparent";

  const variantClasses = {
    rect: "h-24 w-full rounded-2xl",
    circle: "w-12 h-12 rounded-full",
    text: "h-4 w-3/4 rounded-md",
    card: "h-80 w-full rounded-3xl",
    badge: "h-6 w-24 rounded-full"
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

export const PageSkeleton: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-pulse">
      {/* Hero Skeleton */}
      <div className="max-w-3xl space-y-4">
        <Skeleton variant="badge" className="w-40" />
        <Skeleton className="h-14 w-full sm:w-4/5 rounded-2xl" />
        <Skeleton className="h-6 w-3/5 rounded-lg" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <Skeleton variant="card" />
        <Skeleton variant="card" />
        <Skeleton variant="card" />
      </div>
    </div>
  );
};
