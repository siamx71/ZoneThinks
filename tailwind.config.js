/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ---------- Semantic surface tokens (light = default, dark overrides via CSS vars) ----------
        surface: {
          base:    'rgb(var(--surface-base) / <alpha-value>)',
          raised:  'rgb(var(--surface-raised) / <alpha-value>)',
          overlay: 'rgb(var(--surface-overlay) / <alpha-value>)',
          subtle:  'rgb(var(--surface-subtle) / <alpha-value>)',
        },
        // Legacy dark-only palette kept for backwards-compat with existing components
        background: {
          DEFAULT: '#08090C',
          card:    '#0E1117',
          surface: '#141824',
          subtle:  '#1C2132',
        },
        text: {
          primary:   'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          tertiary:  'rgb(var(--text-tertiary) / <alpha-value>)',
          muted:     'rgb(var(--text-muted) / <alpha-value>)',
        },
        edge: {
          DEFAULT: 'rgb(var(--edge) / <alpha-value>)',
          subtle:  'rgb(var(--edge-subtle) / <alpha-value>)',
          strong:  'rgb(var(--edge-strong) / <alpha-value>)',
        },
        // Brand accent colours — identical in both themes
        brand: {
          cyan:    '#00F2FE',
          blue:    '#4FACFE',
          purple:  '#8B5CF6',
          violet:  '#6366F1',
          emerald: '#10B981',
          rose:    '#F43F5E',
          amber:   '#F59E0B',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow:   'rgba(0, 242, 254, 0.3)',
          purple: 'rgba(139, 92, 246, 0.3)',
        }
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh':       'radial-gradient(at 100% 0%, rgba(0, 242, 254, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)',
        'glow-conic':      'conic-gradient(from 180deg at 50% 50%, #00F2FE 0deg, #8B5CF6 180deg, #00F2FE 360deg)',
      },
      boxShadow: {
        'glow-cyan':   '0 0 25px -5px rgba(0, 242, 254, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'glow-emerald':'0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glass':       '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-light':  '0 4px 24px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
      },
      animation: {
        'marquee':       'marquee 25s linear infinite',
        'marquee-slow':  'marquee 40s linear infinite',
        'pulse-glow':    'pulseGlow 3s ease-in-out infinite',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 9s ease-in-out infinite',
        'spin-slow':     'spin 20s linear infinite',
        'shimmer':       'shimmer 1.5s infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%':      { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
