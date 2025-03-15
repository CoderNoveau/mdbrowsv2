import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export const metadata: Metadata = {
  title: "Melbourne Designer Brows | Professional Eyebrow Services",
  description: "Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!",
  keywords: "eyebrows, microblading, ombré brows, Melbourne, Richmond, Springvale, beauty salon",
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    other: [
      { rel: 'android-chrome-192x192', url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="afterInteractive"
      />
      <DefaultSeo {...SEO} />
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
