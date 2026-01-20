import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Solar Power Installation - Rayzen Power",
  description:
    "Discover high-efficiency solar power solutions for homes, businesses, and industrial setups. Maximize energy output, reduce costs, and enjoy sustainable energy with Rayzen Power.",
  keywords:
    "solar power installation, solar panels, renewable energy, Rayzen Power, solar energy, commercial solar, residential solar",
  openGraph: {
    title: "Solar Power Installation - Rayzen Power",
    description:
      "Discover high-efficiency solar power solutions for homes, businesses, and industrial setups. Maximize energy output, reduce costs, and enjoy sustainable energy with Rayzen Power.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/services/solar-power",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/services/solar-power.webp",
        width: 1200,
        height: 630,
        alt: "Solar Power Installation - Rayzen Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Power Installation - Rayzen Power",
    description:
      "Discover high-efficiency solar power solutions for homes, businesses, and industrial setups. Maximize energy output, reduce costs, and enjoy sustainable energy with Rayzen Power.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/services/solar-power.webp"],
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
export default function SolarPower() {
  return (
    <>
     <Script
        id="solar-power-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Solar Power Installation",
            description:
              "Discover high-efficiency solar power solutions for homes, businesses, and industrial setups. Maximize energy output, reduce costs, and enjoy sustainable energy with Rayzen Power.",
            provider: {
              "@type": "Organization",
              name: "Rayzen Power Private Limited",
              url: "https://www.rayzenpower.com",
            },
            areaServed: {
              "@type": "Country",
              name: "India",
            },
            serviceType: "Solar Panel Installation",
            url: "https://rayzenpower.com/services/solar-power",
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
          Solar Power Installation
        </h1>

        <Link
          href="/contact-us"
          className="px-6 py-2 bg-[#d11a19] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition"
        >
          Enquire Now
        </Link>
      </section>

      {/* Description */}
      <p className="text-lg text-gray-700 max-w-4xl" data-aos="fade-up">
        Discover high-efficiency solar power solutions tailored for homes,
        businesses, and industrial setups. Maximize energy output, reduce
        electricity costs, and contribute to a sustainable future with our
        expert installation services.
      </p>

      {/* Image + Content */}
      <section className="flex flex-col lg:flex-col items-center gap-10">
        {/* Image */}
        <div className="flex-1" data-aos="zoom-in">
          <Image
            src="/service/solar-power.webp"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
            alt="Residential and commercial solar panel installation"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6" data-aos="fade-up">
          <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
            Why Choose Solar Energy
          </h2>

          <p className="text-lg text-gray-600">
            Harness the power of the sun to reduce your electricity bills and
            carbon footprint. Our solar installation services ensure optimal
            panel placement, efficient energy storage, and long-lasting
            performance.
          </p>

          <ul className="space-y-4">
            {[
              "Customized solar solutions for homes and businesses",
              "Efficient installation with optimized energy output",
              "Long-term savings and sustainable energy practices",
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
          Why Choose Us for Solar Power Installation?
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            "High-Quality Solar Panels",
            "Expert Installation by Certified Technicians",
            "24/7 Maintenance Support",
            "Optimized Energy Output",
            "Eco-Friendly Solutions",
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
          Core Steps of Our Solar Installation Program
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Site Assessment",
              desc: "Evaluate your property to determine optimal solar panel placement.",
              points: [
                "Roof and sunlight exposure analysis",
                "Energy consumption evaluation",
                "Safety and feasibility checks",
              ],
            },
            {
              title: "Installation",
              desc: "Professional setup of panels, inverters, and wiring systems.",
              points: [
                "Precision panel mounting",
                "Inverter and electrical connections",
                "Quality and performance testing",
              ],
            },
            {
              title: "Maintenance & Support",
              desc: "Ongoing monitoring and support for long-term efficiency.",
              points: [
                "Regular inspections and cleaning",
                "Fast troubleshooting support",
                "Performance monitoring & reports",
              ],
            },
          ].map((step, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded" data-aos="fade-up">
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
            src="/service/ongrid-inverter.webp"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
            alt="On-grid Inverter"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6" data-aos="fade-up">
          <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
            On-Grid Inverter (1kw - 350kw)
          </h2>

         
<ul className="space-y-4 list-disc pl-6">
  {[
    "Achieves maximum efficiency of up to 98.9%",
    "Equipped with multiple MPPTs featuring advanced IDA Technology",
    "Supports zero-export applications",
    "Allows DC overloading of up to 20%",
    "Offers optional remote monitoring capability",
  ].map((text, i) => (
    <li key={i} className="text-gray-800 font-medium">
      {text}
    </li>
  ))}
</ul>

        </div>
      </section>
    
          {/* Product Section */}
      <section className="bg-[#f9fafb] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-black text-[40px] max-md:text-[28px] font-semibold mb-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            N-Type TOPCon Bifacial Solar Panel
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#585858] text-base xl:text-lg font-medium list-disc pl-5">
            <li>Higher efficiency and superior power output</li>
            <li>Bifacial generation from front and rear sides</li>
            <li>Lower annual degradation rate</li>
            <li>Excellent low-light and high-temperature performance</li>
            <li>Advanced N-Type TOPCon cell technology</li>
            <li>Improved resistance to micro-cracks and PID</li>
            <li>Longer lifespan with extended warranty</li>
            <li>Suitable for rooftop, ground-mounted & tracking systems</li>
            <li>Ideal for commercial & utility-scale projects</li>
            <li>Reliable in high-humidity & coastal regions</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  );
}
