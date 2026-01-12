
"use client";
import Image from "next/image";
import Link from "next/link";


const BannerSlider = () => {


  return (
    <>
      {/* Line element positioned relative to viewport */}

      <div className="relative banner-image">
        <div className="relative bg-black/30 w-full overflow-hidden">
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between transition-transform 
          duration-700 ease-in-out h-auto sm:h-[500px] w-full px-6 sm:px-12 py-10 gap-10">
            {/* Left Content */}
            <div
              className="text-white max-w-3xl space-y-6 text-start sm:text-left"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
             Power Your Home & Business with Smart Solar Solutions
              </h1>
              <p className="text-sm sm:text-lg leading-relaxed">
             From efficient solar panel installations to advanced energy storage systems — we help homes and businesses harness clean, reliable, and cost-saving solar energy.
              </p>
              <div className="flex justify-start">
                <Link
                  href="/contact-us"
                  prefetch={true}
                  className="group rounded-full duration-500 text-white p-3 bg-black w-[230px] flex items-center border hover:border-white hover:bg-[#C70F0F] justify-center gap-4 text-sm ">
                  <svg
                    stroke="currentColor"
                    aria-hidden="true"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-white w-[18px] h-[18px] md:w-[32px] md:h-[32px] group-hover:bg-[#5891E010] transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Right-side image */}
            <div
              className="flex justify-center sm:justify-end"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src="/home/img3.webp"
                width={600}
                height={600}
                alt="Solar Panel Installation"
                priority
                className="object-contain w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
