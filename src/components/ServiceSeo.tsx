'use client';

import React from 'react';
import { NextSeo } from 'next-seo';

interface ServiceSeoProps {
  title: string;
  description: string;
  serviceName: string;
  imageUrl: string;
}

/**
 * Client component for service page SEO
 * This can be imported into server components without issues
 */
const ServiceSeo: React.FC<ServiceSeoProps> = ({ 
  title, 
  description, 
  serviceName,
  imageUrl
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`https://mdbrows.com.au/services/${serviceName}`}
      openGraph={{
        title,
        description,
        url: `https://mdbrows.com.au/services/${serviceName}`,
        type: 'article',
        images: [
          {
            url: `https://mdbrows.com.au${imageUrl}`,
            width: 1200,
            height: 630,
            alt: `${title} at Melbourne Designer Brows`,
          },
        ],
      }}
    />
  );
};

export default ServiceSeo; 