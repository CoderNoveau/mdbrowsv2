import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in dev for faster build
  },
};

export default nextConfig;
