import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export const NotFoundView: React.FC = () => {
  useSEO({
    title: 'Page Not Found | Kanvale Dirt Bikes',
    description: 'The page you were looking for could not be found.',
    canonicalPath: '/404',
    noindex: true,
  });

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-5">
      <h1 className="text-2xl sm:text-3xl font-black text-white">Page Not Found</h1>
      <p className="text-sm text-zinc-400 leading-relaxed">
        The page you were looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Shop
      </Link>
    </div>
  );
};
