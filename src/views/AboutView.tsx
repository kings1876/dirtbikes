import React from 'react';
import {
  Zap,
  Award,
  MapPin,
  Calendar,
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
    title: 'About Kanvale Dirt Bikes | Founded 2000',
    description:
      'Kanvale Dirt Bikes has engineered high-torque electric off-road motorcycles since 2000. Learn our history, milestones, and engineering philosophy.',
    canonicalPath: '/about',
  });

  const milestones = [
    {
      year: '25 May 2000',
      title: 'Founded in Australia',
      desc: 'Founded by competitive motocross mechanics in the Australian outback aiming to build the ultimate zero-noise electric dirt bike that would eliminate engine seizures and noise closures.'
    },
    {
      year: '2011',
      title: 'First 72V Brushless Enduro',
      desc: 'Engineered our first purpose-built 72V IPM mid-drive motor prototype with regenerative electronic braking, conquering steep red-dirt hill climbs without clutching or overheating.'
    },
    {
      year: '2018',
      title: 'Advanced Battery Thermal Architecture',
      desc: 'Patented our IP67 sealed cell casing using high-drain Samsung 21700 cylindrical cells, providing 1,500+ charge cycles and 30-second rapid hot-swap capabilities.'
    },
    {
      year: '2022',
      title: 'USA Expansion & Nationwide Freight Network',
      desc: 'Established American distribution headquarters, deploying nationwide steel-crated carrier delivery to all 50 states and international hubs.'
    },
    {
      year: '2024 - 2026',
      title: 'Next-Gen 16kW Apex & Youth Series',
      desc: 'Unveiled the flagship 16kW Apex Hyper Cross delivering 920 Nm wheel torque, alongside our safety-limited youth series and direct 10% crypto payment integration.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Brand Hero Story */}
      <section className="relative rounded-3xl bg-zinc-950 border border-zinc-800/80 p-8 sm:p-14 overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>ESTABLISHED 25 MAY 2000 • AUSTRALIAN HERITAGE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
            Born on the Outback Trails. <br />
            <span className="text-emerald-400 font-mono">Engineered for the World.</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Kanvale Dirt Bikes was founded on <strong>25 May 2000 in Australia</strong> by a dedicated collective of motocross mechanics and electrical engineers. Frustrated by expanding track closures caused by two-stroke engine noise and the relentless maintenance of gas carburetors, we set out to build something radically superior: <strong>electric dirt bikes with uncompromised torque and zero mechanical headaches</strong>.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Founded: Australia • Operations: USA</span>
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
              Forget oil changes, premix fuel mixing, valve clearances, and piston replacements. Our IP67 sealed brushless IPM motors and lithium battery packs require less than 10% of traditional maintenance.
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
            Over Two Decades of Innovation
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
