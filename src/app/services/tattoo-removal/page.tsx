import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Tattoo Removal | Melbourne Designer Brows',
  description: 'Professional tattoo and cosmetic tattoo removal services in Melbourne. Safe and effective removal techniques for unwanted tattoos and microblading.',
};

export default function TattooRemoval() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-heading">Tattoo Removal</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/placeholder-tattoo-removal.webp"
          alt="Tattoo Removal procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Our advanced tattoo removal techniques help fade or completely remove unwanted tattoos, including old cosmetic tattoos 
          and microblading. Using state-of-the-art methods, we safely break down pigment particles for your body to naturally eliminate.
        </p>
        
        <p className="page-text">
          Whether you regret an old cosmetic procedure or simply want to refresh your appearance, our tattoo removal services provide 
          an effective solution to unwanted pigmentation.
        </p>
        
        <h2 className="service-subtitle">The Removal Process</h2>
        <p className="page-text">
          Our specialists begin with a thorough consultation to assess your tattoo and determine the best approach. 
          Treatment sessions are spaced several weeks apart to allow your body to process and remove the broken-down pigment. 
          The number of sessions required depends on factors like tattoo size, ink type, colors, and depth.
        </p>
        
        <h2 className="service-subtitle">Benefits of Our Removal Techniques</h2>
        <ul className="service-benefits">
          <li>Minimal discomfort with topical numbing</li>
          <li>Effective on both body tattoos and cosmetic tattoos</li>
          <li>Suitable for sensitive facial areas</li>
          <li>Progressive fading with each session</li>
          <li>Can prepare the area for future treatments</li>
        </ul>
        
        <h2 className="service-subtitle">Pricing</h2>
        <div className="service-price">
          <span className="price-amount">From $195</span>
          <span className="price-description"> - Consultation required for exact quote</span>
        </div>
        
        <div className="service-cta" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a 
            href={freshaLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary" 
          >
            BOOK CONSULTATION
          </a>
        </div>
      </div>
    </div>
  );
} 