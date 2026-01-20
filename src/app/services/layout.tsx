import ServicesBanner from "@/components/Services/ServicesBanner";
import Aside from "@/components/ui-section/Aside";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: "Energy Solutions & Services | Rayzen Power Private Limited",

  description:
  "Rayzen Power Private Limited offers professional solar power installation, hybrid systems, lithium energy storage, and smart energy solutions across India.",

  keywords: [
    "Rayzen Services",
    "Solar Power Installation",
    "Hybrid Systems",
    "Lithium Energy Storage",
    "Home Automation",
    "cctv security systems",
    "solar panel installation",
    "residential solar solutions",
  ],
  robots: "index, follow",
  alternates: {
  canonical: "https://www.rayzenpower.com/services",
},

  openGraph: {
    title: "Our Services - Rayzen Power Private Limited",
    description:
      "Discover Rayzen Power Private Limited's expert services in solar, hybrid, lithium ESS, and home automation for residential and commercial setups.",
    url: "https://www.rayzenpower.com/services", 
    siteName: "Rayzen Power Private Limited",
    type: "website",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServicesBanner />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* Aside */}
        <aside className="lg:col-span-1 order-2 lg:order-1">
          <Aside />
        </aside>

        {/* Content */}
        <main className="lg:col-span-4 order-1 lg:order-2">
          {children}
        </main>

      </div>
    </>
  );
}
