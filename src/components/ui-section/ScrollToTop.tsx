"use client";

import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";


export default function ScrollAndContactButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center gap-4">
      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[#d11a19] text-white p-3 rounded-full shadow-lg hover:bg-black transition"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
