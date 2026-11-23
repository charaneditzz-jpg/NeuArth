"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

const SERVICES_DATA = [
  {
    id: "certifications",
    title: "Green Building Certifications",
    tagline: "IGBC • GRIHA • LEED Rating Systems",
    icon: "/images/certifications-icon.png",
    description:
      "We guide projects through recognized green certification rating systems like IGBC, GRIHA and LEED, ensuring compliance with sustainability standards while enhancing building value, efficiency, and environmental performance.",
    deliverables: [
      "Credit feasibility & scoring assessment",
      "Documentation & submission management",
      "Daylight & ventilation compliance credits",
      "Commissioning & audit support",
    ],
  },
  {
    id: "simulations",
    title: "Building Simulations",
    tagline: "Thermal, Daylight & Airflow Dynamics",
    icon: "/images/simulations-icon.png",
    description:
      "Our advanced simulations analyze energy use, lighting, and thermal performance to optimize building design and improve efficiency before construction even begins.",
    deliverables: [
      "Dynamic annual thermal comfort modeling",
      "Useful Daylight Illuminance (UDI) & sDA analysis",
      "Natural ventilation & Computational Fluid Dynamics (CFD)",
      "Solar radiation & shadow mapping on facade envelopes",
    ],
  },
  {
    id: "solutions",
    title: "Sustainable Solutions",
    tagline: "Holistic Eco-Responsive Strategies",
    icon: "/images/solutions-icon.png",
    description:
      "We provide tailored strategies that reduce environmental impact, improve efficiency, and integrate sustainable practices into every stage of your project.",
    deliverables: [
      "Climate-responsive site orientation guidelines",
      "Passive cooling & envelope insulation detailing",
      "Net-zero carbon roadmap development",
      "Renewable energy yield evaluation",
    ],
  },
  {
    id: "energy",
    title: "Building Energy Analysis",
    tagline: "EPI Optimization & ECBC / ASHRAE 90.1 Compliance",
    icon: "/images/energy-analysis-icon.png",
    description:
      "We use advanced software tools to track and analyze energy consumption patterns, identify inefficiencies, and implement targeted strategies that reduce the building’s Energy Performance Index (EPI), lower costs, and enhance overall performance.",
    deliverables: [
      "Whole-building hourly energy simulation",
      "HVAC sizing optimization & coefficient of performance (COP) tuning",
      "Peak electrical demand reduction",
      "Life-cycle cost analysis (LCCA)",
    ],
  },
  {
    id: "water",
    title: "Water Efficient Strategies",
    tagline: "Conservation, Greywater & Rainwater Harvesting",
    icon: "/images/water-strategies-icon.png",
    description:
      "Our water management solutions focus on reducing consumption, improving reuse systems, and promoting sustainable practices for long-term resource conservation.",
    deliverables: [
      "Water balance diagrams & fixture efficiency plans",
      "Rainwater harvesting & aquifer recharge calculations",
      "On-site STP & greywater recycling advisory",
      "Zero Liquid Discharge (ZLD) feasibility",
    ],
  },
  {
    id: "materials",
    title: "Green Materials Advisory",
    tagline: "Low Embodied Carbon & Healthier Indoors",
    icon: "/images/materials-icon.png",
    description:
      "We help you select environmentally responsible materials that enhance durability, reduce environmental impact, and support healthier, more sustainable buildings.",
    deliverables: [
      "Embodied carbon calculations (LCA / EPD)",
      "Low-VOC & sustainable material procurement guidelines",
      "Locally sourced & recycled content verification",
      "Thermal mass & fenestration U-value selection",
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === selectedService) || SERVICES_DATA[0];

  return (
    <div className="relative overflow-hidden bg-canvas">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-neutral-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider">
              Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
              Comprehensive Sustainability <br />
              <span className="text-forest-900 font-semibold">Consulting & Analysis</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              From parametric building simulations to green rating certifications, we deliver measurable ecological performance and regulatory clarity for modern architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Interactive Capabilities Showcase */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selection List */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 block mb-2">
                // SELECT CAPABILITY
              </span>
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? "bg-white border-forest-900 shadow-md ring-1 ring-forest-900"
                        : "bg-white/70 border-neutral-200 hover:bg-white hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-canvas border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={26}
                          height={26}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className={`font-medium text-sm transition-colors ${isSelected ? "text-forest-900 font-semibold" : "text-neutral-900"}`}>
                          {service.title}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {service.tagline}
                        </div>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "text-forest-900 translate-x-1" : "text-neutral-400 group-hover:text-neutral-700"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detail Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white border border-neutral-200/90 p-8 sm:p-10 shadow-xl relative"
                >
                  <div className="flex items-center gap-4 pb-6 border-b border-neutral-100">
                    <div className="w-14 h-14 rounded-2xl bg-canvas border border-neutral-200 p-3 flex items-center justify-center shrink-0">
                      <Image
                        src={activeService.icon}
                        alt={activeService.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-forest-900 block">
                        {activeService.tagline}
                      </span>
                      <h2 className="text-2xl font-medium text-neutral-900 mt-0.5">
                        {activeService.title}
                      </h2>
                    </div>
                  </div>

                  <div className="py-6 space-y-3">
                    <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                      Overview & Scope
                    </h3>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                      {activeService.description}
                    </p>
                  </div>

                  <div className="pt-2 pb-6 border-t border-neutral-100">
                    <h3 className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-3">
                      Key Technical Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-canvas border border-neutral-200/60 text-xs text-neutral-700 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-forest-800 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-neutral-500 font-medium">
                      Applicable for Commercial, Residential & Campuses
                    </span>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white font-medium text-xs transition-all shadow-sm"
                    >
                      Inquire About This Service
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Simulation Softwares Section */}
      <section className="py-20 bg-white border-y border-neutral-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider">
                Simulation Softwares
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
                Industry-Leading Computational Toolchain
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                We employ validated computational engines to model thermal dynamics, solar radiation envelopes, daylight availability, and whole-building energy consumption.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3.5 rounded-2xl bg-canvas border border-neutral-200 flex items-center justify-between">
                  <span className="font-medium text-neutral-900">EnergyPlus & DesignBuilder</span>
                  <span className="text-forest-900 font-semibold">Whole-Building Energy Modeling</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-canvas border border-neutral-200 flex items-center justify-between">
                  <span className="font-medium text-neutral-900">Radiance & Daysim</span>
                  <span className="text-forest-900 font-semibold">Daylighting & Visual Glare</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-canvas border border-neutral-200 flex items-center justify-between">
                  <span className="font-medium text-neutral-900">Ladybug & Honeybee (Rhino)</span>
                  <span className="text-forest-900 font-semibold">Parametric Environmental Analysis</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-canvas border border-neutral-200 flex items-center justify-between">
                  <span className="font-medium text-neutral-900">OpenStudio</span>
                  <span className="text-forest-900 font-semibold">HVAC Optimization</span>
                </div>
              </div>
            </div>

            {/* Software Visuals */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white p-4 shadow-md">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-canvas">
                  <Image
                    src="/images/simulation-software.png"
                    alt="Simulation Software Stack Diagram"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="mt-3 text-center text-xs font-medium text-neutral-500">
                  Simulation Engine Workflow
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden border border-neutral-200 bg-white p-4 shadow-md">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/services-showcase.jpg"
                    alt="NeuArth Architectural Services Showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-center text-xs font-medium text-neutral-500">
                  Integrated Architectural & Environmental Optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
