import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { ContactForm } from '@/components/interactive/ContactForm';
import { agencyData } from '@/data/agency';
import { staggerContainer } from '@/animations/variants';

export const Contact: React.FC = () => {
  return (
    <div className="relative pb-24">
      <SEO
        title="Contact Us & Start a Project | ZoneThinks IT"
        description="Book a technical discovery consultation with our senior engineering architects. Let's engineer something exceptional."
      />

      {/* Hero */}
      <section className="pt-12 pb-16 relative">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-4xl xl:max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Initiate Your Project</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl xl:text-7xl text-text-primary tracking-tight leading-[1.1]">
              Let's Build Something <span className="text-gradient-cyan">Exceptional</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl xl:text-2xl text-text-secondary leading-relaxed font-normal max-w-3xl xl:max-w-4xl">
              Tell us about your product goals, technical specifications, and timeline. Our principal architects will review your requirements and provide an actionable architectural roadmap within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-8">
        <div className="max-w-7xl 2xl:max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            
            {/* Left Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Office Coordinates & Trust Signals */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Info Card */}
              <div className="p-6 sm:p-8 xl:p-10 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass space-y-7">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-text-primary flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
                  Direct Channels
                </h3>

                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-brand-cyan shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-text-muted font-mono text-xs block font-bold tracking-wider mb-0.5">DIRECT EMAIL</span>
                      <a href={`mailto:${agencyData.email}`} className="text-text-primary hover:text-brand-cyan font-bold transition-colors">
                        {agencyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-brand-cyan shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-text-muted font-mono text-xs block font-bold tracking-wider mb-0.5">PHONE & WHATSAPP</span>
                      <a href={`tel:${agencyData.phone}`} className="text-text-primary hover:text-brand-cyan font-bold transition-colors">
                        {agencyData.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-brand-cyan shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-text-muted font-mono text-xs block font-bold tracking-wider mb-0.5">SAN FRANCISCO STUDIO</span>
                      <span className="text-text-primary font-medium leading-relaxed block">
                        {agencyData.address.street}, {agencyData.address.city}, {agencyData.address.state} {agencyData.address.zip}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-3 rounded-xl bg-surface-overlay border border-edge/20 text-brand-cyan shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <span className="text-text-muted font-mono text-xs block font-bold tracking-wider mb-0.5">RESPONSE TIME</span>
                      <span className="text-emerald-500 dark:text-emerald-400 font-semibold font-mono text-xs sm:text-sm">
                        Within 24 Hours • Mon - Fri (PST/EST/GMT)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 sm:p-8 xl:p-10 rounded-3xl bg-surface-overlay border border-brand-cyan/20 space-y-5">
                <h4 className="font-heading font-bold text-sm sm:text-base uppercase tracking-wider text-brand-cyan">
                  The ZoneThinks IT Promise:
                </h4>
                <div className="space-y-3.5">
                  {[
                    "Mutual Non-Disclosure Agreement (NDA) signed upon request",
                    "Direct consultation with Principal Architects, not junior sales reps",
                    "Transparent line-item scope proposal with fixed timeline",
                    "100% intellectual property ownership unconditionally transferred"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
