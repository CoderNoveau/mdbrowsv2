import Script from 'next/script';

interface Location {
  name: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
  image?: string;
}

const locations: Location[] = [
  {
    name: 'Melbourne Designer Brows - Richmond',
    streetAddress: '123 Bridge Road',  // Update with real address
    addressLocality: 'Richmond',
    postalCode: '3121',
    latitude: -37.8199,
    longitude: 144.9923,
    mapUrl: 'https://g.page/mdbrows-richmond',
    image: 'https://mdbrows.com.au/images/richmond-studio.jpg'
  },
  {
    name: 'Melbourne Designer Brows - Springvale',
    streetAddress: '456 Springvale Road',  // Update with real address
    addressLocality: 'Springvale',
    postalCode: '3171',
    latitude: -37.9514,
    longitude: 145.1526,
    mapUrl: 'https://g.page/mdbrows-springvale',
    image: 'https://mdbrows.com.au/images/springvale-studio.jpg'
  }
];

export default function LocalBusinessSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mdbrows.com.au/#organization",
    "name": "Melbourne Designer Brows",
    "alternateName": ["MDBrows", "Melbourne Designer Brows Richmond", "Melbourne Designer Brows Springvale"],
    "url": "https://mdbrows.com.au",
    "logo": "https://mdbrows.com.au/images/logo.svg",
    "sameAs": [
      "https://www.facebook.com/melbournedesignerbrows",
      "https://www.instagram.com/mdbrowsau",
      "https://www.youtube.com/@mdbrows"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-3-9XXX-XXXX",
      "contactType": "customer service",
      "areaServed": "AU",
      "availableLanguage": ["English"]
    }
  };

  const locationsSchema = locations.map((location, index) => ({
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `https://mdbrows.com.au/#location-${index + 1}`,
    "name": location.name,
    "parentOrganization": {
      "@id": "https://mdbrows.com.au/#organization"
    },
    "image": location.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.streetAddress,
      "addressLocality": location.addressLocality,
      "addressRegion": "VIC",
      "postalCode": location.postalCode,
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "url": "https://mdbrows.com.au",
    "telephone": "+61-3-9XXX-XXXX",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "Amazing microblading results! Anne is so professional and talented.",
        "datePublished": "2024-01-15"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Microblading",
            "description": "Semi-permanent eyebrow tattooing with natural hair-like strokes"
          },
          "price": "595",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ombré Powder Brows",
            "description": "Soft powder effect for fuller looking brows"
          },
          "price": "550",
          "priceCurrency": "AUD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brow Correction",
            "description": "Fix and correct previous brow work"
          },
          "price": "695",
          "priceCurrency": "AUD"
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Melbourne",
        "containedInPlace": {
          "@type": "State",
          "name": "Victoria"
        }
      },
      {
        "@type": "City",
        "name": location.addressLocality
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": location.latitude,
        "longitude": location.longitude
      },
      "geoRadius": "30000"
    },
    "knowsAbout": [
      "Microblading",
      "Eyebrow Tattoo",
      "Cosmetic Tattooing",
      "Permanent Makeup",
      "Ombré Brows",
      "Powder Brows",
      "Eyebrow Feathering",
      "Brow Lamination"
    ],
    "hasMap": location.mapUrl,
    "publicAccess": true,
    "isAccessibleForFree": false,
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "slogan": "Perfect Brows, Every Day",
    "makesOffer": [
      {
        "@type": "Offer",
        "name": "New Client Special",
        "description": "Save $50 on your first microblading appointment",
        "price": "545",
        "priceCurrency": "AUD",
        "validFrom": "2024-01-01",
        "validThrough": "2024-12-31"
      }
    ]
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://mdbrows.com.au",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://mdbrows.com.au/locations",
          "name": "Locations"
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Microblading",
    "provider": {
      "@id": "https://mdbrows.com.au/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Victoria",
      "containedInPlace": {
        "@type": "Country",
        "name": "Australia"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Microblading Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Microblading Melbourne",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Microblading Richmond"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Microblading Springvale"
              }
            }
          ]
        }
      ]
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...locationsSchema,
      breadcrumbSchema,
      serviceSchema
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(combinedSchema)
      }}
    />
  );
}