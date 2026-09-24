import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useSEO } from '../hooks/useSEO';
import { Zap, Filter, ArrowUpDown, ChevronDown } from 'lucide-react';

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
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const selectedCategory = controlledCategory !== undefined ? controlledCategory : internalCategory;
  const setSelectedCategory = (cat: string, subcat: string = 'All') => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    setInternalCategory(cat);
    setSelectedSubcategory(subcat);
  };

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

  useSEO({
    title: 'Shop Electric Dirt Bikes | Surron, Talaria, Stark Future & GMX',
    description:
      'Browse genuine Surron, Talaria, Stark Future, 79Bikes, Yotsuba, and GMX electric dirt bikes for adults and kids. Free nationwide shipping, 2-year warranty, and 10% instant crypto discount.',
    canonicalPath: '/shop',
  });

  // Nested category → subcategory tree, rendered in the sidebar
  const CategoryTree = () => (
    <nav aria-label="Shop categories" className="space-y-5">
      <button
        onClick={() => setSelectedCategory('All')}
        className={`w-full text-left text-sm font-mono font-bold transition-colors cursor-pointer ${
          selectedCategory === 'All' ? 'text-emerald-400' : 'text-white hover:text-emerald-400'
        }`}
      >
        All Bikes ({PRODUCTS.length})
      </button>

      {CATEGORIES.map((cat) => {
        const isGMX = cat.name === 'GMX Australian Dirt Bikes';
        const isCategoryActive = selectedCategory === cat.name;
        const count = PRODUCTS.filter((p) => p.category === cat.name).length;

        return (
          <div key={cat.name}>
            <button
              onClick={() => setSelectedCategory(cat.name)}
              className={`w-full text-left text-sm font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                isCategoryActive
                  ? isGMX
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                  : isGMX
                    ? 'text-amber-300 hover:text-amber-200'
                    : 'text-white hover:text-emerald-400'
              }`}
            >
              {isGMX && <span>🇦🇺</span>}
              <span>{cat.name}</span>
              <span className="text-[10px] text-zinc-500 font-normal">({count})</span>
            </button>

            {cat.subcategories.length > 0 && (
              <ul className="mt-1.5 ml-3 space-y-1.5 border-l border-zinc-800 pl-3">
                {cat.subcategories.map((sub) => {
                  const isSubActive = isCategoryActive && selectedSubcategory === sub;
                  return (
                    <li key={sub}>
                      <button
                        onClick={() => setSelectedCategory(cat.name, sub)}
                        className={`text-left text-xs font-mono transition-colors cursor-pointer ${
                          isSubActive
                            ? isGMX
                              ? 'text-amber-400 font-bold'
                              : 'text-emerald-400 font-bold'
                            : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {sub}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="pb-16">
      {/* Compact Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5" />
          Authorised Australian Dealer
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mt-1">
          Shop All Electric Dirt Bikes
        </h1>
        <p className="mt-2 text-sm text-zinc-400 max-w-2xl leading-relaxed">
          {PRODUCTS.length} genuine models from Surron, Talaria, Stark Future, 79Bikes, Yotsuba, and GMX. Free nationwide shipping, 2-year warranty, and 10% instant crypto discount on every order.
        </p>
      </section>

      {/* Sidebar + Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* Mobile category toggle */}
        <button
          onClick={() => setMobileSidebarOpen((v) => !v)}
          className="lg:hidden w-full mb-4 flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-mono font-bold text-zinc-200"
        >
          <span>Categories</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileSidebarOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Sidebar */}
        <aside className={`${mobileSidebarOpen ? 'block' : 'hidden'} lg:block mb-8 lg:mb-0`}>
          <div className="lg:sticky lg:top-24 p-4 lg:p-0 rounded-xl bg-zinc-900/60 lg:bg-transparent border border-zinc-800/80 lg:border-0">
            <CategoryTree />
          </div>
        </aside>

        {/* Main Content */}
        <div className="min-w-0 space-y-6">
          {/* Sort + Badge Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
              <span className="text-zinc-400 mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3.5 h-3.5 text-zinc-400" /> Badge:
              </span>
              {['All', 'Popular', 'Best Value', 'Premium', 'New', 'Sale'].map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBadge(b)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ${
                    selectedBadge === b
                      ? 'bg-zinc-800 text-emerald-400 font-bold border border-emerald-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-mono shrink-0">
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

          {/* Active category heading */}
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-bold text-zinc-300">
              {selectedCategory === 'All' ? 'All Bikes' : selectedCategory}
              {selectedSubcategory !== 'All' && (
                <span className="text-zinc-500"> / {selectedSubcategory}</span>
              )}
            </h2>
            <span className="text-xs text-zinc-400 font-mono">
              Showing {filteredProducts.length} Models
            </span>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center rounded-3xl bg-zinc-900/30 border border-zinc-800/80 p-8 space-y-3">
              <p className="text-zinc-400 text-sm font-mono">No models match the selected filter combination.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedBadge('All');
                }}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-white text-xs font-mono hover:bg-zinc-700"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
        </div>
      </section>
    </div>
  );
};
