import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/_next/static/',
          '/_next/image',
        ],
        disallow: [
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: 'https://mdbrows.com.au/sitemap.xml',
    host: 'https://mdbrows.com.au',
  }
}