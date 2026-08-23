import React from 'react';
import { trustLogos } from '@/data/agency';

export const ClientMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-10 overflow-hidden border-y border-edge/20 bg-surface-overlay/40 backdrop-blur-sm">
      {/* Left and Right Fade Masks for Smooth Infinite Look */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-surface-base to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-surface-base to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
          Trusted by high-growth startups & global enterprise teams
        </p>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* First Set */}
        <div className="flex items-center gap-12 sm:gap-16 px-6">
          {trustLogos.map((item, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-raised border border-edge/30 flex items-center justify-center font-heading font-black text-sm text-brand-cyan shadow-sm">
                {item.logo.substring(0, 2)}
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm tracking-wider text-text-primary">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Set for Continuous Loop */}
        <div className="flex items-center gap-12 sm:gap-16 px-6" aria-hidden="true">
          {trustLogos.map((item, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="w-8 h-8 rounded-lg bg-surface-raised border border-edge/30 flex items-center justify-center font-heading font-black text-sm text-brand-cyan shadow-sm">
                {item.logo.substring(0, 2)}
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-sm tracking-wider text-text-primary">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  {item.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
