import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, HelpCircle, Search, Sparkles, Coins, Truck, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const FaqView: React.FC = () => {
  useSEO({
    title: 'Frequently Asked Questions | Kanvale Dirt Bikes',
    description:
      'Answers on free nationwide shipping, the 10% crypto discount, battery & waterproof ratings, and warranty coverage for Kanvale electric dirt bikes.',
    canonicalPath: '/faq',
    jsonLd: [faqJsonLd],
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_ITEMS[0].id);

  const categories = ['All', 'Orders & Shipping', 'Crypto & Discounts', 'Battery & Tech', 'Warranty & Maintenance'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
          KNOWLEDGE BASE &amp; FREQUENT INQUIRIES
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white font-sans uppercase tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Everything you need to know about our free nationwide shipping, 10% crypto payment discount, waterproof ratings, and battery maintenance.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-emerald-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. shipping, crypto discount, battery, waterproof)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 text-xs text-zinc-400 font-mono">
            No questions matched your search criteria. Try a different search term or check our Live Chat.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/90 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                      {faq.category}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-emerald-400' : ''
                      }`}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-300 leading-relaxed border-t border-zinc-850 bg-zinc-950/40 font-sans">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
          <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5">
            <Truck className="w-4 h-4" /> Nationwide Crated Delivery
          </span>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Free shipping on all electric dirt bikes with heavy-duty steel crate packaging and liftgate delivery.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
          <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5">
            <Coins className="w-4 h-4" /> 10% Crypto Deduction
          </span>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Instant 10% savings when paying with Bitcoin, Ethereum, Solana, or USDT on checkout.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-300 space-y-1.5">
          <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> 2-Year Direct Warranty
          </span>
          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Complete frame, IPM brushless motor, vector controller, and lithium cell pack warranty coverage.
          </p>
        </div>
      </div>
    </div>
  );
};
