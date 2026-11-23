import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Clock, ArrowUpRight, Award, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-neutral-200/80 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Forest Green CTA Banner (GreenVolt Style) */}
        <div className="rounded-[32px] bg-forest-900 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden mb-16 shadow-xl">
          {/* Subtle decorative background gradient */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-forest-700/30 blur-3xl pointer-events-none" />
          <div className="absolute left-10 -top-10 w-72 h-72 rounded-full bg-forest-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-forest-200 text-xs font-medium border border-white/15">
              <span>Next Step in Sustainable Architecture</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Ready to Optimize Your Building’s Environmental Performance?
            </h2>
            <p className="text-forest-100 text-sm sm:text-base leading-relaxed max-w-xl">
              We guide projects through recognized green rating systems (IGBC, GRIHA, LEED) and advanced building simulations from concept to completion.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-forest-900 hover:bg-forest-50 font-medium text-sm transition-all shadow-md group"
              >
                <span>Schedule a Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="mailto:niharikataninki@neuarth.in"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 transition-all font-mono text-xs"
              >
                <span>niharikataninki@neuarth.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-300 bg-white flex items-center justify-center p-0.5">
                <Image
                  src="/images/logo.jpg"
                  alt="NeuArth Logo"
                  width={30}
                  height={30}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-semibold text-base tracking-tight text-neutral-900 block">
                  NeuArth
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium">
                  Sustainable Consultants
                </span>
              </div>
            </Link>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              We leverage advanced building simulations to optimize environmental performance, bridging architectural design and ecological responsibility.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-forest-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-forest-800" />
              <span>COA Registered Architect</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-900 font-semibold mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Green Building Certifications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Building Simulations (Daylight & Thermal)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Building Energy Analysis (EPI Reduction)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Water Efficient Strategies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Green Materials Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Leadership */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-neutral-900 font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-forest-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-forest-900 transition-colors">
                  About Us & Leadership
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-forest-900 transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-forest-900 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-white border border-neutral-200/80 text-xs">
              <div className="flex items-center gap-1.5 font-medium text-neutral-900">
                <Award className="w-3.5 h-3.5 text-forest-800" />
                <span>Niharika Taninki</span>
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                NIT Trichy Gold Medalist • IGBC AP • LEED GA
              </div>
            </div>
          </div>

          {/* Column 4: Business Directory */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-neutral-900 font-semibold mb-4">
              Business Info
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-forest-800 mt-0.5 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest-800 shrink-0" />
                <a href="mailto:niharikataninki@neuarth.in" className="hover:text-forest-900 font-mono text-xs">
                  niharikataninki@neuarth.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest-800 shrink-0" />
                <a href="tel:+916281921866" className="hover:text-forest-900 font-mono text-xs">
                  +91 6281921866
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-forest-800 shrink-0" />
                <a
                  href="https://instagram.com/neu_arth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-forest-900"
                >
                  @neu_arth
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs text-neutral-500 border-t border-neutral-200/80 mt-3">
              <div className="flex items-center gap-1.5 text-neutral-700 font-medium text-xs mb-1">
                <Clock className="w-3.5 h-3.5 text-forest-800" />
                <span>Opening Hours</span>
              </div>
              <p>Mon - Fri: 9:00 am – 6:00 pm</p>
              <p>Saturday: 9:00 am – 2:00 pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with exact original copyright */}
        <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 NeuArth Sustainable Consultants. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-neutral-500">
              Building Simulations • Green Architecture • LEED & IGBC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
