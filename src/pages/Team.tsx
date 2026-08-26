import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, ArrowRight, Award, ShieldCheck, RotateCcw } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { TeamCard } from '@/components/cards/TeamCard';
import { Button } from '@/components/common/Button';
import { teamData } from '@/data/team';
import { cn } from '@/utils/cn';
import { staggerContainer } from '@/animations/variants';

type DepartmentFilter = 'All' | 'Leadership' | 'Engineering' | 'Design' | 'Product';

const departments: DepartmentFilter[] = ['All', 'Leadership', 'Engineering', 'Design', 'Product'];

export const Team: React.FC = () => {
  const [activeDept, setActiveDept] = useState<DepartmentFilter>('All');

  const filteredTeam =
    activeDept === 'All'
      ? teamData
      : teamData.filter((m) => m.department.toLowerCase() === activeDept.toLowerCase());

  return (
    <div className="relative pb-24">
      <SEO
        title="Our Team & Leadership | ZoneThinks IT"
        description="Meet the elite software architects, creative directors, and systems engineers building world-class web platforms at ZoneThinks IT."
      />

      {/* Hero Header */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-cyan mb-3 block">
              // Engineering & Design Talent
            </span>

            <h1 className="font-heading font-black text-4xl sm:text-6xl text-text-primary tracking-tight leading-tight">
              The Architects, Designers & <span className="text-gradient-cyan">Innovators</span>.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              We don't outsource to anonymous third parties. Every project is executed by a dedicated in-house pod of seasoned digital craftsmen.
            </p>
          </motion.div>

          {/* Department Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-heading font-semibold transition-all duration-300 cursor-pointer',
                  activeDept === dept
                    ? 'bg-brand-cyan text-black shadow-glow-cyan font-bold scale-105'
                    : 'bg-surface-overlay text-text-secondary hover:text-text-primary border border-edge/30'
                )}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredTeam.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredTeam.length === 0 && (
            <div className="py-24 text-center max-w-md mx-auto space-y-4">
              <p className="text-text-secondary text-sm font-medium">
                No team members found in "{activeDept}".
              </p>
              <button
                onClick={() => setActiveDept('All')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-cyan text-black text-xs font-heading font-bold shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card-light dark:shadow-glass">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary">
                Want to build the future of the web with us?
              </h3>
              <p className="text-text-secondary text-sm max-w-xl">
                We're always looking for brilliant frontend architects, distributed systems engineers, and UI/UX designers to join our 100% remote-first pod.
              </p>
            </div>
            <Button
              to="/careers"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View Open Roles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
