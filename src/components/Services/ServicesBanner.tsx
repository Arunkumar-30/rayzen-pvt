"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const services = [
  {
    slug: "solar-power-installation",
    title: "Solar Power Installation",
    description:
      "Custom solar power solutions for homes and businesses to generate clean energy, reduce electricity bills, and enjoy long-term sustainable savings.",
  },
  {
    slug: "home-automation",
    title: "Home Automation",
    description:
      "Smart home solutions to control lighting, appliances, and security effortlessly with improved comfort and energy efficiency.",
  },
  {
    slug: "hybrid-systems",
    title: "Hybrid Systems",
    description:
      "Reliable hybrid systems combining solar, grid, and battery power to ensure uninterrupted electricity supply.",
  },
  {
    slug: "lithium-ess",
    title: "Lithium ESS",
    description:
      "Advanced lithium energy storage systems for efficient power backup and smart energy usage.",
  },
  {
    slug: "cctv-security-cameras",
    title: "CCTV Security Cameras",
    description:
      "High-quality CCTV surveillance systems for complete security and round-the-clock monitoring.",
  },
];

const ServicesBanner = () => {
  const pathname = usePathname();
  const [fadeIn, setFadeIn] = useState(false);

  const endUrl = pathname.split("/").pop();

  const currentService =
    services.find((service) => service.slug === endUrl) || {
      title: "Our Services",
      description:
        "Explore our wide range of professional solar and smart energy solutions.",
    };

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] banner-image overflow-hidden">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 flex items-center ${
          fadeIn ? "animate-fade-in" : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mb-4"
            data-aos="zoom-in"
          >
            {currentService.title}
          </h1>

          <p
            className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
            data-aos="zoom-in"
          >
            {currentService.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
