import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Eyelash Extensions | Melbourne Designer Brows',
  description: 'Premium eyelash extensions in Melbourne. Our expert technicians provide classic, volume, and hybrid lash extensions for beautiful, long-lasting results.',
};

export default function EyelashExtensions() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Eyelash Extensions | Melbourne Designer Brows"
        description="Premium eyelash extensions in Melbourne. Our expert technicians provide classic, volume, and hybrid lash extensions for beautiful, long-lasting results."
        canonical="https://mdbrows.com.au/services/eyelash-extensions"
        ogImage="/images/service-eyelash-extensions.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Eyelash Extensions</h2>
      
      <div className="service-hero">
        <div className="service-hero-content">
          <h3>Enhance Your Natural Beauty with Premium Lash Extensions</h3>
          <p>
            Our eyelash extensions are meticulously applied by skilled technicians to create beautiful, fluttery lashes that enhance your natural beauty. Choose from classic, volume, or hybrid lashes to achieve your desired look.
          </p>
          <div className="service-cta">
            <Link href={freshaLink} className="btn" target="_blank">
              Book Now
            </Link>
          </div>
        </div>
        <div className="service-hero-image">
          <Image 
            src="/images/service-eyelash-extensions.webp" 
            alt="Eyelash Extensions at Melbourne Designer Brows" 
            width={500} 
            height={400}
            priority
          />
        </div>
      </div>
      
      <div className="service-details">
        <h3>About Our Eyelash Extensions</h3>
        <p>
          At Melbourne Designer Brows, we offer premium eyelash extension services that enhance your natural beauty without damaging your natural lashes. Our extensions are lightweight, comfortable, and customized to complement your eye shape and personal style.
        </p>
        
        <h3>Our Lash Services</h3>
        <ul>
          <li><strong>Classic Lashes:</strong> One extension applied to each natural lash for a subtle enhancement</li>
          <li><strong>Volume Lashes:</strong> Multiple fine extensions applied to each natural lash for fullness and drama</li>
          <li><strong>Hybrid Lashes:</strong> A combination of classic and volume techniques for the perfect balance</li>
          <li><strong>Lash Fills:</strong> Maintenance appointments to keep your lashes looking fresh</li>
        </ul>
        
        <h3>The Process</h3>
        <ul>
          <li><strong>Consultation:</strong> We'll discuss your desired look and recommend the best option</li>
          <li><strong>Preparation:</strong> Your natural lashes are cleansed and prepped</li>
          <li><strong>Application:</strong> Extensions are meticulously applied one by one</li>
          <li><strong>Setting:</strong> A special adhesive ensures long-lasting results</li>
          <li><strong>Final Check:</strong> We ensure symmetry and perfection before you leave</li>
        </ul>
        
        <h3>Aftercare</h3>
        <p>
          To maintain your lash extensions, avoid oil-based products, excessive water exposure in the first 24 hours, and rubbing your eyes. Gentle cleansing and regular fills every 2-3 weeks will keep your lashes looking their best.
        </p>
        
        <div className="service-cta centered">
          <Link href={freshaLink} className="btn" target="_blank">
            Book Your Lash Appointment
          </Link>
        </div>
      </div>
    </div>
  );
} 