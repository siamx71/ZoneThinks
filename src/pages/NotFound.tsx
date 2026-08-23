import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, Sparkles, FolderGit2 } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center relative px-4 py-20">
      <SEO
        title="404 - Page Not Found | ZoneThinks IT"
        description="Looks like this page took a wrong turn in hyperspace."
      />

      {/* Ambient Glow */}
      <div className="absolute w-96 h-96 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-xl text-center flex flex-col items-center space-y-6">
        {/* Animated 404 Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center justify-center"
        >
          <span className="font-heading font-black text-8xl sm:text-9xl text-gradient-cyan select-none tracking-tighter">
            404
          </span>
        </motion.div>

        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-text-primary">
            Lost in Hyperspace?
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-md leading-relaxed">
            The page you are looking for does not exist or has been refactored into a higher state of digital reality.
          </p>
        </div>

        {/* Quick Return Actions */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            to="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Back to Homepage
          </Button>

          <Button
            to="/projects"
            variant="secondary"
            size="md"
            leftIcon={<FolderGit2 className="w-4 h-4" />}
          >
            Explore Projects
          </Button>
        </div>

        {/* Direct Links */}
        <div className="pt-8 border-t border-edge/20 w-full flex flex-wrap justify-center gap-4 text-xs font-mono text-text-muted">
          <Link to="/services" className="hover:text-brand-cyan transition-colors">
            Services
          </Link>
          <span>•</span>
          <Link to="/company" className="hover:text-brand-cyan transition-colors">
            Company
          </Link>
          <span>•</span>
          <Link to="/case-studies" className="hover:text-brand-cyan transition-colors">
            Case Studies
          </Link>
          <span>•</span>
          <Link to="/pricing" className="hover:text-brand-cyan transition-colors">
            Pricing
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-brand-cyan transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
