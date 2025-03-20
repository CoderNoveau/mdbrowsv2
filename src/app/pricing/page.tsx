import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import PricingContent from './PricingContent';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: 'Service Pricing | Melbourne Designer Brows',
    description: 'View our competitive pricing for microblading, cosmetic tattooing, and other professional beauty services. Transparent pricing and payment options available.',
    ogImage: {
      url: '/images/pricing-hero.webp',
      alt: 'Pricing at Melbourne Designer Brows'
    }
  }, '/pricing');
}

export default function PricingPage() {
  return <PricingContent />;
} 