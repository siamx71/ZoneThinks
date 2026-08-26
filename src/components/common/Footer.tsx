import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Instagram,
  CheckCircle2,
  Send,
  Sparkles
} from 'lucide-react';
import { agencyData } from '@/data/agency';
import { useAdmin } from '@/context/AdminContext';
import { Button } from './Button';
import { cn } from '@/utils/cn';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { unlockGateway } = useAdmin();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    // Secret Admin Portal Access Gateway (Only unlocked via this exact email submission)
    if (cleanEmail === 'sceamhasan8@gmail.com') {
      unlockGateway();
      setEmail('');
      navigate('/admin/login');
      return;
    }

    // Normal Newsletter Subscription Flow
    if (cleanEmail && cleanEmail.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const socialLinkClass = cn(
    "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
    "bg-surface-overlay border border-edge/30 text-text-muted hover:text-brand-cyan hover:border-brand-cyan/40",
    "dark:bg-white/5 dark:border-white/10 dark:text-slate-400"
  );

  const footerLinkClass = "hover:text-brand-cyan transition-colors";

  return (
    <footer className={cn(
      "relative border-t pt-20 pb-12 overflow-hidden",
      "bg-surface-raised border-edge/20",
      "dark:bg-background-card dark:border-white/10"
    )}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Massive Pre-Footer CTA Card */}
        <div className={cn(
          "relative rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 border overflow-hidden",
          "bg-gradient-to-b from-surface-overlay/90 to-surface-base/90 border-edge/20 shadow-card-light",
          "dark:from-background-surface/90 dark:to-background/90 dark:border-white/10 dark:shadow-2xl"
        )}>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <Sparkles className="w-48 h-48 text-brand-cyan" />
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Accepting New Client Engagements</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.15]">
              Ready to build something <span className="text-gradient-cyan">transformational</span>?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              Let's craft a digital product that outclasses your competitors, loads in milliseconds, and scales effortlessly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Start Your Project
              </Button>
              <Button
                to="/projects"
                variant="secondary"
                size="lg"
              >
                Explore Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b",
          "border-edge/20 dark:border-white/[0.08]"
        )}>
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl border shadow-glow-cyan",
                "bg-surface-overlay border-edge/30",
                "dark:bg-background-surface dark:border-white/10"
              )}>
                <span className="font-heading font-black text-xl text-gradient-cyan">
                  ZT
                </span>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-text-primary tracking-tight">
                  ZoneThinks<span className="text-brand-cyan">.IT</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {agencyData.description}
            </p>

            {/* Live Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All Systems Operational • Fast Turnaround</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href={agencyData.socials.github} target="_blank" rel="noreferrer" className={socialLinkClass} aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href={agencyData.socials.twitter} target="_blank" rel="noreferrer" className={socialLinkClass} aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={agencyData.socials.linkedin} target="_blank" rel="noreferrer" className={socialLinkClass} aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={agencyData.socials.dribbble} target="_blank" rel="noreferrer" className={socialLinkClass} aria-label="Dribbble">
                <Dribbble className="w-4 h-4" />
              </a>
              <a href={agencyData.socials.instagram} target="_blank" rel="noreferrer" className={socialLinkClass} aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-text-secondary font-medium">
              {['Web Development', 'Frontend & Next.js', 'Backend & Scalable APIs', 'Headless E-Commerce', 'UI/UX Design Systems', 'SaaS Product Build', 'Maintenance & Retainers'].map((s) => (
                <li key={s}>
                  <Link to="/services" className={footerLinkClass}>{s}</Link>
                </li>
              ))}
              <li>
                <Link to="/ai-assistant" className={cn(footerLinkClass, "flex items-center gap-1.5 text-brand-cyan font-bold")}>
                  <span>✨ Friday AI Consultant</span>
                  <span className="px-1.5 py-0.2 text-[9px] rounded bg-brand-cyan text-black font-mono font-bold">VOICE</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-text-primary mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-text-secondary font-medium">
              <li><Link to="/about" className={footerLinkClass}>About Us</Link></li>
              <li><Link to="/projects" className={footerLinkClass}>Our Portfolio</Link></li>
              <li><Link to="/case-studies" className={footerLinkClass}>Case Studies & ROI</Link></li>
              <li><Link to="/team" className={footerLinkClass}>Leadership & Team</Link></li>
              <li><Link to="/testimonials" className={footerLinkClass}>Client Testimonials</Link></li>
              <li>
                <Link to="/careers" className={cn(footerLinkClass, "flex items-center gap-1.5")}>
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 text-[10px] rounded bg-brand-cyan/20 text-brand-cyan font-mono font-bold">HIRING</span>
                </Link>
              </li>
              <li><Link to="/pricing" className={footerLinkClass}>Pricing & Plans</Link></li>
              <li><Link to="/faq" className={footerLinkClass}>FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-text-primary mb-4">
              Stay Ahead
            </h3>
            <p className="text-xs text-text-secondary leading-relaxed mb-4">
              Join 10,000+ tech leaders receiving our monthly breakdown of web performance, UX architecture, and tech trends.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You are subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className={cn(
                      "w-full px-3.5 py-2.5 text-xs rounded-xl border transition-all",
                      "bg-surface-overlay border-edge/30 text-text-primary placeholder:text-text-muted",
                      "focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan",
                      "dark:bg-white/5 dark:border-white/10 dark:text-white dark:placeholder-slate-500"
                    )}
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-brand-cyan text-black text-xs font-bold hover:bg-white transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-text-muted block">
                  No spam. Unsubscribe anytime with 1 click.
                </span>
              </form>
            )}

            <div className={cn(
              "mt-6 pt-4 border-t space-y-2 text-xs text-text-secondary",
              "border-edge/20 dark:border-white/10"
            )}>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <a href={`mailto:${agencyData.email}`} className="hover:text-text-primary transition-colors">
                  {agencyData.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{agencyData.address.city}, {agencyData.address.state}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} {agencyData.name}. All rights reserved. Built with precision & engineering excellence.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-text-secondary transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-text-secondary transition-colors">Terms of Service</Link>
            <Link to="/faq" className="hover:text-text-secondary transition-colors">Security Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
