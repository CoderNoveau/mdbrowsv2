import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreloadHero from '@/components/PreloadHero';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Suspense } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ElfsightScriptLoader } from '@/components/ElfsightScriptLoader';
import Script from "next/script";

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
  metadataBase: new URL('https://mdbrows.com.au'),
  title: {
    template: '%s',
    default: 'Melbourne Designer Brows | Professional Eyebrow Services'
  },
  description: 'Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!',
  keywords: 'eyebrow microblading, microblading brow, microblading near me, microblading Melbourne, feathering eyebrows, tattoo eyebrows, microblading eyebrows, cosmetic tattooing Melbourne, lip tattooing Melbourne, eyebrow feathering Melbourne, Richmond microblading, Springvale microblading, Melbourne Designer Brows, ombré brows, powder brows',
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
        {/* We're removing the static canonical link */}
      </head>
      <body>
        <style dangerouslySetInnerHTML={{ __html: fontStylesheet }} />
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <PreloadHero />
        {/* Add a script to ensure canonical URLs are properly set */}
        <Script id="canonical-url" strategy="beforeInteractive">
          {`
            (function() {
              // Create canonical link if it doesn't exist
              let canonicalLink = document.querySelector('link[rel="canonical"]');
              if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.rel = 'canonical';
                const path = window.location.pathname;
                // Ensure path has trailing slash
                const normPath = path.endsWith('/') ? path : path + '/';
                canonicalLink.href = 'https://mdbrows.com.au' + (normPath === '/' ? '' : normPath);
                document.head.appendChild(canonicalLink);
              }
            })();
          `}
        </Script>
        <Script id="preload-hero" strategy="beforeInteractive">
          {`
            const link1 = document.createElement('link');
            link1.rel = 'preload';
            link1.href = '/images/hero1.webp';
            link1.as = 'image';
            link1.type = 'image/webp';
            link1.media = '(min-width: 1024px)';
            document.head.appendChild(link1);
            
            const link2 = document.createElement('link');
            link2.rel = 'preload';
            link2.href = '/images/hero1-tablet.webp';
            link2.as = 'image';
            link2.type = 'image/webp';
            link2.media = '(min-width: 640px) and (max-width: 1023px)';
            document.head.appendChild(link2);
            
            const link3 = document.createElement('link');
            link3.rel = 'preload';
            link3.href = '/images/hero1-mobile.webp';
            link3.as = 'image';
            link3.type = 'image/webp';
            link3.media = '(max-width: 639px)';
            document.head.appendChild(link3);
          `}
        </Script>
        <Script id="slick-style-loader" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              const link1 = document.createElement('link');
              link1.rel = 'stylesheet';
              link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
              document.head.appendChild(link1);
              
              const link2 = document.createElement('link');
              link2.rel = 'stylesheet';
              link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
              document.head.appendChild(link2);
            });
          `}
        </Script>
        <ElfsightScriptLoader>
          <Header />
          <main>{children}</main>
          <Footer />
          <SpeedInsights />
        </ElfsightScriptLoader>
      </body>
    </html>
  );
}
