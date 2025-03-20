import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import LocationsContent from './LocationsContent';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: 'Our Locations | Melbourne Designer Brows',
    description: 'Visit us at our Richmond and Springvale locations in Melbourne. Professional microblading and cosmetic tattooing services at both studios.',
    ogImage: {
      url: '/images/locations-hero.webp',
      alt: 'Melbourne Designer Brows locations'
    }
  }, '/locations');
}

export default function LocationsPage() {
  return <LocationsContent />;
}
