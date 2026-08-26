import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  DollarSign,
  Laptop,
  BookOpen,
  Heart,
  Calendar,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  RotateCcw
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { CareerApplicationModal } from '@/components/interactive/CareerApplicationModal';
import { careerPerks, openPositions, JobPosition } from '@/data/careers';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/animations/variants';

const iconLookup: Record<string, React.ElementType> = {
  Globe,
  DollarSign,
  Laptop,
  BookOpen,
  Heart,
  Calendar
};

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDept, setActiveDept] = useState<string>('All');

  const handleApply = (job: JobPosition) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const departments = ['All', 'Engineering', 'Design', 'Product & Project'];

  const filteredPositions =
    activeDept === 'All'
      ? openPositions
      : openPositions.filter((p) => p.department.toLowerCase().includes(activeDept.toLowerCase()));

  return (
    <div className="relative pb-24">
      <SEO
        title="Careers & Open Engineering Positions | ZoneThinks IT"
        description="Join our 100% remote-first engineering pod. We're hiring senior React architects, backend engineers, UI/UX designers, and technical product managers."
      />

      {/* Application Modal */}
      <CareerApplicationModal
        isOpen={modalOpen}
        position={selectedJob}
        onClose={() => setModalOpen(false)}
      />

      {/* Hero */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-cyan mb-3 block text-center">
              // Careers & Opportunities
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              Build the Future of the Web <span className="text-gradient-cyan">With Us</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              Work alongside passionate architects who obsess over speed, typography, and clean code. 100% remote, Silicon Valley compensation, and zero unnecessary bureaucracy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Culture Grid */}
      <section className="py-16 bg-surface-overlay/40 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Perks & Culture"
            title="Engineered to Support"
            highlightedText="Your Best Work"
            subtitle="We treat our team members like elite athletes, providing the compensation, autonomy, and environment needed to excel."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPerks.map((perk, idx) => {
              const Icon = iconLookup[perk.icon] || Globe;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-overlay border border-edge/20 flex items-center justify-center text-brand-cyan mb-5 shadow-glow-cyan">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                // Active Job Openings
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-text-primary">
                Find Your Next Role
              </h2>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer',
                    activeDept === dept
                      ? 'bg-brand-cyan text-black shadow-glow-cyan font-bold'
                      : 'bg-surface-overlay text-text-secondary hover:text-text-primary border border-edge/30'
                  )}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredPositions.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-all duration-300 shadow-card-light dark:shadow-glass flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-bold">
                      {job.department}
                    </span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-secondary">{job.type}</span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-secondary">{job.location}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-text-primary">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-normal">
                    {job.overview}
                  </p>

                  <div className="text-xs font-mono text-emerald-500 dark:text-emerald-400 font-bold">
                    Salary: {job.salaryRange}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => handleApply(job)}
                    variant="primary"
                    size="md"
                    className="w-full lg:w-auto justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}

            {filteredPositions.length === 0 && (
              <div className="py-24 text-center max-w-md mx-auto space-y-4">
                <p className="text-text-secondary text-sm font-medium">
                  No open roles in "{activeDept}".
                </p>
                <button
                  onClick={() => setActiveDept('All')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-black text-xs font-heading font-bold shadow-sm cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  View All Roles
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
