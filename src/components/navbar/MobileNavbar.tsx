"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

interface NavItem {
  href: string;
  label: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
}

interface MobileMenuProps {
  navLink: NavItem[];
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  route: string;
}

const MobileMenu = ({
  navLink,
  isMobileMenuOpen,
  setMobileMenuOpen,
  route,
}: MobileMenuProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 top-[88px] bg-white z-40 overflow-y-auto">
      <div className="px-6 py-6 space-y-6 text-sm">
        {navLink.map((navItem, index) => {
          const isActive =
            route === navItem.href ||
            (navItem.dropdown &&
              navItem.dropdown.some((d) => route.startsWith(d.href)));

          const isOpen = openAccordion === index;

          return (
            <div key={index}>
              {navItem.dropdown ? (
                <>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between font-semibold uppercase"
                  >
                    <span
                      className={`${
                        isActive ? "text-[#E91414]" : "text-gray-800"
                      }`}
                    >
                      {navItem.label}
                    </span>

                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
                  >
                    {navItem.dropdown.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block py-2 font-semibold text-gray-700 hover:text-[#E91414]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={navItem.href}
                  onClick={handleLinkClick}
                  className={`block font-semibold uppercase ${
                    isActive ? "text-[#E91414]" : "text-gray-800"
                  }`}
                >
                  {navItem.label}
                </Link>
              )}
            </div>
          );
        })}

        {/* Contact Button */}
        <Link
          href="/contact-us"
          onClick={handleLinkClick}
          className="block text-center bg-[#E91414] text-white py-2 rounded-full uppercase font-semibold hover:bg-black transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
