import React from 'react';
import Image from 'next/image';
import ElfsightWidget from '@/components/ElfsightWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews | Melbourne Designer Brows',
  description: 'Read what our clients say about their experiences at Melbourne Designer Brows. Real reviews from real clients about our microblading and cosmetic tattooing services.',
  alternates: {
    canonical: 'https://mdbrows.com.au/about/reviews',
  },
  openGraph: {
    title: 'Client Reviews | Melbourne Designer Brows',
    description: 'Read what our clients say about their experiences at Melbourne Designer Brows. Real reviews from real clients about our microblading and cosmetic tattooing services.',
    url: 'https://mdbrows.com.au/about/reviews',
    images: [{
      url: 'https://mdbrows.com.au/images/reviews-banner.webp',
    }],
    type: 'website',
  },
};

export default function ReviewsPage() {
  return (
    <>
      
      <div className="reviews-page">
        <h1 className="page-heading hide-mobile">Reviews</h1>
        <div className="reviews-page-header">
          <h2 className="section-heading">Client Reviews</h2>
          <p className="reviews-subtitle">See what our clients say about their experience with us</p>
        </div>

        <div className="reviews-widget-container">
          <ElfsightWidget widgetId="afd7ee50-4343-4814-9241-4e0645a154b7" />
        </div>
      </div>

      <style jsx>{`
        .reviews-page {
          padding: 4rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }
        .reviews-page-header {
          text-align: center;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .reviews-subtitle {
          color: #666;
          font-size: 1.1rem;
          margin: 1rem 0;
          max-width: 800px;
          text-align: center;
        }
        .reviews-widget-container {
          padding: 0 1rem;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .reviews-page {
            padding: 6rem 1rem 3rem;
          }
          .hide-mobile {
            display: none;
          }
          .reviews-page-header {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
} 