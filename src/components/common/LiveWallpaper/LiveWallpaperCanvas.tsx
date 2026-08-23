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
  size: number;
  angle: number;
  spinSpeed: number;
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

// Comprehensive list of industry-standard Web Development tools & technologies
const WEB_DEV_TOOLS = [
  // Modern Frontend & Frameworks
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
  'Sass',
  // Backend & Runtimes
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
  'gRPC',
  // Databases & Cloud & DevOps
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
  'Postman',
  // Code & Architecture Tokens
  '</>',
  '{...}',
  'npm i',
  'async/await',
  '200 OK',
  'git push',
  'JSON',
  'SQL',
  'JWT',
  'OAuth 2.0',
  ':root',
  '<div>',
  'API',
  'REST',
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

    // DPI Scaling for crystal-clear retina rendering
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const isDarkMode = () => document.documentElement.classList.contains('dark');

    // Speed multiplier
    const speedMap: Record<WallpaperSpeed, number> = {
      slow: 0.5,
      normal: 1.0,
      fast: 1.8,
    };
    const currentSpeed = speedMap[speed] || 1.0;

    // Density count multiplier
    const densityMap: Record<WallpaperDensity, number> = {
      low: 0.65,
      medium: 1.0,
      ultra: 1.6,
    };
    const densityMult = densityMap[density] || 1.0;

    // Calculate particle count according to screen area
    const area = width * height;
    const baseCount = Math.floor((area / 14000) * densityMult);
    const particleCount = Math.max(36, Math.min(baseCount, 160));

    // Theme color palettes
    const getColors = () => {
      const dark = isDarkMode();
      if (dark) {
        // Dark mode untouched
        return {
          primary: 'rgba(0, 242, 254, ', // Neon Cyan
          secondary: 'rgba(139, 92, 246, ', // Electric Purple
          accent: 'rgba(59, 130, 246, ', // Cyber Blue
          glow: 'rgba(0, 242, 254, 0.5)',
          textGlyph: '#00F2FE',
          line: '0, 242, 254',
          hoverColor: '#00F2FE',
        };
      } else {
        // Light mode: High-contrast Deep Electric Sapphire & Royal Indigo for crystal-clear visibility
        return {
          primary: 'rgba(29, 78, 216, ', // Deep Sapphire Blue 700
          secondary: 'rgba(109, 40, 217, ', // Rich Royal Indigo-Purple 700
          accent: 'rgba(2, 132, 199, ', // Vibrant Sky 600
          glow: 'rgba(29, 78, 216, 0.6)',
          textGlyph: '#1E3A8A', // Blue 900 for ultra-crisp text on white
          line: '30, 64, 175', // Deep Blue 800
          hoverColor: '#1D4ED8', // Electric Sapphire 700
        };
      }
    };

    let colors = getColors();

    // Shuffled tools array to guarantee variety on both flanks
    const shuffledTools = [...WEB_DEV_TOOLS].sort(() => Math.random() - 0.5);

    // Create particles with guaranteed balanced distribution across both Left (0-50%) and Right (50-100%)
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const depth = 0.5 + Math.random() * 0.9;
      const colorScheme = [colors.primary, colors.secondary, colors.accent][i % 3];
      const baseAlpha = 0.45 + Math.random() * 0.45;
      const toolName = shuffledTools[i % shuffledTools.length];
      // Show ambient text on 50% of particles across both sides so both flanks are populated
      const showAmbientLabel = i % 2 === 0;

      // Stratified X distribution: Even indices on left half, odd indices on right half
      const isLeft = i % 2 === 0;
      const initialX = isLeft
        ? Math.random() * (width * 0.48) + 20
        : (width * 0.52) + Math.random() * (width * 0.45);

      particles.push({
        x: initialX,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.65 * depth * currentSpeed,
        vy: (Math.random() - 0.5) * 0.65 * depth * currentSpeed,
        radius: (2.0 + Math.random() * 2.2) * depth,
        baseRadius: (2.0 + Math.random() * 2.2) * depth,
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
        color: colorScheme,
        toolName,
        showAmbientLabel,
        size: Math.floor(11 + Math.random() * 3),
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.01,
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
        radius: 5,
        maxRadius: Math.min(width, height) * 0.35,
        alpha: 0.85,
        color: isDarkMode() ? 'rgba(0, 242, 254, ' : 'rgba(29, 78, 216, ',
      });

      // Apply impulsive force to nearby particles
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.hypot(dx, dy);
        if (dist < 220 && dist > 0) {
          const force = (220 - dist) / 220;
          p.vx += (dx / dist) * force * 4.5;
          p.vy += (dy / dist) * force * 4.5;
        }
      });
    };

    // Touch support for mobile live wallpaper interaction
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

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Watch dark mode class changes
    const observer = new MutationObserver(() => {
      colors = getColors();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let time = 0;

    // Helper to draw clean floating web dev tool text without any boxes or borders
    const drawFloatingText = (
      x: number,
      y: number,
      text: string,
      isHovered: boolean,
      alpha: number
    ) => {
      const dark = isDarkMode();
      const fontSize = isHovered ? 13.5 : 11;
      const fontWeight = isHovered ? '700' : '600';

      ctx.save();
      ctx.font = `${fontWeight} ${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (isHovered) {
        // High-contrast glowing hover text with vibrant neon bloom (No box / No border)
        if (dark) {
          ctx.fillStyle = '#00F2FE';
          ctx.shadowColor = '#00F2FE';
          ctx.shadowBlur = 16;
        } else {
          // Light mode: Deep Electric Sapphire Blue (100% visible and crisp on white)
          ctx.fillStyle = '#1E3A8A';
          ctx.shadowColor = 'rgba(29, 78, 216, 0.75)';
          ctx.shadowBlur = 12;
        }
        ctx.fillText(text, x, y);
      } else {
        // Ambient clean floating text (Atmospheric background so foreground text remains 100% crisp)
        if (dark) {
          ctx.fillStyle = `rgba(0, 242, 254, ${Math.min(0.85, alpha * 0.9)})`;
          ctx.shadowColor = colors.glow;
          ctx.shadowBlur = 8;
        } else {
          // Light mode: Gentle atmospheric blue background (Never obscures foreground headings/fonts)
          ctx.fillStyle = `rgba(37, 99, 235, ${Math.min(0.32, Math.max(0.18, alpha * 0.38))})`;
          ctx.shadowColor = 'rgba(37, 99, 235, 0.15)';
          ctx.shadowBlur = 4;
        }
        ctx.fillText(text, x, y);
      }
      ctx.restore();
    };

    // Main 60fps Render Loop
    const render = () => {
      time += 0.015 * currentSpeed;
      ctx.clearRect(0, 0, width, height);

      const dark = isDarkMode();

      // -------------------------------------------------------------
      // INTERACTIVE MOUSE HOVER SPOTLIGHT & ENERGY RING
      // -------------------------------------------------------------
      if (mousePos.current.active) {
        const mx = mousePos.current.x;
        const my = mousePos.current.y;

        // Vivid radial spotlight halo on hover
        const spotRadius = 240;
        const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, spotRadius);
        if (dark) {
          spotGrad.addColorStop(0, 'rgba(0, 242, 254, 0.25)');
          spotGrad.addColorStop(0.35, 'rgba(139, 92, 246, 0.15)');
          spotGrad.addColorStop(0.7, 'rgba(0, 242, 254, 0.04)');
          spotGrad.addColorStop(1, 'transparent');
        } else {
          // Light mode vibrant sapphire spotlight
          spotGrad.addColorStop(0, 'rgba(29, 78, 216, 0.22)');
          spotGrad.addColorStop(0.35, 'rgba(109, 40, 217, 0.14)');
          spotGrad.addColorStop(0.7, 'rgba(29, 78, 216, 0.04)');
          spotGrad.addColorStop(1, 'transparent');
        }

        ctx.save();
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mx, my, spotRadius, 0, Math.PI * 2);
        ctx.fill();

        // High-contrast pulsing interactive hover ring around cursor
        const pulseR = 26 + Math.sin(time * 5) * 5;
        ctx.beginPath();
        ctx.arc(mx, my, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = dark ? 'rgba(0, 242, 254, 0.85)' : 'rgba(29, 78, 216, 0.95)';
        ctx.lineWidth = 2.2;
        ctx.shadowColor = dark ? '#00F2FE' : '#1D4ED8';
        ctx.shadowBlur = 14;
        ctx.stroke();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(mx, my, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = dark ? '#00F2FE' : '#1D4ED8';
        ctx.shadowColor = dark ? '#00F2FE' : '#1D4ED8';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      }

      // -------------------------------------------------------------
      // MODE 1: CYBER SYNAPSE (Nodes, Connection Lines, Web Dev Tools)
      // -------------------------------------------------------------
      if (mode === 'synapse') {
        const maxDist = 140;
        const mouseDist = 220; // Increased radius for hover interaction

        // Draw connections between particles
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * (dark ? 0.28 : 0.38) * Math.min(p1.alpha, p2.alpha);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${colors.line}, ${alpha})`;
              ctx.lineWidth = (dark ? 0.95 : 1.15) * ((p1.depth + p2.depth) / 2);
              ctx.stroke();
            }
          }

          // HIGH VISIBILITY Connection to mouse on hover (Both Left & Right sides)
          if (mousePos.current.active) {
            const dx = p1.x - mousePos.current.x;
            const dy = p1.y - mousePos.current.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouseDist) {
              const normDist = 1 - dist / mouseDist;
              const alpha = Math.min(1.0, normDist * 1.25);

              // Vivid gradient line from particle to cursor
              const lineGrad = ctx.createLinearGradient(p1.x, p1.y, mousePos.current.x, mousePos.current.y);
              lineGrad.addColorStop(0, `${p1.color}${alpha * 0.85})`);
              lineGrad.addColorStop(1, dark ? `rgba(0, 242, 254, ${alpha})` : `rgba(29, 78, 216, ${alpha * 0.95})`);

              ctx.save();
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mousePos.current.x, mousePos.current.y);
              ctx.strokeStyle = lineGrad;
              ctx.lineWidth = (dark ? 2.0 : 2.4) * normDist + 0.8;
              ctx.shadowColor = dark ? '#00F2FE' : '#1D4ED8';
              ctx.shadowBlur = 12 * normDist;
              ctx.stroke();

              // Moving energy particle spark along the hover line
              const sparkProgress = (time * 2.5 + i * 0.2) % 1;
              const sparkX = p1.x + (mousePos.current.x - p1.x) * sparkProgress;
              const sparkY = p1.y + (mousePos.current.y - p1.y) * sparkProgress;
              ctx.beginPath();
              ctx.arc(sparkX, sparkY, 2.5, 0, Math.PI * 2);
              ctx.fillStyle = dark ? '#FFFFFF' : '#1D4ED8';
              ctx.shadowColor = dark ? '#00F2FE' : '#1D4ED8';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.restore();

              // Magnetic attraction pull towards hover position
              const pullForce = normDist * 0.045;
              p1.vx -= (dx / dist) * pullForce;
              p1.vy -= (dy / dist) * pullForce;
            }
          }
        }

        // Draw particles & Web Dev Tool Badges across both sides
        particles.forEach((p) => {
          let extraScale = 1;
          let extraAlpha = 1;
          let isNearMouse = false;

          if (mousePos.current.active) {
            const dist = Math.hypot(p.x - mousePos.current.x, p.y - mousePos.current.y);
            if (dist < 200) {
              const hoverFactor = 1 - dist / 200;
              extraScale = 1 + hoverFactor * 1.0;
              extraAlpha = 1 + hoverFactor * 0.8;
              isNearMouse = true;
            }
          }

          // If node is near mouse OR has ambient label enabled -> draw Web Dev Tool Label
          if (isNearMouse || p.showAmbientLabel) {
            drawFloatingText(p.x, p.y, p.toolName, isNearMouse, p.alpha * extraAlpha);
          } else {
            // Standard luminous particle node
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * extraScale, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${Math.min(1, p.alpha * extraAlpha)})`;
            ctx.shadowColor = colors.glow;
            ctx.shadowBlur = 6;
            ctx.fill();
          }
        });
      }

      // -------------------------------------------------------------
      // MODE 2: AURORA FLUID (Harmonic Sine Wave Ribbon Mesh)
      // -------------------------------------------------------------
      else if (mode === 'aurora') {
        const waveCount = 4;
        const points = 24;
        const sliceWidth = width / (points - 1);

        for (let w = 0; w < waveCount; w++) {
          const wavePhase = time + w * 1.8;
          const baseY = height * (0.3 + w * 0.15);
          const amplitude = 35 + w * 12;

          ctx.beginPath();
          ctx.moveTo(0, height);
          ctx.lineTo(0, baseY);

          for (let p = 0; p < points; p++) {
            const x = p * sliceWidth;
            let mouseInfluence = 0;

            if (mousePos.current.active) {
              const dx = x - mousePos.current.x;
              const dy = baseY - mousePos.current.y;
              const dist = Math.hypot(dx, dy);
              if (dist < 260) {
                mouseInfluence = Math.sin((1 - dist / 260) * Math.PI) * 65;
              }
            }

            const y =
              baseY +
              Math.sin(p * 0.35 + wavePhase) * amplitude +
              Math.cos(p * 0.2 - wavePhase * 0.7) * (amplitude * 0.5) +
              mouseInfluence;

            ctx.lineTo(x, y);
          }

          ctx.lineTo(width, height);
          ctx.closePath();

          const grad = ctx.createLinearGradient(0, baseY - amplitude, width, baseY + amplitude);
          const alphaBase = 0.10 + w * 0.04;
          grad.addColorStop(0, `${colors.primary}${alphaBase})`);
          grad.addColorStop(0.5, `${colors.secondary}${alphaBase * 1.5})`);
          grad.addColorStop(1, `${colors.accent}${alphaBase * 0.9})`);

          ctx.fillStyle = grad;
          ctx.fill();
        }

        // Ambient floating tool labels in Aurora mode
        particles.slice(0, Math.floor(particles.length * 0.6)).forEach((p) => {
          let isHovered = false;
          if (mousePos.current.active) {
            const dist = Math.hypot(p.x - mousePos.current.x, p.y - mousePos.current.y);
            if (dist < 190) isHovered = true;
          }
          drawFloatingText(p.x, p.y, p.toolName, isHovered, p.alpha * 1.1);
        });
      }

      // -------------------------------------------------------------
      // MODE 3: QUANTUM PARTICLE STORM (Vortex, Trails & Web Dev Chips)
      // -------------------------------------------------------------
      else if (mode === 'quantum') {
        particles.forEach((p) => {
          let isHovered = false;

          if (mousePos.current.active) {
            const dx = mousePos.current.x - p.x;
            const dy = mousePos.current.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 280 && dist > 10) {
              isHovered = true;
              // Tangential vortex spin + pull
              const angle = Math.atan2(dy, dx);
              const perpAngle = angle + Math.PI / 2;
              const force = (280 - dist) / 280;

              p.vx += Math.cos(perpAngle) * force * 0.4 + Math.cos(angle) * force * 0.2;
              p.vy += Math.sin(perpAngle) * force * 0.4 + Math.sin(angle) * force * 0.2;
            }
          }

          if (isHovered || p.showAmbientLabel) {
            drawFloatingText(p.x, p.y, p.toolName, isHovered, p.alpha);
          } else {
            // Quantum Particle rendering with velocity trail
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.3, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha})`;
            ctx.shadowColor = colors.glow;
            ctx.shadowBlur = 12;
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 6, p.y - p.vy * 6);
            ctx.strokeStyle = `${p.color}${p.alpha * 0.5})`;
            ctx.lineWidth = p.radius * 0.8;
            ctx.stroke();
          }
        });
      }

      // -------------------------------------------------------------
      // RENDER SHOCKWAVE RIPPLES
      // -------------------------------------------------------------
      for (let i = shockwaves.current.length - 1; i >= 0; i--) {
        const sw = shockwaves.current[i];
        sw.radius += 4.5 * currentSpeed;
        sw.alpha = Math.max(0, 0.85 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.01) {
          shockwaves.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${sw.color}${sw.alpha})`;
        ctx.lineWidth = 3.0 * (1 - sw.radius / sw.maxRadius);
        ctx.shadowColor = dark ? '#00F2FE' : '#0284C7';
        ctx.shadowBlur = 18;
        ctx.stroke();
        ctx.restore();
      }

      // -------------------------------------------------------------
      // UPDATE PARTICLE POSITIONS & PHYSICS
      // -------------------------------------------------------------
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Damping / Friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Natural wandering drift
        p.vx += (Math.random() - 0.5) * 0.04 * currentSpeed;
        p.vy += (Math.random() - 0.5) * 0.04 * currentSpeed;

        // Boundary wrapping
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;
      });

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
