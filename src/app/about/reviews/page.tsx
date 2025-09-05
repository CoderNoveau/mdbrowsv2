import React from 'react';
import { Metadata } from 'next';
import { getGoogleReviews, calculateAggregateRating, getGoogleReviewCounts } from '@/lib/google-reviews';
import ClientReviewsPage from './ClientReviewsPage';

export const metadata: Metadata = {
  title: 'Client Reviews | 5-Star Microblading Reviews | Melbourne Designer Brows',
  description: 'Read 150+ authentic 5-star reviews from our happy clients. Real transformations, real results. Melbourne\'s most trusted microblading and cosmetic tattooing studio.',
  alternates: {
    canonical: 'https://mdbrows.com.au/about/reviews',
  },
  openGraph: {
    title: 'Client Reviews | Melbourne Designer Brows',
    description: 'Read 150+ authentic 5-star reviews from our happy clients. Real transformations, real results.',
    url: 'https://mdbrows.com.au/about/reviews',
    images: [{
      url: 'https://mdbrows.com.au/images/reviews-banner.webp',
    }],
    type: 'website',
  },
};

export default async function ReviewsPage() {
  // Fetch reviews at build time for SEO
  const allReviews = await getGoogleReviews();
  
  // Filter to only show 5-star reviews
  const fiveStarReviews = allReviews.filter(review => review.rating === 5);
  
  const aggregateRating = calculateAggregateRating(fiveStarReviews);
  const reviewCounts = getGoogleReviewCounts();

  // Rich snippet structured data for reviews
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Melbourne Designer Brows',
    image: 'https://mdbrows.com.au/images/logo.svg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    review: fiveStarReviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.review,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <ClientReviewsPage 
        reviews={fiveStarReviews}
        aggregateRating={aggregateRating}
        reviewCounts={reviewCounts}
      />
    </>
  );
}