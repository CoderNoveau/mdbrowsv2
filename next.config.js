/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
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