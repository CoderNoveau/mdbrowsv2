'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import styles from './reviews.module.css';

interface ReviewData {
  rating: number;
  review: string;
  author: string;
  date: string;
  stars: number;
  source: 'google' | 'facebook' | 'instagram';
  verified: boolean;
}

interface AggregateRating {
  ratingValue: string;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

interface ReviewCounts {
  richmond: number;
  springvale: number;
  total: number;
  displayedCount: number;
}

interface ClientReviewsPageProps {
  reviews: ReviewData[];
  aggregateRating: AggregateRating;
  reviewCounts?: ReviewCounts;
}

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

export default function ClientReviewsPage({ reviews, aggregateRating, reviewCounts }: ClientReviewsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12; // Show 12 reviews per page

  // Extract location from review text (for badge display only)
  const getLocationFromReview = (review: string): string | null => {
    const reviewLower = review.toLowerCase();
    
    // Check for Springvale mentions
    if (reviewLower.includes('springvale')) return 'Springvale';
    
    // Check for Richmond mentions
    if (reviewLower.includes('richmond')) return 'Richmond';
    
    // Additional keywords that might indicate Springvale
    if (reviewLower.includes('springvale shopping centre') || 
        reviewLower.includes('anne\'s shop')) return 'Springvale';
    
    // For reviews without explicit location, assign based on typical patterns
    // Most reviews are Richmond unless they mention Springvale specifically
    return 'Richmond';
  };

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = reviews;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        review =>
          review.review.toLowerCase().includes(searchTerm.toLowerCase()) ||
          review.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    } else {
      filtered = [...filtered].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    }

    return filtered;
  }, [reviews, searchTerm, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = filteredReviews.slice(startIndex, endIndex);

  // Reset to page 1 when search/filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  // Calculate stats
  const stats = useMemo(() => {
    const totalReviews = reviews.length;
    const fiveStarReviews = reviews.filter(r => r.rating === 5).length;
    
    return {
      totalReviews,
      fiveStarReviews,
    };
  }, [reviews]);

  return (
    <div className={styles.reviewsPage}>
      <div className={styles.reviewsPageHeader}>
        <h1 className="page-section-heading">Client Reviews & Testimonials</h1>
        <p className={styles.reviewsSubtitle}>
          Real 5-star reviews from real clients. See why we're Melbourne's most trusted microblading studio.
        </p>
      </div>

      {/* Trust Badges Section */}
      <div className={styles.trustBadgesSection}>
        <div className={styles.googleTrustBadge}>
          <a 
            href="https://www.google.com/search?q=Melbourne+Designer+Brows+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
          >
            <Image 
              src="/images/google-logo.svg" 
              alt="Google Reviews" 
              width={120} 
              height={40}
              style={{ display: 'block' }}
            />
            <p className={styles.googleText}>Read our reviews on Google</p>
          </a>
        </div>
        
        <div className={styles.aggregateRating}>
          <div className={styles.ratingNumber}>{aggregateRating.ratingValue}</div>
          <div className={styles.ratingDetails}>
            <StarRating rating={5} />
            <p className={styles.reviewCount}>Based on {aggregateRating.reviewCount} verified Google reviews</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{stats.totalReviews}</div>
          <div className={styles.statLabel}>5-Star Reviews</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>5.0</div>
          <div className={styles.statLabel}>Average Rating</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>100%</div>
          <div className={styles.statLabel}>Satisfaction Rate</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>2</div>
          <div className={styles.statLabel}>Studio Locations</div>
        </div>
      </div>

      {/* Filter Section */}
      <div className={styles.filterSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search reviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg 
            className={styles.searchIcon}
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>

        <select
          className={styles.sortDropdown}
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'recent' | 'rating')}
        >
          <option value="recent">Most Recent</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Reviews Grid */}
      {currentReviews.length > 0 ? (
        <>
          <div className={styles.reviewsGrid}>
            {currentReviews.map((review, index) => {
              const location = getLocationFromReview(review.review);
              return (
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
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <span className={styles.verifiedBadge}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        Verified
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
                      {location && (
                        <span className={styles.locationBadge}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {location}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button 
                className={styles.paginationBtn}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
                Previous
              </button>
              
              <div className={styles.paginationInfo}>
                <span className={styles.pageNumbers}>
                  Page {currentPage} of {totalPages}
                </span>
                <span className={styles.reviewCount}>
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredReviews.length)} of {filteredReviews.length} reviews
                </span>
              </div>
              
              <button 
                className={styles.paginationBtn}
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.noResults}>
          <h3>No reviews found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

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
            href="https://www.google.com/search?q=Melbourne+Designer+Brows+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Leave a Google Review
          </a>
        </div>
      </div>
    </div>
  );
}