import React from 'react';
import { Logo } from './Logo';
import { ActivePage, PolicyPage } from '../types';
import { 
  Truck, 
  Coins, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink,
  ChevronRight,
  AlertTriangle
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  openPolicy: (policy: PolicyPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, openPolicy }) => {
  const handlePageClick = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 text-sm">
      {/* Value Badges Banner */}
      <div className="border-b border-zinc-800/80 bg-zinc-900/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold font-mono text-sm">Free Nationwide Shipping</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Heavy-duty freight crated delivery on all electric dirt bikes.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Coins className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold font-mono text-sm">10% Instant Crypto Discount</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Save hundreds on checkout with BTC, ETH, SOL, or USDT.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold font-mono text-sm">2-Year Factory Warranty</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Full motor, frame, vector controller, &amp; cell pack coverage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Identity & History */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs leading-relaxed text-zinc-400 pr-4">
              Founded on <span className="text-zinc-200 font-semibold">25 May 2000 in Australia</span>, Kanvale Dirt Bikes pioneered electric off-road powertrains to deliver unmatched zero-RPM torque without the noise, emissions, and maintenance headaches of gas two-strokes. Now serving riders across the USA and worldwide with premium crated delivery.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Headquarters: USA Operations &amp; Australian Heritage</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>contact@kanvaledirtbikes.com</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Direct Order Desk: Open 7 Days / 24h Crypto Verification</span>
              </div>
            </div>

            {/* Accepted Crypto Badges */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                Accepted Payment Methods (-10% Discount):
              </span>
              <div className="flex flex-wrap gap-2">
                {['Bitcoin (BTC)', 'Ethereum (ETH)', 'Solana (SOL)', 'Tether (USDT)'].map((crypto) => (
                  <span
                    key={crypto}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {crypto}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation (Order: Shop, Blog, About, Contact, FAQ) */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-white tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handlePageClick('shop')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Shop E-Dirt Bikes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('blog')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Riding Blog &amp; Guides</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>About Our Heritage (2000)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Contact &amp; Support</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('faq')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-white tracking-wider mb-4">
              Policies &amp; Warranty
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => openPolicy('shipping')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Shipping &amp; Freight Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('refund')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  30-Day Return &amp; Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('privacy')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy &amp; Data Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => openPolicy('terms')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Wholesale &amp; Dealer Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Regional Footprint (Melbourne, Perth, Sydney, USA) */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-white tracking-wider mb-4">
              Regional Delivery Hubs
            </h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed mb-3">
              Serving riders with crated electric dirt bikes for sale in <strong className="text-zinc-300 font-medium">Perth WA</strong>, <strong className="text-zinc-300 font-medium">Melbourne</strong>, <strong className="text-zinc-300 font-medium">Sydney</strong>, and across all 50 states in the <strong className="text-zinc-300 font-medium">USA</strong>.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-400">
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Adult E-Motos</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Kids Mini Rippers</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">72V High Torque</span>
              <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Dual-Sport Street</span>
            </div>
          </div>
        </div>

        {/* Safety Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs text-zinc-400 flex flex-col sm:flex-row gap-3 items-start">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-[11px] leading-relaxed">
            <span className="text-zinc-300 font-semibold">Off-Road Safety &amp; Legal Compliance: </span>
            High-output electric dirt bikes are serious motorsport vehicles. Always wear a full-face DOT/ECE certified helmet, boots, chest protector, and gloves. Competition models are engineered for closed-course tracks and designated OHV trails. Verify local state and municipal ordinances regarding trail access.
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Kanvale Dirt Bikes. All rights reserved. Founded 25 May 2000.</p>
          <div className="flex items-center space-x-4 text-[11px]">
            <span>Prices in USD ($)</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">10% Crypto Discount Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
