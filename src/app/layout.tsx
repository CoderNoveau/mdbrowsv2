import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Melbourne Designer Brows | Professional Eyebrow Services",
  description: "Premier eyebrow studio in Melbourne offering microblading, ombré brows, and our signature combo at Richmond and Springvale locations. Book your appointment today!",
  keywords: "eyebrows, microblading, ombré brows, Melbourne, Richmond, Springvale, beauty salon",
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
