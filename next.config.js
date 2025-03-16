/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/before-care/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/microblading-faq/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/after-care/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/gallery/',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/microneedling/',
        destination: '/services/microneedling',
        permanent: true,
      },
      {
        source: '/microblading/',
        destination: '/services/microblading',
        permanent: true,
      },
      {
        source: '/cosmetic-tattooing/',
        destination: '/services/cosmetic-tattooing',
        permanent: true,
      },
      {
        source: '/pricing/',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/zip-own-it-now-pay-later/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-conditions/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bookings/',
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