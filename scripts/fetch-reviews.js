#!/usr/bin/env node

/**
 * Script to fetch reviews from Google Places API and update the static reviews file
 * Run this periodically (e.g., daily via cron) to keep reviews up to date
 */

const fs = require('fs').promises;
const path = require('path');

// Load environment variables from .env.local
try {
  const envPath = path.join(__dirname, '../.env.local');
  const envContent = require('fs').readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
} catch (error) {
  console.error('Warning: Could not load .env.local file');
}

// Configuration
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const RICHMOND_PLACE_ID = process.env.GOOGLE_PLACE_ID_RICHMOND;
const SPRINGVALE_PLACE_ID = process.env.GOOGLE_PLACE_ID_SPRINGVALE;

// Output file path
const OUTPUT_FILE = path.join(__dirname, '../src/lib/static-reviews-data.json');

async function fetchLocationReviews(placeId, locationName) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`;
    
    console.log(`Fetching reviews for ${locationName}...`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error(`Failed to fetch reviews for ${locationName}: ${response.statusText}`);
      return { reviews: [], totalCount: 0, rating: 0 };
    }
    
    const data = await response.json();
    
    if (data.error_message) {
      console.error(`Google API error for ${locationName}: ${data.error_message}`);
      return { reviews: [], totalCount: 0, rating: 0 };
    }
    
    const reviews = data.result?.reviews || [];
    const totalCount = data.result?.user_ratings_total || 0;
    const rating = data.result?.rating || 0;
    
    console.log(`Found ${reviews.length} reviews for ${locationName} (${totalCount} total on Google)`);
    
    // Transform reviews to our format
    const transformedReviews = reviews.map(review => ({
      rating: review.rating,
      review: `${review.text} (${locationName} location)`,
      author: review.author_name,
      date: new Date(review.time * 1000).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long'
      }),
      stars: review.rating,
      source: 'google',
      verified: true,
      profilePhoto: review.profile_photo_url || null,
      originalTime: review.time
    }));
    
    return {
      reviews: transformedReviews,
      totalCount,
      rating,
      location: locationName
    };
  } catch (error) {
    console.error(`Error fetching reviews for ${locationName}:`, error);
    return { reviews: [], totalCount: 0, rating: 0 };
  }
}

async function main() {
  console.log('Starting review fetch process...');
  console.log('================================');
  
  if (!GOOGLE_PLACES_API_KEY) {
    console.error('❌ GOOGLE_PLACES_API_KEY not found in environment variables');
    process.exit(1);
  }
  
  if (!RICHMOND_PLACE_ID || !SPRINGVALE_PLACE_ID) {
    console.error('❌ Place IDs not found in environment variables');
    process.exit(1);
  }
  
  // Fetch reviews from both locations
  const [richmondData, springvaleData] = await Promise.all([
    fetchLocationReviews(RICHMOND_PLACE_ID, 'Richmond'),
    fetchLocationReviews(SPRINGVALE_PLACE_ID, 'Springvale')
  ]);
  
  // Combine all reviews
  const allReviews = [
    ...richmondData.reviews,
    ...springvaleData.reviews
  ];
  
  // Sort by date (newest first)
  allReviews.sort((a, b) => b.originalTime - a.originalTime);
  
  // Prepare the data object
  const reviewsData = {
    lastUpdated: new Date().toISOString(),
    locations: {
      richmond: {
        totalCount: richmondData.totalCount,
        rating: richmondData.rating,
        displayedCount: richmondData.reviews.length
      },
      springvale: {
        totalCount: springvaleData.totalCount,
        rating: springvaleData.rating,
        displayedCount: springvaleData.reviews.length
      }
    },
    reviews: allReviews,
    totals: {
      totalReviewsOnGoogle: richmondData.totalCount + springvaleData.totalCount,
      totalReviewsDisplayed: allReviews.length,
      averageRating: ((richmondData.rating + springvaleData.rating) / 2).toFixed(1)
    }
  };
  
  // Write to file
  try {
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(reviewsData, null, 2));
    console.log(`\n✅ Successfully saved ${allReviews.length} reviews to ${OUTPUT_FILE}`);
    console.log('\nSummary:');
    console.log(`- Richmond: ${richmondData.reviews.length} reviews displayed (${richmondData.totalCount} total on Google)`);
    console.log(`- Springvale: ${springvaleData.reviews.length} reviews displayed (${springvaleData.totalCount} total on Google)`);
    console.log(`- Average rating: ${reviewsData.totals.averageRating}`);
    console.log(`\nNote: Google API only returns up to 5 most recent reviews per location.`);
    console.log(`To display "${richmondData.totalCount + springvaleData.totalCount} total reviews", update the UI to show this count.`);
  } catch (error) {
    console.error('❌ Error writing to file:', error);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);