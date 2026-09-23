import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useSEO, SITE_URL } from '../hooks/useSEO';
import {
  Zap,
  Truck,
  Coins,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  MessageCircleQuestion,
} from 'lucide-react';

interface HomeViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectGMX: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectProduct, onAddToCart, onSelectGMX }) => {
  const featuredProducts = PRODUCTS.filter((p) => p.badge === 'Popular').slice(0, 6);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kanvale Dirt Bikes',
    url: `${SITE_URL}/`,
  };

  useSEO({
    title: 'Kanvale Dirt Bikes | High-Performance Electric Dirt Bikes',
    description:
      'Kanvale Dirt Bikes offers high-performance electric dirt bikes for adults and kids. Instant electric torque, zero emissions, free nationwide shipping, and 10% crypto discounts.',
    canonicalPath: '/',
    jsonLd: [organizationJsonLd],
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800/80 mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1920&q=80"
            alt="Kanvale Electric Dirt Bike Action"
            className="w-full h-full object-cover object-center opacity-35 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>PURE ELECTRIC TORQUE • ZERO EMISSIONS • INSTANT ACCELERATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight font-sans">
            High-Performance <br />
            <span className="text-emerald-400 font-mono">Electric Dirt Bikes</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Engineered since 2000 to crush steep climbs and technical singletracks in complete silence. Experience 900+ Nm of instant wheel torque with zero oil changes, no clutch stalling, and <strong>free nationwide freight delivery</strong>.
          </p>

          {/* Quick Perks Pill Row */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-700/60 text-zinc-200 backdrop-blur-md">
              <Truck className="w-4 h-4 text-emerald-400" />
              Free Nationwide Shipping
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 font-bold backdrop-blur-md">
              <Coins className="w-4 h-4 text-emerald-400" />
              10% Instant Crypto Discount
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-700/60 text-zinc-200 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              2-Year Factory Warranty
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-sm font-black transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Shop All Electric Dirt Bikes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 text-sm font-bold border border-zinc-700/60 backdrop-blur-md transition-colors"
            >
              <span>Our Story Since 2000</span>
            </Link>
          </div>

          {/* GMX Motorbikes Spotlight Callout */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/80 via-zinc-900/95 to-amber-950/60 border-2 border-amber-500/50 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black bg-amber-500 text-black uppercase tracking-wider">
                    🇦🇺 GMX CATALOGUE
                  </span>
                  <span className="text-sm font-mono font-bold text-amber-300">GMX Motorbikes Range</span>
                </div>
                <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
                  Now featured in our showroom: <strong>70cc</strong> Semi-Auto, <strong>110cc</strong> Youth, <strong>125cc Pro X</strong>, <strong>140cc</strong> Racing, <strong>250cc Enduro</strong>, and <strong>ECR Electric</strong> (3000HPU &amp; V75).
                </p>
              </div>

              <button
                onClick={onSelectGMX}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-black transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 w-full sm:w-auto"
              >
                <span>View GMX Bikes (9 Models)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Rider Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Most Popular Models</h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300"
          >
            <span>View Full Shop (18 Models)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Trust / Explore Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">2-Year Factory Warranty</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Full frame, motor, controller, and battery pack coverage on every bike we ship.
            </p>
          </div>

          <Link
            to="/blog"
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3 hover:border-emerald-500/40 transition-colors group"
          >
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Rider Dispatch &amp; Trail Guides
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Trail regulations, safety breakdowns, and engineering deep-dives for Australia and the USA.
            </p>
          </Link>

          <Link
            to="/faq"
            className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-3 hover:border-emerald-500/40 transition-colors group"
          >
            <MessageCircleQuestion className="w-6 h-6 text-emerald-400" />
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Questions Before You Order?
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Shipping, crypto discounts, battery range, and warranty — answered in our FAQ.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};
