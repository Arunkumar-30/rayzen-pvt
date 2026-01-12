import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
        url: "https://rayzenpower.com/service/solar-power.webp",
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
    images: ["https://rayzenpower.com/service/solar-power.webp"],
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
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Solar Power Installation
          </h2>

        <Link href="/contact-us" className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </Link>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Discover high-efficiency solar power solutions tailored for homes, businesses, and industrial setups. Maximize energy output, reduce electricity costs, and contribute to a sustainable future with our expert installation services.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/solar-power.webp"} // replace with your solar image
              width={600}
              height={300}
              priority
              className="object-contain"
              alt="Solar Panel Installation"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Solar Energy
            </h3>
            <p className="text-lg text-gray-600">
              Harness the power of the sun to reduce your electricity bills and carbon footprint. Our solar installation services ensure optimal panel placement, efficient energy storage, and long-lasting performance.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              {[
                "Customized solar solutions for homes and businesses",
                "Efficient installation with optimized energy output",
                "Long-term savings and sustainable energy practices",
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
            Why Choose Us for Solar Power Installation?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
            {[
              "High-Quality Solar Panels",
              "Expert Installation by Certified Technicians",
              "24/7 Maintenance Support",
              "Optimized Energy Output",
              "Sustainable & Eco-Friendly Solutions",
              "Cost-Effective and Long-Term Savings",
            ].map((text, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                className="bg-[#FDE8E8] border border-[#E91414] p-6  shadow-sm flex items-center justify-center text-center hover:shadow-md transition"
              >
                <p className="text-lg font-semibold text-[#8A0E0E]">
                  {text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Core Components / Installation Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our Solar Installation Program
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Assessment */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Site Assessment
              </h2>
              <p className="text-lg text-gray-600">
                Evaluate your property to determine optimal solar panel placement and energy requirements.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Roof or ground analysis for sunlight exposure
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Energy consumption evaluation
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Site feasibility and safety checks
                  </span>
                </li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Installation
              </h2>
              <p className="text-lg text-gray-600">
                Professional setup of solar panels, inverters, and wiring systems to ensure maximum efficiency.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Safe and precise panel mounting
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Electrical connection and inverter setup
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Quality checks and performance verification
                  </span>
                </li>
              </ul>
            </div>

            {/* Maintenance */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Maintenance & Support
              </h2>
              <p className="text-lg text-gray-600">
                Ongoing monitoring and support to keep your solar system running efficiently for years to come.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Regular system inspections and cleaning
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Troubleshooting and quick repair support
                  </span>
                </li>
                <li>
                  <span className="text-lg font-semibold text-gray-700">
                    Performance optimization tips and energy reporting
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
