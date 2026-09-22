import React, { useState } from 'react';
import { Product } from '../types';
import { 
  X, 
  Zap, 
  Gauge, 
  Battery, 
  Weight, 
  ShieldCheck, 
  Truck, 
  Coins, 
  CheckCircle2, 
  Droplets,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onInstantOrder: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onInstantOrder,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const cryptoDiscount = 0.10;
  const cryptoPrice = product.price * (1 - cryptoDiscount);
  const cryptoSavings = product.price * cryptoDiscount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gallery View */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src={product.gallery[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500 text-zinc-950">
                  {product.badge !== 'none' ? product.badge : 'Direct Crated'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-700">
                  {product.subcategory}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {product.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                        : 'border-zinc-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Badges list */}
            <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-white">Free Nationwide Heavy Freight Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>2-Year Factory Replacement Warranty (Frame, Motor &amp; Pack)</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-emerald-400" />
                <span>Exclusive 10% Crypto Discount Applied on Checkout</span>
              </div>
            </div>
          </div>

          {/* Product Info & Specs */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                {product.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {product.name}
              </h2>
              <p className="text-xs text-zinc-400 mt-1 font-mono">
                Rider Suitability: {product.riderSuitability}
              </p>
            </div>

            {/* Pricing Box with 10% Crypto Discount */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/30 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="text-xs text-zinc-400 font-mono">List Price: </span>
                  <span className="text-sm line-through text-zinc-500 font-mono mr-2">
                    {product.originalPrice ? `$${product.originalPrice.toLocaleString()}` : ''}
                  </span>
                  <span className="text-xl font-bold font-mono text-zinc-300">
                    ${product.price.toLocaleString()} USD
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                  SAVE 10% WITH CRYPTO
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-2 border-t border-zinc-800">
                <div>
                  <span className="text-xs text-emerald-300 font-mono uppercase block">
                    Direct Crypto Order Price:
                  </span>
                  <span className="text-3xl font-black font-mono text-emerald-400">
                    ${cryptoPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-zinc-400 font-mono block">Instant Savings</span>
                  <span className="text-sm font-bold font-mono text-emerald-300">
                    -${cryptoSavings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-3">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detailed Spec Matrix */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-3">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">Power / Displacement</span>
                  <span className="text-white font-semibold">{product.specs.peakPower}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">Top Speed</span>
                  <span className="text-white font-semibold">{product.specs.topSpeed}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">
                    {product.specs.batteryWh.toLowerCase().includes('fuel') ? 'Fuel Tank & Battery' : 'Battery Capacity'}
                  </span>
                  <span className="text-white font-semibold">{product.specs.batteryWh}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">Estimated Range</span>
                  <span className="text-white font-semibold">{product.specs.range}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">
                    {product.specs.chargeTime.toLowerCase().includes('refuel') ? 'Starting / Refuel' : 'Recharge Time'}
                  </span>
                  <span className="text-white font-semibold">{product.specs.chargeTime}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                  <span className="text-zinc-400 block text-[10px]">Total Weight</span>
                  <span className="text-white font-semibold">{product.specs.weight}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 col-span-2">
                  <span className="text-zinc-400 block text-[10px]">Suspension</span>
                  <span className="text-white font-semibold">{product.specs.suspension}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 col-span-2">
                  <span className="text-zinc-400 block text-[10px]">Waterproof Rating</span>
                  <span className="text-white font-semibold">{product.specs.waterproof}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => {
                  onAddToCart(product);
                }}
                className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => {
                  onInstantOrder(product);
                  onClose();
                }}
                className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Coins className="w-4 h-4" />
                <span>Order Now (-10% Crypto)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
