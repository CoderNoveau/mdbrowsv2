import Link from 'next/link';
import Image from 'next/image';
import TrackingAnchor from '@/components/TrackingAnchor';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microneedling & Collagen Therapy | Melbourne Designer Brows',
  description: 'Professional microneedling treatments in Melbourne. Boost collagen production, reduce fine lines, and improve skin texture. Advanced skin rejuvenation with minimal downtime.',
  openGraph: {
    title: 'Microneedling & Collagen Therapy | Melbourne Designer Brows',
    description: 'Professional microneedling treatments in Melbourne. Boost collagen production, reduce fine lines, and improve skin texture. Advanced skin rejuvenation with minimal downtime.',
    url: 'https://mdbrows.com.au/services/microneedling/',
    images: [{
      url: 'https://mdbrows.com.au/images/service-microneedling.webp',
    }],
    type: 'article',
  },
};

export default function Microneedling() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-section-heading">Microneedling</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-microneedling.webp"
          alt="Microneedling procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Microneedling is a minimally invasive cosmetic procedure that uses fine needles to create tiny punctures 
          in the skin, which triggers the body's natural healing process and stimulates collagen production.
        </p>
        
        <p className="page-text" style={{ marginBottom: '2.5rem' }}>
          This treatment is highly effective for improving skin texture, reducing fine lines, and minimizing the 
          appearance of scars and pores.
        </p>
        
        <div className="service-section" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#fff8f5', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0' }}>The Microneedling Process</h3>
          <p className="page-text">
            During the treatment, a specialized device with fine needles creates controlled micro-injuries to the skin. 
            This process stimulates the production of collagen and elastin, leading to rejuvenated, firmer skin.
          </p>
          
          <div style={{ margin: '1.5rem 0', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: '6px' }}>
            <h4 style={{ color: 'var(--accent)', marginBottom: '0.75rem', textAlign: 'center' }}>What to Expect</h4>
            <ol style={{ paddingLeft: '1.2rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>A thorough cleansing of your skin</li>
              <li style={{ marginBottom: '0.5rem' }}>Application of a topical numbing cream for comfort</li>
              <li style={{ marginBottom: '0.5rem' }}>Controlled application of the microneedling device</li>
              <li style={{ marginBottom: '0.5rem' }}>Application of soothing serums to maximize benefits</li>
              <li>Post-treatment care instructions</li>
            </ol>
          </div>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem' }}>
          <h3 className="page-section-subheading" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Benefits of Microneedling</h3>
          <ul className="service-benefits" style={{ margin: '1.5rem 0' }}>
            <li><strong>Improves</strong> skin texture and tone</li>
            <li><strong>Reduces</strong> appearance of scars and stretch marks</li>
            <li><strong>Minimizes</strong> pore size</li>
            <li><strong>Enhances</strong> product absorption</li>
            <li><strong>Stimulates</strong> natural collagen production</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', borderLeft: '4px solid var(--accent)', paddingLeft: '1.5rem' }}>
          <h3 className="page-section-subheading">Ideal Candidates for Microneedling</h3>
          <p className="page-text">
            Microneedling is suitable for most skin types and can address a variety of concerns. You may be an ideal candidate if you have:
          </p>
          <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
            <li>Fine lines and early signs of aging</li>
            <li>Acne scars or surgical scars</li>
            <li>Uneven skin texture</li>
            <li>Enlarged pores</li>
            <li>Sun damage or hyperpigmentation</li>
          </ul>
        </div>
        
        <div className="service-section" style={{ marginBottom: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
          <h3 className="page-section-subheading" style={{ marginTop: '0', textAlign: 'center' }}>Post-Treatment Care</h3>
          <p className="page-text" style={{ marginBottom: '1rem' }}>
            After your microneedling treatment, your skin will need special care to heal properly and maximize results:
          </p>
          <ul style={{ paddingLeft: '1.2rem' }}>
            <li>Avoid sun exposure for at least 48 hours</li>
            <li>Use gentle, fragrance-free skincare products</li>
            <li>Stay hydrated and apply recommended serums</li>
            <li>Avoid makeup for 24 hours post-treatment</li>
            <li>Follow all specific aftercare instructions provided</li>
          </ul>
        </div>
        
        <h3 className="page-section-subheading" style={{ marginTop: '3rem', textAlign: 'center' }}>Pricing</h3>
        <div className="price-section">
          <div className="price-table">
            <div className="price-table-header">
              <div>Service</div>
              <div>Regular Price</div>
              <div>Special Offer</div>
            </div>
            <div className="price-row">
              <div className="price-service">Face</div>
              <div className="price-amount">$279/visit</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Pack of Three (20% off)</div>
              <div className="price-amount has-special">$837</div>
              <div className="price-special">$675/$225/visit</div>
            </div>
            <div className="price-row">
              <div className="price-service">Pack of Five (30% off)</div>
              <div className="price-amount has-special">$1395</div>
              <div className="price-special">$975/$195/visit</div>
            </div>
          </div>
        </div>
        
        <div className="service-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <div className="service-hero-buttons">
            <TrackingAnchor 
              href={freshaLink} 
              className="btn" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Now
            </TrackingAnchor>
          </div>
        </div>
      </div>
    </div>
  );
} 