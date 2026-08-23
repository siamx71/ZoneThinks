import React, { useEffect, useRef } from 'react';
import './animated-agency-background.css';

// Randomly placed ambient sparkle points for subtle stardust effect
const AMBIENT_SPARKLES = [
  { id: 1, top: '18%', left: '22%', size: 2.5, delay: '0s', duration: '5.5s' },
  { id: 2, top: '28%', left: '78%', size: 3, delay: '1.2s', duration: '6.2s' },
  { id: 3, top: '48%', left: '15%', size: 2, delay: '2.5s', duration: '4.8s' },
  { id: 4, top: '62%', left: '85%', size: 2.5, delay: '0.8s', duration: '7.0s' },
  { id: 5, top: '75%', left: '35%', size: 3, delay: '3.1s', duration: '5.2s' },
  { id: 6, top: '88%', left: '68%', size: 2, delay: '1.9s', duration: '6.5s' },
  { id: 7, top: '38%', left: '52%', size: 2, delay: '2.0s', duration: '5.8s' },
];

export const AnimatedAgencyBackground: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion or is on touch device
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (prefersReducedMotion || !isFinePointer) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate normalized delta (-1 to 1) and scale down to 8px max movement
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      targetOffset.current = {
        x: deltaX * 10,
        y: deltaY * 10,
      };
    };

    const animateParallax = () => {
      // Smooth linear interpolation (lerp)
      currentOffset.current.x += (targetOffset.current.x - currentOffset.current.x) * 0.05;
      currentOffset.current.y += (targetOffset.current.y - currentOffset.current.y) * 0.05;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(${currentOffset.current.x.toFixed(2)}px, ${currentOffset.current.y.toFixed(2)}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      className="agency-bg-root"
      aria-hidden="true"
      data-testid="animated-agency-background"
    >
      {/* Layer 1: Base Adaptive Atmospheric Gradient */}
      <div className="agency-bg-base" />

      {/* Layer 2: Subtle Tech Grid & Dot Matrix with Radial Vignette */}
      <div className="agency-bg-grid-wrapper">
        <div className="agency-bg-grid-lines" />
        <div className="agency-bg-grid-dots" />
      </div>

      {/* Interactive Parallax Container for Orbs & Fluid Aurora */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none will-change-transform">
        {/* Layer 3: Floating Aurora Orbs (5 Strategic Viewport Positions) */}
        <div className="agency-bg-orbs-container">
          <div className="agency-bg-orb agency-bg-orb-1" />
          <div className="agency-bg-orb agency-bg-orb-2" />
          <div className="agency-bg-orb agency-bg-orb-3" />
          <div className="agency-bg-orb agency-bg-orb-4" />
          <div className="agency-bg-orb agency-bg-orb-5" />
        </div>

        {/* Layer 4: Flowing Aurora Ribbons (Top & Bottom Periphery) */}
        <div className="agency-bg-aurora-stream-top" />
        <div className="agency-bg-aurora-stream-bottom" />

        {/* Layer 5: Ambient Luminous Particles / Stardust */}
        <div className="agency-bg-sparkles">
          {AMBIENT_SPARKLES.map((sparkle) => (
            <div
              key={sparkle.id}
              className="agency-bg-sparkle"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedAgencyBackground;
