import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Melbourne Designer Brows | Professional Eyebrow Services",
  description: "Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!",
  keywords: "eyebrows, microblading, ombré brows, Melbourne, Richmond, Springvale, beauty salon",
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/safari-pinned-tab.svg', color: '#b8860b' },
      { rel: 'shortcut icon', url: '/images/favicon.ico' },
      { rel: 'android-chrome-192x192', url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Melbourne Designer Brows',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="preload" 
          href="/images/service-microblading.webp"
          as="image"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="/images/logo.webp"
          as="image"
          fetchPriority="high"
        />
        {/* Structured data for business information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Melbourne Designer Brows",
              "image": "https://mdbrows.com.au/images/goldlogo-full.jpg",
              "url": "https://mdbrows.com.au",
              "telephone": "+61418188277",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Level 1, 382A Bridge Rd",
                  "addressLocality": "Richmond",
                  "addressRegion": "VIC",
                  "postalCode": "3122",
                  "addressCountry": "AU"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Shop 4, 218 Springvale Rd",
                  "addressLocality": "Springvale",
                  "addressRegion": "VIC",
                  "postalCode": "3171",
                  "addressCountry": "AU"
                }
              ],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/melbournedesignerbrows/",
                "https://www.facebook.com/melbournedesignerbrows/"
              ]
            })
          }}
        />
      </head>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Elfsight AI Chatbot | Virtual Brow Assistant */}
        {/* Temporarily commented out for performance testing
        <div className="elfsight-app-8e8727a1-4b36-4b6d-a9e4-b46cbfecae00" data-elfsight-app-lazy></div>
        */}
      </body>
    </html>
  );
}
