import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Tattoo Removal | Melbourne Designer Brows',
  description: 'Professional tattoo and cosmetic tattoo removal services in Melbourne. Safe and effective removal techniques for unwanted tattoos and microblading.',
};

export default function TattooRemoval() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Tattoo Removal | Melbourne Designer Brows"
        description="Professional tattoo and cosmetic tattoo removal services in Melbourne. Safe and effective removal techniques for unwanted tattoos and microblading."
        canonical="https://mdbrows.com.au/services/tattoo-removal"
        ogImage="/images/service-tattoo-removal.webp"
        ogType="article"
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
        
        <div className="price-section">
          <div className="price-table">
            <div className="price-table-header">
              <div>Tattoo Size</div>
              <div>Single Session</div>
              <div>Package Deals</div>
            </div>
            <div className="price-row">
              <div className="price-service">8cm x 4cm (32cm²)</div>
              <div className="price-amount">$100</div>
              <div className="price-special">3 sessions: $240<br />6 sessions: $450</div>
            </div>
            <div className="price-row">
              <div className="price-service">10cm x 6cm (60cm²)</div>
              <div className="price-amount">$150</div>
              <div className="price-special">3 sessions: $360<br />6 sessions: $675</div>
            </div>
            <div className="price-row">
              <div className="price-service">12cm x 8cm (96cm²)</div>
              <div className="price-amount">$210</div>
              <div className="price-special">3 sessions: $504<br />6 sessions: $945</div>
            </div>
            <div className="price-row">
              <div className="price-service">15cm x 12cm (180cm²)</div>
              <div className="price-amount">$250</div>
              <div className="price-special">3 sessions: $600<br />6 sessions: $1,125</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 15cm (315cm²)</div>
              <div className="price-amount">$350</div>
              <div className="price-special">3 sessions: $840<br />6 sessions: $1,575</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 20cm (420cm²)</div>
              <div className="price-amount">$400</div>
              <div className="price-special">3 sessions: $960<br />6 sessions: $1,800</div>
            </div>
            <div className="price-row">
              <div className="price-service">21cm x 30cm (630cm²)</div>
              <div className="price-amount">$450</div>
              <div className="price-special">3 sessions: $1,080<br />6 sessions: $2,025</div>
            </div>
          </div>
          <p className="price-note">
            Package deals: 20% discount for three sessions, 25% discount for six sessions.
          </p>
        </div>
        
        <h3 className="page-section-subheading">Package Deals</h3>
        <p className="page-text">
          Purchase three sessions at once for a 20% discount on the total price, or six sessions for a 25% discount.
          Multiple sessions are often required for complete removal, making our package deals a cost-effective option.
        </p>
        
        <h3 className="page-section-subheading">Additional Services</h3>
        <p className="page-text">
          We offer free consultations including test patches and personalized quotes to help you understand 
          the removal process and expected results before committing to treatment.
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