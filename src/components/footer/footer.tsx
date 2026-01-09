"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <>
      <div className="banner-image">
       <div className="relative bg-black/30  bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6">
  <div className="flex items-center  justify-center text-center">
    <div className="w-full max-w-4xl space-y-6">

      {/* Phone Number */}
      <p className="text-sm sm:text-lg md:text-xl text-white">
        Call us: +91 9840821382
      </p>

      {/* Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Prioritizing renewable <br />
        energy to create a safer world
      </h2>

      {/* Button */}
      <div className="flex justify-center">
      <Link
                  href="/contact-us"
                  className="group rounded-full duration-500 text-white p-3 bg-black w-[230px] flex items-center border hover:border-white hover:bg-[#C70F0F] justify-center gap-4 text-sm ">
                  <svg
                    stroke="currentColor"
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
  </div>
</div>

      </div>
    <div className="FooterMenu flex justify-between flex-wrap gap-10 mx-auto w-[85%] py-10">
  {/* Logo & About */}
  <div className="text-[#292929] w-[320px] text-[18px]">
    <Link href="/" data-discover="true">
      <img
        className="w-44 md:w-44"
        alt="Rayzen Power Logo"
        loading="lazy"
        src="/logo/rayzen_power.png"
      />
    </Link>
    <p className="mt-4 text-[16px]">
      Rayzen Power Private Limited provides reliable solar solutions and inverters in India. We help businesses and homes optimize energy use and embrace sustainable power.
    </p>

    <ul className="flex gap-4 pt-4">
      <li className="p-2 text-[18px]">
        <Link href="https://x.com/rayzenpower" target="_blank" className="hover:text-[#E91414]">
          <FaXTwitter />
        </Link>
      </li>

      <li className="p-2 text-[18px]">
        <Link
          href="https://www.instagram.com/rayzenpower"
          target="_blank"
          className="hover:text-[#E91414]"
        >
          <FaInstagram />
        </Link>
      </li>

      <li className="p-2 text-[18px]">
        <Link
          href="#"
          target="_blank"
          className="hover:text-[#E91414]"
        >
          <FaFacebookF />
        </Link>
      </li>

      <li className="p-2 text-[18px]">
        <Link
          href="#"
          target="_blank"
          className="hover:text-[#E91414]"
        >
          <FaLinkedinIn />
        </Link>
      </li>
    </ul>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="font-bold text-[18px] text-[#292929]">Quick Links</h3>
    <ul className="text-[16px] text-[#292929] mt-4 space-y-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/career">Career</Link></li>
      <li><Link href="/contact-us">Contact Us</Link></li>
    </ul>
  </div>

  {/* Service List */}
  <div>
    <h3 className="font-bold text-[18px] text-[#292929]">Service List</h3>
    <ul className="text-[16px] text-[#292929] mt-4 space-y-4">
      <li><Link href="/services/solar-power-installation">Solar Power Installation</Link></li>
      <li><Link href="/services/home-automation">Home Automation</Link></li>
      <li><Link href="/services/hybrid-systems">Hybrid Systems</Link></li>
      <li><Link href="/services/lithium-ess">Lithium ESS</Link></li>
      <li><Link href="/services/cctv-security">CCTV Security Cameras</Link></li>
    </ul>
  </div>

  {/* Contact / Location */}
  <div className="text-[#292929] text-[18px] w-[320px]">
    <h3 className="font-bold">Contact Us</h3>
    <ul className="text-[16px] mt-4 space-y-4">
      {/* Location */}
      <li className="flex items-center gap-2">
        <span className="p-2 flex-shrink-0">
          <img
            src="/footer/location.png"
            alt="Location Icon"
            className="w-6 h-6 object-contain"
          />
        </span>
        <span>
          1/264, 567, Pollachi Main Rd, Raj Vijay Nagar, Eachanari, Coimbatore, Tamil Nadu - 641021
        </span>
      </li>

      {/* Phone */}
      <li className="flex items-center gap-2">
        <span className="p-2 flex-shrink-0">
          <img
            src="/footer/phone.png"
            alt="Phone Icon"
            className="w-6 h-6 object-contain"
          />
        </span>
        <Link href="tel:+919840821382">+91 9840821382</Link>
      </li>

      {/* Email */}
      <li className="flex items-center gap-2">
        <span className="p-2 flex-shrink-0">
          <img
            src="/footer/email.png"
            alt="Email Icon"
            className="w-6 h-6 object-contain"
          />
        </span>
        <Link href="mailto:info@rayzenpower.com">info@rayzenpower.com</Link>
      </li>
    </ul>
  </div>
<div className="w-[85%] mx-auto mt-8 border-t border-[#2929292a]"></div>

<div className="h-12 flex justify-center items-center">
  <p className="text-[14px] text-[#292929] text-center">
    All Rights Reserved © 2026 Rayzen Power Private Limited
  </p>
</div>
</div>

    </>
  );
};
export default FooterComponent;
