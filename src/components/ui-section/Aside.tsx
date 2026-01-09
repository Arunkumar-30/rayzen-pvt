"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const pages = [
  { label: "Solar Power Installation", href: "/services/solar-power-installation" },
  { label: "Home Automation", href: "/services/home-automation" },
  { label: "Hybrid Systems", href: "/services/hybrid-systems" },
  { label: "Lithium ESS", href: "/services/lithium-ess" },
  { label: "CCTV Security Cameras", href: "/services/cctv-security" },
];

export default function Aside() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="p-4 sticky top-28 border border-[#E91414] rounded-lg bg-white">
  

      <ul className="space-y-2">
        {pages.map((item, index) => {
          const active = mounted && pathname === item.href;

          return (
            <li key={index}>
              <Link
                href={item.href}
                className={`block px-3 py-2 rounded-md transition
                  ${
                    active
                      ? "bg-[#E91414] text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
