"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const testimonials = [
    {
      name: "Arunkumar",
      role: "Frontend Developer",
      text: "Rayzen Power delivered excellent solar solutions with professional installation and great after-sales support.",
    },
    {
      name: "Suresh",
      role: "Business Owner",
      text: "Highly satisfied with inverter installation. Reduced electricity cost significantly.",
    },
    {
      name: "Karthik",
      role: "Home Owner",
      text: "The solar panel quality is top-notch. Team explained everything clearly.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading + Arrows */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-sm font-bold uppercase text-[#E91414]">Testimonials</p>
          <h2 className="text-3xl font-semibold text-black">What Our Clients Say</h2>
        </div>

       <div className="flex gap-3">
  <button
    ref={prevRef}
    className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-[#E91414] hover:text-white"
  >
    <span className="sr-only">Previous slide</span>
    ❮
  </button>

  <button
    ref={nextRef}
    className="w-10 h-10 rounded-lg border flex items-center justify-center hover:bg-[#E91414] hover:text-white"
  >
    <span className="sr-only">Next slide</span>
    ❯
  </button>
</div>

      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        spaceBetween={24}
        autoplay={{ delay: 4000 }}
        breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
        onBeforeInit={(swiper: SwiperType) => {
          // assign refs to Swiper navigation here
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation // just enable it; refs are handled in onBeforeInit
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white border border-[#E91414] rounded-xl p-6 max-w-[580px] flex gap-4">
              <Image
                src="/home/man.webp"
                alt="Client"
                width={150}
                height={150}
                priority
                className="w-28 h-28 rounded-lg object-cover"
              />
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-[#e91414] text-sm">{item.role}</span>
                </div>

                <div className="flex gap-1 my-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Image key={s} src="/home/star.webp" priority alt="star" width={18} height={18} />
                  ))}
                </div>

                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
