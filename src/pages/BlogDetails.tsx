import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Check,
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';
import { BlogCard } from '@/components/cards/BlogCard';
import { blogPostsData } from '@/data/blogPosts';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  // Top reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const post = blogPostsData.find((p) => p.slug === slug || p.id === slug);

  if (!post) {
    return (
      <div className="py-32 text-center max-w-lg mx-auto px-4">
        <h2 className="font-heading font-black text-3xl text-text-primary mb-4">Article Not Found</h2>
        <p className="text-text-secondary text-sm mb-6">The article you are looking for might have moved or been updated.</p>
        <Button to="/blog" variant="primary" size="md">Back to Magazine</Button>
      </div>
    );
  }

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id).slice(0, 2);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative pb-24">
      <SEO
        title={`${post.title} | ZoneThinks IT`}
        description={post.excerpt}
        ogImage={post.coverImage}
      />

      {/* Top Fixed Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-brand-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center gap-3 text-xs font-mono text-text-muted mb-4">
          <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan font-semibold">
            {post.category}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-text-muted" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-text-muted" />
            <span>{post.publishedDate}</span>
          </div>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl text-text-primary tracking-tight leading-[1.15] mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-text-secondary leading-relaxed font-normal mb-8">
          {post.excerpt}
        </p>

        {/* Author Bio Header & Social Share */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-edge/20">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border border-edge/30"
            />
            <div>
              <div className="font-heading font-bold text-sm text-text-primary">
                {post.author.name}
              </div>
              <div className="text-xs text-text-muted font-mono">
                {post.author.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl bg-surface-raised border border-edge/30 text-xs font-mono text-text-secondary hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500 font-bold">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-edge/30 bg-surface-overlay shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Table of Contents */}
        {post.toc && post.toc.length > 0 && (
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-raised border border-edge/30 mb-12 shadow-card-light dark:shadow-glass">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-brand-cyan mb-4">
              Table of Contents
            </h3>
            <div className="space-y-2">
              {post.toc.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs sm:text-sm text-text-secondary hover:text-brand-cyan transition-colors"
                >
                  <span className="font-mono text-text-muted mr-2">0{idx + 1}.</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-12 text-text-secondary leading-relaxed font-normal">
          {post.content.map((sec) => (
            <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 pt-4">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-text-primary tracking-tight">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.callout && (
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-raised border-l-4 border-brand-cyan text-xs sm:text-sm text-text-primary italic my-6 shadow-sm">
                  {sec.callout}
                </div>
              )}

              {sec.codeSnippet && (
                <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono text-xs overflow-x-auto text-brand-cyan/90 my-6 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-brand-cyan" /> {sec.codeSnippet.language.toUpperCase()}</span>
                    <span className="text-emerald-400">Verified Syntax</span>
                  </div>
                  <pre className="text-slate-100">{sec.codeSnippet.code}</pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-edge/20 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-raised border border-edge/30 text-text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-edge/20">
          <h3 className="font-heading font-bold text-2xl text-text-primary mb-8">
            Recommended Reading
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
