import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melbourne Designer Brows | #1 Microblading & Cosmetic Tattooing Melbourne',
  description: 'Professional microblading & cosmetic tattooing in Melbourne. Expert eyebrow tattoo, ombré brows & corrections at Richmond & Springvale. 5-star rated, 8+ years experience. Book today from $595.',
  openGraph: {
    title: 'Melbourne Designer Brows - Professional Microblading & Cosmetic Tattooing',
    description: 'Transform your brows with Melbourne\'s premier microblading experts. Professional cosmetic tattooing at Richmond & Springvale locations.',
    images: ['/images/og-home.jpg'],
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