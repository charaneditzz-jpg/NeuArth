"use client";

import React from "react";

const TICKER_ITEMS = [
  "BUILDING SIMULATIONS",
  "ENERGY EFFICIENT",
  "GREEN ARCHITECTURE",
  "SUSTAINABLE DESIGN",
  "LEED • IGBC • GRIHA COMPLIANCE",
  "DATA-DRIVEN PERFORMANCE",
  "CLIMATE-RESPONSIVE ENGINEERING",
  "NET-ZERO CARBON STRATEGY",
];

export function Ticker() {
  return (
    <div className="relative w-full py-3.5 bg-white border-y border-neutral-200/80 overflow-hidden select-none z-20">
      {/* Edge gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-ticker items-center">
        {/* Track 1 */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center space-x-8">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-forest-900">
                {item}
              </span>
              <span className="text-forest-700/40 text-xs">✦</span>
            </div>
          ))}
        </div>

        {/* Track 2 for infinite seamless loop */}
        <div className="flex items-center space-x-8 shrink-0 pr-8" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center space-x-8">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-forest-900">
                {item}
              </span>
              <span className="text-forest-700/40 text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
