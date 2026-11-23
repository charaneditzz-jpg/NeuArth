import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neuarth.in"),
  title: "NeuArth | Sustainable Solutions for a Better Future",
  description:
    "We leverage advanced building simulations to optimize environmental performance. Environmental impact assessments, energy analysis, and green building certifications for IGBC, GRIHA, and LEED. Founded by Niharika Taninki.",
  keywords: [
    "NeuArth",
    "Sustainable Consultants",
    "Building Simulations",
    "Green Architecture",
    "Energy Efficient Design",
    "LEED Certification",
    "IGBC AP",
    "GRIHA",
    "Niharika Taninki",
    "Hyderabad Green Building Architect",
  ],
  authors: [{ name: "Niharika Taninki" }],
  openGraph: {
    title: "NeuArth | Sustainable Solutions for a Better Future",
    description:
      "Advanced building simulations, environmental performance reporting, and green architecture consulting.",
    url: "https://www.neuarth.in",
    siteName: "NeuArth Sustainable Consultants",
    images: [
      {
        url: "/images/hero-architectural.jpg",
        width: 1200,
        height: 630,
        alt: "NeuArth Sustainable Architecture & Simulations",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-neutral-950 text-white antialiased flex flex-col relative selection:bg-emerald-500 selection:text-black">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
