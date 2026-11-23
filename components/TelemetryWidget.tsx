"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Sun, Shield, Leaf, RefreshCw, BarChart3 } from "lucide-react";

export function TelemetryWidget() {
  const [area, setArea] = useState(50000); // sq ft
  const [buildingType, setBuildingType] = useState<"commercial" | "residential" | "institutional">("commercial");
  const [activeStrategies, setActiveStrategies] = useState({
    daylight: true,
    shading: true,
    solar: true,
    water: false,
  });

  // Calculate live dynamic metrics based on parameters
  const baseMultiplier = buildingType === "commercial" ? 1.2 : buildingType === "institutional" ? 1.0 : 0.85;
  const strategiesCount = Object.values(activeStrategies).filter(Boolean).length;
  
  const epiReduction = Math.min(52, Math.round(18 + strategiesCount * 8.2 * (baseMultiplier / 1.1)));
  const co2Offset = Math.round((area * 0.016 * (epiReduction / 100)) * 10) / 10;
  const leedCredits = Math.min(32, 12 + strategiesCount * 4 + (buildingType === "commercial" ? 4 : 2));
  const hvacLoadReduction = Math.min(45, Math.round(14 + strategiesCount * 7.5));

  const toggleStrategy = (key: keyof typeof activeStrategies) => {
    setActiveStrategies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative rounded-2xl bg-[#0E1712]/90 border border-emerald-500/30 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Background CAD grid snippet */}
      <div className="absolute inset-0 bg-cad-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#1E3127]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <BarChart3 className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-white tracking-wide">
                Interactive Simulation Telemetry
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">
                Live Model
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Parametric Energy & Sustainability Estimation Matrix
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setArea(50000);
            setBuildingType("commercial");
            setActiveStrategies({ daylight: true, shading: true, solar: true, water: true });
          }}
          className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 hover:text-emerald-300 transition-colors py-1 px-2.5 rounded bg-emerald-950/40 border border-emerald-800/40"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset Simulation</span>
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Column: Interactive Controls */}
        <div className="lg:col-span-5 space-y-6">
          {/* Building Typology */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Building Typology
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["commercial", "residential", "institutional"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setBuildingType(type)}
                  className={`py-2 px-3 text-xs font-mono capitalize rounded-lg border transition-all text-center ${
                    buildingType === type
                      ? "bg-emerald-500/25 border-emerald-400 text-emerald-200 shadow-sm shadow-emerald-500/30"
                      : "bg-[#121E18] border-[#1E3127] text-slate-400 hover:text-white hover:border-emerald-500/40"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
              <span>Gross Built-Up Area</span>
              <span className="text-emerald-300 font-semibold">{area.toLocaleString()} sq ft</span>
            </div>
            <input
              type="range"
              min="10000"
              max="250000"
              step="5000"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full h-2 bg-[#121E18] rounded-lg appearance-none cursor-pointer accent-emerald-400 border border-[#1E3127]"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>10,000 sq ft</span>
              <span>250,000 sq ft</span>
            </div>
          </div>

          {/* Sustainable Optimization Toggles */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Simulation Parameters
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => toggleStrategy("daylight")}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                  activeStrategies.daylight
                    ? "bg-emerald-950/60 border-emerald-400/80 text-emerald-200"
                    : "bg-[#121E18] border-[#1E3127] text-slate-400"
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Daylight Opt.</span>
              </button>

              <button
                onClick={() => toggleStrategy("shading")}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                  activeStrategies.shading
                    ? "bg-emerald-950/60 border-emerald-400/80 text-emerald-200"
                    : "bg-[#121E18] border-[#1E3127] text-slate-400"
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Envelope Shading</span>
              </button>

              <button
                onClick={() => toggleStrategy("solar")}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                  activeStrategies.solar
                    ? "bg-emerald-950/60 border-emerald-400/80 text-emerald-200"
                    : "bg-[#121E18] border-[#1E3127] text-slate-400"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Solar Yield PV</span>
              </button>

              <button
                onClick={() => toggleStrategy("water")}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-all ${
                  activeStrategies.water
                    ? "bg-emerald-950/60 border-emerald-400/80 text-emerald-200"
                    : "bg-[#121E18] border-[#1E3127] text-slate-400"
                }`}
              >
                <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Water Reuse</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Simulated Metrics Output */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Metric 1: EPI Reduction */}
            <motion.div
              key={`epi-${epiReduction}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-xl bg-[#121F19] border border-emerald-500/20 relative overflow-hidden"
            >
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                EPI Reduction
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span>-{epiReduction}%</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Energy Performance Index vs Base ECBC Code
              </p>
              <div className="mt-3 w-full bg-[#1A2E25] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-emerald-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(epiReduction / 55) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Metric 2: Annual CO2 Offset */}
            <motion.div
              key={`co2-${co2Offset}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-xl bg-[#121F19] border border-emerald-500/20 relative overflow-hidden"
            >
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                Annual CO₂ Offset
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span>{co2Offset}</span>
                <span className="text-xs font-normal text-slate-400 font-mono">t CO₂e/yr</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Estimated emissions avoided via passive cooling
              </p>
              <div className="mt-3 w-full bg-[#1A2E25] h-1.5 rounded-full overflow-hidden">
                <motion.div
                  className="bg-emerald-400 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (co2Offset / 60) * 100)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Metric 3: HVAC Thermal Load */}
            <motion.div
              key={`hvac-${hvacLoadReduction}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-xl bg-[#121F19] border border-emerald-500/20 relative overflow-hidden"
            >
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                HVAC Load Peak Cut
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                <span>-{hvacLoadReduction}%</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Thermal envelope & solar heat gain optimization
              </p>
            </motion.div>

            {/* Metric 4: Green Certification Credits */}
            <motion.div
              key={`leed-${leedCredits}`}
              initial={{ scale: 0.96, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-4 rounded-xl bg-[#121F19] border border-emerald-500/20 relative overflow-hidden"
            >
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                Certification Score
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span>+{leedCredits}</span>
                <span className="text-xs font-normal text-slate-400 font-mono">pts</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">
                Targeting LEED Platinum & IGBC Super Platinum
              </p>
            </motion.div>
          </div>

          <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono text-emerald-300">Ready to simulate your architectural project?</span>
            <a
              href="/contact"
              className="font-medium text-xs text-white bg-emerald-500 hover:bg-emerald-400 px-3 py-1.5 rounded transition-colors shadow-sm"
            >
              Book Simulation Study →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
