import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Microblading | Melbourne Designer Brows',
  description: 'Professional microblading services in Melbourne. Natural, semi-permanent eyebrows that look real and last longer.',
};

export default function Microblading() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h2 className="page-section-heading">Microblading</h2>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-microblading.webp"
          alt="Microblading service" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Also known as eyebrow feathering, microblading is a semi-permanent eyebrow tattoo procedure that is carried out 
          by our expert technicians using a special handheld microblade. Each eyebrow stroke is manually shaped and blended 
          into the client's existing eyebrow hair which results in a more natural look.
        </p>
        
        <p className="page-text">
          Microblading is perfect for anyone who wants to enhance their natural brows. Whether you have thin, over-plucked, 
          or patchy eyebrows, microblading can give you perfect, natural-looking brows.
        </p>
        
        <h3 className="page-section-subheading">The Microblading Process</h3>
        <p className="page-text">
          The procedure typically takes about 2 hours to complete. First, we discuss your desired shape and 
          color. Then, we apply a numbing cream to minimize discomfort. Using the microblade tool, we create 
          fine, hair-like strokes that blend with your natural eyebrows.
        </p>
        
        <h3 className="page-section-subheading">Benefits of Microblading</h3>
        <ul className="service-benefits">
          <li>Save time on your morning makeup routine</li>
          <li>Wake up with perfect brows every day</li>
          <li>Results last 1-3 years with proper aftercare</li>
          <li>Waterproof and smudge-proof</li>
          <li>Natural-looking results</li>
        </ul>
        
        <h3 className="page-section-subheading">Pricing</h3>
        <div className="service-price">
          <span className="price-amount">$595</span>
          <span className="price-description"> - Special Promotion</span>
        </div>
        
        <div className="service-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </div>
    </div>
  );
} 