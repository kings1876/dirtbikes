import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BlogView: React.FC = () => {
  useSEO({
    title: 'Electric Dirt Bike Guides & Insights | Kanvale Dirt Bikes',
    description:
      'Trail regulations, youth safety, and electric powersport engineering guides for riders in Perth, Melbourne, Sydney, and across the USA.',
    canonicalPath: '/blog',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
          RIDER DISPATCH &amp; TRAIL GUIDES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-sans uppercase tracking-tight">
          Electric Dirt Bike Guides &amp; Insights
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          In-depth technical guides, trail regulations across Australia (Perth, Melbourne, Sydney) and the USA, youth safety breakdowns, and electric powersport engineering.
        </p>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            className="flex flex-col rounded-3xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden group shadow-lg"
          >
            <Link
              to={`/blog/${post.slug}`}
              className="relative aspect-[16/9] overflow-hidden bg-zinc-950 cursor-pointer block"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-zinc-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  {post.category}
                </span>
              </div>
            </Link>

            <div className="flex-1 flex flex-col p-6">
              <div className="flex items-center gap-4 text-xs text-zinc-400 font-mono mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  {post.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer mb-3 leading-snug"
              >
                {post.title}
              </Link>

              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  {post.author}
                </span>

                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-mono font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
