import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  Zap, 
  Truck, 
  Coins, 
  Filter, 
  Layers, 
  Sparkles, 
  SlidersHorizontal, 
  ArrowUpDown,
  ArrowRight
} from 'lucide-react';

interface ShopViewProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onInstantOrder: (product: Product) => void;
  openChat: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const ShopView: React.FC<ShopViewProps> = ({
  onSelectProduct,
  onAddToCart,
  onInstantOrder,
  openChat,
  selectedCategory: controlledCategory,
  onSelectCategory,
}) => {
  const [internalCategory, setInternalCategory] = useState<string>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [selectedBadge, setSelectedBadge] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'power'>('featured');

  const selectedCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;
  const setSelectedCategory = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setInternalCategory(cat);
    setSelectedSubcategory('All');
  };

  // Available subcategories based on current selected category
  const activeCategoryObj = CATEGORIES.find((c) => c.name === selectedCategory);
  const availableSubcategories = activeCategoryObj ? activeCategoryObj.subcategories : [];

  // Filter products based on Category → Subcategory → Badge
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (selectedSubcategory !== 'All') {
      list = list.filter((p) => p.subcategory === selectedSubcategory);
    }

    if (selectedBadge !== 'All') {
      list = list.filter((p) => p.badge === selectedBadge);
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'power') {
      list.sort((a, b) => {
        const getNum = (str: string) => parseFloat(str) || 0;
        return getNum(b.specs.peakPower) - getNum(a.specs.peakPower);
      });
    }

    return list;
  }, [selectedCategory, selectedSubcategory, selectedBadge, sortBy]);

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-zinc-800/80 mx-4 sm:mx-6 lg:mx-8 mt-4">
        {/* Background Image with High Contrast Overlay */}
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

          {/* GMX Motorbikes Spotlight Callout */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/80 via-zinc-900/95 to-amber-950/60 border-2 border-amber-500/50 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black bg-amber-500 text-black uppercase tracking-wider">
                    🇦🇺 GMX CATALOGUE
                  </span>
                  <span className="text-sm font-mono font-bold text-amber-300">
                    GMX Motorbikes Range (gmxmotorbikes.com.au)
                  </span>
                </div>
                <p className="text-xs text-zinc-300 max-w-2xl leading-relaxed">
                  Now featured in our showroom: <strong>70cc</strong> Semi-Auto, <strong>110cc</strong> Youth, <strong>125cc Pro X</strong>, <strong>140cc</strong> Racing, <strong>250cc Enduro</strong>, and <strong>ECR Electric</strong> (3000HPU &amp; V75).
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('GMX Australian Dirt Bikes');
                  const target = document.getElementById('catalog-section');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs font-black transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0 w-full sm:w-auto"
              >
                <span>View GMX Bikes (9 Models)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Filtering Container (Category → Subcategory → Product) */}
      <section id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Brand / Series Quick Switcher */}
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5">
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                Filter By Brand &amp; Manufacturer:
              </span>
              <p className="text-xs text-zinc-400 mt-0.5">
                Quickly toggle between the complete inventory or the official GMX Australian range:
              </p>
            </div>
            <span className="text-xs text-zinc-400 font-mono">
              Total {PRODUCTS.length} Bikes in Inventory
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-zinc-800 border-zinc-500 text-white shadow-md'
                  : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold">All Bikes</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                  {PRODUCTS.length} Models
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">Complete showroom collection</p>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('GMX Australian Dirt Bikes');
              }}
              className={`p-3 rounded-xl border-2 text-left transition-all cursor-pointer ${
                selectedCategory === 'GMX Australian Dirt Bikes'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-200 shadow-lg shadow-amber-500/20 ring-1 ring-amber-500/50'
                  : 'bg-amber-950/25 border-amber-500/40 text-amber-300 hover:bg-amber-950/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black flex items-center gap-1.5 text-amber-300">
                  <span>🇦🇺</span> GMX Motorbikes
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500 text-black font-black">
                  9 Models
                </span>
              </div>
              <p className="text-[11px] text-amber-400/90 mt-1">70cc–250cc Petrol &amp; ECR Electric</p>
            </button>

            <button
              onClick={() => {
                setSelectedCategory('Adult Electric Dirt Bikes');
              }}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedCategory === 'Adult Electric Dirt Bikes' || selectedCategory === 'Youth & Childrens E-Dirt Bikes'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 shadow-md'
                  : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold flex items-center gap-1 text-emerald-400">
                  <Zap className="w-3.5 h-3.5" /> High-Torque E-Motos
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  9 Models
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">Adult Hyper, Enduro &amp; Youth</p>
            </button>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              Category Filter:
            </span>
            <span className="text-xs text-zinc-400 font-mono">
              Showing {filteredProducts.length} Models
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.name;
              const count = PRODUCTS.filter((p) => p.category === cat.name).length;
              const isGMX = cat.name === 'GMX Australian Dirt Bikes';
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? isGMX
                        ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 ring-2 ring-amber-400'
                        : 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                      : isGMX
                        ? 'bg-amber-950/40 text-amber-300 border-2 border-amber-500/60 hover:bg-amber-900/60'
                        : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {isGMX && <span>🇦🇺</span>}
                  <span>{cat.name} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategories (if a category is selected) */}
        {availableSubcategories.length > 0 && (
          <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
                Filter by Subcategory in {selectedCategory}:
              </span>
              {selectedCategory === 'GMX Australian Dirt Bikes' && (
                <span className="text-[10px] font-mono text-amber-300 font-bold bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/40 w-fit">
                  Official GMX Range • 70cc - 250cc &amp; ECR Electric
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSubcategory('All')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedSubcategory === 'All'
                    ? 'bg-zinc-200 text-zinc-950 font-bold'
                    : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                }`}
              >
                All Subcategories
              </button>
              {availableSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubcategory(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    selectedSubcategory === sub
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Category Description text */}
            <p className="text-xs text-zinc-400 leading-relaxed pt-1 border-t border-zinc-800/60 font-sans">
              {CATEGORIES.find((c) => c.name === selectedCategory)?.description}
            </p>
          </div>
        )}

        {/* Featured GMX Showcase Shelf when 'All' is selected */}
        {selectedCategory === 'All' && (
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-amber-950/30 via-zinc-900/60 to-zinc-950 border-2 border-amber-500/40 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-black bg-amber-500 text-black uppercase">
                    🇦🇺 GMX COLLECTION
                  </span>
                  <h3 className="text-base sm:text-lg font-mono font-black text-white flex items-center gap-1.5">
                    GMX Motorbikes Range (9 Products Added)
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Sourced from <span className="text-amber-300 font-mono">gmxmotorbikes.com.au/dirt-bikes</span> — 70cc kids bikes, 125cc pit bikes, 250cc enduros, and high-voltage electrics.
                </p>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('GMX Australian Dirt Bikes');
                }}
                className="text-xs font-mono font-black text-amber-400 hover:text-amber-300 flex items-center gap-1.5 shrink-0 self-start sm:self-auto cursor-pointer px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-500/40"
              >
                <span>Filter to GMX Range Only</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Showcase Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.filter((p) => p.category === 'GMX Australian Dirt Bikes').map((product) => (
                <div 
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="p-3.5 rounded-2xl bg-zinc-950 border border-amber-500/30 hover:border-amber-400 transition-all cursor-pointer group flex flex-col justify-between hover:shadow-lg hover:shadow-amber-500/10"
                >
                  <div>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500 text-black shadow-md">
                        {product.specs.peakPower}
                      </span>
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-950/90 text-amber-300 border border-amber-500/30">
                        {product.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {product.name}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 mt-1.5">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-bold text-base">
                      ${product.price.toLocaleString()}
                    </span>
                    <span className="text-amber-300 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Specs &amp; Order →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Secondary Filter & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          {/* Badge Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
            <span className="text-zinc-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-zinc-400" /> Badge:
            </span>
            {['All', 'Popular', 'Best Value', 'Premium', 'New', 'Sale'].map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBadge(b)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedBadge === b
                    ? 'bg-zinc-800 text-emerald-400 font-bold border border-emerald-500/30'
                    : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-mono">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400" />
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 focus:outline-none focus:border-emerald-500"
            >
              <option value="featured">Featured Models</option>
              <option value="power">Highest Motor Power (kW)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800/80 p-8 space-y-3">
            <p className="text-zinc-400 text-sm font-mono">No models match the selected filter combination.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedSubcategory('All');
                setSelectedBadge('All');
              }}
              className="px-4 py-2 rounded-xl bg-zinc-800 text-white text-xs font-mono hover:bg-zinc-700"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
