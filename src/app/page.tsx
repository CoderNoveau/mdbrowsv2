import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import GalleryPreview from '@/components/GalleryPreview';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melbourne Designer Brows | #1 Microblading & Cosmetic Tattooing Melbourne',
  description: 'Professional microblading & cosmetic tattooing in Melbourne. Expert eyebrow tattoo, ombré brows & corrections at Richmond & Springvale. 5-star rated, 8+ years experience. Book today from $595.',
  openGraph: {
    title: 'Melbourne Designer Brows - Professional Microblading & Cosmetic Tattooing',
    description: 'Transform your brows with Melbourne\'s premier microblading experts. Professional cosmetic tattooing at Richmond & Springvale locations.',
    images: ['/images/og-home.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <GalleryPreview />
      <Reviews />
      <CTASection />
    </>
  );
}