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
        url: "https://rayzenpower.com/service/hybrid-systems.webp",
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
    images: ["https://rayzenpower.com/service/hybrid-systems.webp"],
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
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
           Hybrid Power Systems
          </h2>

         <Link href="/contact-us" className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </Link>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Experience uninterrupted power with  hybrid systems that
          intelligently combine solar energy, battery storage, and grid power to
          deliver reliable, efficient, and cost-effective electricity.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/hybrid-systems.webp"}
              width={600}
              height={300}
              priority
              className="object-contain"
              alt=" Hybrid Power System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Hybrid Power Systems
            </h3>
            <p className="text-lg text-gray-600">
              Hybrid power systems ensure continuous energy availability by
              seamlessly switching between solar, battery backup, and grid power.
              They reduce dependency on the grid while maximizing energy savings
              and reliability.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              {[
                "Uninterrupted power using solar, battery, and grid",
                "Reduced electricity bills with smart energy usage",
                "Reliable backup during power cuts and outages",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start bg-[#FDE8E9] p-5"
                >
                  <span className="mr-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#E91414] text-white">
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                  </span>

                  <span className="text-gray-800 font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Why Choose Us for Hybrid Power Systems?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
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
                className="bg-[#FDE8E8] border border-[#E91414] p-6 shadow-sm flex items-center justify-center text-center hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-[#8A0E0E]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our Hybrid System Installation
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Energy Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Analyze your energy consumption and power backup needs to design
                the ideal hybrid system.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Load and usage analysis</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Solar and battery sizing</span></li>
                <li><span className="text-lg font-semibold text-gray-700">System feasibility planning</span></li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                System Installation
              </h2>
              <p className="text-lg text-gray-600">
                Professional installation of solar panels, hybrid inverters, and
                battery storage systems.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Hybrid inverter configuration</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Battery bank integration</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Grid synchronization setup</span></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Monitoring & Support
              </h2>
              <p className="text-lg text-gray-600">
                Continuous monitoring and maintenance to ensure optimal
                performance and long system life.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Real-time energy monitoring</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Preventive maintenance support</span></li>
                <li><span className="text-lg font-semibold text-gray-700">System upgrades & optimization</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
