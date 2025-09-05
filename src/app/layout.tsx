import type { Metadata, Viewport } from "next";
import { Suspense } from 'react';
import Script from "next/script";
import "./globals.css";
import "./mobile-fixes.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ElfsightScriptLoader } from '@/components/ElfsightScriptLoader';
import StructuredData from '@/components/StructuredData';
import SkipToContent from '@/components/SkipToContent';
import CookieConsent from '@/components/CookieConsent';

// Optimized viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Allow zoom for accessibility
  userScalable: true,
};

// Enhanced metadata with all SEO essentials
export const metadata: Metadata = {
  metadataBase: new URL('https://mdbrows.com.au'),
  title: {
    template: '%s | MDBrows',
    default: 'MDBrows | Professional Microblading Melbourne'
  },
  description: 'Professional microblading & cosmetic tattooing in Melbourne. Expert eyebrow tattoo, ombré brows & corrections at Richmond & Springvale. 5-star rated, 8+ years experience. Book today from $595.',
  keywords: 'microblading Melbourne, eyebrow tattoo Melbourne, cosmetic tattooing Melbourne, microblading Richmond, microblading Springvale, ombré brows Melbourne, powder brows, eyebrow feathering, permanent makeup Melbourne, brow corrections Melbourne, microblading near me, eyebrow microblading cost, best microblading Melbourne, eyebrow tattoo near me, semi permanent eyebrows',
  authors: [{ name: 'Melbourne Designer Brows', url: 'https://mdbrows.com.au' }],
  creator: 'Melbourne Designer Brows',
  publisher: 'Melbourne Designer Brows',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mdbrows.com.au',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mdbrows.com.au',
    siteName: 'Melbourne Designer Brows',
    title: 'MDBrows | Professional Microblading Melbourne',
    description: 'Transform your brows with Melbourne\'s premier microblading experts. Professional cosmetic tattooing at Richmond & Springvale locations.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Melbourne Designer Brows - Professional Microblading Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MDBrows | Professional Microblading Melbourne',
    description: 'Professional microblading & cosmetic tattooing in Melbourne. Book your consultation today.',
    images: ['/images/twitter-card.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#c0a669' },
    ]
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Inline critical fonts for faster loading */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w5aXp-p7K4KLg.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
        ` }} />
        
        {/* Preload critical images - only on homepage */}
        <link rel="preload" as="image" href="/images/hero1.webp" media="(min-width: 1024px)" />
        <link rel="preload" as="image" href="/images/hero1-tablet.webp" media="(min-width: 640px) and (max-width: 1023px)" />
        <link rel="preload" as="image" href="/images/hero1-mobile.webp" media="(max-width: 639px)" />
      </head>
      <body className="antialiased">
        {/* Skip to content link for accessibility */}
        <SkipToContent />
        
        {/* Google Analytics */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        
        {/* Structured Data for SEO */}
        <StructuredData />
        
        {/* Main App Structure */}
        <ElfsightScriptLoader>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ElfsightScriptLoader>
        
        {/* Cookie Consent */}
        <Suspense fallback={null}>
          <CookieConsent />
        </Suspense>
        
        {/* Performance Monitoring */}
        <SpeedInsights />
        
        {/* Schema.org LocalBusiness structured data */}
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "@id": "https://mdbrows.com.au/#organization",
              "name": "Melbourne Designer Brows",
              "image": "https://mdbrows.com.au/images/logo.png",
              "logo": "https://mdbrows.com.au/images/logo.png",
              "telephone": "+61-3-9XXX-XXXX",
              "email": "info@mdbrows.com.au",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Richmond Location",
                  "addressLocality": "Richmond",
                  "addressRegion": "VIC",
                  "postalCode": "3121",
                  "addressCountry": "AU"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Springvale Location",
                  "addressLocality": "Springvale",
                  "addressRegion": "VIC",
                  "postalCode": "3171",
                  "addressCountry": "AU"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": -37.8199,
                  "longitude": 144.9923
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": -37.9514,
                  "longitude": 145.1526
                }
              ],
              "url": "https://mdbrows.com.au",
              "sameAs": [
                "https://www.facebook.com/melbournedesignerbrows",
                "https://www.instagram.com/melbournedesignerbrows"
              ],
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
                  "closes": "16:00"
                }
              ],
              "priceRange": "$$$",
              "servesCuisine": "Australian",
              "acceptsReservations": true,
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "150"
              }
            })
          }}
        />
      </body>
    </html>
  );
}