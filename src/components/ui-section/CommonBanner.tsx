"use client";

import React, { FC } from "react";

interface BannerProps {
  title: string;
}

const CommonBannerComponent: FC<BannerProps> = ({ title }) => {
  return (
    <div className="relative w-full h-[120px] sm:h-[200px] md:h-[240px] lg:h-[300px] banner-image">
      <div className="absolute inset-0 bg-black/30 flex justify-center items-center px-4">
        <div className="w-full max-w-7xl text-center">
          <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CommonBannerComponent;
