'use client';

import Script from 'next/script';

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
  keywords?: string[];
  category?: string;
}

const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript,
  keywords,
  category = "Beauty"
}: VideoSchemaProps) => {
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": uploadDate,
    "duration": duration,
    "creator": {
      "@type": "Organization",
      "name": "Melbourne Designer Brows",
      "url": "https://mdbrows.com.au"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Melbourne Designer Brows",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mdbrows.com.au/images/goldlogo-full.webp"
      },
      "url": "https://mdbrows.com.au"
    },
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    ...(transcript && { "transcript": transcript }),
    ...(keywords && { "keywords": keywords.join(", ") }),
    "genre": category,
    "inLanguage": "en-AU",
    "isAccessibleForFree": true,
    "learningResourceType": "Tutorial",
    "educationalLevel": "Beginner",
    "about": {
      "@type": "Thing",
      "name": "Microblading and Eyebrow Tattooing",
      "description": "Semi-permanent eyebrow enhancement techniques"
    },
    "mentions": [
      {
        "@type": "Service",
        "name": "Microblading",
        "description": "Semi-permanent eyebrow enhancement technique"
      },
      {
        "@type": "Service", 
        "name": "Cosmetic Tattooing",
        "description": "Permanent makeup services"
      }
    ],
    "commentCount": 0,
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 0
    }
  };

  return (
    <Script
      id="video-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoSchema)
      }}
    />
  );
};

export default VideoSchema;