'use client';

import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

interface ClientSeoProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

/**
 * Client-only SEO component that safely handles Next.js App Router integration
 * This component only renders on the client, preventing hydration errors
 */
const ClientSeo: React.FC<ClientSeoProps> = ({ 
  title, 
  description, 
  canonical,
  ogImage = '/images/goldlogo-full.webp',
  ogType = 'website'
}) => {
  const [mounted, setMounted] = useState(false);

  // Only render the component after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title,
        description,
        url: canonical,
        type: ogType,
        images: [
          {
            url: `https://mdbrows.com.au${ogImage}`,
            width: 1200,
            height: 630,
            alt: `${title}`,
          },
        ],
      }}
    />
  );
};

export default ClientSeo; 