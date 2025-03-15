import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Microneedling | Melbourne Designer Brows',
  description: 'Professional microneedling services in Melbourne. Improve skin texture, reduce scars, and boost collagen for younger-looking skin.',
};

export default function Microneedling() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-heading">Microneedling</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/placeholder-microneedling.webp"
          alt="Microneedling procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Microneedling is a minimally invasive cosmetic procedure that creates tiny punctures in the top layer of the skin using 
          micro-fine needles. These micro-injuries trigger the body's natural wound healing processes, resulting in increased cell turnover 
          and collagen production.
        </p>
        
        <p className="page-text">
          For those looking to improve the look of wrinkles, scars, or simply boost collagen for great looking skin, 
          microneedling can help achieve a more youthful, radiant appearance.
        </p>
        
        <h2 className="service-subtitle">The Microneedling Process</h2>
        <p className="page-text">
          The treatment begins with cleansing and applying a numbing cream to ensure comfort during the procedure. 
          Then, using a specialized device, microscopic needles create controlled micro-injuries to the skin. 
          The process typically takes 30-60 minutes depending on the treatment area.
        </p>
        
        <h2 className="service-subtitle">Benefits of Microneedling</h2>
        <ul className="service-benefits">
          <li>Reduces fine lines and wrinkles</li>
          <li>Improves skin texture and tone</li>
          <li>Minimizes acne scars and stretch marks</li>
          <li>Reduces pore size</li>
          <li>Increases product absorption</li>
          <li>Stimulates collagen and elastin production</li>
        </ul>
        
        <h2 className="service-subtitle">Pricing</h2>
        <div className="service-price">
          <span className="price-amount">$250</span>
          <span className="price-description"> - Per Session</span>
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