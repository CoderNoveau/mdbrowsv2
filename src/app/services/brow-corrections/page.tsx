import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Brow Corrections | Melbourne Designer Brows',
  description: 'Professional eyebrow correction services in Melbourne. Fix uneven, asymmetrical, or poorly done eyebrows with our specialist correction techniques.',
};

export default function BrowCorrections() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="page-heading">Brow Corrections</h1>
      
      <div className="service-image-container" style={{ marginBottom: '2rem', position: 'relative', height: '300px' }}>
        <Image 
          src="/images/gold-logoonly.png"
          alt="Brow Corrections service" 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      <div className="service-description">
        <p className="page-text">
          Unhappy with previous brow work? Our correction services can fix asymmetry, color issues, or poorly shaped brows. 
          Our specialists will assess your current brows and develop a personalized plan to achieve your desired look through 
          specialized techniques.
        </p>
        
        <p className="page-text">
          At Melbourne Designer Brows, we understand the frustration of living with eyebrows you're not happy with. 
          Our correction services are specifically designed to address problems from previous microblading, tattooing, 
          or natural asymmetry issues.
        </p>
        
        <h2 className="service-subtitle">The Correction Process</h2>
        <p className="page-text">
          Every correction begins with a thorough consultation to understand your concerns and desired outcome. 
          Depending on your specific issues, we may use a combination of techniques including color correction, 
          shape adjustment, and strategic pigment application. Some corrections may require multiple sessions 
          for optimal results.
        </p>
        
        <h2 className="service-subtitle">Common Issues We Correct</h2>
        <ul className="service-benefits">
          <li>Asymmetrical or uneven eyebrows</li>
          <li>Discoloration or undesired pigment color</li>
          <li>Too-thick or too-thin brows from previous work</li>
          <li>Blurry or smudged appearances</li>
          <li>Unnatural arch or shape</li>
        </ul>
        
        <h2 className="service-subtitle">Pricing</h2>
        <div className="service-price">
          <span className="price-amount">From $450</span>
          <span className="price-description"> - Varies based on correction complexity</span>
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