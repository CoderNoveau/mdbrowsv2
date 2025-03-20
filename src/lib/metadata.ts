import type { Metadata } from 'next';

const baseUrl = 'https://mdbrows.com.au';

interface MetadataProps {
  title: string;
  description: string;
  path: string;
  ogImage: {
    url: string;
    alt: string;
  };
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage,
}: MetadataProps): Metadata {
  // Ensure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${baseUrl}${normalizedPath}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Melbourne Designer Brows',
      type: 'website',
      images: [{
        url: ogImage.url,
        alt: ogImage.alt,
      }],
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  };
} 