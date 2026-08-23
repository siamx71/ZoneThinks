import React, { useState, useEffect } from 'react';
import { LiveWallpaperCanvas, WallpaperMode, WallpaperDensity, WallpaperSpeed } from './LiveWallpaperCanvas';
import { LiveWallpaperHUD } from './LiveWallpaperHUD';
import './live-wallpaper.css';

export const LiveWallpaper: React.FC = () => {
  // Read saved preference or default to 'synapse' mode
  const [mode, setMode] = useState<WallpaperMode>(() => {
    return (localStorage.getItem('zt_wallpaper_mode') as WallpaperMode) || 'synapse';
  });

  const [density, setDensity] = useState<WallpaperDensity>(() => {
    return (localStorage.getItem('zt_wallpaper_density') as WallpaperDensity) || 'medium';
  });

  const [speed, setSpeed] = useState<WallpaperSpeed>(() => {
    return (localStorage.getItem('zt_wallpaper_speed') as WallpaperSpeed) || 'normal';
  });

  const [interactive, setInteractive] = useState<boolean>(true);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('zt_wallpaper_mode', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('zt_wallpaper_density', density);
  }, [density]);

  useEffect(() => {
    localStorage.setItem('zt_wallpaper_speed', speed);
  }, [speed]);

  return (
    <>
      <div
        className="live-wallpaper-root"
        aria-hidden="true"
        data-testid="live-wallpaper-background"
      >
        {/* Layer 1: Base Adaptive Atmospheric Depth across both sides */}
        <div className="live-wallpaper-base-gradient" />

        {/* Layer 2: Tech Cyber-Grid with Full Viewport Perspective */}
        <div className="live-wallpaper-cyber-grid" />

        {/* Layer 3: Balanced Dual-Sided Volumetric Aurora Light Beams */}
        {/* Left Flank Glows */}
        <div className="live-wallpaper-glow-left-top" />
        <div className="live-wallpaper-glow-left-mid" />
        <div className="live-wallpaper-glow-left-bottom" />

        {/* Right Flank Glows */}
        <div className="live-wallpaper-glow-right-top" />
        <div className="live-wallpaper-glow-right-mid" />
        <div className="live-wallpaper-glow-right-bottom" />

        {/* Layer 4: Interactive Web Dev Canvas Engine (Balanced Nodes, Glyphs, Physics & Ripples) */}
        <LiveWallpaperCanvas
          mode={mode}
          density={density}
          speed={speed}
          interactive={interactive}
        />
      </div>

      {/* Floating HUD Controller for Visitors */}
      <LiveWallpaperHUD
        mode={mode}
        setMode={setMode}
        density={density}
        setDensity={setDensity}
        speed={speed}
        setSpeed={setSpeed}
        interactive={interactive}
        setInteractive={setInteractive}
      />
    </>
  );
};

export default LiveWallpaper;
