// Test script to verify reviews data
const fs = require('fs');
const path = require('path');

// Read the google-reviews.ts file
const filePath = path.join(__dirname, 'src/lib/google-reviews.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Extract the getStaticReviews function content
const funcStart = fileContent.indexOf('function getStaticReviews()');
const funcEnd = fileContent.indexOf('\n}', funcStart) + 2;
const funcContent = fileContent.substring(funcStart, funcEnd);

// Count reviews
const reviews = funcContent.match(/\{[\s\S]*?rating: 5,[\s\S]*?\},/g) || [];
const richmondReviews = funcContent.match(/\(Richmond location\)/g) || [];
const springvaleReviews = funcContent.match(/\(Springvale location\)/g) || [];

console.log('Review Analysis:');
console.log('================');
console.log(`Total reviews found: ${reviews.length}`);
console.log(`Richmond reviews: ${richmondReviews.length}`);
console.log(`Springvale reviews: ${springvaleReviews.length}`);
console.log('');

// Check for reviews without location markers
const reviewsWithoutLocation = [];
reviews.forEach((review, index) => {
  if (!review.includes('(Richmond location)') && !review.includes('(Springvale location)')) {
    reviewsWithoutLocation.push(index + 1);
  }
});

if (reviewsWithoutLocation.length > 0) {
  console.log(`⚠️  Reviews without location markers: ${reviewsWithoutLocation.join(', ')}`);
} else {
  console.log('✅ All reviews have location markers');
}

// Extract author names to verify uniqueness
const authorMatches = funcContent.match(/author: "(.*?)"/g) || [];
const authors = authorMatches.map(match => match.replace(/author: "|"/g, ''));
console.log('\nAuthors found:', authors.length);

// Check for duplicate authors
const duplicates = authors.filter((item, index) => authors.indexOf(item) !== index);
if (duplicates.length > 0) {
  console.log('⚠️  Duplicate authors:', duplicates);
} else {
  console.log('✅ No duplicate authors');
}