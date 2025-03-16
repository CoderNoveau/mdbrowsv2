/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during production builds
    ignoreBuildErrors: true,
  },
  // These were moved from experimental to root level
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // Force static export
  output: 'export',
  // Image optimization settings
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compress: true, // Enable GZIP compression
  poweredByHeader: false, // Remove X-Powered-By header
  // Cache settings
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000, // 1 hour
    pagesBufferLength: 2,
  },
  // Static generation settings
  staticPageGenerationTimeout: 120,
  // Asset optimization
  assetPrefix: '',
  async redirects() {
    return [
      // Microblading related redirects
      {
        source: '/before-care',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/before-care/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading-faq',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading-faq/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/after-care',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/after-care/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading/',
        destination: '/services/microblading',
        permanent: true,
      },
      // Other service redirects
      {
        source: '/microneedling',
        destination: '/services/microneedling',
        permanent: true,
      },
      {
        source: '/microneedling/',
        destination: '/services/microneedling',
        permanent: true,
      },
      {
        source: '/cosmetic-tattooing',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      {
        source: '/cosmetic-tattooing/',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      // Legacy page redirects
      {
        source: '/about-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/zip-own-it-now-pay-later',
        destination: '/',
        permanent: true,
      },
      {
        source: '/zip-own-it-now-pay-later/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-conditions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-conditions/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bookings',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bookings/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sample-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sample-page/',
        destination: '/',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig 