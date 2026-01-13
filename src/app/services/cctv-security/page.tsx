import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCTV Security Cameras - Rayzen Power",
  description:
    "Protect your home or business with Rayzen Power's advanced CCTV security camera systems. Real-time monitoring, HD video recording, night vision, and reliable surveillance solutions.",
  keywords:
    "CCTV security cameras, surveillance systems, HD cameras, night vision, remote monitoring, Rayzen Power",
  openGraph: {
    title: "CCTV Security Cameras - Rayzen Power",
    description:
      "Protect your home or business with Rayzen Power's advanced CCTV security camera systems. Real-time monitoring, HD video recording, night vision, and reliable surveillance solutions.",
    siteName: "Rayzen Power",
    url: "https://rayzenpower.com/services/cctv-security",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://rayzenpower.com/services/cctv-camera.webp",
        width: 1200,
        height: 630,
        alt: "CCTV Security Camera System - Rayzen Power",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTV Security Cameras - Rayzen Power",
    description:
      "Protect your home or business with Rayzen Power's advanced CCTV security camera systems. Real-time monitoring, HD video recording, night vision, and reliable surveillance solutions.",
    creator: "@RayzenPower",
    images: ["https://rayzenpower.com/services/cctv-camera.webp"],
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
export default function CCTVSecurityCameras() {
  return (
    
    <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 space-y-8">
      {/* Header */}
      <header
        className="flex flex-col lg:flex-row items-center justify-between gap-4"
        data-aos="fade-up"
      >
        <h1 className="josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800">
          CCTV Security Camera Systems
        </h1>

        <Link
          href="/contact-us"
          className="px-6 py-2 bg-[#d11a19] text-white font-semibold rounded-lg hover:bg-[#9B0F0F] transition"
        >
          Enquire Now
        </Link>
      </header>

      {/* Intro */}
      <p
        className="text-lg font-medium text-gray-700 max-w-4xl"
        data-aos="fade-up"
      >
        Protect your property with advanced CCTV security camera systems designed
        for real-time monitoring, crime prevention, and complete peace of mind
        for homes, businesses, and industrial premises.
      </p>

 
       {/* Image + Content */}
            <section className="flex flex-col lg:flex-col items-center gap-10">
              {/* Image */}
              <div className="flex-1" data-aos="zoom-in">
                <Image
                   src="/service/cctv-camera.webp"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
               alt="CCTV Security Camera System installation"
                />
              </div>
      
              {/* Content */}
              <div className="flex-1 space-y-6" data-aos="fade-up">
                <h2 className="josefin-sans text-xl lg:text-2xl font-semibold text-gray-800">
                  Why Choose CCTV Security Cameras
                </h2>
      
                <p className="text-lg text-gray-600">
                CCTV surveillance systems provide continuous monitoring, evidence
            recording, and remote access to enhance security. Our solutions
            ensure clear video quality, reliable performance, and intelligent
            monitoring features.
                </p>
      
                <ul className="space-y-4">
                  {[
                    "24/7 surveillance and real-time monitoring",
              "High-definition video recording with night vision",
              "Remote viewing through mobile and desktop devices",
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
          className="mt-12 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800"
          data-aos="fade-up"
        >
          Why Choose Us for CCTV Security Systems?
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          {[
            "High-Resolution IP & Analog Cameras",
            "Expert Camera Placement & Installation",
            "Night Vision & Motion Detection",
            "Remote Monitoring via Mobile App",
            "Secure Data Storage & Playback",
            "Reliable After-Sales Support",
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

      {/* Process */}
      <section>
        <h2
          className="mt-12 josefin-sans text-2xl lg:text-3xl font-semibold text-gray-800"
          data-aos="fade-up"
        >
          Core Steps of Our CCTV Installation Process
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          {/* Step 1 */}
          <div className="bg-gray-100 p-6 space-y-4" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800">
              Site Survey & Planning
            </h3>
            <p className="text-gray-600">
              Evaluate the premises to determine optimal camera placement and
              security coverage.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Entry & exit analysis</li>
              <li>Blind spot identification</li>
              <li>Camera type selection</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className=" bg-gray-100 p-6 space-y-4" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800">
              Camera Installation
            </h3>
            <p className="text-gray-600">
              Professional installation of cameras, DVR/NVR systems, and cabling.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Indoor & outdoor mounting</li>
              <li>DVR/NVR configuration</li>
              <li>Live feed setup</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-100 p-6 space-y-4" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-gray-800">
              Monitoring & Maintenance
            </h3>
            <p className="text-gray-600">
              Ongoing support for optimal performance and security.
            </p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>System health checks</li>
              <li>Storage & playback support</li>
              <li>Upgrades & troubleshooting</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
