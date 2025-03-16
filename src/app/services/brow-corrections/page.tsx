import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Brow Corrections | Melbourne Designer Brows',
  description: 'Professional eyebrow correction services in Melbourne. Fix uneven, asymmetrical, or poorly done eyebrows with our specialist correction techniques.',
};

export default function BrowCorrections() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Brow Corrections | Melbourne Designer Brows"
        description="Professional eyebrow correction services in Melbourne. Fix uneven, asymmetrical, or poorly done eyebrows with our specialist correction techniques."
        canonical="https://mdbrows.com.au/services/brow-corrections"
        ogImage="/images/service-brow-correction.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Brow Corrections</h2>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-brow-correction.webp"
          alt="Brow Correction procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Our brow correction service is designed to fix and improve unsatisfactory results from previous 
          microblading or cosmetic tattooing procedures. Whether you're dealing with asymmetry, poor color 
          choice, or unnatural-looking results, our expert technicians can help.
        </p>
        
        <p className="page-text">
          We understand how frustrating it can be when your brows don't meet your expectations. Our correction 
          services focus on restoring balance and creating the natural, beautiful look you originally wanted.
        </p>
        
        <h3 className="page-section-subheading">The Correction Process</h3>
        <p className="page-text">
          Each correction begins with a thorough consultation to understand your concerns and desired outcome. 
          We'll assess your current brows and develop a customized plan that may include color correction, 
          shape adjustment, or complete restoration.
        </p>
        
        <h3 className="page-section-subheading">What We Can Correct</h3>
        <ul className="service-benefits">
          <li>Asymmetrical brows</li>
          <li>Unnatural color or fading</li>
          <li>Poor shape or placement</li>
          <li>Thick or uneven strokes</li>
          <li>Previous work from other salons</li>
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
              <div className="price-service">Correction of work done by others*</div>
              <div className="price-amount has-special">$990</div>
              <div className="price-special">from $795</div>
            </div>
            <div className="price-row">
              <div className="price-service">Perfection Visit (Up to 8 weeks)</div>
              <div className="price-amount">$270</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 12 months</div>
              <div className="price-amount">$350</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 18 months</div>
              <div className="price-amount">$425</div>
              <div className="price-special"></div>
            </div>
            <div className="price-row">
              <div className="price-service">Touch up within 24 months</div>
              <div className="price-amount">$495</div>
              <div className="price-special"></div>
            </div>
          </div>
          <p className="price-note">
            * Please contact us to discuss if you require correction of work done by others. We are able to assist in most cases however suitability is on a case by case basis. Corrective work may require removal or lightening procedures performed.
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