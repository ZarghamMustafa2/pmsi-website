import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
}) => {
  const [imageError, setImageError] = useState(false);

  // Official logo asset location: /pmsi-logo.png
  const logoSrc = '/pmsi-logo.png';

  const isLight = variant === 'light';

  return (
    <Link to="/" className={`flex items-center gap-3 sm:gap-3.5 group select-none ${className}`}>
      {!imageError ? (
        <img
          src={logoSrc}
          alt="Pakistan Minorities Support Initiative (PMSI) Logo"
          className="h-11 w-11 sm:h-12 sm:w-12 object-contain rounded-md transition-transform group-hover:scale-105 duration-300 shrink-0"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Institutional Emblem Fallback when image asset is pending upload */
        <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#12304A] to-[#167E83] border border-[#D8A85B]/40 shadow-sm transition-transform group-hover:scale-105 duration-300 shrink-0">
          <span className="font-display font-bold text-sm tracking-widest text-[#D8A85B]">
            PMSI
          </span>
          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#167E83] ring-1 ring-[#D8A85B]" />
        </div>
      )}

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-extrabold text-lg sm:text-xl tracking-wider transition-colors duration-200 ${
              isLight ? 'text-white group-hover:text-[#D8A85B]' : 'text-[#12304A] group-hover:text-[#167E83]'
            }`}
          >
            PMSI
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8A85B] bg-[#D8A85B]/15 px-1.5 py-0.5 rounded border border-[#D8A85B]/30">
            Pakistan
          </span>
        </div>
        {showSubtitle && (
          <span
            className={`text-[11px] sm:text-xs font-medium tracking-normal leading-tight transition-colors duration-200 truncate max-w-[175px] xs:max-w-[210px] sm:max-w-none ${
              isLight ? 'text-slate-200 group-hover:text-white' : 'text-slate-700'
            }`}
          >
            Pakistan Minorities Support Initiative
          </span>
        )}
      </div>
    </Link>
  );
};
