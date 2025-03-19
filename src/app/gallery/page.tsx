import ClientSeo from '@/components/ClientSeo';
import ElfsightWidget from '@/components/ElfsightWidget';

export const metadata = {
  title: 'Microblading Results Gallery | Real Transformations | Melbourne Designer Brows',
  description: 'Browse our microblading and cosmetic tattooing portfolio. See real client transformations from our Melbourne studios. Natural-looking results by expert artists.',
  canonical: 'https://mdbrows.com.au/gallery',
  ogImage: '/og-image.jpg',
};

export default function Gallery() {
  return (
    <div className="page-content">
      <ClientSeo
        title="Microblading Results Gallery | Real Transformations | Melbourne Designer Brows"
        description={metadata.description}
        canonical={metadata.canonical}
        ogImage={metadata.ogImage}
      />
      
      <h1 className="page-section-heading">Microblading Before & After Gallery</h1>
      
      <p className="page-text">
        Browse our portfolio of real client results. From microblading to cosmetic tattooing and brow corrections, 
        our gallery showcases the quality and precision of our work at Melbourne Designer Brows.
      </p>
      
      <div className="gallery-container">
        <ElfsightWidget widgetId="4af60247-4320-4f4c-8fbe-1fc3d78f633f" />
      </div>
      
      <div className="gallery-info" style={{ marginTop: '2rem', textAlign: 'center' }}>
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