import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services | Melbourne Designer Brows',
  description: 'Explore our range of professional brow and beauty services including microblading, microneedling, cosmetic tattooing, and tattoo removal.',
};

export default function Services() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  const services = [
    {
      title: "Microblading",
      description: "Semi-permanent eyebrow tattooing procedure that creates natural, hair-like strokes for perfect brows.",
      image: "/images/gold-logoonly.png",
      link: "/services/microblading",
      price: "$595",
      special: true
    },
    {
      title: "Microneedling",
      description: "Rejuvenating treatment that stimulates collagen production for smoother, younger-looking skin.",
      image: "/images/gold-logoonly.png",
      link: "/services/microneedling",
      price: "$250",
      special: false
    },
    {
      title: "Cosmetic Tattooing",
      description: "Semi-permanent makeup solutions including Ombré Brows, Signature Combo, and Lip Blushing.",
      image: "/images/gold-logoonly.png",
      link: "/services/cosmetic-tattooing",
      price: "$495 - $695",
      special: false
    },
    {
      title: "Tattoo Removal",
      description: "Safe and effective removal of unwanted tattoos and old cosmetic tattoo procedures.",
      image: "/images/tattoo-removal.jpg",
      link: "/services/tattoo-removal",
      price: "From $195",
      special: false
    },
    {
      title: "Brow Corrections",
      description: "Expert correction of asymmetrical or poorly done eyebrows, including microblading from other salons.",
      image: "/images/brow-corrections.jpg",
      link: "/services/brow-corrections",
      price: "$250 - $450",
      special: false
    },
    {
      title: "Brow Shaping",
      description: "Precision shaping for a clean, natural brow look tailored to your face.",
      image: "/images/brow-shaping.jpg",
      price: "$30",
      special: false
    },
    {
      title: "Brow Tinting",
      description: "Enhance your brows with rich, lasting color to define your style.",
      image: "/images/brow-tinting.jpg",
      price: "$25",
      special: false
    }
  ];
  
  return (
    <div className="page-content">
      <h1 className="section-heading">Our Services</h1>
      
      <p className="page-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        At Melbourne Designer Brows, we offer a range of professional brow and beauty services.
        Click on each service to learn more or book an appointment directly.
      </p>
      
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{ border: '1px solid #f0f0f0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <Image 
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-price" style={{ margin: '1rem 0' }}>
                {service.special ? (
                  <p><strong>Special:</strong> {service.price}</p>
                ) : (
                  <p><strong>Price:</strong> {service.price}</p>
                )}
              </div>
              
              {service.link ? (
                <Link href={service.link} className="btn btn-outline" style={{ marginRight: '1rem' }}>
                  LEARN MORE
                </Link>
              ) : null}
              
              <a 
                href={freshaLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                BOOK 
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="booking-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 className="section-heading">Ready For Your Transformation?</h2>
        <p className="booking-description" style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          Book your appointment at our Richmond or Springvale locations and experience the Melbourne Designer Brows difference.
        </p>
        <a 
          href={freshaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary center-btn"
        >
          BOOK APPOINTMENT
        </a>
      </div>
    </div>
  );
} 