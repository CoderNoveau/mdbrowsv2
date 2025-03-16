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
        
        <h3 className="page-section-subheading">Pricing</h3>
        <div className="price-section">
          <div className="price-table">
            <div className="price-table-header">
              <div>Service</div>
              <div>Regular Price</div>
              <div>Special Offer</div>
            </div>
            <div className="price-row">
              <div className="price-service">Single Session</div>
              <div className="price-amount">$250</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Package of 3 Sessions</div>
              <div className="price-amount has-special">$750</div>
              <div className="price-special">$600</div>
            </div>
            <div className="price-row">
              <div className="price-service">Package of 6 Sessions</div>
              <div className="price-amount has-special">$1,500</div>
              <div className="price-special">$1,125</div>
            </div>
          </div>
          <p className="price-note">
            For best results, we recommend a series of 3-6 treatments spaced 4-6 weeks apart. Package deals offer significant savings.
          </p>
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