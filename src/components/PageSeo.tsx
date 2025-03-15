'use client';

import React from 'react';
import { NextSeo } from 'next-seo';

interface PageSeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
}

/**
 * Helper component to add SEO metadata to individual pages
 * Use this component alongside the metadata export in App Router pages
 * to ensure both SSR and client-side metadata are properly managed
 */
const PageSeo: React.FC<PageSeoProps> = ({ 
  title, 
  description, 
  canonical,
  openGraph 
}) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title: openGraph?.title || title,
        description: openGraph?.description || description,
        url: openGraph?.url || canonical,
        type: openGraph?.type || 'website',
        images: openGraph?.images,
      }}
    />
  );
};

export default PageSeo; 