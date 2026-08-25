import React, { useEffect, useRef } from 'react';

export type WallpaperMode = 'synapse' | 'aurora' | 'quantum';
export type WallpaperDensity = 'low' | 'medium' | 'ultra';
export type WallpaperSpeed = 'slow' | 'normal' | 'fast';

interface LiveWallpaperCanvasProps {
  mode: WallpaperMode;
  density: WallpaperDensity;
  speed: WallpaperSpeed;
  interactive: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  toolName: string;
  showAmbientLabel: boolean;
  depth: number; // 0.5 to 1.5
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

// Industry-standard Web Development tools & tokens
const WEB_DEV_TOOLS = [
  'React',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'Vue.js',
  'Vite',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Redux',
  'Figma',
  'Astro',
  'Three.js',
  'Svelte',
  'Shadcn UI',
  'Framer Motion',
  'Angular',
  'Node.js',
  'Python',
  'GraphQL',
  'REST API',
  'Express',
  'NestJS',
  'Django',
  'FastAPI',
  'WebSockets',
  'Bun',
  'Golang',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Supabase',
  'Prisma',
  'Docker',
  'AWS',
  'Vercel',
  'Cloudflare',
  'Kubernetes',
  'Firebase',
  'MySQL',
  'Git',
  'CI/CD',
  'Linux',
  'Nginx',
  '</>',
  '{...}',
  'async/await',
  '200 OK',
  'git push',
  'JSON',
  'SQL',
  'JWT',
  ':root',
  '<div>',
  'API',
  'CRUD',
  'Microservices',
];

export const LiveWallpaperCanvas: React.FC<LiveWallpaperCanvasProps> = ({
  mode,
  density,
  speed,
  interactive,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePos = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const shockwaves = useRef<Shockwave[]>([]);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Optimized DPR: 1.0 on mobile and touch devices, 1.5 max on desktop for silky 120fps with minimal GPU fillrate
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isMobileScreen = width < 768;
    const dpr = isTouchDevice || isMobileScreen ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Speed multiplier
    const speedMap: Record<WallpaperSpeed, number> = {
      slow: 0.6,
      normal: 1.0,
      fast: 1.6,
    };
    const currentSpeed = speedMap[speed] || 1.0;

    // Density multiplier
    const densityMap: Record<WallpaperDensity, number> = {
      low: 0.6,
      medium: 1.0,
      ultra: 1.4,
    };
    const densityMult = densityMap[density] || 1.0;

    // Device-adaptive particle counts
    const area = width * height;
    let particleCount: number;
    if (isMobileScreen) {
      // 16 to 28 particles on mobile for 120 FPS performance
      particleCount = Math.max(16, Math.min(Math.floor((area / 32000) * densityMult), 28));
    } else {
      // 36 to 68 particles on desktop for balanced density and 120 FPS
      particleCount = Math.max(36, Math.min(Math.floor((area / 24000) * densityMult), 68));
    }

    // Theme color palettes
    const getColors = () => {
      const dark = isDarkMode();
      if (dark) {
        return {
          primary: 'rgba(0, 242, 254, ',
          secondary: 'rgba(139, 92, 246, ',
          accent: 'rgba(59, 130, 246, ',
          glow: 'rgba(0, 242, 254, 0.4)',
          textGlyph: '#00F2FE',
          line: '0, 242, 254',
          hoverColor: '#00F2FE',
        };
      } else {
        return {
          primary: 'rgba(29, 78, 216, ',
          secondary: 'rgba(109, 40, 217, ',
          accent: 'rgba(2, 132, 199, ',
          glow: 'rgba(29, 78, 216, 0.4)',
          textGlyph: '#1E3A8A',
          line: '30, 64, 175',
          hoverColor: '#1D4ED8',
        };
      }
    };

    let colors = getColors();
    const shuffledTools = [...WEB_DEV_TOOLS].sort(() => Math.random() - 0.5);

    // Create particles with guaranteed balanced distribution across left and right flanks
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const depth = 0.6 + Math.random() * 0.8;
      const colorScheme = [colors.primary, colors.secondary, colors.accent][i % 3];
      const baseAlpha = 0.4 + Math.random() * 0.4;
      const toolName = shuffledTools[i % shuffledTools.length];
      const showAmbientLabel = i % 2 === 0;

      // Stratified X distribution
      const isLeft = i % 2 === 0;
      const initialX = isLeft
        ? Math.random() * (width * 0.46) + 15
        : width * 0.54 + Math.random() * (width * 0.44);

      particles.push({
        x: initialX,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5 * depth * currentSpeed,
        vy: (Math.random() - 0.5) * 0.5 * depth * currentSpeed,
        radius: (2.0 + Math.random() * 2.0) * depth,
        baseRadius: (2.0 + Math.random() * 2.0) * depth,
        alpha: baseAlpha,
        baseAlpha,
        color: colorScheme,
        toolName,
        showAmbientLabel,
        depth,
      });
    }

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      colors = getColors();
    };

    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mousePos.current.active = false;
    };

    // Click Shockwave Ripple
    const handleClick = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      shockwaves.current.push({
        x: clickX,
        y: clickY,
        radius: 4,
        maxRadius: Math.min(width, height) * 0.3,
        alpha: 0.8,
        color: isDarkMode() ? 'rgba(0, 242, 254, ' : 'rgba(29, 78, 216, ',
      });

      // Apply impulsive force
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const distSq = dx * dx + dy * dy;
        if (distSq < 48400 && distSq > 0) { // 220px squared
          const dist = Math.sqrt(distSq);
          const force = (220 - dist) / 220;
          p.vx += (dx / dist) * force * 3.5;
          p.vy += (dy / dist) * force * 3.5;
        }
      }
    };

    // Touch support for mobile interaction
    const handleTouchMove = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
        active: true,
      };
    };

    const handleTouchEnd = () => {
      mousePos.current.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Dark mode observer
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // High performance text renderer
    const drawFloatingText = (
      x: number,
      y: number,
      text: string,
      isHovered: boolean,
      alpha: number
    ) => {
      const dark = isDarkMode();
      const fontSize = isHovered ? 13 : 11;
      const fontWeight = isHovered ? '700' : '600';

      ctx.font = `${fontWeight} ${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isHovered) {
        ctx.fillStyle = dark ? '#00F2FE' : '#1E3A8A';
        ctx.fillText(text, x, y);
      } else {
        if (dark) {
          ctx.fillStyle = `rgba(0, 242, 254, ${Math.min(0.8, alpha * 0.85)})`;
        } else {
          ctx.fillStyle = `rgba(37, 99, 235, ${Math.min(0.35, Math.max(0.18, alpha * 0.38))})`;
        }
        ctx.fillText(text, x, y);
      }
    };

    let time = 0;
    let lastTime = performance.now();
    let isPaused = false;

    // Visibility API listener: Pause RAF when tab is hidden to save 100% CPU/GPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isPaused = true;
      } else {
        isPaused = false;
        lastTime = performance.now();
        if (!animationFrameId.current) {
          animationFrameId.current = requestAnimationFrame(render);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Main 120 FPS Render Loop (Delta-Time normalized)
    const render = (currentTime: number) => {
      if (isPaused) return;

      const dt = Math.min((currentTime - lastTime) / 16.667, 2.0);
      lastTime = currentTime;
      time += 0.015 * currentSpeed * dt;

      ctx.clearRect(0, 0, width, height);
      const dark = isDarkMode();

      // Spotlight on hover
      if (mousePos.current.active) {
        const mx = mousePos.current.x;
        const my = mousePos.current.y;
        const spotRadius = isMobileScreen ? 140 : 200;

        const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, spotRadius);
        if (dark) {
          spotGrad.addColorStop(0, 'rgba(0, 242, 254, 0.18)');
          spotGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.08)');
          spotGrad.addColorStop(1, 'transparent');
        } else {
          spotGrad.addColorStop(0, 'rgba(29, 78, 216, 0.16)');
          spotGrad.addColorStop(0.5, 'rgba(109, 40, 217, 0.08)');
          spotGrad.addColorStop(1, 'transparent');
        }

        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mx, my, spotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing cursor ring
        const pulseR = 22 + Math.sin(time * 4) * 4;
        ctx.beginPath();
        ctx.arc(mx, my, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = dark ? 'rgba(0, 242, 254, 0.75)' : 'rgba(29, 78, 216, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = dark ? '#00F2FE' : '#1D4ED8';
        ctx.fill();
      }

      // MODE 1: CYBER SYNAPSE
      if (mode === 'synapse') {
        const maxDist = isMobileScreen ? 110 : 135;
        const maxDistSq = maxDist * maxDist;
        const mouseDist = isMobileScreen ? 140 : 200;
        const mouseDistSq = mouseDist * mouseDist;

        // Draw connections with squared distance check
        const pLen = particles.length;
        for (let i = 0; i < pLen; i++) {
          const p1 = particles[i];

          for (let j = i + 1; j < pLen; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxDistSq) {
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / maxDist) * (dark ? 0.26 : 0.35) * Math.min(p1.alpha, p2.alpha);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`;
              ctx.lineWidth = (dark ? 0.9 : 1.1) * ((p1.depth + p2.depth) / 2);
              ctx.stroke();
            }
          }

          // Mouse line connection
          if (mousePos.current.active) {
            const dx = p1.x - mousePos.current.x;
            const dy = p1.y - mousePos.current.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < mouseDistSq) {
              const dist = Math.sqrt(distSq);
              const normDist = 1 - dist / mouseDist;
              const alpha = Math.min(1.0, normDist * 1.2);

              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mousePos.current.x, mousePos.current.y);
              ctx.strokeStyle = dark ? `rgba(0, 242, 254, ${alpha * 0.8})` : `rgba(29, 78, 216, ${alpha * 0.85})`;
              ctx.lineWidth = 1.6 * normDist + 0.6;
              ctx.stroke();

              // Pull force
              const pullForce = normDist * 0.04 * dt;
              p1.vx -= (dx / dist) * pullForce;
              p1.vy -= (dy / dist) * pullForce;
            }
          }
        }

        // Draw particle nodes and badges
        for (let i = 0; i < pLen; i++) {
          const p = particles[i];
          let isNearMouse = false;
          let extraScale = 1;
          let extraAlpha = 1;

          if (mousePos.current.active) {
            const dx = p.x - mousePos.current.x;
            const dy = p.y - mousePos.current.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < 32400) { // 180px squared
              const dist = Math.sqrt(distSq);
              const hoverFactor = 1 - dist / 180;
              extraScale = 1 + hoverFactor * 0.8;
              extraAlpha = 1 + hoverFactor * 0.6;
              isNearMouse = true;
            }
          }

          if (isNearMouse || p.showAmbientLabel) {
            drawFloatingText(p.x, p.y, p.toolName, isNearMouse, p.alpha * extraAlpha);
          } else {
            // Dual-pass glow without expensive shadowBlur
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * extraScale * 1.8, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${Math.min(0.2, p.alpha * 0.25)})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * extraScale, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${Math.min(1, p.alpha * extraAlpha)})`;
            ctx.fill();
          }
        }
      }

      // MODE 2: AURORA FLUID
      else if (mode === 'aurora') {
        const waveCount = isMobileScreen ? 2 : 4;
        const points = isMobileScreen ? 14 : 22;
        const sliceWidth = width / (points - 1);

        for (let w = 0; w < waveCount; w++) {
          const wavePhase = time + w * 1.8;
          const baseY = height * (0.32 + w * 0.14);
          const amplitude = 30 + w * 10;

          ctx.beginPath();
          ctx.moveTo(0, height);
          ctx.lineTo(0, baseY);

          for (let p = 0; p < points; p++) {
            const x = p * sliceWidth;
            let mouseInfluence = 0;

            if (mousePos.current.active) {
              const dx = x - mousePos.current.x;
              const dy = baseY - mousePos.current.y;
              const distSq = dx * dx + dy * dy;
              if (distSq < 57600) {
                const dist = Math.sqrt(distSq);
                mouseInfluence = Math.sin((1 - dist / 240) * Math.PI) * 50;
              }
            }

            const y =
              baseY +
              Math.sin(p * 0.35 + wavePhase) * amplitude +
              Math.cos(p * 0.2 - wavePhase * 0.7) * (amplitude * 0.45) +
              mouseInfluence;

            ctx.lineTo(x, y);
          }

          ctx.lineTo(width, height);
          ctx.closePath();

          const grad = ctx.createLinearGradient(0, baseY - amplitude, width, baseY + amplitude);
          const alphaBase = 0.08 + w * 0.03;
          grad.addColorStop(0, `${colors.primary}${alphaBase})`);
          grad.addColorStop(0.5, `${colors.secondary}${alphaBase * 1.4})`);
          grad.addColorStop(1, `${colors.accent}${alphaBase * 0.8})`);

          ctx.fillStyle = grad;
          ctx.fill();
        }

        const subsetCount = Math.floor(particles.length * 0.6);
        for (let i = 0; i < subsetCount; i++) {
          const p = particles[i];
          let isHovered = false;
          if (mousePos.current.active) {
            const dx = p.x - mousePos.current.x;
            const dy = p.y - mousePos.current.y;
            if (dx * dx + dy * dy < 28900) isHovered = true;
          }
          drawFloatingText(p.x, p.y, p.toolName, isHovered, p.alpha * 1.1);
        }
      }

      // MODE 3: QUANTUM PARTICLE STORM
      else if (mode === 'quantum') {
        const pLen = particles.length;
        for (let i = 0; i < pLen; i++) {
          const p = particles[i];
          let isHovered = false;

          if (mousePos.current.active) {
            const dx = mousePos.current.x - p.x;
            const dy = mousePos.current.y - p.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 62500 && distSq > 100) {
              isHovered = true;
              const dist = Math.sqrt(distSq);
              const angle = Math.atan2(dy, dx);
              const perpAngle = angle + Math.PI / 2;
              const force = (250 - dist) / 250;

              p.vx += (Math.cos(perpAngle) * force * 0.35 + Math.cos(angle) * force * 0.18) * dt;
              p.vy += (Math.sin(perpAngle) * force * 0.35 + Math.sin(angle) * force * 0.18) * dt;
            }
          }

          if (isHovered || p.showAmbientLabel) {
            drawFloatingText(p.x, p.y, p.toolName, isHovered, p.alpha);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.fill();

            // Lightweight velocity tail
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 4, p.y - p.vy * 4);
            ctx.strokeStyle = `${p.color}${p.alpha * 0.4})`;
            ctx.lineWidth = p.radius * 0.7;
            ctx.stroke();
          }
        }
      }

      // Shockwave Ripples
      for (let i = shockwaves.current.length - 1; i >= 0; i--) {
        const sw = shockwaves.current[i];
        sw.radius += 4.2 * currentSpeed * dt;
        sw.alpha = Math.max(0, 0.8 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.01) {
          shockwaves.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${sw.color}${sw.alpha})`;
        ctx.lineWidth = 2.4 * (1 - sw.radius / sw.maxRadius);
        ctx.stroke();
      }

      // Update positions & physics with delta-time
      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Damping
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Micro wandering drift
        p.vx += (Math.random() - 0.5) * 0.03 * currentSpeed * dt;
        p.vy += (Math.random() - 0.5) * 0.03 * currentSpeed * dt;

        // Boundary wrapping
        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [mode, density, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="live-wallpaper-canvas"
      aria-hidden="true"
    />
  );
};

export default LiveWallpaperCanvas;
