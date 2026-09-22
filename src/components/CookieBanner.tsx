import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('kanvale_cookie_accepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kanvale_cookie_accepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 p-4 rounded-2xl bg-zinc-900/95 border border-zinc-700/80 shadow-2xl backdrop-blur-md text-xs text-zinc-300">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1 space-y-2">
          <p className="leading-relaxed">
            We use technical cookies to save your cart items, remember your preferred crypto payment network, and ensure secure order form verification.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Accept Cookies
            </button>
            <button
              onClick={() => setShow(false)}
              className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 text-[11px] font-mono"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-zinc-500 hover:text-zinc-300"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
