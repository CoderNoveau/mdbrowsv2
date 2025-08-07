'use client';

import Script from 'next/script';

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: {
    name: string;
    address: string;
  };
  organizer?: string;
  offers?: {
    price: string;
    currency: string;
    availability: string;
    validFrom?: string;
    validThrough?: string;
  };
  image?: string;
  url?: string;
  eventType?: string;
}

const EventSchema = ({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer = "Melbourne Designer Brows",
  offers,
  image,
  url,
  eventType = "SaleEvent"
}: EventSchemaProps) => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": eventType,
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "organizer": {
      "@type": "Organization",
      "name": organizer,
      "url": "https://mdbrows.com.au"
    },
    ...(location && {
      "location": {
        "@type": "Place",
        "name": location.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address,
          "addressLocality": "Melbourne",
          "addressRegion": "Victoria",
          "addressCountry": "AU"
        }
      }
    }),
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.currency,
        "availability": offers.availability,
        ...(offers.validFrom && { "validFrom": offers.validFrom }),
        ...(offers.validThrough && { "validThrough": offers.validThrough }),
        "seller": {
          "@type": "Organization",
          "name": "Melbourne Designer Brows"
        }
      }
    }),
    ...(image && { "image": image }),
    ...(url && { "url": url }),
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
  };

  return (
    <Script
      id="event-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(eventSchema)
      }}
    />
  );
};

export default EventSchema;