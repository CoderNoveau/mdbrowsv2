import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { getGoogleReviews, calculateAggregateRating } from '@/lib/google-reviews';
import styles from './reviews.module.css';

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

// Star rating component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.starRating} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={star <= rating ? styles.starFilled : styles.starEmpty}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default async function ReviewsPage() {
  // Fetch reviews at build time for SEO
  const reviews = await getGoogleReviews();
  const aggregateRating = calculateAggregateRating(reviews);

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
    review: reviews.map(review => ({
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
      
      <div className={styles.reviewsPage}>
        <div className={styles.reviewsPageHeader}>
          <h1 className="page-section-heading">Client Reviews & Testimonials</h1>
          
          {/* Aggregate Rating Display */}
          <div className={styles.aggregateRating}>
            <div className={styles.ratingNumber}>{aggregateRating.ratingValue}</div>
            <div className={styles.ratingDetails}>
              <StarRating rating={5} />
              <p className={styles.reviewCount}>Based on {aggregateRating.reviewCount}+ reviews</p>
            </div>
          </div>
          
          <p className={styles.reviewsSubtitle}>
            Real reviews from real clients. See why we're Melbourne's most trusted microblading studio.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <article key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.reviewAuthor}>
                  <div className={styles.authorAvatar}>
                    {review.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className={styles.authorName}>{review.author}</h3>
                    <p className={styles.reviewDate}>{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              
              <div className={styles.reviewBody}>
                <p>{review.review}</p>
              </div>
              
              <div className={styles.reviewFooter}>
                <span className={styles.verifiedBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Verified Review
                </span>
                <span className={styles.sourceBadge}>
                  <Image 
                    src="/images/google-logo.svg" 
                    alt="Google" 
                    width={16} 
                    height={16}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  />
                  Google
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.reviewsCta}>
          <h2>Ready to Transform Your Brows?</h2>
          <p>Join hundreds of happy clients with perfect brows</p>
          <div className={styles.ctaButtons}>
            <a 
              href="https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Your Consultation
            </a>
            <a 
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </>
  );
}