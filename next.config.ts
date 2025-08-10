import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for hosting compatibility
  output: 'export',
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during production builds  
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    unoptimized: true, // Required for static export
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  // SEO: Enforce no trailing slashes
  trailingSlash: false,
  // Adding redirects for WordPress paths and SEO
  async redirects() {
    return [
      // General page redirects
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      // Services redirects
      {
        source: '/services/eyebrows',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/services/eyebrow-correction',
        destination: '/services/brow-corrections',
        permanent: true,
      },
      {
        source: '/services/permanent-makeup',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      // WordPress category/tag patterns
      {
        source: '/category/:slug*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/services',
        permanent: true,
      },
      // WordPress date archives
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug',
        destination: '/services/:slug',
        permanent: true,
      },
      // Author pages
      {
        source: '/author/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // SEO and Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ];
  },
};

export default nextConfig;
