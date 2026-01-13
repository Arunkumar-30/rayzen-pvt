import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hybrid Power Systems - Rayzen Power",
  description:
    "Discover Rayzen Power's Hybrid Power Systems that combine solar energy, battery storage, and grid power for reliable, efficient, and cost-effective electricity solutions.",
  keywords:
    "hybrid power system, solar hybrid system, hybrid inverter, battery storage, grid power backup, renewable energy, Rayzen Power",
  openGraph: {
    title: "Hybrid Power Systems - Rayzen Power",
    description:
      "Discover Rayzen Power's Hybrid Power Systems that combine solar energy, battery storage, and grid power for reliable, efficient, and cost-effective electricity solutions.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/services/hybrid-systems",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/services/hybrid-systems.webp",
        width: 1200,
        height: 630,
        alt: "Hybrid Power System - Rayzen Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hybrid Power Systems - Rayzen Power",
    description:
      "Discover Rayzen Power's Hybrid Power Systems that combine solar energy, battery storage, and grid power for reliable, efficient, and cost-effective electricity solutions.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/services/hybrid-systems.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};
export default function HybridSystems() {
  return (
   <main className="max-w-7xl mx-auto px-6 lg:px-24 mb-12 space-y-10">
      {/* Title + CTA */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-4"
        data-aos="fade-up"
      >
        <h1 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800">
          Hybrid Power Systems
        </h1>

        <Link
          href="/contact-us"
          className="px-6 py-2 bg-[#d11a19] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition"
        >
          Enquire Now
        </Link>
      </section>

      {/* Intro */}
      <p
        className="text-lg font-medium text-gray-700 max-w-4xl"
        data-aos="fade-up"
      >
        Experience uninterrupted power with hybrid systems that intelligently
        combine solar energy, battery storage, and grid power to deliver reliable,
        efficient, and cost-effective electricity.
      </p>

      {/* Image + Content */}
      <section className="flex flex-col lg:flex-col items-center gap-10">
        {/* Image */}
        <div className="flex-1" data-aos="zoom-in">
          <Image
            src="/service/hybrid-systems.webp"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
            alt="Hybrid power system combining solar, battery, and grid power"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 p-4" data-aos="fade-up">
          <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
            Why Choose Hybrid Power Systems
          </h2>

          <p className="text-lg text-gray-600">
            Hybrid power systems ensure continuous energy availability by
            seamlessly switching between solar, battery backup, and grid power.
            They reduce dependency on the grid while maximizing energy savings
            and reliability.
          </p>

          <ul className="space-y-4">
            {[
              "Uninterrupted power using solar, battery, and grid",
              "Reduced electricity bills with smart energy usage",
              "Reliable backup during power cuts and outages",
            ].map((text, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-[#FDE8E9] p-4 rounded"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d11a19] text-white shrink-0">
                  ✓
                </span>
                <span className="text-gray-800 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2
          className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 mb-6"
          data-aos="fade-up"
        >
          Why Choose Us for Hybrid Power Systems?
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            "Advanced Hybrid Inverter Technology",
            "High-Capacity Battery Storage Solutions",
            "Expert System Design & Installation",
            "24/7 Power Reliability",
            "Energy Optimization & Smart Monitoring",
            "Cost-Effective Long-Term Savings",
          ].map((text, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#FDE8E8] border border-[#d11a19] p-6 rounded-lg text-center hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-[#8A0E0E]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Installation Process */}
      <section>
        <h2
          className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Core Steps of Our Hybrid System Installation
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Energy Assessment",
              desc: "Analyze your energy consumption and power backup needs to design the ideal hybrid system.",
              points: [
                "Load and usage analysis",
                "Solar and battery sizing",
                "System feasibility planning",
              ],
            },
            {
              title: "System Installation",
              desc: "Professional installation of solar panels, hybrid inverters, and battery storage systems.",
              points: [
                "Hybrid inverter configuration",
                "Battery bank integration",
                "Grid synchronization setup",
              ],
            },
            {
              title: "Monitoring & Support",
              desc: "Continuous monitoring and maintenance to ensure optimal performance and long system life.",
              points: [
                "Real-time energy monitoring",
                "Preventive maintenance support",
                "System upgrades & optimization",
              ],
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.desc}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {step.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
           {/* Image + Content */}
            <section className="flex flex-col lg:flex-row items-center gap-10 py-10">
              {/* Image */}
              <div className="flex-1" data-aos="zoom-in">
                <Image
                  src="/service/hybrid-invert.webp"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  alt="Hybrid Inverter"
                />
              </div>
      
              {/* Content */}
              <div className="flex-1 space-y-6" data-aos="fade-up">
                <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
                  Hybrid Inverter (3kw - 80kw)
                </h2>
      
               
      <ul className="space-y-4 list-disc pl-6">
        {[
          "Supports On-grid,Off-Grid and Hybrid modes with 4-millisecond switching time",
          "Compatible with Lead-Acid and Lithium Battery Types",
          "Built-in zero-export feature",
          "24x7 uninterrupted power supply",
          "Programmable charge/discharge control",
          "Parallel operation of up to 16units",
          "100% unbalanced load output support"
        ].map((text, i) => (
          <li key={i} className="text-gray-800 font-medium">
            {text}
          </li>
        ))}
      </ul>
      
              </div>
            </section>
              {/* Image + Content */}
            <section className="flex flex-col lg:flex-row-reverse items-center gap-10 py-10">
              {/* Image */}
              <div className="flex-1" data-aos="zoom-in">
                <Image
                  src="/service/micro-inverter.webp"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                  alt="Micro inverter"
                />
              </div>
      
              {/* Content */}
              <div className="flex-1 space-y-6" data-aos="fade-up">
                <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
                  Micro Inverter (0.6kw - 2.2kw)
                </h2>
      
               
      <ul className="space-y-4 list-disc pl-6">
        {[
          "IP67- rated protection",
          "Simple plug-and-play installation",
          "AC-coupled system suitable for retrofitting existing setups",
          "Supports UPS functionality",
          "25-year design life with a 10-year warranty",
        ].map((text, i) => (
          <li key={i} className="text-gray-800 font-medium">
            {text}
          </li>
        ))}
      </ul>
      
              </div>
            </section>
    </main>
  );
}
