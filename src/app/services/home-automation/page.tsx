import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";

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
        url: "https://rayzenpower.com/services/home-automation.webp",
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
    images: ["https://rayzenpower.com/services/home-automation.webp"],
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
        <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Home Automation Solutions",
            "description":
              "Smart home automation solutions for controlling lighting, appliances, climate, and security for enhanced comfort, safety, and energy efficiency.",
            "provider": {
              "@type": "Organization",
              "name": "Rayzen Power Private Limited",
              "url": "https://www.rayzenpower.com"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "serviceType": "Smart Home Automation",
            "url": "https://rayzenpower.com/services/home-automation"
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
          Home Automation Solutions
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
        Experience smarter living with advanced home automation systems designed
        to enhance comfort, security, and energy efficiency. Control lighting,
        appliances, climate, and security from anywhere with ease.
      </p>

      {/* Image + Content */}
      <section className="flex flex-col lg:flex-col items-center gap-10">
        {/* Image */}
        <div className="flex-1" data-aos="zoom-in">
          <Image
            src="/service/home-automation.webp"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto object-contain"
            alt="Smart home automation system with lighting, security, and climate control"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6 p-4" data-aos="fade-up">
          <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
            Why Choose Home Automation
          </h2>

          <p className="text-lg text-gray-600">
            Transform your home into a smart living space with seamless control
            over lighting, security, climate, and entertainment. Our automation
            solutions improve convenience, safety, and energy efficiency.
          </p>

          <ul className="space-y-4">
            {[
              "Centralized control of lights, appliances, and devices",
              "Enhanced security with smart locks and surveillance",
              "Energy-efficient automation for reduced power consumption",
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
          Why Choose Us for Home Automation?
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
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
              className="bg-[#FDE8E8] border border-[#d11a19] p-6 rounded-lg text-center hover:shadow-md transition"
            >
              <p className="text-lg font-semibold text-[#8A0E0E]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Automation Process */}
      <section>
        <h2
          className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Core Steps of Our Home Automation Process
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Requirement Analysis",
              desc: "Understanding your lifestyle and automation needs to design the perfect smart home solution.",
              points: [
                "Room-by-room automation planning",
                "Device compatibility assessment",
                "Customized automation strategy",
              ],
            },
            {
              title: "Installation & Setup",
              desc: "Professional installation of smart devices, controllers, and automation hubs.",
              points: [
                "Smart lighting and appliance setup",
                "Security and surveillance integration",
                "System testing and configuration",
              ],
            },
            {
              title: "Support & Maintenance",
              desc: "Continuous support to ensure your smart home runs smoothly and securely.",
              points: [
                "Software updates and monitoring",
                "Quick troubleshooting assistance",
                "Future upgrades and expansion",
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
    </main>
      </>
  );
}
