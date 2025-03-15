import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DefaultSeo } from 'next-seo';
import SEO_CONFIG from './seo-config';
import Script from "next/script";

export const metadata = {
  title: {
    default: "Melbourne Designer Brows | Expert Cosmetic Tattooing & Microblading",
    template: "%s | Melbourne Designer Brows",
  },
  description:
    "Melbourne Designer Brows offers premium microblading, cosmetic tattooing and eyebrow services. Located in Richmond and Springvale.",
  icons: {
    icon: { url: '/images/favicon.ico' },
    shortcut: { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    apple: { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  other: [
    { rel: 'android-chrome-192x192', url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { rel: 'android-chrome-512x512', url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  verification: {
    google: 'your-google-verification-id', // Add your Google verification ID
  },
  alternates: {
    canonical: 'https://mdbrows.com.au',
    languages: {
      'en-AU': 'https://mdbrows.com.au',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mdbrows.com.au',
    siteName: 'Melbourne Designer Brows',
    images: [
      {
        url: 'https://mdbrows.com.au/images/goldlogo-full.jpg',
        width: 1200,
        height: 630,
        alt: 'Melbourne Designer Brows Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mdbrows',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...SEO_CONFIG} />
      </head>
      <body>
        <div className="page-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        {/* Elfsight AI Chatbot | Virtual Brow Assistant */}
        <div className="elfsight-app-8e8727a1-4b36-4b6d-a9e4-b46cbfecae00" data-elfsight-app-lazy></div>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
