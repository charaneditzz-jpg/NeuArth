"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Compass, CheckCircle2, ShieldCheck, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

const NOTABLE_PROJECTS = [
  {
    name: "ASI Lothal",
    location: "Gujarat",
    category: "Heritage & Archaeological Infrastructure",
    description: "Delivered sustainable design recommendations, climate-responsive strategies, and microclimate analysis for this landmark national heritage development.",
  },
  {
    name: "Barca Godrej Residential",
    location: "Bangalore",
    category: "High-Performance Residential",
    description: "Thermal performance simulations, daylight optimization, and green envelope strategies targeting optimal indoor comfort and reduced energy load.",
  },
  {
    name: "Mahindra World City",
    location: "Jaipur",
    category: "Integrated Eco-Industrial & Commercial Hub",
    description: "Large-scale masterplan environmental analysis, passive shading studies, and sustainable site resource optimization.",
  },
  {
    name: "Manipal University",
    location: "Bangalore",
    category: "Institutional Campus",
    description: "Building energy modeling, Energy Performance Index (EPI) analysis, and academic facility daylighting simulations.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-canvas">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-neutral-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider">
              About NeuArth
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
              Pioneering Sustainable Design & <br />
              <span className="text-forest-900 font-semibold">Building Simulations</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              We are a sustainability-focused consulting firm dedicated to improving building performance through innovative and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Graphic */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 bg-white p-6 shadow-xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-canvas">
                  <Image
                    src="/images/mission-graphic.png"
                    alt="NeuArth Mission & Sustainability Framework"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="mt-4 text-center text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  Parametric Simulation & Green Certification
                </div>
              </div>
            </div>

            {/* Mission Copy */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-mono font-semibold text-forest-800 uppercase tracking-widest block">
                // 01. OUR MISSION & VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
                Accessible, Integrated & Central to Construction
              </h2>
              <div className="space-y-4 text-neutral-600 text-base leading-relaxed">
                <p>
                  We aim to simplify the path toward green certifications, enhance building performance through advanced simulations, and support every project with strategies that are environmentally responsible, economically viable, and future-ready.
                </p>
                <p className="text-neutral-500 text-sm sm:text-base">
                  We envision a future where sustainable design is accessible, integrated, and central to every construction—from concept to completion.
                </p>
              </div>

              {/* Three Strategic Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                  <div className="text-forest-800 text-xs font-mono font-semibold mb-1">PILLAR 01</div>
                  <div className="font-medium text-neutral-900 text-sm">Simplifying Rating</div>
                  <div className="text-neutral-500 text-xs mt-1">Direct paths to IGBC, GRIHA & LEED ratings.</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                  <div className="text-forest-800 text-xs font-mono font-semibold mb-1">PILLAR 02</div>
                  <div className="font-medium text-neutral-900 text-sm">Physics Simulation</div>
                  <div className="text-neutral-500 text-xs mt-1">Thermal, daylight & energy modeling.</div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm">
                  <div className="text-forest-800 text-xs font-mono font-semibold mb-1">PILLAR 03</div>
                  <div className="font-medium text-neutral-900 text-sm">Economically Viable</div>
                  <div className="text-neutral-500 text-xs mt-1">Balancing ROI with lifecycle carbon reduction.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white border-y border-neutral-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] bg-canvas border border-neutral-200/90 p-8 sm:p-12 relative overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Founder Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-md group">
                  <Image
                    src="/images/founder-niharika.jpg"
                    alt="Niharika Taninki - Founder & CEO of NeuArth"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] uppercase font-mono tracking-widest block text-forest-200">
                      Founder & CEO
                    </span>
                    <span className="text-xl font-medium">NIHARIKA TANINKI</span>
                    <span className="block text-xs text-neutral-200 mt-0.5">
                      NIT Trichy Gold Medalist • IGBC AP • LEED GA
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-forest-900/10 text-forest-900 text-xs font-medium">
                    NIT GOLD MEDALIST
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-white text-neutral-600 text-xs font-medium border border-neutral-200">
                    COA REGISTERED ARCHITECT
                  </span>
                </div>

                <h2 className="text-3xl font-medium tracking-tight text-neutral-900">
                  Meet Our Founder & CEO
                </h2>

                <div className="p-4 rounded-2xl bg-white border border-neutral-200 space-y-1 text-xs">
                  <div className="font-semibold text-neutral-900 text-sm">NIHARIKA TANINKI</div>
                  <div className="text-forest-900 font-medium">
                    B.Arch, M.Arch Energy Efficiency and Sustainable Architecture (NIT Trichy - Gold Medalist)
                  </div>
                  <div className="text-neutral-500">
                    IGBC AP, LEED GA, Sustainable Analyst
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  NeuArth is founded by <strong>Niharika Taninki (NIT Gold Medalist)</strong>, IGBC AP, LEED GA, a sustainability professional and COA registered Architect with dedicated experience in the field.
                </p>

                <p className="text-neutral-500 text-sm leading-relaxed">
                  During her role in Terra Viridis, Niharika has contributed to several notable projects such as <strong>ASI Lothal (Gujarat)</strong>, <strong>Barca Godrej Residential (Bangalore)</strong>, <strong>Mahindra World City (Jaipur)</strong>, <strong>Manipal University (Bangalore)</strong>, and many more, delivering effective sustainable design recommendations and analyses.
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 hover:bg-forest-950 text-white font-medium text-xs transition-all shadow-sm"
                  >
                    <span>Connect Directly</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="mailto:niharikataninki@neuarth.in"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-700 hover:text-neutral-900 border border-neutral-200 font-mono text-xs transition-all"
                  >
                    <span>niharikataninki@neuarth.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Track Record */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider mb-2">
              Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
              Notable Project Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NOTABLE_PROJECTS.map((proj, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-forest-900/30 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-canvas text-forest-900 border border-neutral-200">
                    {proj.category}
                  </span>
                  <span className="text-xs font-medium text-neutral-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-forest-800" />
                    {proj.location}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">
                  {proj.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
