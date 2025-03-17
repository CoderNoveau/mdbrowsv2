'use client';

import Head from 'next/head';

export default function PreloadHero() {
  return (
    <Head>
      <link
        rel="preload"
        as="image"
        href="/images/hero1-mobile.webp"
        media="(max-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero1-tablet.webp"
        media="(min-width: 769px) and (max-width: 1200px)"
      />
      <link
        rel="preload"
        as="image"
        href="/images/hero1.webp"
        media="(min-width: 1201px)"
      />
    </Head>
  );
} 