"use client";
import React from "react";

interface PageProps {
  heading: string;
  description: string;
}

const HeadingComponent: React.FC<PageProps> = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2
        className="text-[16px] font-bold uppercase text-[#D4AF37]"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {heading}
      </h2>
      <p
        className="text-3xl font-semibold text-black"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {" "}
        {description}
      </p>
    </div>
  );
};

export default HeadingComponent;
