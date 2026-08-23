import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Twitter, Linkedin, Dribbble } from 'lucide-react';
import { TeamMember } from '@/data/team';
import { cardHover } from '@/animations/variants';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden flex flex-col shadow-card-light dark:shadow-glass"
    >
      {/* Avatar Container */}
      <div className="relative aspect-square overflow-hidden bg-surface-overlay">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter grayscale-[20%] group-hover:grayscale-0"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        {/* Department Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-surface-raised/90 backdrop-blur-md text-brand-cyan border border-edge/30 shadow-sm">
            {member.department}
          </span>
        </div>

        {/* Floating Social Links on Hover */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-surface-raised/95 text-text-secondary hover:text-brand-cyan border border-edge/30 backdrop-blur-md transition-colors"
              aria-label={`${member.name} GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-surface-raised/95 text-text-secondary hover:text-brand-cyan border border-edge/30 backdrop-blur-md transition-colors"
              aria-label={`${member.name} Twitter`}
            >
              <Twitter className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-surface-raised/95 text-text-secondary hover:text-brand-cyan border border-edge/30 backdrop-blur-md transition-colors"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {member.socials.dribbble && (
            <a
              href={member.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-surface-raised/95 text-text-secondary hover:text-brand-cyan border border-edge/30 backdrop-blur-md transition-colors"
              aria-label={`${member.name} Dribbble`}
            >
              <Dribbble className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Member Details */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-heading font-extrabold text-xl text-text-primary group-hover:text-brand-cyan transition-colors">
              {member.name}
            </h3>
            <span className="text-xs font-mono text-text-muted font-semibold">
              {member.experienceYears}+ yrs exp
            </span>
          </div>

          <p className="text-xs font-mono text-brand-cyan font-bold mb-3">
            {member.role}
          </p>

          <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed mb-5 font-normal">
            {member.bio}
          </p>

          {/* Top Skill Bars */}
          <div className="space-y-2 mb-6">
            {member.skills.slice(0, 2).map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-text-muted">
                  <span>{skill.name}</span>
                  <span className="text-brand-cyan font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-surface-overlay rounded-full overflow-hidden border border-edge/20">
                  <div
                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Profile Link */}
        <div className="pt-4 border-t border-edge/20">
          <Link
            to={`/team/${member.slug}`}
            className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-text-primary hover:text-brand-cyan transition-colors"
          >
            <span>View Full Profile & Radar</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
