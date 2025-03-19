import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreloadHero from '@/components/PreloadHero';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Suspense } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";

// Font display swap ensures text remains visible during webfont load
const fontStylesheet = `
  /* latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aXp-p7K4KLg.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCu173w5aXp-p7K4KLg.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtXK-F2qO0g.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKebunDXbtXK-F2qO0g.woff2) format('woff2');
  }
`;

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | Melbourne Designer Brows',
    default: 'Melbourne Designer Brows | Professional Eyebrow Services',
  },
  description: 'Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!',
  keywords: "eyebrow microblading, microblading Melbourne, microblading brow, feathering eyebrows, cosmetic tattooing Melbourne, eyebrow feathering Melbourne, Richmond microblading, Springvale microblading, tattoo eyebrows, microblading eyebrows, lip tattooing Melbourne, ombré brows, powder brows",
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontStylesheet }} />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <PreloadHero />
        <link
          rel="preload"
          href="/images/hero1.webp"
          as="image"
          type="image/webp"
          media="(min-width: 1024px)"
        />
        <link
          rel="preload"
          href="/images/hero1-tablet.webp"
          as="image"
          type="image/webp"
          media="(min-width: 640px) and (max-width: 1023px)"
        />
        <link
          rel="preload"
          href="/images/hero1-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 639px)"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          media="print"
          data-nc-styles
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          media="print"
          data-nc-styles
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <script 
          dangerouslySetInnerHTML={{ 
            __html: `
              window.addEventListener('load', function() {
                document.querySelectorAll('[data-nc-styles]').forEach(function(link) {
                  link.media = 'all';
                });
              });
            `
          }} 
        />
      </body>
    </html>
  );
}
