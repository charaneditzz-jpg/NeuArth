# Task Plan: NeuArth Website Modern Revamp

## 1. Overview & Objective
Transform `https://www.neuarth.in` into a modern, high-tech, motion-infused sustainable architecture web application.
- **Client**: NeuArth Sustainable Consultants
- **Founder**: Niharika Taninki (NIT Gold Medalist, IGBC AP, LEED GA, COA Registered Architect)
- **Goal**: Retain 100% of the original content, messaging, leadership credentials, and imagery while rebuilding it with a cutting-edge **High-Tech Sustainable Minimalist** aesthetic, silky Framer Motion animations, interactive simulation visualizers, and a multi-page Next.js App Router architecture.

---

## 2. Technical Stack
- **Framework**: Next.js 14+ (App Router, Server Components + Client Motion Components)
- **Styling**: Tailwind CSS + Custom CSS Variables & Blueprint Grid patterns
- **Animation**: Framer Motion (page transitions, stagger fade-ins, kinetic text ticker, interactive simulation sliders, scroll reveals)
- **Icons**: Lucide React
- **Asset Pipeline**: Localized original Wix CDN media assets placed into `public/images/`
- **Backend / Forms**: Next.js API Route (`/api/contact`) with full schema validation and fallback to mailto.

---

## 3. Page Structure
1. `/` - **Home Page**:
   - Hero Section: High-tech sustainability headline, CAD blueprint grid background, interactive telemetry status pills, call-to-actions.
   - Kinetic Infinite Ticker: `BUILDING SIMULATIONS • ENERGY EFFICIENT • GREEN ARCHITECTURE • SUSTAINABLE DESIGN`
   - Mission & Environmental Impact narrative with data visualizers.
   - Core Services preview matrix.
   - Interactive Building Simulation Telemetry & Energy Performance Index (EPI) visualizer.
   - Founder & Leadership teaser.
   - Certifications showcase (IGBC, GRIHA, LEED).
2. `/about` - **About Us**:
   - Company narrative: Sustainable consulting firm dedicated to building performance.
   - Core Mission & Vision.
   - Founder & CEO Profile: Niharika Taninki (NIT Trichy Gold Medalist, B.Arch, M.Arch Energy Efficiency & Sustainable Architecture, IGBC AP, LEED GA).
   - Notable Project Portfolio track record (ASI Lothal, Barca Godrej Residential, Mahindra World City, Manipal University, etc.).
   - Interactive credentials timeline.
3. `/services` - **Services**:
   - Comprehensive services showcase:
     - Green Building Certifications (IGBC, GRIHA, LEED)
     - Building Simulations (Daylight, Thermal, CFD)
     - Sustainable Solutions
     - Building Energy Analysis (Energy Performance Index - EPI)
     - Water Efficient Strategies
     - Green Materials Advisory
   - Simulation Software Stack showcase.
   - Interactive Project Scope Estimator / Sustainability Calculator.
4. `/contact` - **Contact & Inquiries**:
   - Modern Glassmorphism contact form with Next.js API Route integration.
   - Direct business details: Address (Hyderabad), Email (`niharikataninki@neuarth.in`), Phone (`+91 6281921866`), Instagram (`@neu_arth`).
   - Operating hours (Mon-Fri 9AM-6PM, Sat 9AM-2PM).
   - Interactive FAQs / consultation booking CTA.

---

## 4. Implementation Steps & Verification
- [x] Step 1: Requirements Gathering & Discovery (Completed)
- [x] Step 2: Task Plan & DESIGN.md creation (In Progress)
- [ ] Step 3: Asset acquisition (download all original Wix media into `public/images/`)
- [ ] Step 4: Next.js + Tailwind + Framer Motion project scaffolding
- [ ] Step 5: Shared layout (Header, Nav, Footer, Background Grid, Mobile Drawer)
- [ ] Step 6: Home Page implementation with motion & telemetry widgets
- [ ] Step 7: About Us Page implementation with founder spotlight & project credentials
- [ ] Step 8: Services Page implementation with interactive cards & software stack
- [ ] Step 9: Contact Page & API Route implementation
- [ ] Step 10: Production build, responsiveness, and verification
