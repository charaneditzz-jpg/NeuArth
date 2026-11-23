"use deliberate";
import React from "react";

export function BlueprintGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* CAD Grid Layer */}
      <div className="absolute inset-0 bg-cad-grid opacity-60" />
      
      {/* Radial Energy Field */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Blueprint Coordinates & Telemetry Markers */}
      <div className="absolute top-24 left-6 hidden lg:flex flex-col text-[10px] font-mono text-emerald-500/40 tracking-wider space-y-1">
        <span>LOC: HYDERABAD / 17.3850° N, 78.4867° E</span>
        <span>SYS: NEUARTH TELEMETRY MATRIX</span>
        <span>STATUS: SIMULATION ACTIVE</span>
      </div>

      <div className="absolute bottom-8 right-6 hidden lg:flex flex-col text-right text-[10px] font-mono text-emerald-500/40 tracking-wider space-y-1">
        <span>CERTIFICATIONS: IGBC • GRIHA • LEED</span>
        <span>PARAMETRIC OPTIMIZATION // V2.6</span>
      </div>
    </div>
  );
}
