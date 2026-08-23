import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Zap,
  Target,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { TeamCard } from '@/components/cards/TeamCard';
import { teamData } from '@/data/team';
import { agencyData } from '@/data/agency';
import { fadeIn, staggerContainer } from '@/animations/variants';

const milestones = [
  {
    year: "2020",
    title: "Agency Genesis",
    desc: "ZoneThinks IT was founded by Alex Vance to engineer high-performance web systems for silicon-valley backed startups."
  },
  {
    year: "2022",
    title: "Enterprise Expansion",
    desc: "Scaled our engineering pod, shipping high-load fintech and healthtech applications serving over 5 million users."
  },
  {
    year: "2024",
    title: "Global Recognition",
    desc: "Awarded multiple design recognitions for groundbreaking dark-aesthetic and fluid UI systems."
  },
  {
    year: "2026",
    title: "Category Dominance",
    desc: "Now managing a global pod of elite architects delivering sub-second Next.js web applications worldwide."
  }
];

const values = [
  {
    icon: Zap,
    title: "Radical Velocity & Zero Fluff",
    desc: "We don't spend months in bloated committee meetings. We operate in rapid two-week agile sprints, shipping production-ready code with live weekly demos."
  },
  {
    icon: ShieldCheck,
    title: "Architectural Precision",
    desc: "Every line of code is strictly typed with TypeScript, tested with automated Playwright suites, and engineered for sub-second Core Web Vitals."
  },
  {
    icon: Target,
    title: "Obsession with Business ROI",
    desc: "Beauty without conversion is vanity. We design digital user funnels that directly increase pipeline velocity, average order value, and user retention."
  },
  {
    icon: Users,
    title: "Direct Access to Senior Pods",
    desc: "You never get passed off to junior account managers. You collaborate directly with principal architects and lead creative directors."
  }
];

export const About: React.FC = () => {
  return (
    <div className="relative pb-24">
      <SEO
        title="About Us | ZoneThinks IT"
        description="Learn about ZoneThinks IT, our engineering philosophy, founding story, core values, and the elite architects behind our award-winning web platforms."
      />

      {/* Hero Section */}
      <section className="pt-12 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are & What Drives Us</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              We Don’t Just Build Websites. <span className="text-gradient-cyan">We Engineer Digital Growth.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              {agencyData.description} We believe that exceptional digital products are born at the exact intersection of uncompromising engineering rigor and breathtaking visual artistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Story & Manifesto */}
      <section className="py-20 bg-surface-overlay/40 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-text-secondary leading-relaxed">
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary">
                The Agency Manifesto
              </h2>
              <p>
                The digital agency landscape is broken. For too long, companies have had to choose between slow, bloated traditional agencies that deliver sluggish templates, or cheap freelancers lacking technical architecture and security rigor.
              </p>
              <p>
                ZoneThinks IT was engineered as the antidote. We operate as an elite, high-bandwidth digital strike team. When you partner with us, you get direct access to seasoned architects who have built platforms serving tens of millions of users.
              </p>
              <p>
                We hold our work to an obsessive standard: sub-second page loads, 60 FPS micro-animations, bulletproof type safety, and conversion rates that make investors take notice.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="font-heading font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-cyan" />
                  Our Non-Negotiable Standards
                </h3>
                <div className="space-y-4">
                  {[
                    "100/100 Core Web Vitals Performance Commitment",
                    "Custom Figma Design Tokens & Component Libraries",
                    "Automated End-to-End Test Coverage (Playwright)",
                    "Zero-Downtime CI/CD Automated Pipelines",
                    "100% Unconditional IP & Codebase Ownership Transfer"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Guiding Principles"
            title="Engineered Around"
            highlightedText="Uncompromising Values"
            subtitle="The foundational philosophy that shapes every sprint, architecture diagram, and user interface we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/40 shadow-card-light dark:shadow-glass transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan mb-5 shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestone Roadmap */}
      <section className="py-20 bg-surface-overlay/30 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Evolution"
            title="A Track Record of"
            highlightedText="Continuous Innovation"
            subtitle="From our beginnings in San Francisco to powering high-scale platforms globally."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative"
              >
                <div className="font-mono font-black text-3xl text-gradient-cyan mb-2">
                  {m.year}
                </div>
                <h4 className="font-heading font-bold text-base text-text-primary mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>The Minds Behind the Code</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight leading-tight">
                Meet Our <span className="text-gradient-cyan">Leadership Team</span>
              </h2>
            </div>

            <Button
              to="/team"
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Team & Radar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.slice(0, 3).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
