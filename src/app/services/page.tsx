import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import ServicesContent from './ServicesContent';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: 'Our Services | Melbourne Designer Brows',
    description: 'Explore our range of professional eyebrow and cosmetic tattooing services. Microblading, powder brows, combination brows, and more.',
    ogImage: {
      url: '/images/services-hero.webp',
      alt: 'Our Services at Melbourne Designer Brows'
    }
  }, '/services');
}

export default function ServicesPage() {
  return <ServicesContent />;
} 