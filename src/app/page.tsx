import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import HomeContent from './HomeContent';

export const metadata: Metadata = generateMetadata({
  title: 'Melbourne Designer Brows | Professional Eyebrow Services',
  description: 'Premier eyebrow studio in Melbourne offering microblading, ombré brows, and cosmetic tattooing services. Visit our Richmond & Springvale locations.',
  path: '/',
  ogImage: {
    url: '/images/hero.webp',
    alt: 'Melbourne Designer Brows Studio'
  }
});

export default function HomePage() {
  return <HomeContent />;
}
