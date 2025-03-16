import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Microneedling | Melbourne Designer Brows',
  description: 'Professional microneedling services in Melbourne. Improve skin texture, reduce scars, and boost collagen for younger-looking skin.',
};

export default function Microneedling() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Microneedling | Melbourne Designer Brows"
        description="Professional microneedling services in Melbourne. Improve skin texture, reduce scars, and boost collagen for younger-looking skin."
        canonical="https://mdbrows.com.au/services/microneedling"
        ogImage="/images/service-microneedling.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Microneedling</h2>
      
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
        
        <p className="page-text">
          This treatment is highly effective for improving skin texture, reducing fine lines, and minimizing the 
          appearance of scars and pores.
        </p>
        
        <h3 className="page-section-subheading">The Microneedling Process</h3>
        <p className="page-text">
          During the treatment, a specialized device with fine needles creates controlled micro-injuries to the skin. 
          This process stimulates the production of collagen and elastin, leading to rejuvenated, firmer skin.
        </p>
        
        <h3 className="page-section-subheading">Benefits of Microneedling</h3>
        <ul className="service-benefits">
          <li>Improves skin texture and tone</li>
          <li>Reduces appearance of scars and stretch marks</li>
          <li>Minimizes pore size</li>
          <li>Enhances product absorption</li>
          <li>Stimulates natural collagen production</li>
        </ul>
        
        <h3 className="page-section-subheading">How many treatments do I need?</h3>
        <p className="page-text">
          The number of treatments required varies depending on your skin concerns. For general skin rejuvenation, 
          a series of 3-5 treatments spaced 4-6 weeks apart is recommended. For specific concerns like acne scars 
          or stretch marks, 6 or more sessions may be necessary. Our skincare professionals will create a 
          personalized treatment plan based on your skin assessment.
        </p>
        
        <h3 className="page-section-subheading">Pricing</h3>
        <div className="service-pricing">
          <div className="price-item">
            <span className="price-service">Face</span>
            <div className="price-details">
              <span className="price-regular">$279 per visit</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Pack of Three (20% off)</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $837</span>
              <span className="price-special">Special Offer: $675 ($225 per visit)</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Pack of Five (30% off)</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $1,395</span>
              <span className="price-special">Special Offer: $975 ($195 per visit)</span>
            </div>
          </div>
        </div>
        
        <p className="price-note">
          For our full pricing list and special offers, please visit our <Link href="/pricing">pricing page</Link>.
        </p>
        
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