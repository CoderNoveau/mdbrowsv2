import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Cosmetic Tattooing | Melbourne Designer Brows',
  description: 'Professional cosmetic tattooing services in Melbourne. Semi-permanent makeup solutions for brows, lips, and eyeliner.',
};

export default function CosmeticTattooing() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-heading">Cosmetic Tattooing</h1>
      
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
        
        <h2 className="service-subtitle">Our Cosmetic Tattooing Services</h2>
        
        <div className="cosmetic-service-item">
          <h3>Ombré Brows</h3>
          <p>A soft shading technique that creates a powdered effect, similar to brow powder. Perfect for those wanting a more defined, filled-in look.</p>
        </div>
        
        <div className="cosmetic-service-item">
          <h3>Signature Combo Brows</h3>
          <p>Our signature treatment combines both microblading and shading techniques for the most natural and dimensional look.</p>
        </div>
        
        <div className="cosmetic-service-item">
          <h3>Lip Blushing</h3>
          <p>Enhance the natural color and shape of your lips with this subtle tattooing technique.</p>
        </div>
        
        <h2 className="service-subtitle">The Process</h2>
        <p className="page-text">
          Each procedure begins with a thorough consultation to understand your desired results. 
          We then create a customized shape and color match that complements your natural features. 
          A topical anesthetic is applied for comfort during the procedure, which typically takes 2-3 hours.
        </p>
        
        <h2 className="service-subtitle">Benefits of Cosmetic Tattooing</h2>
        <ul className="service-benefits">
          <li>Wake up with makeup already applied</li>
          <li>Save time on your daily makeup routine</li>
          <li>Waterproof and smudge-proof</li>
          <li>Results last 1-3 years depending on the treatment</li>
          <li>Enhances natural beauty</li>
          <li>Perfect for active lifestyles and those with makeup allergies</li>
        </ul>
        
        <h2 className="service-subtitle">Pricing</h2>
        <div className="service-price">
          <span className="price-amount">$495 - $695</span>
          <span className="price-description"> - Varies by treatment</span>
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