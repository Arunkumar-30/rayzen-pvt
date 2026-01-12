import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Automation Solutions - Rayzen Power",
  description:
    "Upgrade your home with Rayzen Power's smart home automation solutions. Control lighting, appliances, climate, and security for enhanced comfort, safety, and energy efficiency.",
  keywords:
    "home automation, smart home solutions, smart lighting, smart appliances, security automation, energy efficiency, Rayzen Power",
  openGraph: {
    title: "Home Automation Solutions - Rayzen Power",
    description:
      "Upgrade your home with Rayzen Power's smart home automation solutions. Control lighting, appliances, climate, and security for enhanced comfort, safety, and energy efficiency.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/services/home-automation",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/service/home-automation.webp",
        width: 1200,
        height: 630,
        alt: "Home Automation System - Rayzen Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Automation Solutions - Rayzen Power",
    description:
      "Upgrade your home with Rayzen Power's smart home automation solutions. Control lighting, appliances, climate, and security for enhanced comfort, safety, and energy efficiency.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/service/home-automation.webp"],
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
export default function HomeAutomation() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-30 mb-10 space-y-6">
        {/* Title + Button Row */}
        <div
          className="flex flex-col lg:flex-row items-center justify-between"
          data-aos="fade-up"
        >
          <h2 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
            Home Automation Solutions
          </h2>

         <Link href="/contact-us" className="mt-4 lg:mt-0 px-6 py-2 bg-[#E91414] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition">
            Enquire Now
          </Link>
        </div>

        <h3 className="text-lg font-medium text-gray-700 ml-3" data-aos="fade-up">
          Experience smarter living with advanced home automation systems designed
          to enhance comfort, security, and energy efficiency. Control lighting,
          appliances, climate, and security from anywhere with ease.
        </h3>

        {/* Image + Details */}
        <div className="flex flex-col justify-center items-center gap-10">
          {/* Image */}
          <div className="flex-1 space-y-5" data-aos="zoom-in">
            <Image
              src={"/service/home-automation.webp"}
              width={600}
              height={300}
              priority
              className="object-contain"
              alt="Smart Home Automation System"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-5 p-6" data-aos="fade-up">
            <h3 className="josefin-sans text-1xl lg:text-2xl font-semibold text-gray-800 leading-tight">
              Why Choose Home Automation
            </h3>
            <p className="text-lg text-gray-600">
              Transform your home into a smart living space with seamless control
              over lighting, security, climate, and entertainment. Our automation
              solutions improve convenience, safety, and energy efficiency.
            </p>
            <ul className="space-y-4" data-aos="fade-up">
              {[
                "Centralized control of lights, appliances, and devices",
                "Enhanced security with smart locks and surveillance",
                "Energy-efficient automation for reduced power consumption",
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
            Why Choose Us for Home Automation?
          </h2>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
            {[
              "Smart & User-Friendly Automation Systems",
              "Expert Installation & Integration",
              "24/7 Technical Support",
              "Energy-Saving Smart Solutions",
              "Advanced Security & Monitoring",
              "Custom Automation for Every Home",
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

        {/* Core Components / Process */}
        <div className="w-full mt-10 mb-10">
          <h2
            className="mt-10 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight ml-3"
            data-aos="fade-up"
          >
            Core Steps of Our Home Automation Process
          </h2>
          <div className="justify-center gap-20 items-start lg:flex-row flex-col space-y-6 py-5">
            {/* Planning */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Requirement Analysis
              </h2>
              <p className="text-lg text-gray-600">
                Understanding your lifestyle and automation needs to design the
                perfect smart home solution.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Room-by-room automation planning</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Device compatibility assessment</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Customized automation strategy</span></li>
              </ul>
            </div>

            {/* Installation */}
            <div className="space-y-6 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Installation & Setup
              </h2>
              <p className="text-lg text-gray-600">
                Professional installation of smart devices, controllers, and
                automation hubs.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Smart lighting and appliance setup</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Security and surveillance integration</span></li>
                <li><span className="text-lg font-semibold text-gray-700">System testing and configuration</span></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-6 bg-gray-100 p-5" data-aos="fade-up">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                Support & Maintenance
              </h2>
              <p className="text-lg text-gray-600">
                Continuous support to ensure your smart home runs smoothly and
                securely.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="text-lg font-semibold text-gray-700">Software updates and monitoring</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Quick troubleshooting assistance</span></li>
                <li><span className="text-lg font-semibold text-gray-700">Future upgrades and expansion</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
