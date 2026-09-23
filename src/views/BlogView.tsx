import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost } from '../types';
import { Calendar, Clock, User, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const BlogView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

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
            <div 
              onClick={() => setSelectedArticle(post)}
              className="relative aspect-[16/9] overflow-hidden bg-zinc-950 cursor-pointer"
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
            </div>

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

              <h2 
                onClick={() => setSelectedArticle(post)}
                className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer mb-3 leading-snug"
              >
                {post.title}
              </h2>

              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  {post.author}
                </span>

                <button
                  onClick={() => setSelectedArticle(post)}
                  className="text-xs font-mono font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono mt-2">
                  <span>By {selectedArticle.author}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">
                  Published by Kanvale Dirt Bikes Media
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-semibold"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
