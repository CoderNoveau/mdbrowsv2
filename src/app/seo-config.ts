import { DefaultSeoProps } from 'next-seo';

const SEO_CONFIG: DefaultSeoProps = {
  titleTemplate: '%s | Melbourne Designer Brows',
  defaultTitle: 'Melbourne Designer Brows | Expert Cosmetic Tattooing & Microblading',
  description: 'Melbourne Designer Brows offers premium microblading, cosmetic tattooing and eyebrow services. Located in Richmond and Springvale.',
  canonical: 'https://mdbrows.com.au',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mdbrows.com.au',
    siteName: 'Melbourne Designer Brows',
    title: 'Melbourne Designer Brows | Expert Cosmetic Tattooing & Microblading',
    description: 'Melbourne Designer Brows offers premium microblading, cosmetic tattooing and eyebrow services. Located in Richmond and Springvale.',
    images: [
      {
        url: 'https://mdbrows.com.au/images/goldlogo-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Melbourne Designer Brows Logo',
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
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'eyebrows, microblading, cosmetic tattooing, ombré brows, Melbourne, Richmond, Springvale, beauty salon, tattoo removal',
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
      href: '/site.webmanifest',
    },
  ],
};

export default SEO_CONFIG; 