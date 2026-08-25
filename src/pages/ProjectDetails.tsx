import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Globe,
  Star,
  Quote,
  TrendingUp,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { useAdmin } from '@/context/AdminContext';
import { fadeIn, staggerContainer } from '@/animations/variants';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = useAdmin();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return (
      <div className="py-32 text-center max-w-lg mx-auto px-4">
        <h2 className="font-heading font-black text-3xl text-text-primary mb-4">Project Not Found</h2>
        <p className="text-text-secondary text-sm mb-6">The case study you are looking for might have been updated or moved.</p>
        <Button to="/projects" variant="primary" size="md">Back to Portfolio</Button>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="relative pb-24">
      <SEO
        title={`${project.title} | Case Study`}
        description={project.shortDesc}
        ogImage={project.heroImage}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan">
                {project.category}
              </span>
              <span className="text-xs font-mono text-text-muted">
                {project.industry} • {project.year}
              </span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.1]">
              {project.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed font-normal">
              {project.fullOverview}
            </p>
          </div>

          {/* Project Meta Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-surface-raised border border-edge/30 text-xs font-mono shadow-card-light dark:shadow-glass">
            <div>
              <span className="text-text-muted block mb-1">CLIENT</span>
              <span className="text-text-primary font-bold text-sm">{project.client}</span>
            </div>
            <div>
              <span className="text-text-muted block mb-1">INDUSTRY</span>
              <span className="text-text-primary font-bold text-sm">{project.industry}</span>
            </div>
            <div>
              <span className="text-text-muted block mb-1">TIMELINE</span>
              <span className="text-brand-cyan font-bold text-sm">{project.timeline}</span>
            </div>
            <div>
              <span className="text-text-muted block mb-1">YEAR</span>
              <span className="text-text-primary font-bold text-sm">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Showcase Image */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-edge/30 shadow-2xl bg-surface-overlay">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-12 bg-surface-overlay/40 border-y border-edge/20 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan mb-8 text-center">
              Verified Business Impact & Key Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-surface-raised border border-edge/30 text-center flex flex-col items-center justify-center shadow-card-light dark:shadow-glass"
                >
                  <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-cyan mb-2">
                    {m.value}
                  </span>
                  <span className="font-heading font-bold text-base text-text-primary">
                    {m.label}
                  </span>
                  <span className="text-xs font-mono text-text-muted mt-1">
                    {m.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The Challenge & The Solution */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
              <span className="text-xs font-mono text-rose-500 font-bold uppercase tracking-wider block mb-2">
                01. The Problem
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-text-primary mb-4">
                The Core Challenge
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-raised border border-brand-cyan/40 shadow-card-light dark:shadow-glass relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
              <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider block mb-2">
                02. Our Engineering Strategy
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-text-primary mb-4">
                The Architected Solution
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Design Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Design Process */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl text-text-primary flex items-center gap-2">
                <Layers className="w-6 h-6 text-brand-cyan" />
                UI/UX Design Architecture
              </h3>
              <div className="space-y-3">
                {project.designProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised border border-edge/20 text-xs sm:text-sm text-text-secondary shadow-sm"
                  >
                    <span className="font-mono text-brand-cyan font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dev Process */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl text-text-primary flex items-center gap-2">
                <Cpu className="w-6 h-6 text-brand-purple" />
                Full-Stack Technical Execution
              </h3>
              <div className="space-y-3">
                {project.devProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-raised border border-edge/20 text-xs sm:text-sm text-text-secondary shadow-sm"
                  >
                    <span className="font-mono text-brand-purple font-bold">0{idx + 1}.</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Technologies */}
      <section className="py-12 bg-surface-overlay/30 border-y border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                Key Features Delivered
              </h3>
              <div className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-surface-raised border border-edge/30 text-brand-cyan shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Screenshots */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted mb-8">
              Visual System & Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-edge/30 aspect-[16/10] bg-surface-overlay shadow-card-light dark:shadow-glass"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-surface-raised border border-brand-cyan/30 shadow-card-light dark:shadow-glass text-center relative overflow-hidden">
              <Quote className="w-12 h-12 text-brand-cyan/20 mx-auto mb-6" />
              <p className="text-base sm:text-xl text-text-secondary italic leading-relaxed mb-8">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-12 h-12 rounded-full object-cover border border-edge/30"
                />
                <div className="text-left">
                  <div className="font-heading font-bold text-sm text-text-primary">
                    {project.testimonial.author}
                  </div>
                  <div className="text-xs text-text-muted">
                    {project.testimonial.role}, <span className="text-brand-cyan">{project.testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <section className="py-16 border-t border-edge/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading font-bold text-2xl text-text-primary mb-8">
            Explore More Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
