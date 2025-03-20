'use client';

import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface ClientSeoProps {
  title: string;
  description: string;
  ogImage: string;
}

/**
 * Client-only SEO component that safely handles Next.js App Router integration
 * This component only renders on the client, preventing hydration errors
 */
const ClientSeo: React.FC<ClientSeoProps> = ({ 
  title, 
  description,
  ogImage
}) => {
  const [mounted, setMounted] = useState(false);

  // Only render the component after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `https://mdbrows.com.au${ogImage}`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
};

export default ClientSeo; 