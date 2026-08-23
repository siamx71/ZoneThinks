import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device supports fine hover (desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, select, textarea, [role="button"], .interactive-hover')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 52 : 26,
          height: isHovered ? 52 : 26,
          backgroundColor: isHovered
            ? (document.documentElement.classList.contains('dark') ? 'rgba(0, 242, 254, 0.22)' : 'rgba(29, 78, 216, 0.18)')
            : (document.documentElement.classList.contains('dark') ? 'rgba(139, 92, 246, 0.06)' : 'rgba(29, 78, 216, 0.05)'),
          borderColor: isHovered
            ? (document.documentElement.classList.contains('dark') ? '#00F2FE' : '#1D4ED8')
            : (document.documentElement.classList.contains('dark') ? 'rgba(0, 242, 254, 0.45)' : 'rgba(29, 78, 216, 0.5)'),
          borderWidth: isHovered ? '2px' : '1.5px',
          boxShadow: isHovered
            ? (document.documentElement.classList.contains('dark')
                ? '0 0 24px rgba(0, 242, 254, 0.9), inset 0 0 14px rgba(0, 242, 254, 0.35)'
                : '0 0 20px rgba(29, 78, 216, 0.75), inset 0 0 10px rgba(29, 78, 216, 0.25)')
            : '0 0 10px rgba(0, 242, 254, 0.25)',
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: document.documentElement.classList.contains('dark') ? '#00F2FE' : '#1D4ED8',
          boxShadow: document.documentElement.classList.contains('dark') ? '0 0 14px #00F2FE' : '0 0 12px #1D4ED8',
        }}
        animate={{
          width: isHovered ? 8 : 4.5,
          height: isHovered ? 8 : 4.5,
          opacity: isClicking ? 0.5 : 1,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};
