import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ArrowLeft,
  KeyRound
} from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';
import { Button } from '@/components/common/Button';
import { SEO } from '@/components/common/SEO';
import { NotFound } from '@/pages/NotFound';

export const AdminLogin: React.FC = () => {
  const { login, isAuthenticated, isGatewayUnlocked } = useAdmin();
  const navigate = useNavigate();

  // If accessed directly via URL bar without secret email submission, hide portal completely
  if (!isGatewayUnlocked && !isAuthenticated) {
    return <NotFound />;
  }

  const [email, setEmail] = useState('sceamhasan8@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // If already authenticated, redirect to dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      const success = login(email, password);
      setIsLoading(false);
      if (success) {
        navigate('/admin');
      } else {
        setError('Invalid admin credentials. Use your admin email and passkey.');
      }
    }, 500);
  };

  const handleFillDemo = () => {
    setEmail('sceamhasan8@gmail.com');
    setPassword('admin123');
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 relative py-12">
      <SEO
        title="Admin Portal Login | ZoneThinks IT"
        description="Secure management portal for ZoneThinks IT."
      />

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-brand-purple/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Return to Site Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-surface-raised/80 border border-edge/30 text-text-secondary hover:text-brand-cyan transition-colors backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Website</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md bg-surface-raised/90 backdrop-blur-2xl border border-edge/30 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden"
      >
        {/* Glowing Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan" />

        {/* Logo & Header */}
        <div className="text-center mb-8 pt-2">
          <div className="w-14 h-14 rounded-2xl bg-surface-overlay border border-brand-cyan/40 text-brand-cyan flex items-center justify-center mx-auto mb-4 shadow-glow-cyan">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
            Admin Control Portal
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            ZoneThinks IT Management & Order Telemetry
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-cyan" />
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@zonethinks.it"
              className="w-full px-4 py-3 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-brand-cyan" />
              Passkey / Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-10 rounded-xl bg-surface-overlay border border-edge/30 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan text-text-primary text-sm outline-none transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isLoading}
            className="w-full justify-center mt-6"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {isLoading ? 'Authenticating...' : 'Access Dashboard'}
          </Button>
        </form>

        {/* Demo Helper Pill */}
        <div className="mt-6 pt-5 border-t border-edge/20 text-center">
          <button
            type="button"
            onClick={handleFillDemo}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-brand-cyan transition-colors"
          >
            <KeyRound className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Default demo: admin@zonethinks.it / admin123</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
