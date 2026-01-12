import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
        url: "https://rayzenpower.com/service/lithium-ess.webp",
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
    images: ["https://rayzenpower.com/service/lithium-ess.webp"],
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
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
          Lithium Energy Storage Systems (ESS)
          </h2>

        <Link href="/contact-us" className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </Link>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Store energy efficiently with next-generation lithium energy storage
          systems designed for high performance, long life, and reliable backup
          power for residential, commercial, and industrial applications.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/lithium-ess.webp"}
              width={600}
              height={300}
              className="object-contain"
              alt="Lithium Energy Storage System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Lithium Energy Storage Systems
            </h3>
            <p className="text-lg text-gray-600">
              Lithium ESS offers superior energy density, fast charging, and
              longer lifecycle compared to traditional batteries. These systems
              ensure stable power supply, peak load management, and seamless
              integration with solar and hybrid setups.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              {[
                "High energy density with compact design",
                "Fast charging and deep discharge capability",
                "Long lifespan with advanced battery management",
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
            Why Choose Us for Lithium ESS?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
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
            Core Steps of Our Lithium ESS Deployment
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Energy Requirement Analysis
              </h2>
              <p className="text-lg text-gray-600">
                Evaluate energy usage patterns to design the most efficient
                lithium storage solution.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Load profiling and demand analysis</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Battery capacity sizing</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Backup duration planning</span></li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                System Installation
              </h2>
              <p className="text-lg text-gray-600">
                Professional installation of lithium battery banks, inverters,
                and energy management systems.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Battery rack and inverter setup</span></li>
                <li><span className="text-lg font-semibold text-gray-700">BMS configuration and safety checks</span></li>
                <li><span className="text-lg font-semibold text-gray-700">System integration and testing</span></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Monitoring & Maintenance
              </h2>
              <p className="text-lg text-gray-600">
                Continuous monitoring and preventive maintenance to ensure
                maximum efficiency and system longevity.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Real-time battery health monitoring</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Thermal and safety management</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Performance optimization & upgrades</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
