import Script from 'next/script';

export const metadata = {
  title: 'Gallery | Melbourne Designer Brows',
  description: 'View our portfolio of eyebrow microblading, cosmetic tattooing, and brow correction work. See real results from our Melbourne studios.',
};

export default function Gallery() {
  return (
    <div className="page-content">
      <h1 className="page-heading">Our Work Gallery</h1>
      
      <p className="page-text">
        Browse our portfolio of real client results. From microblading to cosmetic tattooing and brow corrections, 
        our gallery showcases the quality and precision of our work at Melbourne Designer Brows.
      </p>
      
      <div className="gallery-container">
        {/* Elfsight Instagram Feed Widget */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        <div className="elfsight-app-84b79773-a065-4117-a575-67123d886124" data-elfsight-app-lazy></div>
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