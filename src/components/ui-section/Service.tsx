"use client";

import Link from "next/link";
import HeadingComponent from "./Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { link } from "fs";

const services = [
  {
    title: "Solar Power Installation",
    desc: "Custom solar power solutions for homes and businesses to generate clean energy. Reduce electricity bills and enjoy long-term sustainable savings.",
    img: "/service/solar.webp",
    link: "/services/solar-power-installation",
  },
  {
    title: "Home Automation",
    desc: "Smart home solutions to control lighting, appliances, and security effortlessly. Enhance comfort, safety, and energy efficiency with automation.",
    img: "/service/home.webp",
    link: "/services/home-automation",
  },
  {
    title: "Hybrid Systems",
    desc: "Reliable hybrid systems combining solar, grid, and battery power. Ensure uninterrupted electricity with intelligent power management.",
    img: "/service/hybrid.webp",
    link: "/services/hybrid-systems",
  },
  {
    title: "Lithium ESS",
    desc: "Advanced lithium energy storage for efficient power backup and usage. Store excess solar energy and use it anytime you need.",
    img: "/service/lithium.webp",
    link: "/services/lithium-ess",
  },
  {
    title: "CCTV Security Cameras",
    desc: "High-quality CCTV solutions for round-the-clock monitoring and protection. Secure your home and business with advanced surveillance systems.",
    img: "/service/cctv.webp",
    link: "/services/cctv-security",
  },
];



const Service = () => {
  return (
    <section className="bg-[#003366] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading + Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-bold uppercase text-[#E91414]">
              Complete Solar Solutions
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Installation, Maintenance & Support
            </h2>
          </div>

          {/* Custom Arrows */}
          <div className="flex gap-3">
            <button className="service-prev w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-[#E91414] group transition">
              <svg
                className="w-5 h-5 text-black group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="service-next w-10 h-10 bg-white rounded-lg shadow flex items-center justify-center hover:bg-[#E91414] group transition">
              <svg
                className="w-5 h-5 text-black group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".service-next",
            prevEl: ".service-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition h-full">
                <div className="w-full h-48 mb-6 space-y-4 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover rounded-lg" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-[#666] text-sm mb-6">
                  {service.desc}
                </p>
 <Link
        href={service.link}
        className="inline-flex items-center gap-3 rounded-full bg-[#E91414] px-6 py-3 text-white text-sm font-medium transition-all duration-300 hover:bg-[#C70F0F] group"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
          fill="currentColor"
        >
          <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z" />
        </svg>
        Know More
      </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Service;
