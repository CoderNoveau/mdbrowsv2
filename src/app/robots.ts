import { MetadataRoute } from 'next'

// Force static generation for better performance
export const dynamic = 'force-static'

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
          '/*.json$',
          '/*?*utm_',
          '/*?*ref=',
          '/*?*session=',
          '/*?*token=',
        ],
        crawlDelay: 0, // No delay for faster crawling
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/_next/static/',
          '/_next/image',
          '/images/',
          '/*.css$',
          '/*.js$',
          '/*.webp$',
          '/*.jpg$',
          '/*.png$',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/*?*utm_',
          '/*?*ref=',
        ],
        crawlDelay: 0, // Critical: No delay for Google
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/images/',
          '/_next/image',
          '/*.webp$',
          '/*.jpg$',
          '/*.png$',
        ],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
        ],
        crawlDelay: 1,
      },
      // Social media crawlers - CRITICAL for social proof and backlinks
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      // Block bad bots that waste crawl budget
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://mdbrows.com.au/sitemap.xml',
      'https://mdbrows.com.au/sitemap-0.xml',
    ],
    host: 'https://mdbrows.com.au',
  }
}