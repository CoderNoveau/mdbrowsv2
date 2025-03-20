import type { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/lib/metadata';
import ContactContent from './ContactContent';

export function generateMetadata(): Metadata {
  return createMetadata({
    title: 'Contact Us | Melbourne Designer Brows',
    description: 'Book your consultation at our Richmond & Springvale locations. Get in touch for inquiries about our microblading and cosmetic tattooing services.',
    ogImage: {
      url: '/images/contact-hero.webp',
      alt: 'Contact Melbourne Designer Brows'
    }
  }, '/contact');
}

export default function ContactPage() {
  return <ContactContent />;
} 