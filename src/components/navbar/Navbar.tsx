"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileNavbar";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const route = usePathname();

  const navLink = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "#services",
      label: "Services",
      dropdown: [
        { label: "Solar Power Installation", href: "/services/solar-power-installation" },
        { label: "Home Automation", href: "/services/home-automation" },
        { label: "Hybrid Systems", href: "/services/hybrid-systems" },
        { label: "Lithium ESS", href: "/services/lithium-ess" },
        { label: "CCTV Security Cameras", href: "/services/cctv-security" },
      ],
    },
    { href: "/career", label: "Career" },
  ];

  return (
    <nav className="bg-white shadow-2xl z-50 w-full py-3">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/rayzen_power.png"
              width={100}
              height={100}
              className="object-contain"
              alt="Brand Logo"
            />
          </Link>

          {/* Mobile Hamburger */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center gap-6 font-semibold relative">

            {navLink.map((navItem, index) => {
              const isServiceActive =
                navItem.href === "#services" &&
                route.startsWith("/services");

              const isActive =
                route === navItem.href || isServiceActive;

              return (
                <div key={index} className="relative group">
                  <Link
                    href={navItem.href}
                    className={`py-2 border-b-2 transition duration-300
                      ${
                        isActive
                          ? "border-[#E91414] text-[#E91414] font-bold"
                          : "border-transparent hover:border-[#E91414]"
                      }
                    `}
                  >
                    {navItem.label}
                  </Link>

                  {/* Dropdown */}
                  {navItem.dropdown && (
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2 top-full mt-4
                        bg-white shadow-xl rounded-lg
                        opacity-0 invisible scale-95
                        group-hover:opacity-100 group-hover:visible group-hover:scale-100
                        transition-all duration-300 z-50 min-w-[260px]
                      "
                    >
                      <ul className="p-4 space-y-2">
                        {navItem.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.href}
                              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#E91414]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact-us"
              className="px-6 py-2 rounded-full bg-[#E91414] text-white font-semibold hover:bg-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        navLink={navLink}
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        route={route}
      />
    </nav>
  );
};

export default NavbarComponent;
