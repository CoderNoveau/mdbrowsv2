import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Cosmetic Tattooing | Melbourne Designer Brows',
  description: 'Professional cosmetic tattooing services in Melbourne. Semi-permanent makeup solutions for brows, lips, and eyeliner.',
};

export default function CosmeticTattooing() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Cosmetic Tattooing | Melbourne Designer Brows"
        description="Professional cosmetic tattooing services in Melbourne. Semi-permanent makeup solutions for brows, lips, and eyeliner."
        canonical="https://mdbrows.com.au/services/cosmetic-tattooing"
        ogImage="/images/placeholder-cosmetic-tattooing.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Cosmetic Tattooing</h2>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/placeholder-cosmetic-tattooing.webp"
          alt="Cosmetic Tattooing procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Cosmetic Tattooing, sometimes also referred to as semi-permanent makeup, is a beauty treatment that involves 
          the controlled insertion of safe color pigments into the skin. This instantly improves the appearance of your 
          features and can save you time on your daily beauty routine.
        </p>
        
        <p className="page-text">
          Our experienced technicians specialize in creating natural, flattering results that enhance your facial features 
          while ensuring they still look authentic and suit your unique face.
        </p>
        
        <h3 className="page-section-subheading">Our Cosmetic Tattooing Services</h3>
        <ul className="service-list">
          <li><strong>Eyebrows</strong> - Microblading, Shading, and Combination techniques</li>
          <li><strong>Eyeliner</strong> - Lash Enhancement, Thin Eyeliner, Designer Eyeliner</li>
          <li><strong>Lips</strong> - Lip Line, Lip Blend, Full Lips</li>
        </ul>
        
        <h3 className="page-section-subheading">The Process</h3>
        <p className="page-text">
          Each procedure begins with a thorough consultation to understand your desired results. 
          We then create a customized shape and color match that complements your natural features. 
          A topical anesthetic is applied for comfort during the procedure, which typically takes 2-3 hours.
        </p>
        
        <h3 className="page-section-subheading">Benefits of Cosmetic Tattooing</h3>
        <ul className="service-benefits">
          <li>Wake up with makeup already applied</li>
          <li>Save time on your daily makeup routine</li>
          <li>Waterproof and smudge-proof</li>
          <li>Results last 1-3 years depending on the treatment</li>
          <li>Enhances natural beauty</li>
          <li>Perfect for active lifestyles and those with makeup allergies</li>
        </ul>
        
        <h3 className="page-section-subheading">Pricing</h3>
        
        <h4 className="subsection-title">Eyeliner Services</h4>
        <div className="service-pricing">
          <div className="price-item">
            <span className="price-service">Lash Enhancement</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $550</span>
              <span className="price-special">Special Offer: $450</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Eyeliner Top</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $650</span>
              <span className="price-special">Special Offer: $550</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Designer Eyeliner (Thick)</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $750</span>
              <span className="price-special">Special Offer: $650</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Eyeliner Bottom</span>
            <div className="price-details">
              <span className="price-regular">$350</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Eyeliner Top and Bottom</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $1,000</span>
              <span className="price-special">Special Offer: $750</span>
            </div>
          </div>
        </div>
        
        <h4 className="subsection-title">Lips Services</h4>
        <div className="service-pricing">
          <div className="price-item">
            <span className="price-service">Lip Line</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $750</span>
              <span className="price-special">Special Offer: $500</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Lip Line and Blend</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $850</span>
              <span className="price-special">Special Offer: $600</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Lips Full</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $990</span>
              <span className="price-special">Special Offer: $690</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Lips Neutralisation</span>
            <div className="price-details">
              <span className="price-regular">Regular Price: $990</span>
              <span className="price-special">From $690</span>
            </div>
          </div>
        </div>
        
        <h4 className="subsection-title">Touch-Up Services</h4>
        <div className="service-pricing">
          <div className="price-item">
            <span className="price-service">Perfection Visit (Up to 8 weeks)</span>
            <div className="price-details">
              <span className="price-regular">$270</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Touch up within 12 months</span>
            <div className="price-details">
              <span className="price-regular">$350</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Touch up within 18 months</span>
            <div className="price-details">
              <span className="price-regular">$425</span>
            </div>
          </div>
          <div className="price-item">
            <span className="price-service">Touch up within 24 months</span>
            <div className="price-details">
              <span className="price-regular">$495</span>
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