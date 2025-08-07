import ElfsightWidget from '@/components/ElfsightWidget';
import GalleryGrid from '@/components/GalleryGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Before & After Gallery | Melbourne Designer Brows',
  description: 'Browse our microblading and cosmetic tattooing portfolio. See real client transformations from our Melbourne studios. Natural-looking results by expert artists.',
  openGraph: {
    title: 'Before & After Gallery | Melbourne Designer Brows',
    description: 'Browse our microblading and cosmetic tattooing portfolio. See real client transformations from our Melbourne studios. Natural-looking results by expert artists.',
    url: 'https://mdbrows.com.au/gallery/',
    images: [{
      url: 'https://mdbrows.com.au/images/gallery-banner.webp',
    }],
    type: 'website',
  },
};

export default function Gallery() {
  return (
    <div className="page-content">
      <h1 className="page-section-heading">Our Work Gallery</h1>
      
      <p className="page-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        Browse our portfolio of real client results. From microblading to cosmetic tattooing and brow corrections, 
        see the quality and precision of our work at Melbourne Designer Brows.
      </p>
      
      {/* Our Gallery Component with actual images - TEMPORARILY DISABLED */}
      {/* <div className="gallery-showcase" style={{ marginBottom: '4rem' }}>
        <GalleryGrid />
      </div> */}
      
      {/* Elfsight Widget for additional gallery */}
      <div className="gallery-container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontFamily: 'var(--serif)',
          color: 'var(--accent)',
          fontSize: 'var(--text-2xl)'
        }}>
          Latest Transformations
        </h2>
        <ElfsightWidget widgetId="4af60247-4320-4f4c-8fbe-1fc3d78f633f" />
      </div>
      
      <div className="gallery-info" style={{ marginTop: '3rem', textAlign: 'center' }}>
        <p>
          Follow us on <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a> for 
          our latest work and special offers.
        </p>
        <p>
          Each client's results are unique. Book a consultation to discuss what look would work best for you.
        </p>
      </div>
    </div>
  );
}