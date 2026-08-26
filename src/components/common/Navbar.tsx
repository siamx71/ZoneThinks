import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/utils/cn';
import { useTheme } from '@/context/ThemeContext';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  dropdown?: { label: string; href: string; desc?: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Friday', href: '/ai-assistant' },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Company',
    href: '/company',
    dropdown: [
      { label: 'Company Overview', href: '/company', desc: 'Our organization, mission & culture' },
      { label: 'About Us', href: '/about', desc: 'Founding story & manifesto' },
      { label: 'Our Team', href: '/team', desc: 'Meet the architects & designers' },
      { label: 'Careers', href: '/careers', desc: 'Join our global engineering pod' },
      { label: 'FAQ', href: '/faq', desc: 'Common questions & process details' },
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-surface-raised/90 backdrop-blur-xl border-b border-edge/20 py-3.5 shadow-card-light dark:shadow-glass dark:border-white/[0.08]'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative w-10 h-10 flex items-center justify-center rounded-xl border transition-colors shadow-glow-cyan",
            "bg-surface-overlay border-edge/30 group-hover:border-brand-cyan/50",
            "dark:bg-background-surface dark:border-white/10"
          )}>
            <span className="font-heading font-black text-xl text-gradient-cyan">
              ZT
            </span>
            <div className="absolute inset-0 rounded-xl bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-heading font-extrabold text-lg tracking-tight leading-none group-hover:text-brand-cyan transition-colors",
              "text-text-primary"
            )}>
              ZoneThinks<span className="text-brand-cyan">.IT</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase leading-tight mt-0.5">
              Digital Agency
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={cn(
          "hidden lg:flex items-center gap-1 backdrop-blur-md px-3 py-1.5 rounded-full border",
          "bg-surface-overlay/60 border-edge/20",
          "dark:bg-background-surface/60 dark:border-white/[0.06]"
        )}>
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.href) ||
                  (item.dropdown && item.dropdown.some((sub) => location.pathname.startsWith(sub.href)));

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors font-heading tracking-wide',
                      isActive || activeDropdown === item.label
                        ? 'text-sky-700 bg-sky-100/80 dark:text-brand-cyan dark:bg-brand-cyan/10'
                        : 'text-slate-800 hover:text-sky-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  {/* Dropdown Menu - 100% Opaque Solid Card for Total Contrast */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          "absolute top-full left-0 mt-2 w-64 rounded-2xl border shadow-2xl p-2.5 z-50",
                          "bg-white border-slate-200/90 shadow-slate-900/15",
                          "dark:bg-[#0E1117] dark:border-white/15 dark:shadow-black/60"
                        )}
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block p-2.5 rounded-xl hover:bg-slate-100/90 dark:hover:bg-white/10 transition-colors group/sub"
                          >
                            <div className="font-heading font-bold text-xs text-slate-900 group-hover/sub:text-sky-600 dark:text-slate-100 dark:group-hover/sub:text-brand-cyan">
                              {sub.label}
                            </div>
                            {sub.desc && (
                              <div className="text-[11px] text-slate-600 mt-0.5 font-medium dark:text-slate-400">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors font-heading tracking-wide flex items-center gap-1.5',
                  isActive
                    ? 'text-brand-cyan bg-brand-cyan/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle/50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5'
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-brand-cyan text-black font-bold uppercase tracking-wider shadow-glow-cyan">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button, Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <motion.button
            id="theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            className={cn(
              "relative p-2.5 rounded-xl border transition-all duration-200 cursor-pointer",
              "bg-surface-overlay border-edge/30 text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40",
              "dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:text-brand-cyan dark:hover:border-brand-cyan/40"
            )}
            aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Moon className="w-4 h-4 text-slate-700" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Start a Project
          </Button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl border",
              "bg-surface-overlay border-edge/30 text-text-secondary hover:text-text-primary",
              "dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:text-white dark:hover:bg-white/10"
            )}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "lg:hidden backdrop-blur-2xl border-b px-4 pt-4 pb-6 overflow-hidden",
              "bg-surface-raised/98 border-edge/20",
              "dark:bg-background-card/98 dark:border-white/10 dark:shadow-2xl"
            )}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.label} className="py-1">
                      <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan/80">
                        {item.label}
                      </div>
                      <div className={cn(
                        "pl-3 flex flex-col gap-1 mt-1 border-l ml-3",
                        "border-edge/30 dark:border-white/10"
                      )}>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className={cn(
                              "px-3 py-2 text-sm rounded-lg transition-colors",
                              "text-text-secondary hover:text-brand-cyan hover:bg-surface-subtle/50",
                              "dark:text-slate-300 dark:hover:text-brand-cyan dark:hover:bg-white/5"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const isActive =
                  item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between',
                      isActive
                        ? 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30'
                        : 'text-text-secondary hover:bg-surface-subtle/50 dark:text-slate-200 dark:hover:bg-white/5'
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-brand-cyan text-black font-bold uppercase">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    {isActive && <Sparkles className="w-4 h-4 text-brand-cyan" />}
                  </Link>
                );
              })}

              <div className={cn(
                "pt-4 mt-2 border-t",
                "border-edge/20 dark:border-white/10"
              )}>
                <Button
                  to="/contact"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
