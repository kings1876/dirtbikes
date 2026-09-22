import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { SITE_URL, useSEO } from '../hooks/useSEO';
import { ProductCard } from '../components/ProductCard';
import {
  ChevronRight,
  Truck,
  ShieldCheck,
  Coins,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

interface ProductPageViewProps {
  onAddToCart: (product: Product) => void;
  onInstantOrder: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductPageView: React.FC<ProductPageViewProps> = ({
  onAddToCart,
  onInstantOrder,
  onSelectProduct,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const cryptoDiscount = 0.1;
  const cryptoPrice = product ? product.price * (1 - cryptoDiscount) : 0;
  const cryptoSavings = product ? product.price * cryptoDiscount : 0;

  const related = product
    ? PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];

  const productJsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.gallery.length ? product.gallery : [product.image],
        description: product.description,
        sku: product.id,
        category: product.category,
        brand: { '@type': 'Brand', name: 'Kanvale Dirt Bikes' },
        offers: {
          '@type': 'Offer',
          url: `${SITE_URL}/product/${product.slug}`,
          priceCurrency: 'USD',
          price: cryptoPrice.toFixed(2),
          availability: product.inStock
            ? 'https://schema.org/InStock'
            : 'https://schema.org/OutOfStock',
        },
      }
    : undefined;

  const breadcrumbJsonLd = product
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: product.category, item: `${SITE_URL}/` },
          {
            '@type': 'ListItem',
            position: 3,
            name: product.name,
            item: `${SITE_URL}/product/${product.slug}`,
          },
        ],
      }
    : undefined;

  useSEO({
    title: product
      ? `${product.name} | Kanvale Dirt Bikes`
      : 'Bike Not Found | Kanvale Dirt Bikes',
    description: product
      ? product.description.length > 155
        ? `${product.description.slice(0, 152)}...`
        : product.description
      : 'This electric dirt bike model could not be found in our showroom.',
    canonicalPath: `/product/${slug ?? ''}`,
    image: product?.image,
    jsonLd: product ? [productJsonLd!, breadcrumbJsonLd!] : undefined,
    noindex: !product,
  });

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-5">
        <h1 className="text-2xl sm:text-3xl font-black text-white">Bike Not Found</h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          We couldn't find that model in our showroom. It may have been discontinued, or the link you followed is
          incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 text-sm font-bold hover:bg-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumbs (crawlable internal links) */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 flex-wrap">
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/" className="hover:text-emerald-400 transition-colors">
          Shop
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-300">{product.category}</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-zinc-200 font-semibold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery */}
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
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

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

        {/* Info & Specs */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">{product.name}</h1>
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
                  $
                  {cryptoPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-400 font-mono block">Instant Savings</span>
                <span className="text-sm font-bold font-mono text-emerald-300">
                  -$
                  {cryptoSavings.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed mb-6">{product.description}</p>

          {/* Key Features */}
          <div className="mb-6">
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-3">
              Key Engineering Highlights
            </h2>
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
            <h2 className="text-xs font-mono uppercase font-bold text-zinc-400 tracking-wider mb-3">
              Technical Specifications
            </h2>
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
                  {product.specs.batteryWh.toLowerCase().includes('fuel')
                    ? 'Fuel Tank & Battery'
                    : 'Battery Capacity'}
                </span>
                <span className="text-white font-semibold">{product.specs.batteryWh}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                <span className="text-zinc-400 block text-[10px]">Estimated Range</span>
                <span className="text-white font-semibold">{product.specs.range}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                <span className="text-zinc-400 block text-[10px]">
                  {product.specs.chargeTime.toLowerCase().includes('refuel')
                    ? 'Starting / Refuel'
                    : 'Recharge Time'}
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
                <span className="text-zinc-400 block text-[10px]">Brakes</span>
                <span className="text-white font-semibold">{product.specs.brakes}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80 col-span-2">
                <span className="text-zinc-400 block text-[10px]">Frame</span>
                <span className="text-white font-semibold">{product.specs.frame}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                <span className="text-zinc-400 block text-[10px]">Max Load</span>
                <span className="text-white font-semibold">{product.specs.maxLoad}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800/80">
                <span className="text-zinc-400 block text-[10px]">Waterproof Rating</span>
                <span className="text-white font-semibold">{product.specs.waterproof}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto pt-4 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={() => onAddToCart(product)}
              className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold border border-zinc-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => onInstantOrder(product)}
              className="py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Coins className="w-4 h-4" />
              <span>Order Now (-10% Crypto)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products (internal linking for SEO) */}
      {related.length > 0 && (
        <section className="pt-10 border-t border-zinc-800/80 space-y-4">
          <h2 className="text-xl font-black text-white">More in {product.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onSelectProduct={onSelectProduct} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
