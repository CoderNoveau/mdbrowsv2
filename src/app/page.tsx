import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microblading Melbourne | Expert Eyebrow Tattoo from $595 | Melbourne Designer Brows',
  description: '⭐ 5-Star Rated Microblading Melbourne. Professional eyebrow tattoo & cosmetic tattooing by Anne Nguyen. 8+ years experience, 2000+ happy clients. Richmond & Springvale studios. Book your FREE consultation today!',
  keywords: 'microblading melbourne, eyebrow tattoo melbourne, cosmetic tattooing melbourne, microblading near me, eyebrow microblading melbourne, best microblading melbourne, microblading richmond, microblading springvale, ombre brows melbourne, powder brows melbourne, eyebrow feathering melbourne, anne nguyen microblading',
  openGraph: {
    title: 'Microblading Melbourne | #1 Eyebrow Tattoo Studio - Melbourne Designer Brows',
    description: 'Transform your brows with Melbourne\'s most trusted microblading experts. 5-star rated, 2000+ happy clients. Book your FREE consultation at Richmond or Springvale.',
    images: ['/images/og-home.jpg'],
    type: 'website',
    locale: 'en_AU',
    siteName: 'Melbourne Designer Brows',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microblading Melbourne | Expert Eyebrow Tattoo from $595',
    description: 'Professional microblading & cosmetic tattooing in Melbourne. Book your FREE consultation today!',
  },
  alternates: {
    canonical: 'https://mdbrows.com.au',
  },
};

export default function HomePage() {
  // Comprehensive Local Business + Beauty Salon Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://mdbrows.com.au/#business',
        name: 'Melbourne Designer Brows',
        image: 'https://mdbrows.com.au/images/logo.svg',
        logo: 'https://mdbrows.com.au/images/logo.svg',
        url: 'https://mdbrows.com.au',
        telephone: '+61390000000',
        email: 'info@mdbrows.com.au',
        address: [
          {
            '@type': 'PostalAddress',
            streetAddress: '123 Main Street',
            addressLocality: 'Richmond',
            addressRegion: 'VIC',
            postalCode: '3121',
            addressCountry: 'AU'
          },
          {
            '@type': 'PostalAddress',
            streetAddress: '456 High Street',
            addressLocality: 'Springvale',
            addressRegion: 'VIC',
            postalCode: '3171',
            addressCountry: 'AU'
          }
        ],
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -37.8183,
          longitude: 144.9925
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '17:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '10:00',
            closes: '16:00'
          }
        ],
        priceRange: '$$',
        servesCuisine: 'Beauty Services',
        acceptsReservations: true,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '150',
          bestRating: '5',
          worstRating: '1'
        }
      },
      {
        '@type': 'BeautySalon',
        '@id': 'https://mdbrows.com.au/#beautysalon',
        name: 'Melbourne Designer Brows',
        description: 'Professional microblading and cosmetic tattooing salon in Melbourne',
        url: 'https://mdbrows.com.au',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Beauty Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Microblading',
              description: 'Natural hair-like strokes for perfect eyebrows',
              price: '595',
              priceCurrency: 'AUD',
              availability: 'https://schema.org/InStock',
              url: 'https://mdbrows.com.au/services/microblading'
            },
            {
              '@type': 'Offer',
              name: 'Cosmetic Tattooing',
              description: 'Semi-permanent makeup for brows, lips, and eyeliner',
              price: '495',
              priceCurrency: 'AUD',
              availability: 'https://schema.org/InStock',
              url: 'https://mdbrows.com.au/services/cosmetic-tattooing'
            },
            {
              '@type': 'Offer',
              name: 'Brow Corrections',
              description: 'Fix and correct previous brow work',
              price: '695',
              priceCurrency: 'AUD',
              availability: 'https://schema.org/InStock',
              url: 'https://mdbrows.com.au/services/brow-corrections'
            }
          ]
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://mdbrows.com.au/#website',
        url: 'https://mdbrows.com.au',
        name: 'Melbourne Designer Brows',
        description: 'Professional microblading and cosmetic tattooing in Melbourne',
        publisher: {
          '@id': 'https://mdbrows.com.au/#business'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://mdbrows.com.au/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://mdbrows.com.au/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://mdbrows.com.au'
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <GalleryPreview />
      <Reviews />
      <CTASection />
    </>
  );
}