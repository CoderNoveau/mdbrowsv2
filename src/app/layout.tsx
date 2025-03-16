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
      { url: '/favicon.ico' }
    ]
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
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link 
          rel="preload" 
          href="/images/service-microblading.webp"
          as="image"
        />
        <link 
          rel="preload" 
          href="/images/logo.webp"
          as="image"
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
        <div className="elfsight-app-8e8727a1-4b36-4b6d-a9e4-b46cbfecae00" data-elfsight-app-lazy></div>
      </body>
    </html>
  );
}
