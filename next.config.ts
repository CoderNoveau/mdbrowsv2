import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in dev for faster build
  },
  async redirects() {
    return [
      // WordPress specific paths to Next.js paths
      {
        source: '/oxy/microblading',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/oxy/cosmetic-tattooing',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      {
        source: '/cosmetic-tattooing',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      {
        source: '/oxy/microneedling',
        destination: '/services/microneedling',
        permanent: true,
      },
      {
        source: '/microneedling',
        destination: '/services/microneedling',
        permanent: true,
      },
      {
        source: '/oxy/tattoo-removal',
        destination: '/services/tattoo-removal',
        permanent: true,
      },
      {
        source: '/tattoo-removal',
        destination: '/services/tattoo-removal',
        permanent: true,
      },
      {
        source: '/oxy/brow-corrections',
        destination: '/services/brow-corrections',
        permanent: true,
      },
      {
        source: '/brow-corrections',
        destination: '/services/brow-corrections',
        permanent: true,
      },
      {
        source: '/oxy/richmond',
        destination: '/locations/richmond',
        permanent: true,
      },
      {
        source: '/oxy/springvale',
        destination: '/locations/springvale',
        permanent: true,
      },
      {
        source: '/our-locations',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/frequently-asked-questions',
        destination: '/faq',
        permanent: true,
      },
      // WordPress pagination patterns
      {
        source: '/page/:page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/category/:category',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/tag/:tag',
        destination: '/services',
        permanent: true,
      },
      // WordPress archive patterns
      {
        source: '/:year/:month',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/:author',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
