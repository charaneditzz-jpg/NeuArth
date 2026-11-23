"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What green building certification rating systems do you support?",
    answer:
      "We provide end-to-end consulting for recognized Indian and international green building rating systems, specifically IGBC (Indian Green Building Council), GRIHA (Green Rating for Integrated Habitat Assessment), and LEED (Leadership in Energy and Environmental Design). We manage credit feasibility, scoring, energy modeling documentation, and final submission.",
  },
  {
    question: "What are building simulations and when should they be conducted?",
    answer:
      "Building simulations are physics-based computational models that analyze energy consumption, natural daylight distribution, and indoor thermal comfort. Ideally, simulations should begin during the early conceptual and schematic design phases—optimizing orientation, shading, and envelope materials before construction begins to avoid costly retrofits.",
  },
  {
    question: "How does NeuArth help reduce the Energy Performance Index (EPI)?",
    answer:
      "Using industry-standard software engines (EnergyPlus, DesignBuilder, and OpenStudio), we evaluate your building's hourly thermal loads. We identify thermal bridges, optimize window-to-wall ratios (WWR), select high-performance glazing and insulation, and recommend right-sized HVAC systems to achieve up to a 40% reduction in EPI compared to baseline ECBC codes.",
  },
  {
    question: "Who leads the architectural assessments at NeuArth?",
    answer:
      "All consulting and analyses are directed by founder Niharika Taninki (NIT Trichy Gold Medalist, B.Arch, M.Arch Energy Efficiency & Sustainable Architecture), IGBC AP, LEED GA, and COA registered Architect. Her background includes sustainability contributions to landmark projects like ASI Lothal (Gujarat), Barca Godrej Residential (Bangalore), and Mahindra World City (Jaipur).",
  },
  {
    question: "Can small and mid-scale projects benefit from sustainability consulting?",
    answer:
      "Absolutely. Sustainable strategies such as optimized natural daylighting, passive cross-ventilation, and rainwater reuse often reduce initial capital costs (CAPEX) by downsizing cooling equipment and deliver significant ongoing operational savings (OPEX) regardless of project scale.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-canvas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Everything you need to know about our building simulation workflows and green certification advisory.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-neutral-200/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-medium text-sm sm:text-base text-neutral-900 group-hover:text-forest-900 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-forest-900 text-white" : "bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
