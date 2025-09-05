'use client';

import Script from 'next/script';

interface LocalBusinessSchemaProps {
  name?: string;
  telephone?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  services?: string[];
}

const StructuredData = ({
  name = "Melbourne Designer Brows",
  telephone = "+61418188277",
  address = {
    streetAddress: "Richmond & Springvale Locations",
    addressLocality: "Melbourne",
    addressRegion: "Victoria", 
    postalCode: "3121",
    addressCountry: "AU"
  },
  geo = {
    latitude: -37.8136,
    longitude: 144.9631
  },
  priceRange = "$$$",
  services = [
    "Microblading",
    "Cosmetic Tattooing", 
    "Microneedling",
    "Brow Corrections",
    "Tattoo Removal"
  ]
}: LocalBusinessSchemaProps) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Melbourne Designer Brows",
    "alternateName": "MDBrows",
    "url": "https://mdbrows.com.au",
    "logo": "https://mdbrows.com.au/images/goldlogo-full.webp",
    "sameAs": [
      "https://www.facebook.com/melbournedesignerbrows",
      "https://www.instagram.com/melbournedesignerbrows"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": telephone,
      "contactType": "customer service",
      "availableLanguage": ["English", "Vietnamese", "Mandarin", "Cantonese"]
    },
    "founder": {
      "@type": "Person",
      "name": "Anne Nguyen",
      "jobTitle": "Lead Artist & Founder",
      "description": "Renowned microblading specialist with extensive training in Australia and internationally"
    },
    "foundingDate": "2015",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 10
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": name,
    "image": [
      "https://mdbrows.com.au/images/goldlogo-full.webp",
      "https://mdbrows.com.au/images/hero1.webp"
    ],
    "telephone": telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "url": "https://mdbrows.com.au",
    "priceRange": priceRange,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "serviceType": services,
    "areaServed": {
      "@type": "City",
      "name": "Melbourne",
      "sameAs": "https://en.wikipedia.org/wiki/Melbourne"
    },
    "founder": {
      "@type": "Person",
      "name": "Melbourne Designer Brows Team"
    },
    "description": "Premier eyebrow studio in Melbourne offering microblading, ombré brows, and cosmetic tattooing services at Richmond and Springvale locations.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microblading",
            "description": "Semi-permanent eyebrow enhancement technique creating natural hair-like strokes"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Tattooing",
            "description": "Permanent makeup services including eyeliner and lip tattooing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Microneedling",
            "description": "Skin rejuvenation treatment to improve texture and reduce fine lines"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
    </>
  );
};

export default StructuredData;