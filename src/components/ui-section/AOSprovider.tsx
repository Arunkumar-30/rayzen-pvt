"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  useEffect(() => {
    AOS.init({
      once: false, // 👈 change this to false to allow repeated animation

      easing: "ease-in-out", // optional: smoothness
    });

    // Refresh on route change or scroll
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default AOSProvider;
