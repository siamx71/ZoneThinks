import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Lightbulb,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  Headphones,
  Check,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/utils/cn';

interface ProcessStep {
  step: string;
  number: string;
  title: string;
  icon: React.ElementType;
  duration: string;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    step: "01",
    number: "Phase 01",
    title: "Discovery & Architecture Strategy",
    icon: Compass,
    duration: "Week 1",
    description: "We dive deep into your business metrics, target audiences, system requirements, and technical constraints to architect the optimal project blueprint.",
    deliverables: ["Product Requirements Document (PRD)", "System Architecture Diagram", "Tech Stack Specification", "Timeline & Milestones Matrix"]
  },
  {
    step: "02",
    number: "Phase 02",
    title: "UX Research & User Journeys",
    icon: Lightbulb,
    duration: "Week 1 - 2",
    description: "Mapping customer funnels, wireframing key conversion flows, and defining information architecture to ensure intuitive navigation and maximum engagement.",
    deliverables: ["User Persona Maps", "Low-Fidelity Wireframes", "Conversion Funnel Blueprints", "Information Architecture Trees"]
  },
  {
    step: "03",
    number: "Phase 03",
    title: "High-Fidelity UI & Motion Design",
    icon: Palette,
    duration: "Week 2 - 4",
    description: "Crafting bespoke visual languages, Figma design systems, dark/light token scales, and interactive motion prototypes ready for engineering handoff.",
    deliverables: ["Complete Figma Design Tokens", "Interactive Motion Prototypes", "Custom Iconography & Assets", "Design System Sign-Off"]
  },
  {
    step: "04",
    number: "Phase 04",
    title: "Full-Stack Agile Engineering",
    icon: Code,
    duration: "Week 4 - 8",
    description: "Writing clean, modular React / Next.js code backed by resilient cloud APIs. We operate in two-week sprints with continuous live staging access.",
    deliverables: ["Component-Driven React Codebase", "REST/GraphQL Cloud APIs", "Database & Auth Infrastructure", "Private Client Staging URL"]
  },
  {
    step: "05",
    number: "Phase 05",
    title: "Quality Assurance & Speed Tuning",
    icon: CheckCircle2,
    duration: "Week 8 - 9",
    description: "Rigorous cross-browser testing, automated Playwright regression tests, security vulnerability scans, and sub-second Core Web Vitals optimization.",
    deliverables: ["Automated E2E Test Suite", "Lighthouse 95+ Score Clearance", "Cross-Browser / Mobile Validation", "Security & OWASP Audit"]
  },
  {
    step: "06",
    number: "Phase 06",
    title: "Seamless Production Launch",
    icon: Rocket,
    duration: "Launch Day",
    description: "Zero-downtime DNS cutover, CDN edge caching configuration, automated CI/CD deployment, and analytics telemetry verification.",
    deliverables: ["Zero-Downtime Deployment", "SSL & Domain Setup", "Google Analytics & Event Tracking", "Full IP & Repository Transfer"]
  },
  {
    step: "07",
    number: "Phase 07",
    title: "Continuous Evolution & Support",
    icon: Headphones,
    duration: "Ongoing",
    description: "Proactive uptime monitoring, security patching, monthly feature sprints, and dedicated Slack SLA engineering bandwidth.",
    deliverables: ["24/7 Server Health Monitoring", "Monthly Performance Audits", "Dedicated Slack Channel", "Continuous Agile Iteration"]
  }
];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <div className="w-full">
      {/* Step Navigation Pill Bar */}
      <div className="flex items-center justify-start lg:justify-between gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {steps.map((s, idx) => (
          <button
            key={s.step}
            onClick={() => setActiveStep(idx)}
            className={cn(
              'flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all shrink-0 border cursor-pointer',
              activeStep === idx
                ? 'bg-brand-cyan text-black border-cyan-400 shadow-glow-cyan'
                : 'bg-surface-raised text-text-secondary border-edge/30 hover:border-edge/60 hover:text-text-primary'
            )}
          >
            <span
              className={cn(
                'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono',
                activeStep === idx
                  ? 'bg-black text-brand-cyan'
                  : 'bg-surface-overlay text-text-secondary'
              )}
            >
              {s.step}
            </span>
            <span className="hidden sm:inline font-heading font-semibold">
              {s.title.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Icon & Stage Meta */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="w-20 h-20 rounded-3xl bg-surface-overlay border border-edge/30 flex items-center justify-center text-brand-cyan mb-6 shadow-glow-cyan">
                <IconComponent className="w-10 h-10" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider mb-2">
                <span>{current.number}</span>
                <span>•</span>
                <span>{current.duration}</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-text-primary leading-tight">
                {current.title}
              </h3>
            </div>

            {/* Right: Description & Deliverables */}
            <div className="lg:col-span-8 lg:pl-8 lg:border-l border-edge/20 flex flex-col justify-between">
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 font-normal">
                {current.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted font-mono">
                  Guaranteed Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.deliverables.map((deliv, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-surface-overlay border border-edge/20 text-xs sm:text-sm text-text-secondary"
                    >
                      <div className="p-1 rounded-full bg-brand-cyan/20 text-brand-cyan shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Steps Control Buttons */}
              <div className="mt-8 pt-6 border-t border-edge/20 flex items-center justify-between">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                  className="text-xs font-mono text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                >
                  ← Previous Phase
                </button>
                <div className="text-xs font-mono text-brand-cyan font-bold">
                  Step {activeStep + 1} of {steps.length}
                </div>
                <button
                  onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1 text-xs font-mono text-brand-cyan hover:underline transition-colors font-bold cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
