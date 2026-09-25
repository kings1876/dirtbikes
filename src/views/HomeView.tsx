import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { BLOG_POSTS } from '../data/blog';
import { FAQ_ITEMS } from '../data/faq';
import { ProductCard } from '../components/ProductCard';
import { useSEO, SITE_URL } from '../hooks/useSEO';
import {
  Zap,
  Truck,
  Coins,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Baby,
  Wrench,
  Calendar,
  Clock,
  HelpCircle,
  Cpu,
  Award,
  Bike,
  Flame,
  Gauge,
  Mountain,
} from 'lucide-react';

interface HomeViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectGMX: () => void;
  onSelectCategory: (category: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Surron: Zap,
  Talaria: Gauge,
  'Stark Future': Flame,
  '79Bikes': Bike,
  Yotsuba: Users,
  Takani: Mountain,
  'Electric Balance Bikes': Baby,
  'GMX Australian Dirt Bikes': ShieldCheck,
  'Parts & Upgrades': Wrench,
};

const CATEGORY_IMAGES: Record<string, string> = {
  Surron: '/images/products/surron-light-bee-x.jpg',
  Talaria: '/images/products/talaria-sting-r-mx4.jpg',
  'Stark Future': '/images/products/stark-varg-mx-60hp.jpg',
  '79Bikes': '/images/products/79bikes-viper-s.jpg',
  Yotsuba: '/images/products/yotsuba-moto-16.jpg',
  Takani: '/images/products/takani-tk1714-70.jpg',
  'Electric Balance Bikes': '/images/products/kka-electric-balance-bike-16.jpg',
  'GMX Australian Dirt Bikes': '/images/products/gmx-v75-hyper-electric-dirt-bike.jpg',
  'Parts & Upgrades': '/images/products/rapid-supercharger-15a-72v-80v.jpg',
};

// Most product photos are centered; this one has large printed spec text near
// the top, so it's cropped to the cleaner lower half of the frame instead.
const CATEGORY_IMAGE_POSITION: Record<string, string> = {
  'Parts & Upgrades': 'object-bottom',
};

