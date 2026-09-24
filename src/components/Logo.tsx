import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${className}`}>
      {/* Dynamic Geometric Electric Dirt Bike Icon */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex-shrink-0`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-4/5 h-4/5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Motocross angular tread pattern */}
          <path
            d="M8 24L14 12H26L32 24L26 32H14L8 24Z"
            stroke="#3f3f46"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* High voltage neon electric lightning bolt */}
          <path
            d="M22 6L13 22H21L17 34L29 18H21L24 6H22Z"
            fill="#10b981"
            className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          />
          <circle cx="12" cy="28" r="2" fill="#10b981" fillOpacity="0.8" />
          <circle cx="28" cy="28" r="2" fill="#10b981" fillOpacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight uppercase text-white font-mono ${textSizes[size]}`}>
            KANVALE
          </span>
          <span className={`font-extrabold uppercase text-emerald-400 font-mono tracking-wider ${textSizes[size]}`}>
            DIRT BIKES
          </span>
        </div>
        <span className="text-[10px] tracking-widest uppercase font-mono text-zinc-400 font-medium -mt-1 flex items-center gap-1.5">
          <span>HIGH-TORQUE E-MOTOS</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block"></span>
          <span className="text-zinc-400">AU DEALER</span>
        </span>
      </div>
    </div>
  );
};
