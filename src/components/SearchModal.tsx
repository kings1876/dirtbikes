import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, X, Zap, ArrowRight, Truck } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return PRODUCTS.slice(0, 5);
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.specs.peakPower.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-20 bg-black/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dirt bikes (e.g. GMX, 125cc, 250cc, Crossfire, 72V, Apex)..."
            className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-zinc-500 hover:text-zinc-300 font-mono"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Chips */}
        <div className="px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/60 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-zinc-500 shrink-0">Quick Filter:</span>
          {['GMX', '70cc', '125cc', '250cc', 'Crossfire', 'ECR Electric', 'Apex 16kW', 'Storm Pro'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className={`px-2 py-0.5 rounded-md shrink-0 transition-colors cursor-pointer ${
                query.toLowerCase() === tag.toLowerCase()
                  ? 'bg-amber-500 text-black font-bold'
                  : tag.includes('GMX') || tag.includes('cc') || tag.includes('Crossfire')
                    ? 'bg-amber-950/40 text-amber-300 border border-amber-500/30 hover:bg-amber-900/50'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-zinc-900">
          <div className="text-[11px] font-mono uppercase text-zinc-400 mb-2 px-2">
            {query ? `Found ${filteredProducts.length} models matching "${query}"` : 'Popular Electric Dirt Bikes'}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="p-8 text-center text-zinc-400 text-xs font-mono">
              No electric dirt bikes found matching your criteria.
            </div>
          ) : (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="py-3 px-3 rounded-2xl hover:bg-zinc-900 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-12 rounded-xl object-cover bg-zinc-900 border border-zinc-800"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {p.name}
                    </h4>
                    <span className="text-[11px] font-mono text-zinc-400">
                      {p.category} • {p.specs.peakPower}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-xs font-bold font-mono text-emerald-400 block">
                    ${p.price.toLocaleString()} USD
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    -10% with Crypto
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
