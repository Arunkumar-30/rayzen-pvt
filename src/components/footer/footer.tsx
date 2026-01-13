"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <>
      {/* CTA Banner */}
      <div className="banner-image">
        <div className="relative bg-black/10 bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6">
          <div className="flex items-center justify-center text-center">
            <div className="w-full max-w-4xl space-y-6">
              <p className="text-sm sm:text-lg md:text-xl text-white">
                Call us: +91 9840821382
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Prioritizing renewable <br />
                energy to create a safer world
              </h2>

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

      {/* Footer */}
      <div className="FooterMenu flex justify-between flex-wrap gap-10 mx-auto w-[85%] py-10">
        {/* Logo & About */}
        <div className="w-[320px] text-[#292929] text-[18px]">
          <Link href="/">
            <Image
              src="/logo/rayzen_power.png"
              alt="Rayzen Power Logo"
              width={176}
              height={60}
              className="w-44"
              priority={false}
            />
          </Link>

          <p className="mt-4 text-[16px]">
            Rayzen Power Private Limited provides reliable solar solutions and
            inverters in India. We help businesses and homes optimize energy use
            and embrace sustainable power.
          </p>

            <ul className="flex gap-4 pt-4">
            <li>
              <Link className="hover:text-[#d11a19]" href="https://x.com/rayzenpower" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d11a19]" href="https://www.instagram.com/rayzenpower" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d11a19]" href="https://www.facebook.com/share/1PUByyC79G/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#d11a19]" href="#" rel="noopener noreferrer">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-[18px]">Quick Links</h3>
          <ul className="mt-4 space-y-4 text-[16px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-[18px]">Service List</h3>
          <ul className="mt-4 space-y-4 text-[16px]">
            <li><Link href="/services/solar-power-installation">Solar Power Installation</Link></li>
            <li><Link href="/services/home-automation">Home Automation</Link></li>
            <li><Link href="/services/hybrid-systems">Hybrid Systems</Link></li>
            <li><Link href="/services/lithium-ess">Lithium ESS</Link></li>
            <li><Link href="/services/cctv-security">CCTV Security Cameras</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-[320px] text-[18px]">
          <h3 className="font-bold">Contact Us</h3>

          <ul className="mt-4 space-y-4 text-[16px]">
            <li className="flex gap-2">
              <Image src="/footer/location.webp" className="w-6 h-6 object-contain" priority alt="Location" 
              width={24} height={24} />
              <span>
                1/264, 567, Pollachi Main Rd, Eachanari, Coimbatore,
                Tamil Nadu - 641021
              </span>
            </li>

            <li className="flex gap-2">
              <Image src="/footer/phone.webp" priority alt="Phone" width={24} height={24} />
              <Link href="tel:+919840821382">+91 9840821382</Link>
            </li>

            <li className="flex gap-2">
              <Image src="/footer/email.webp" priority alt="Email" width={24} height={24} />
              <Link href="mailto:info@rayzenpower.com">info@rayzenpower.com</Link>
            </li>
          </ul>
        </div>

        <div className="w-full mt-8 border-t border-[#2929292a]" />

        <p className="w-full text-center text-[14px] mt-4">
          All Rights Reserved © 2026 Rayzen Power Private Limited
        </p>
      </div>
    </>
  );
};

export default FooterComponent;
