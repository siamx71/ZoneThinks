import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight, Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { cardHover } from '@/animations/variants';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative rounded-3xl bg-surface-raised border border-edge/30 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden flex flex-col shadow-card-light dark:shadow-glass"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-overlay">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        {/* Category Pill */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-surface-raised/90 backdrop-blur-md text-brand-cyan border border-edge/30 shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs font-mono text-text-muted mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-text-muted" />
              <span>{post.publishedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-text-muted" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-lg sm:text-xl text-text-primary group-hover:text-brand-cyan transition-colors mb-3 leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-text-secondary line-clamp-2 leading-relaxed mb-6 font-normal">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: Author & Read CTA */}
        <div className="pt-4 border-t border-edge/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-edge/30"
              loading="lazy"
            />
            <span className="text-xs font-semibold text-text-secondary">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-cyan hover:underline transition-colors"
          >
            <span>Read</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
