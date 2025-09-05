# Reviews System Documentation

## Overview
The reviews system displays Google Reviews from both Melbourne Designer Brows locations (Richmond and Springvale). Due to Google API limitations (only 5 most recent reviews per location), we use a hybrid approach.

## Current Stats
- **Richmond**: 72 total reviews on Google (5.0 rating)
- **Springvale**: 16 total reviews on Google (5.0 rating)  
- **Total**: 88 reviews across both locations

## How It Works

### 1. Fetching Reviews
Run this command to fetch the latest reviews from Google:
```bash
npm run fetch-reviews
```

This will:
- Fetch the 5 most recent reviews from each location (10 total)
- Save them to `src/lib/static-reviews-data.json`
- Include the total review counts from Google

### 2. Automatic Updates
You can set up a cron job to run this periodically:
```bash
# Add to crontab -e for daily updates at 2 AM
0 2 * * * cd /path/to/mdbrows3 && npm run fetch-reviews
```

### 3. Manual Updates (Optional)
You can also manually add reviews to `src/lib/google-reviews.ts` in the `getStaticReviews()` function for older reviews that the API doesn't return.

## Files Structure

- `scripts/fetch-reviews.js` - Script to fetch reviews from Google API
- `src/lib/static-reviews-data.json` - Cached reviews data (auto-generated)
- `src/lib/google-reviews.ts` - Reviews data management
- `src/app/about/reviews/page.tsx` - Server component
- `src/app/about/reviews/ClientReviewsPage.tsx` - Client component with filtering

## Display Features

- Shows total count (88) even though API only returns 10 reviews
- Location filtering (Richmond/Springvale/All)
- Search functionality
- Sort by date or rating
- Note explaining limited display with link to Google

## Environment Variables Required
```env
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID_RICHMOND=ChIJOR5rQ0ZD1moRM7G21GXqfTY
GOOGLE_PLACE_ID_SPRINGVALE=ChIJRaC2PtUV1moRm43u_rYA8sM
```

## Deployment
1. Run `npm run fetch-reviews` before building
2. Build: `npm run build`
3. Deploy to Vercel

The reviews will update whenever you run the fetch script and rebuild.