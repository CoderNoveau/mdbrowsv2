import Link from 'next/link';
import Image from 'next/image';
import ServiceSeo from '@/components/ServiceSeo';

export const metadata = {
  title: 'Tattoo Removal | Melbourne Designer Brows',
  description: 'Professional tattoo and cosmetic tattoo removal services in Melbourne. Safe and effective removal techniques for unwanted tattoos and microblading.',
};

export default function TattooRemoval() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ServiceSeo
        title="Tattoo Removal | Melbourne Designer Brows"
        description="Professional tattoo and cosmetic tattoo removal services in Melbourne. Safe and effective removal techniques for unwanted tattoos and microblading."
        serviceName="tattoo-removal"
        imageUrl="/images/service-tattoo-removal.webp"
      />
      
      <h2 className="page-section-heading">Tattoo Removal</h2>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
        <Image 
          src="/images/service-tattoo-removal.webp"
          alt="Tattoo Removal procedure" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Our advanced tattoo removal service helps you safely and effectively remove unwanted tattoos, 
          including old cosmetic tattoos and microblading. Using state-of-the-art technology, we can 
          significantly fade or completely remove your unwanted ink.
        </p>
        
        <p className="page-text">
          Whether you're looking to remove an old cosmetic procedure or prepare for a new one, our 
          experienced technicians will create a customized treatment plan to achieve your desired results.
        </p>
        
        <h3 className="page-section-subheading">The Removal Process</h3>
        <p className="page-text">
          The treatment uses advanced technology to break down tattoo pigments, which are then naturally 
          eliminated by your body. Multiple sessions may be required depending on the size, color, and age 
          of your tattoo.
        </p>
        
        <h3 className="page-section-subheading">What We Can Remove</h3>
        <ul className="service-benefits">
          <li>Old cosmetic tattoos</li>
          <li>Previous microblading work</li>
          <li>Unwanted permanent makeup</li>
          <li>Traditional tattoos</li>
          <li>Various ink colors and pigments</li>
        </ul>
        
        <h3 className="page-section-subheading">Pricing</h3>
        <div className="service-price">
          <span className="price-amount">From $195</span>
          <span className="price-description"> - Per session</span>
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