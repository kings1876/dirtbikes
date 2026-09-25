import React, { useState } from 'react';
import { ExternalLink, Copy, Check, ShieldCheck } from 'lucide-react';

const ABN = '53 053 307 707';
const ABN_DIGITS = ABN.replace(/\s/g, '');

export const TrustBar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ABN_DIGITS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="w-full bg-zinc-950 border-b border-zinc-800/80 px-4 py-2">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Australian Registered Business:
        </span>

        <a
          href={`https://abr.business.gov.au/ABN/View?abn=${ABN_DIGITS}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/40 text-amber-400 font-bold hover:bg-amber-500/20 transition-colors"
        >
          <span>Verify on ABR</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-700/60 text-zinc-300">
          <span>
            ABN <span className="text-white font-bold">{ABN}</span>
          </span>
          <button
            onClick={handleCopy}
            aria-label="Copy ABN"
            className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </span>

        <span className="hidden sm:inline text-zinc-600">•</span>

        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" />
          Official Dealer &amp; Workshop
        </span>

        <span className="hidden sm:inline text-zinc-600">•</span>

        <span className="hidden sm:inline text-zinc-400">NSW &amp; Nationwide Crate Dispatch</span>

        <span className="hidden sm:inline text-zinc-600">•</span>

        <span className="hidden sm:inline text-amber-400 font-semibold">GST Included In All Prices</span>
      </div>
    </div>
  );
};
