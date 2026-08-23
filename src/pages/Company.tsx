import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Users,
  Target,
  ShieldCheck,
  Zap,
  Globe2,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  HeartHandshake,
  Compass
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { ProcessTimeline } from '@/components/interactive/ProcessTimeline';
import { TeamCard } from '@/components/cards/TeamCard';
import { teamData } from '@/data/team';
import { careerPerks, openPositions } from '@/data/careers';
import { agencyData } from '@/data/agency';
import { staggerContainer, fadeIn } from '@/animations/variants';

const coreValues = [
  {
    icon: Zap,
    title: "Radical Velocity & Zero Fluff",
    desc: "We operate in continuous rapid 2-week agile sprints, deploying production-grade code with live demos rather than endless slides."
  },
  {
    icon: ShieldCheck,
    title: "Architectural Rigor",
    desc: "Strict TypeScript types, automated testing, scalable cloud microservices, and sub-second Core Web Vitals are our non-negotiable baseline."
  },
  {
    icon: Target,
    title: "Business ROI Obsession",
    desc: "We measure success not just in visual elegance, but in conversion rate increases, pipeline acceleration, and measurable revenue impact."
  },
  {
    icon: HeartHandshake,
    title: "Transparent Collaboration",
    desc: "You partner directly with senior architects and design leads—no account manager middlemen, no hidden costs, 100% IP ownership."
  }
];

export const Company: React.FC = () => {
  return (
    <div className="relative pb-24">
      <SEO
        title="Company & Culture | ZoneThinks IT"
        description="Discover ZoneThinks IT: our culture, mission, engineering values, agile delivery process, leadership team, and global career opportunities."
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
              <Building2 className="w-3.5 h-3.5" />
              <span>Our Organization & Culture</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              An Elite Digital Strike Team <span className="text-gradient-cyan">Built for Scale</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              ZoneThinks IT unites world-class software architects, design strategists, and performance engineers to build the next generation of web applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-surface-overlay/40 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                To liberate high-growth enterprises and venture-backed innovators from sluggish, bloated legacy web infrastructure by delivering hyper-performant, beautifully designed digital products that drive measurable business expansion.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/30 text-brand-purple flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
                To define the global benchmark for modern digital engineering—where cutting-edge React architectures, accessible UI systems, and sub-second performance are standard for every product we ship worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operating Values"
            title="The Standards That Define"
            highlightedText="Every Line of Code"
            subtitle="Our team lives by four core principles that ensure uncompromising software quality and client trust."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between hover:border-brand-cyan/40 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
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

      {/* Delivery Process */}
      <section className="py-16 bg-surface-overlay/30 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessTimeline />
        </div>
      </section>

      {/* Leadership & Engineering Pod Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>Leadership Pod</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary">
                Meet the Architects
              </h2>
            </div>
            <Button to="/team" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View Entire Team
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.slice(0, 3).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers & Open Roles Preview */}
      <section className="py-20 bg-surface-overlay/20 border-t border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>We're Hiring Globally</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
                  Ready to Build the Future with ZoneThinks IT?
                </h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  We are actively seeking top-tier React engineers, full-stack architects, and UI/UX designers across {openPositions.length} open remote positions.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Button to="/careers" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore {openPositions.length} Open Roles
                </Button>
                <Button to="/contact" variant="secondary" size="md">
                  Partner with Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
