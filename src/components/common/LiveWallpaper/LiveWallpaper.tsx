import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LiveWallpaperCanvas, WallpaperMode, WallpaperDensity, WallpaperSpeed } from './LiveWallpaperCanvas';
import { LiveWallpaperHUD } from './LiveWallpaperHUD';
import './live-wallpaper.css';

export const LiveWallpaper: React.FC = () => {
  const location = useLocation();

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

  const [interactive, setInteractive] = useState<boolean>(() => {
    const saved = localStorage.getItem('zt_wallpaper_interactive');
    if (saved !== null) {
      return saved === 'true';
    }
    // Default physics interaction is OFF on mobile to save CPU/touch interference, ON on desktop
    const isMobile = typeof window !== 'undefined' && (window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024));
    return !isMobile;
  });

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

  useEffect(() => {
    localStorage.setItem('zt_wallpaper_interactive', String(interactive));
  }, [interactive]);

  // Hide floating HUD on AI Assistant, Friday, Admin and mobile screens to prevent overlapping input fields
  const isChatOrAdminPage = 
    location.pathname.startsWith('/ai-assistant') || 
    location.pathname.startsWith('/friday') || 
    location.pathname.startsWith('/admin');

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
        <div className="live-wallpaper-glow-left-top" />
        <div className="live-wallpaper-glow-left-mid" />
        <div className="live-wallpaper-glow-left-bottom" />
        <div className="live-wallpaper-glow-right-top" />
        <div className="live-wallpaper-glow-right-mid" />
        <div className="live-wallpaper-glow-right-bottom" />

        {/* Layer 4: Interactive Canvas Engine */}
        <LiveWallpaperCanvas
          mode={mode}
          density={density}
          speed={speed}
          interactive={interactive}
        />
      </div>

      {/* Floating HUD Controller (Hidden on Chat & Admin pages to never obstruct typing) */}
      {!isChatOrAdminPage && (
        <div className="hidden md:block">
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
        </div>
      )}
    </>
  );
};

export default LiveWallpaper;
