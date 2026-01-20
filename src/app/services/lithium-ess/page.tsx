import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lithium Energy Storage Systems (ESS) - Rayzen Power",
  description:
    "Rayzen Power offers advanced Lithium Energy Storage Systems (ESS) for residential, commercial, and industrial applications. High performance, long life, and reliable backup power.",
  keywords:
    "Lithium ESS, Lithium battery storage, energy storage system, battery backup, solar hybrid storage, Rayzen Power, renewable energy solutions",
  openGraph: {
    title: "Lithium Energy Storage Systems (ESS) - Rayzen Power",
    description:
      "Rayzen Power offers advanced Lithium Energy Storage Systems (ESS) for residential, commercial, and industrial applications. High performance, long life, and reliable backup power.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/services/lithium-ess",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/services/lithium-ess.webp",
        width: 1200,
        height: 630,
        alt: "Lithium Energy Storage System - Rayzen Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lithium Energy Storage Systems (ESS) - Rayzen Power",
    description:
      "Rayzen Power offers advanced Lithium Energy Storage Systems (ESS) for residential, commercial, and industrial applications. High performance, long life, and reliable backup power.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/services/lithium-ess.webp"],
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
export default function LithiumEnergyStorage() {
  return (
    <>
     <Script
        id="lithium-ess-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Lithium Energy Storage Systems (ESS)",
            description:
              "Rayzen Power offers advanced Lithium Energy Storage Systems (ESS) for residential, commercial, and industrial applications. High performance, long life, and reliable backup power.",
            provider: {
              "@type": "Organization",
              name: "Rayzen Power Private Limited",
              url: "https://www.rayzenpower.com",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Energy Storage System Installation",
            url: "https://rayzenpower.com/services/lithium-ess",
          }),
        }}
      />
    <main className="max-w-7xl mx-auto px-6 lg:px-24 mb-12 space-y-10">
      {/* Title + CTA */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-4"
        data-aos="fade-up"
      >
        <h1 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800">
          Lithium Energy Storage Systems (ESS)
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
        Store energy efficiently with next-generation lithium energy storage
        systems designed for high performance, long life, and reliable backup
        power for residential, commercial, and industrial applications.
      </p>

      {/* Image + Content */}
      <section className="flex flex-col lg:flex-col items-center gap-10">
        {/* Image */}
        <div className="flex-1" data-aos="zoom-in">
          <Image
            src="/service/lithium-ess.webp"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
            alt="Lithium energy storage system for solar and backup power"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 p-4" data-aos="fade-up">
          <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
            Why Choose Lithium Energy Storage Systems
          </h2>

          <p className="text-lg text-gray-600">
            Lithium ESS offers superior energy density, fast charging, and longer
            lifecycle compared to traditional batteries. These systems ensure
            stable power supply, peak load management, and seamless integration
            with solar and hybrid setups.
          </p>

          <ul className="space-y-4">
            {[
              "High energy density with compact design",
              "Fast charging and deep discharge capability",
              "Long lifespan with advanced battery management",
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
          Why Choose Us for Lithium ESS?
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            "Advanced Lithium-Ion Technology",
            "High Safety with Smart BMS Protection",
            "Scalable Storage Capacity Solutions",
            "Seamless Solar & Hybrid Integration",
            "24/7 Performance Monitoring",
            "Long-Term Cost Efficiency",
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

      {/* Deployment Process */}
      <section>
        <h2
          className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Core Steps of Our Lithium ESS Deployment
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Energy Requirement Analysis",
              desc: "Evaluate energy usage patterns to design the most efficient lithium storage solution.",
              points: [
                "Load profiling and demand analysis",
                "Battery capacity sizing",
                "Backup duration planning",
              ],
            },
            {
              title: "System Installation",
              desc: "Professional installation of lithium battery banks, inverters, and energy management systems.",
              points: [
                "Battery rack and inverter setup",
                "BMS configuration and safety checks",
                "System integration and testing",
              ],
            },
            {
              title: "Monitoring & Maintenance",
              desc: "Continuous monitoring and preventive maintenance to ensure maximum efficiency.",
              points: [
                "Real-time battery health monitoring",
                "Thermal and safety management",
                "Performance optimization & upgrades",
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
    <section className="flex flex-col lg:flex-row items-center gap-10 py-10 px-4 lg:px-20">
  {/* Image */}
  <div className="flex-1" data-aos="zoom-in">
    <Image
      src="/service/lithium-battery-2.webp"
      width={600}
      height={600}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="w-full h-auto object-contain"
      alt="LFP Battery Pack for residential and commercial solar installations"
      priority
    />
  </div>

  {/* Content */}
  <div className="flex-1 space-y-6" data-aos="fade-up">
    <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
      LFP Battery Pack
    </h2>
   
    <ul className="space-y-4 list-disc pl-6">
      {[
        "Expandable capacity up to 16 units",
        "Inbuilt BMS for enhanced safety and hazard protection",
        "Energy capacity up to 81.92 kWh",
        "Supports both wall-mounted and floor-mounted installation",
        "Cycle life of up to 6000 charge/discharge cycles",
        "Up to 90% Depth of Discharge(DOD)",
        "Up to 1C charge/discharge capability with derating"
      ].map((text, i) => (
        <li key={i} className="text-gray-800 font-medium">
          {text}
        </li>
      ))}
    </ul>
  </div>
</section>

    </main>
    </>
  );
}