const DEALER_BENCHMARKS = [
  {
    icon: ShieldCheck,
    title: 'Authorised Australian Dealer',
    description: 'Genuine Surron, Talaria, Stark Future, and GMX stock, backed by manufacturer warranty support.',
  },
  {
    icon: Zap,
    title: 'Curated, Not Everything',
    description: 'We stock the models our own riders would buy — not every SKU a brand makes.',
  },
  {
    icon: ShieldCheck,
    title: '2-Year Factory Warranty',
    description: 'Full frame, motor, controller, and lithium pack coverage on every bike we ship — no fine print.',
  },
  {
    icon: Truck,
    title: 'Free Nationwide Freight',
    description: 'Steel-crated delivery to every address across Australia, plus a 10% instant crypto discount.',
  },
];

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onSelectGMX,
  onSelectCategory,
}) => {
  const featuredProducts = PRODUCTS.filter((p) => p.badge === 'Popular').slice(0, 6);
  const latestPosts = BLOG_POSTS.slice(0, 3);
  const previewFaqs = FAQ_ITEMS.slice(0, 6);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kanvale Dirt Bikes',
    url: `${SITE_URL}/`,
  };

  useSEO({
    title: 'Kanvale Dirt Bikes | Surron, Talaria, Stark Future & GMX Dealer',
    description:
      'Kanvale Dirt Bikes is an authorised Australian retailer of Surron, Talaria, Stark Future, and GMX electric dirt bikes. Free nationwide shipping, 2-year warranty, and 10% crypto discounts.',
    canonicalPath: '/',
    jsonLd: [organizationJsonLd],
  });

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800/80 mx-4 sm:mx-6 lg:mx-8 mt-4">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-action.jpg"
            alt="Kanvale Electric Dirt Bike Action"
            className="w-full h-full object-cover object-center opacity-50 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 sm:px-12 py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>AUTHORISED SURRON • TALARIA • STARK FUTURE • GMX DEALER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight font-sans">
            High-Performance <br />
            <span className="text-emerald-400 font-mono">Electric Dirt Bikes</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
            Kanvale is Australia's authorised retailer for the world's leading electric dirt bike brands — Surron, Talaria, Stark Future, and the local GMX range. Zero oil changes, no clutch stalling, and <strong>free nationwide freight delivery</strong>.
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
              <span>About Kanvale</span>
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

              <Link
                to="/shop"
                onClick={onSelectGMX}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-black transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 w-full sm:w-auto"
              >
                <span>View GMX Bikes (9 Models)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Authorised Dealer
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">Shop By Brand</h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Every brand we carry in one place — Surron, Talaria, Stark Future, 79Bikes, Yotsuba, GMX, and the balance bikes that start it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.name] || Zap;
            const count = PRODUCTS.filter((p) => p.category === cat.name).length;
            const isGMX = cat.name === 'GMX Australian Dirt Bikes';
            return (
              <Link
                key={cat.name}
                to="/shop"
                onClick={() => onSelectCategory(cat.name)}
                className={`relative overflow-hidden p-5 rounded-2xl border transition-all group flex flex-col min-h-[220px] ${
                  isGMX
                    ? 'border-amber-500/40 hover:border-amber-400'
                    : 'border-zinc-800/80 hover:border-emerald-500/40'
                }`}
              >
                {/* Background image + gradient overlay, same treatment as the hero */}
                <div className="absolute inset-0 z-0 bg-zinc-950">
                  <img
                    src={CATEGORY_IMAGES[cat.name]}
                    alt=""
                    aria-hidden="true"
                    className={`w-full h-full object-cover opacity-45 group-hover:opacity-55 transition-opacity duration-300 filter contrast-125 ${CATEGORY_IMAGE_POSITION[cat.name] || 'object-center'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isGMX ? 'from-amber-950/90' : 'from-zinc-950/95'} via-zinc-950/80 to-zinc-950/50`} />
                </div>

                <div className="relative z-10 flex items-start justify-between mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                      isGMX ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-emerald-500/10 border border-emerald-500/20'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isGMX ? 'text-amber-400' : 'text-emerald-400'}`} />
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isGMX ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {count} Models
                  </span>
                </div>

                <h3 className={`relative z-10 text-sm font-bold mb-1.5 ${isGMX ? 'text-amber-300' : 'text-white'}`}>
                  {isGMX ? '🇦🇺 ' : ''}
                  {cat.name}
                </h3>
                <p className="relative z-10 text-xs text-zinc-300 leading-relaxed flex-1">{cat.description}</p>

                <span
                  className={`relative z-10 mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold ${
                    isGMX ? 'text-amber-400 group-hover:text-amber-300' : 'text-emerald-400 group-hover:text-emerald-300'
                  }`}
                >
                  <span>Browse Bikes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Rider Favorites
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Featured Electric Dirt Bikes</h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Hand-picked, in-stock now — every model backed by free nationwide shipping and a 10% instant crypto discount.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300 shrink-0"
          >
            <span>Shop All Inventory ({PRODUCTS.length} Models)</span>
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

      {/* Dealer Benchmarks / Brand Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center justify-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Why Ride With Kanvale
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Real Brands. Real Warranty. Real Stock.</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We don't build these bikes — we're the Australian dealer who backs them, from checkout to warranty claim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEALER_BENCHMARKS.map((item) => (
              <div key={item.title} className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-2">
                <item.icon className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xs font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Read Our Company Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold border border-zinc-700 transition-colors"
            >
              <span>Talk to Our Dispatch Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview: Field Reports & Trail Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Rider Dispatch &amp; Trail Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Field Reports &amp; Tech Guides</h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300 shrink-0"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to="/blog"
              className="flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-all overflow-hidden group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  {post.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-1.5 leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-3 text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Rider Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Frequently Asked Questions</h2>
          </div>
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-emerald-400 hover:text-emerald-300 shrink-0"
          >
            <span>Read All FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {previewFaqs.map((faq) => (
            <Link
              key={faq.id}
              to="/faq"
              className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors flex items-start gap-3 group"
            >
              <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors leading-snug">
                {faq.question}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust Badge Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">60V–80V High-Output</p>
              <p className="text-[10px] text-zinc-400">Instant brushless torque</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">2-Year Factory Warranty</p>
              <p className="text-[10px] text-zinc-400">Frame, motor &amp; battery</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Coins className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">10% Crypto Discount</p>
              <p className="text-[10px] text-zinc-400">Pay via BTC, ETH, SOL, USDT</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Free Nationwide Shipping</p>
              <p className="text-[10px] text-zinc-400">Steel-crated freight delivery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
