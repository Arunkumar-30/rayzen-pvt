"use client";

import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 mt-10 relative">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-1/2 space-y-6">
      <p
        className="text-sm font-bold uppercase text-[#E91414]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Why Choose Rayzen Power?
      </p>

      <h2
        className="text-3xl sm:text-4xl font-semibold text-black leading-snug"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        We’re not just installers. <br className="hidden sm:block" />
        We’re your solar growth partners.
      </h2>

      <p
        className="text-[#585858] text-base sm:text-lg font-medium max-w-xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        At Rayzen Power Private Limited, we provide efficient and future-ready
        solar solutions that ensure long-term savings, sustainability, and
        energy independence.
      </p>

      <Link
        href="/about"
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

    {/* RIGHT CARDS */}
    <div className="w-full lg:w-1/2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[
          {
            icon: "/home/number-1.webp",
            title: "Complete Solar Power Ecosystem",
            desc: "High-efficiency solar panels, advanced inverters, and long-lasting batteries—all from one trusted provider.",
          },
          {
            icon: "/home/number-2.webp",
            title: "Custom Solutions for Every Need",
            desc: "Tailor-made solar systems for homes, businesses, and industries based on space, usage, and budget.",
          },
          {
            icon: "/home/number-3.webp",
            title: "Cutting-Edge & Reliable Technology",
            desc: "Premium products backed by strong after-sales support and expert service.",
          },
          {
            icon: "/home/number-4.webp",
            title: "Maximum Savings & Sustainability",
            desc: "Reduce electricity bills, lower grid dependency, and contribute to a cleaner environment.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="h-full bg-white p-6 rounded-xl border border-[#E91414] hover:border-[#C70F0F] shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-4"
            />

            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h4>

            <p className="text-[#585858] text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

    </>
  );
};

export default WhyChooseUs;
