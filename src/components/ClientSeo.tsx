'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';

interface ClientSeoProps {
  dynamicTitle?: string;
  dynamicDescription?: string;
  dynamicImage?: string;
}

/**
 * Client-only SEO component for dynamic meta tags only
 * Do not use this for static meta tags - use Next.js metadata instead
 */
const ClientSeo: React.FC<ClientSeoProps> = ({ 
  dynamicTitle, 
  dynamicDescription,
  dynamicImage
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || (!dynamicTitle && !dynamicDescription && !dynamicImage)) {
    return null;
  }

  const fullImageUrl = dynamicImage?.startsWith('http') ? dynamicImage : `https://mdbrows.com.au${dynamicImage}`;
  
  return (
    <Head>
      {dynamicTitle && (
        <>
          <title>{dynamicTitle}</title>
          <meta property="og:title" content={dynamicTitle} />
        </>
      )}
      {dynamicDescription && (
        <>
          <meta name="description" content={dynamicDescription} />
          <meta property="og:description" content={dynamicDescription} />
        </>
      )}
      {dynamicImage && (
        <meta property="og:image" content={fullImageUrl} />
      )}
    </Head>
  );
};

export default ClientSeo; 