import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Github,
  Twitter,
  Linkedin,
  Dribbble,
  Award,
  Sparkles,
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { teamData } from '@/data/team';
import { useAdmin } from '@/context/AdminContext';
import { ProjectCard } from '@/components/cards/ProjectCard';

export const TeamMemberDetails: React.FC = () => {
  const { slug, id } = useParams<{ slug?: string; id?: string }>();
  const { projects } = useAdmin();
  const identifier = slug || id;

  const member = teamData.find(
    (m) => m.slug === identifier || m.id === identifier || m.id === `team-${identifier}`
  );

  if (!member) {
    return (
      <div className="py-32 text-center max-w-lg mx-auto px-4">
        <h2 className="font-heading font-black text-3xl text-text-primary mb-4">Team Member Not Found</h2>
        <p className="text-text-secondary text-sm mb-6">The profile you are looking for might have moved or is unavailable.</p>
        <Button to="/team" variant="primary" size="md">Back to Team</Button>
      </div>
    );
  }

  const memberProjects = projects.filter((p) =>
    member.featuredProjects.includes(p.slug) || member.featuredProjects.includes(p.id)
  );

  return (
    <div className="relative pb-24">
      <SEO
        title={`${member.name} - ${member.role} | ZoneThinks IT`}
        description={member.bio}
        ogImage={member.avatar}
      />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Team Members</span>
        </Link>
      </div>

      {/* Profile Overview Section */}
      <section className="pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Avatar Card & Socials */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-surface-overlay mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface-base/90 backdrop-blur-md text-brand-cyan border border-brand-cyan/30">
                      {member.department}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-text-secondary border-b border-edge/20 pb-3">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-cyan" /> Location:</span>
                    <span className="text-text-primary font-bold">{member.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-text-secondary border-b border-edge/20 pb-3">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-cyan" /> Experience:</span>
                    <span className="text-text-primary font-bold">{member.experienceYears}+ Years</span>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-2 flex items-center justify-center gap-3">
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a
                        href={member.socials.dribbble}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-surface-overlay border border-edge/30 text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors"
                        aria-label="Dribbble"
                      >
                        <Dribbble className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio, Technical Radar & Achievements */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan block mb-1">
                  {member.role}
                </span>
                <h1 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight leading-tight mb-6">
                  {member.name}
                </h1>
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
                  {member.longBio}
                </p>
              </div>

              {/* Technical Skill Matrix Radar */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand-cyan" />
                  Technical Competency & Skill Matrix
                </h3>
                <div className="space-y-4">
                  {member.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-text-primary font-semibold">{skill.name}</span>
                        <span className="text-brand-cyan font-bold">{skill.level}% Mastery</span>
                      </div>
                      <div className="h-2 bg-surface-overlay rounded-full overflow-hidden border border-edge/20">
                        <div
                          className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Achievements */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface-raised border border-edge/30 shadow-card-light dark:shadow-glass">
                <h3 className="font-heading font-bold text-xl text-text-primary mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-purple" />
                  Recognitions & Key Milestones
                </h3>
                <div className="space-y-3">
                  {member.achievements.map((achieve, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
                      <span className="w-2 h-2 rounded-full bg-brand-purple shrink-0" />
                      <span>{achieve}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA to Collaborate */}
              <div className="pt-2">
                <Button to="/contact" variant="primary" size="lg" rightIcon={<ArrowUpRight className="w-4 h-4" />}>
                  Work Directly with {member.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects by this member */}
      {memberProjects.length > 0 && (
        <section className="py-16 border-t border-edge/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-text-primary mb-8">
              Projects Architected by {member.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {memberProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
