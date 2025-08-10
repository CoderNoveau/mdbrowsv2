'use client';

import Script from 'next/script';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  price?: string;
  duration?: string;
  category?: string;
  provider?: string;
  ratingValue?: number;
  reviewCount?: number;
}

const ServiceSchema = ({
  serviceName,
  description,
  price,
  duration,
  category = "Beauty Service",
  provider = "Melbourne Designer Brows",
  ratingValue = 4.9,
  reviewCount = 150
}: ServiceSchemaProps) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "BeautySalon",
      "name": provider,
      "url": "https://mdbrows.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "Victoria",
        "addressCountry": "AU"
      }
    },
    "serviceType": category,
    "areaServed": {
      "@type": "City", 
      "name": "Melbourne"
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    }),
    ...(duration && {
      "duration": duration
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": 5,
      "worstRating": 1
    }
  };

  return (
    <Script
      id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema)
      }}
    />
  );
};

export default ServiceSchema;