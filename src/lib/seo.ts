import { DefaultSeoProps } from 'next-seo';

// Default SEO configuration that will be extended on individual pages
export const SEO_DEFAULT_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | Melbourne Designer Brows',
  defaultTitle: 'Melbourne Designer Brows | Premier Microblading & Cosmetic Tattooing',
  description: 'Melbourne\'s premier microblading and cosmetic tattooing salon. Expert services including eyebrow microblading, permanent makeup, and tattoo removal.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mdbrows.com.au/',
    siteName: 'Melbourne Designer Brows',
    images: [
      {
        url: 'https://mdbrows.com.au/images/goldlogo-full.jpg',
        width: 800,
        height: 600,
        alt: 'Melbourne Designer Brows Logo',
      },
    ],
  },
  twitter: {
    handle: '@mdbrows',
    site: '@mdbrows',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}; 