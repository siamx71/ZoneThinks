import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const InitialLoader: React.FC = () => {
  const [loading, setLoading] = useState(() => {
    // Only show once per browser session
    try {
      if (sessionStorage.getItem('zt_session_loaded')) {
        return false;
      }
    } catch (_) {}
    return true;
  });

  useEffect(() => {
    if (!loading) return;
    
    // Fast 300ms dismiss so users never wait on white screen
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem('zt_session_loaded', 'true');
      } catch (_) {}
    }, 300);

    return () => clearTimeout(timer);
  }, [loading]);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface-base pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo Monogram */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-surface-raised border border-edge/30 shadow-glow-cyan"
            >
              <span className="font-heading font-black text-2xl text-gradient-cyan tracking-wider">
                ZT
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
