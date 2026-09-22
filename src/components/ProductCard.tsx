import React from 'react';
import { Product } from '../types';
import { Zap, Gauge, Battery, Weight, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
}) => {
  // 10% Crypto discount rule
  const cryptoDiscount = 0.10;
  const cryptoPrice = product.price * (1 - cryptoDiscount);
  const cryptoSavings = product.price * cryptoDiscount;

  const badgeStyles: Record<string, string> = {
    Premium: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    Popular: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'Best Value': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    New: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    Sale: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  };

  return (
    <div className="group relative flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-emerald-950/20">
      {/* Top Image Container */}
      <div 
        onClick={() => onSelectProduct(product)}
        className="relative aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.badge !== 'none' && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${
                badgeStyles[product.badge] || 'bg-zinc-800 text-zinc-300'
              }`}
            >
              {product.badge}
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-zinc-950/80 text-zinc-300 border border-zinc-800 backdrop-blur-md">
            {product.subcategory}
          </span>
        </div>

        {/* Free Shipping Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
            <Truck className="w-3 h-3" />
            FREE SHIPPING
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 flex flex-col p-5">
        <div className="mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
            {product.category}
          </span>
          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer mt-0.5 line-clamp-1"
          >
            {product.name}
          </h3>
        </div>

        <p className="text-xs text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Core Specs Grid */}
        {product.specs.peakPower !== 'N/A' && (
          <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 mb-4 text-xs font-mono">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-emerald-400" /> Power
              </span>
              <span className="font-bold text-zinc-200 truncate">{product.specs.peakPower}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                <Gauge className="w-3 h-3 text-cyan-400" /> Speed
              </span>
              <span className="font-bold text-zinc-200 truncate">{product.specs.topSpeed}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                <Battery className="w-3 h-3 text-amber-400" /> Range
              </span>
              <span className="font-bold text-zinc-200 truncate">{product.specs.range.split('@')[0]}</span>
            </div>
          </div>
        )}

        {/* Pricing Block with 10% Crypto discount */}
        <div className="mt-auto pt-3 border-t border-zinc-800/80">
          <div className="flex items-baseline justify-between mb-1.5">
            <div>
              <span className="text-xs text-zinc-400 font-mono">Standard: </span>
              <span className="text-sm font-mono text-zinc-300 line-through">
                {product.originalPrice ? `$${product.originalPrice.toLocaleString()}` : ''}
              </span>
              <span className="text-base font-bold font-mono text-zinc-200 ml-1">
                ${product.price.toLocaleString()}
              </span>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
              10% Off Crypto
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">
                Crypto Pay Price:
              </span>
              <span className="text-lg font-black font-mono text-emerald-400">
                ${cryptoPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-zinc-400 block font-mono">You Save</span>
              <span className="text-xs font-mono font-bold text-emerald-300">
                -${cryptoSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectProduct(product)}
              className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onAddToCart(product)}
              className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold transition-all shadow-sm hover:shadow-emerald-500/20 cursor-pointer"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
