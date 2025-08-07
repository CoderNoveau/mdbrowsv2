'use client';

import Script from 'next/script';

interface Review {
  author: string;
  rating: number;
  text: string;
  datePublished?: string;
}

interface ReviewSchemaProps {
  reviews: Review[];
  businessName?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const ReviewSchema = ({ 
  reviews, 
  businessName = "Melbourne Designer Brows",
  aggregateRating
}: ReviewSchemaProps) => {
  const reviewSchemas = reviews.map((review, index) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "BeautySalon",
      "name": businessName
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.text,
    ...(review.datePublished && { "datePublished": review.datePublished })
  }));

  const aggregateSchema = aggregateRating ? {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "BeautySalon",
      "name": businessName
    },
    "ratingValue": aggregateRating.ratingValue,
    "reviewCount": aggregateRating.reviewCount,
    "bestRating": "5"
  } : null;

  return (
    <>
      {reviewSchemas.map((schema, index) => (
        <Script
          key={`review-${index}`}
          id={`review-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      {aggregateSchema && (
        <Script
          id="aggregate-rating-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateSchema)
          }}
        />
      )}
    </>
  );
};

export default ReviewSchema;