import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   reactStrictMode: true,
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
