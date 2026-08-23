import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { CustomCursor } from '@/components/common/CustomCursor';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { InitialLoader } from '@/components/common/InitialLoader';
import { LiveWallpaper } from '@/components/common/LiveWallpaper';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-base text-text-primary relative overflow-x-hidden">
      {/* Global Interactive Live Wallpaper Background */}
      <LiveWallpaper />

      {/* Global Initial Loading Experience (Fast & Non-blocking) */}
      <InitialLoader />

      {/* Global Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Scroll-to-Top Handler & Button */}
      <ScrollToTop />

      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main Routed Page Content: Direct, crisp rendering without duplicate DOM layers */}
      <main className="flex-grow pt-24 relative z-10">
        <Outlet />
      </main>

      {/* Global Mega Agency Footer */}
      <Footer />
    </div>
  );
};
