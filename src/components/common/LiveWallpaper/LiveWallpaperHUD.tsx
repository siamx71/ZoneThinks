import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Activity,
  Waves,
  Zap,
  Sliders,
  X,
  Gauge,
  Layers,
  MousePointer,
  RotateCcw
} from 'lucide-react';
import { WallpaperMode, WallpaperDensity, WallpaperSpeed } from './LiveWallpaperCanvas';

interface LiveWallpaperHUDProps {
  mode: WallpaperMode;
  setMode: (mode: WallpaperMode) => void;
  density: WallpaperDensity;
  setDensity: (density: WallpaperDensity) => void;
  speed: WallpaperSpeed;
  setSpeed: (speed: WallpaperSpeed) => void;
  interactive: boolean;
  setInteractive: (interactive: boolean) => void;
}

export const LiveWallpaperHUD: React.FC<LiveWallpaperHUDProps> = ({
  mode,
  setMode,
  density,
  setDensity,
  speed,
  setSpeed,
  interactive,
  setInteractive,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const modeOptions: { id: WallpaperMode; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'synapse',
      label: 'Cyber Synapse',
      icon: <Activity className="w-4 h-4" />,
      desc: 'Neural mesh & dev glyphs',
    },
    {
      id: 'aurora',
      label: 'Aurora Wave',
      icon: <Waves className="w-4 h-4" />,
      desc: 'Fluid neon plasma ribbons',
    },
    {
      id: 'quantum',
      label: 'Quantum Dust',
      icon: <Zap className="w-4 h-4" />,
      desc: 'Vortex physics & stardust',
    },
  ];

  return (
    <div className="live-wallpaper-hud">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="hud-trigger"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            onClick={() => setIsOpen(true)}
            className="live-wallpaper-hud-trigger group"
            title="Customize Live Wallpaper"
            aria-label="Customize Live Wallpaper"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse group-hover:rotate-45 transition-transform duration-300" />
            <span className="text-xs font-semibold">Live Wallpaper</span>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            key="hud-panel"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="live-wallpaper-hud-card p-4 w-80 max-w-[90vw] text-text-primary"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-edge-subtle/50 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-primary">Live Engine HUD</h4>
                  <p className="text-[10px] text-text-muted">Interactive Agency Wallpaper</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-overlay transition-colors"
                aria-label="Close Wallpaper HUD"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Selector */}
            <div className="mb-3.5">
              <label className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                Wallpaper Mode
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {modeOptions.map((opt) => {
                  const isActive = mode === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setMode(opt.id)}
                      className={`flex flex-col items-center justify-center p-2 rounded-xl border text-center transition-all ${
                        isActive
                          ? 'bg-brand-cyan/15 border-brand-cyan text-brand-cyan shadow-sm'
                          : 'bg-surface-overlay/50 border-edge-subtle/40 text-text-secondary hover:border-edge hover:bg-surface-overlay'
                      }`}
                    >
                      <div className="mb-1">{opt.icon}</div>
                      <span className="text-[10px] font-medium leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Speed & Density Sliders */}
            <div className="grid grid-cols-2 gap-2 mb-3.5">
              {/* Density */}
              <div>
                <label className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Gauge className="w-3 h-3 text-brand-purple" />
                  Density
                </label>
                <div className="flex rounded-lg bg-surface-overlay/60 p-0.5 border border-edge-subtle/40">
                  {(['low', 'medium', 'ultra'] as WallpaperDensity[]).map((d) => (
                    <button
                      key={d}
                      onClick={() => setDensity(d)}
                      className={`flex-1 py-1 text-[10px] font-semibold rounded-md uppercase capitalize transition-all ${
                        density === d
                          ? 'bg-brand-cyan text-slate-950 font-bold shadow-xs'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      {d === 'medium' ? 'Med' : d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed */}
              <div>
                <label className="text-[10px] font-semibold text-text-secondary uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-brand-cyan" />
                  Speed
                </label>
                <div className="flex rounded-lg bg-surface-overlay/60 p-0.5 border border-edge-subtle/40">
                  {(['slow', 'normal', 'fast'] as WallpaperSpeed[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`flex-1 py-1 text-[10px] font-semibold rounded-md uppercase capitalize transition-all ${
                        speed === s
                          ? 'bg-brand-purple text-white font-bold shadow-xs'
                          : 'text-text-muted hover:text-text-primary'
                      }`}
                    >
                      {s === 'normal' ? 'Norm' : s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Toggles & Reset */}
            <div className="flex items-center justify-between pt-2 border-t border-edge-subtle/40 text-[11px]">
              <button
                onClick={() => setInteractive(!interactive)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all ${
                  interactive
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-surface-overlay/60 border-edge-subtle text-text-muted'
                }`}
              >
                <MousePointer className="w-3 h-3" />
                <span>{interactive ? 'Physics Active' : 'Physics Off'}</span>
              </button>

              <button
                onClick={() => {
                  setMode('synapse');
                  setDensity('medium');
                  setSpeed('normal');
                  setInteractive(true);
                }}
                className="inline-flex items-center gap-1 text-text-muted hover:text-brand-cyan transition-colors"
                title="Reset to Default"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
