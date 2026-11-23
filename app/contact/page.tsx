"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Ticker } from "@/components/Ticker";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Green Building Certifications",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Green Building Certifications",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="relative overflow-hidden bg-canvas">
      {/* Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 border-b border-neutral-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider">
              Contact & Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.12]">
              Let’s Build a <br />
              <span className="text-forest-900 font-semibold">Sustainable Future</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Connect with our sustainability professionals to discuss your project, green certification ratings, daylight & thermal simulations, and energy optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Contact Content & Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Business Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-forest-800">
                  // OFFICIAL DIRECTORY
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900 mt-1">
                  Business Info
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  Headquartered in Hyderabad with capabilities supporting projects nationwide.
                </p>
              </div>

              {/* Contact Cards using original Wix icons */}
              <div className="space-y-3">
                {/* Address */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/contact-location.png"
                      alt="Location Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-neutral-500 uppercase block">Address:</span>
                    <span className="text-neutral-900 font-medium text-sm">Hyderabad, Telangana, India</span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/contact-email.png"
                      alt="Email Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-neutral-500 uppercase block">Email:</span>
                    <a
                      href="mailto:niharikataninki@neuarth.in"
                      className="text-neutral-900 hover:text-forest-900 font-mono text-sm transition-colors"
                    >
                      niharikataninki@neuarth.in
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/contact-phone.png"
                      alt="Phone Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-neutral-500 uppercase block">Phone:</span>
                    <a
                      href="tel:+916281921866"
                      className="text-neutral-900 hover:text-forest-900 font-mono text-sm transition-colors"
                    >
                      +91 6281921866
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 flex items-center gap-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-canvas border border-neutral-200 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/contact-instagram.png"
                      alt="Instagram Icon"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-neutral-500 uppercase block">Instagram:</span>
                    <a
                      href="https://instagram.com/neu_arth"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 hover:text-forest-900 font-mono text-sm transition-colors"
                    >
                      @neu_arth
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-forest-900 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-forest-800" />
                  <span>Opening Hours</span>
                </div>
                <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
                  <div className="flex justify-between border-b border-neutral-100 pb-1.5">
                    <span>Monday – Friday</span>
                    <span className="font-mono text-neutral-900 font-medium">9:00 am – 6:00 pm</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Saturday</span>
                    <span className="font-mono text-neutral-900 font-medium">9:00 am – 2:00 pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-white border border-neutral-200/90 p-8 sm:p-10 shadow-xl">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900/5 text-forest-900 border border-forest-900/10 text-xs font-medium uppercase tracking-wider mb-2">
                    Inquiry Form
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-medium text-neutral-900">
                    Send a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Fill out the form below to receive a consultation proposal or simulation scoping study.
                  </p>
                </div>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-forest-50 border border-forest-200 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-forest-900 text-white flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-neutral-900">Inquiry Successfully Submitted!</h3>
                    <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for contacting NeuArth Sustainable Consultants. We have received your inquiry and will reach out promptly to discuss your project scope.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 px-6 py-2.5 rounded-full bg-forest-900 text-white font-medium text-xs uppercase tracking-wider shadow-sm"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <div>{errorMessage}</div>
                          <div className="mt-1">
                            You can also email us directly at{" "}
                            <a href="mailto:niharikataninki@neuarth.in" className="underline font-mono">
                              niharikataninki@neuarth.in
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Architect / Developer / Client"
                          className="w-full px-4 py-3 rounded-xl bg-canvas border border-neutral-200 focus:border-forest-900 focus:bg-white focus:outline-none text-neutral-900 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="client@organization.com"
                          className="w-full px-4 py-3 rounded-xl bg-canvas border border-neutral-200 focus:border-forest-900 focus:bg-white focus:outline-none text-neutral-900 transition-colors font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className="w-full px-4 py-3 rounded-xl bg-canvas border border-neutral-200 focus:border-forest-900 focus:bg-white focus:outline-none text-neutral-900 transition-colors font-mono text-xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-canvas border border-neutral-200 focus:border-forest-900 focus:bg-white focus:outline-none text-neutral-900 transition-colors"
                        >
                          <option value="Green Building Certifications">Green Building Certifications (IGBC/GRIHA/LEED)</option>
                          <option value="Building Simulations">Building Simulations (Daylight/Thermal/CFD)</option>
                          <option value="Building Energy Analysis">Building Energy Analysis (EPI Reduction)</option>
                          <option value="Water Efficient Strategies">Water Efficient Strategies</option>
                          <option value="Green Materials Advisory">Green Materials Advisory</option>
                          <option value="General Sustainable Advisory">General Sustainable Architecture Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Project Scope & Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the project typology, location, gross built-up area, and specific sustainability or certification objectives..."
                        className="w-full px-4 py-3 rounded-xl bg-canvas border border-neutral-200 focus:border-forest-900 focus:bg-white focus:outline-none text-neutral-900 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 rounded-full bg-forest-900 hover:bg-forest-950 disabled:opacity-60 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      {status === "loading" ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
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
