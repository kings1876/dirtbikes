import React from 'react';
import {
  Zap,
  Award,
  MapPin,
  ShieldCheck,
  Truck,
  Coins,
  CheckCircle2,
  Cpu,
  Flame,
  ArrowRight
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

interface AboutViewProps {
  onExploreShop: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreShop }) => {
  useSEO({
    title: 'About Kanvale Dirt Bikes | Authorised Australian Dealer',
    description:
      'Kanvale Dirt Bikes is an authorised Australian retailer of Surron, Talaria, Stark Future, and GMX electric dirt bikes. Learn who we are and what we stand behind.',
    canonicalPath: '/about',
  });

  const milestones = [
    {
      year: 'Founding',
      title: 'Started by Riders, for Riders',
      desc: 'Kanvale was founded to give Australian riders direct, hassle-free access to the electric dirt bikes actually worth riding — instead of chasing grey-market imports with no local support.'
    },
    {
      year: 'Dealer Network',
      title: 'Authorised Surron & Talaria Partner',
      desc: 'We became an authorised Australian dealer for Surron and Talaria, giving customers manufacturer-backed warranty support instead of parallel-import guesswork.'
    },
    {
      year: 'Expansion',
      title: 'Stark Future & GMX Added',
      desc: 'Extended the range to include the Stark Future VARG for competitive riders and the locally-focused GMX lineup for petrol and budget-electric buyers.'
    },
    {
      year: 'Logistics',
      title: 'Nationwide Freight Network',
      desc: 'Built out steel-crated freight delivery to every address across Australia, so riders outside major cities get the same service as those next door.'
    },
    {
      year: 'Today',
      title: 'Curated, Not Everything',
      desc: 'We deliberately stock a curated lineup across Surron, Talaria, Stark Future, 79Bikes, Yotsuba, and GMX — the models we\'d actually recommend, not every SKU a brand makes.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Brand Hero Story */}
      <section className="relative rounded-3xl bg-zinc-950 border border-zinc-800/80 p-8 sm:p-14 overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AUTHORISED AUSTRALIAN DEALER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            We Don't Build These Bikes. <br />
            <span className="text-emerald-400 font-mono">We Back Them.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Kanvale Dirt Bikes is an <strong>authorised Australian retailer</strong> for Surron, Talaria, Stark Future, 79Bikes, and Yotsuba, alongside the locally-focused GMX range. We didn't set out to manufacture electric dirt bikes — we set out to be the dealer that gets them right: genuine stock, real manufacturer warranty support, and a team that actually rides what it sells.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Australian Dealer • Nationwide Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Nationwide Heavy Crated Shipping</span>
            </div>
          </div>
        </div>

        {/* Decorative Grid Accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none hidden lg:block" />
      </section>

      {/* What Makes Kanvale Different */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            THE KANVALE ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-sans uppercase">
            Why Riders Choose Kanvale
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Compare the ownership experience between a traditional combustion bike and a modern high-torque electric dirt bike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Instant 900+ Nm Wheel Torque
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              No clutch stalling, no gear shifting, and zero turbo lag. Maximum torque hits immediately from 0 RPM, allowing you to launch out of deep berms and crawl up steep rock faces with absolute throttle precision.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Zero Weekend Engine Rebuilds
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Forget oil changes, premix fuel mixing, valve clearances, and piston replacements. The sealed brushless motors and lithium battery packs across our range require a fraction of traditional maintenance.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white font-mono uppercase">
              Direct 10% Crypto Savings
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We cut out credit card merchant fee markups and bank interchange friction, passing an immediate 10% discount to our riders on all bikes paid via BTC, ETH, SOL, or USDT.
            </p>
          </div>
        </div>
      </section>

      {/* Key Milestones Timeline */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            OUR TIMELINE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white font-sans uppercase">
            How We Got Here
          </h2>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:bg-emerald-400 transition-colors" />

              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/70 hover:border-zinc-700 transition-colors">
                <span className="text-xs font-mono font-bold text-emerald-400 block mb-1">
                  {m.year}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{m.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-zinc-950 border border-emerald-500/40 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black text-white font-mono uppercase">
            Ready to Ride the Future of Dirt Bikes?
          </h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-xl">
            Choose your model today. Enjoy free nationwide freight delivery and take 10% off instantly when ordering with crypto.
          </p>
        </div>

        <button
          onClick={onExploreShop}
          className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black font-mono uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2 cursor-pointer flex-shrink-0"
        >
          <span>Explore All E-Dirt Bikes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
