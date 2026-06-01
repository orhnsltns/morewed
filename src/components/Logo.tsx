/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  dark?: boolean;
}

export default function Logo({ className = '', size = 'md', dark = false }: LogoProps) {
  const sizeClasses = {
    sm: 'h-10 text-xl',
    md: 'h-16 text-3xl md:text-4xl',
    lg: 'h-24 text-5xl md:text-6xl',
    xl: 'h-36 text-7xl md:text-8xl',
  };

  // Sage and burgundy matching tones
  const sageColor = dark ? '#A8C396' : '#8EA676';
  const burgundyColor = dark ? '#9A2E3B' : '#72121C';

  return (
    <div className={`relative select-none flex items-center justify-center ${className}`} id="morewed-brand-logo">
      <svg
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-auto ${size === 'sm' ? 'h-9' : size === 'md' ? 'h-14 md:h-16' : size === 'lg' ? 'h-24 md:h-28' : 'h-32 md:h-36'}`}
      >
        {/* Background swash under the logo (green swash coming from m) */}
        <path
          d="M 50 180 C 10 180, -20 120, 20 80 C 50 50, 120 70, 160 100 C 220 140, 250 150, 280 150 C 310 150, 280 180, 250 200 C 200 230, 150 230, 110 200"
          stroke={sageColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />

        {/* Elegant green swirl swash starting under 'm' */}
        <path
          d="M 140,150 C 95,150 60,165 40,185 C 10,215 15,245 40,245 C 80,245 130,210 170,175 C 210,140 235,130 255,130 C 285,130 295,155 280,185 C 270,205 250,215 240,210 C 230,205 235,190 245,190 C 255,190 262,198 259,203"
          stroke={sageColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Text 'more': rendered in custom serif design for precision */}
        <text
          x="125"
          y="135"
          fill={sageColor}
          fontSize="115"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontWeight="600"
          letterSpacing="-4"
        >
          more
        </text>

        {/* Text 'wed': overlapped on lower tier */}
        <text
          x="305"
          y="200"
          fill={burgundyColor}
          fontSize="115"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontWeight="300"
          fontStyle="italic"
          letterSpacing="-3"
        >
          wed
        </text>

        {/* Elegant burgundy swirl swash extending from upper-right 'e' loop of more down and around 'wed' */}
        <path
          d="M 430,90 C 420,105 400,120 415,135 C 430,150 460,110 470,95 C 490,65 520,30 550,25 C 590,20 610,60 590,100 C 560,160 480,165 520,205 M 505,160 C 515,145 530,135 525,125"
          stroke={burgundyColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Little decorative dot at the end of green swash */}
        <circle cx="251" cy="201" r="5" fill={sageColor} />
      </svg>
    </div>
  );
}
