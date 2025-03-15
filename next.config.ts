import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mdbrows.com.au'],
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in dev for faster build
  },
  async redirects() {
    return [
      // WordPress blog URLs to new Next.js URLs
      {
        source: '/blog/:slug',
        destination: '/posts/:slug',
        permanent: true,
      },
      // WordPress category URLs
      {
        source: '/category/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
      // WordPress author pages
      {
        source: '/author/:slug',
        destination: '/about',
        permanent: true,
      },
      // WordPress tag pages
      {
        source: '/tag/:slug',
        destination: '/services',
        permanent: true,
      },
      // WordPress search
      {
        source: '/search/:query',
        destination: '/search?q=:query',
        permanent: true,
      },
      // WordPress feed
      {
        source: '/feed',
        destination: '/rss.xml',
        permanent: true,
      },
      // WordPress common URLs
      {
        source: '/wp-content/:path*',
        destination: '/images/:path*',
        permanent: true,
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
