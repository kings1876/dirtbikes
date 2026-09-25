import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blog';
import { SITE_URL, useSEO } from '../hooks/useSEO';
import { Calendar, Clock, User, ChevronRight, ArrowLeft } from 'lucide-react';

export const BlogPostView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const related = post
    ? BLOG_POSTS.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)
    : [];

  const articleJsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: [post.image],
        datePublished: post.date,
        author: { '@type': 'Person', name: post.author },
        publisher: { '@type': 'Organization', name: 'Kanvale Dirt Bikes' },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        description: post.excerpt,
      }
    : undefined;

  const breadcrumbJsonLd = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      }
    : undefined;

  useSEO({
    title: post ? `${post.title} | Kanvale Dirt Bikes` : 'Article Not Found | Kanvale Dirt Bikes',
    description: post
      ? post.excerpt.length > 155
        ? `${post.excerpt.slice(0, 152)}...`
        : post.excerpt
      : 'This article could not be found.',
    canonicalPath: `/blog/${slug ?? ''}`,
    image: post?.image,
    jsonLd: post ? [articleJsonLd!, breadcrumbJsonLd!] : undefined,
    noindex: !post,
  });

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-5">
        <h1 className="text-2xl sm:text-3xl font-black text-white">Article Not Found</h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          We couldn't find that article. It may have been moved, or the link you followed is incorrect.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumbs (crawlable internal links) */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 flex-wrap">
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/blog" className="hover:text-emerald-400 transition-colors">
          Blog
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-200 font-semibold">{post.title}</span>
      </nav>

      <div className="space-y-6">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white mt-3 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 font-mono mt-3">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-800 flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs text-zinc-400 font-mono">Published by Kanvale Dirt Bikes Media</span>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-mono font-semibold border border-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>
        </div>
      </div>

      {/* Related Articles (internal linking for SEO) */}
      {related.length > 0 && (
        <section className="pt-10 border-t border-zinc-800/80 space-y-4">
          <h2 className="text-xl font-black text-white">More in {post.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all overflow-hidden group"
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
