import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Melbourne Designer Brows | Professional Eyebrow Services',
  titleTemplate: '%s | Melbourne Designer Brows',
  description: 'Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!',
  canonical: 'https://mdbrows.com.au',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mdbrows.com.au',
    siteName: 'Melbourne Designer Brows',
    title: 'Melbourne Designer Brows | Professional Eyebrow Services',
    description: 'Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!',
    images: [
      {
        url: 'https://mdbrows.com.au/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Melbourne Designer Brows - Professional Eyebrow Services',
      },
    ],
  },
  twitter: {
    handle: '@mdbrows',
    site: '@mdbrows',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'eyebrows, microblading, ombré brows, Melbourne, Richmond, Springvale, beauty salon, cosmetic tattooing, brow corrections, tattoo removal',
    },
    {
      name: 'author',
      content: 'Melbourne Designer Brows',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
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
      href: '/manifest.json',
    },
  ],
};

export default config; 