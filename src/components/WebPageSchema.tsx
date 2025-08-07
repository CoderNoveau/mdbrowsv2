'use client';

import Script from 'next/script';

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  speakable?: string[];
}

const WebPageSchema = ({ 
  title, 
  description, 
  url,
  breadcrumbs,
  datePublished,
  dateModified,
  author = "Melbourne Designer Brows",
  speakable
}: WebPageSchemaProps) => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Melbourne Designer Brows",
      "url": "https://mdbrows.com.au"
    },
    ...(author && {
      "author": {
        "@type": "Organization",
        "name": author
      }
    }),
    ...(datePublished && { "datePublished": datePublished }),
    ...(dateModified && { "dateModified": dateModified }),
    ...(breadcrumbs && {
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      }
    }),
    ...(speakable && {
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": speakable
      }
    }),
    "mainEntity": {
      "@type": "BeautySalon",
      "name": "Melbourne Designer Brows",
      "url": "https://mdbrows.com.au"
    }
  };

  return (
    <Script
      id="webpage-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageSchema)
      }}
    />
  );
};

export default WebPageSchema;