'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

interface ClientSeoProps {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
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
  ogImage,
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

  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonical.startsWith('http') ? canonical : `https://mdbrows.com.au${canonical}`;
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `https://mdbrows.com.au${ogImage}`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImageUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />
      
      {/* Robots meta */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};

export default ClientSeo; 