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
        
        <div className="pricing-table-container" style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table className="pricing-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr>
                <th style={{ padding: '12px 15px', textAlign: 'left', backgroundColor: '#f8f8f8', borderBottom: '2px solid #ddd' }}>Tattoo Size (cm)</th>
                <th style={{ padding: '12px 15px', textAlign: 'center', backgroundColor: '#f8f8f8', borderBottom: '2px solid #ddd' }}>Area (cm²)</th>
                <th style={{ padding: '12px 15px', textAlign: 'center', backgroundColor: '#f8f8f8', borderBottom: '2px solid #ddd' }}>Single Session</th>
                <th style={{ padding: '12px 15px', textAlign: 'center', backgroundColor: '#f8f8f8', borderBottom: '2px solid #ddd' }}>Three Sessions (20% off)</th>
                <th style={{ padding: '12px 15px', textAlign: 'center', backgroundColor: '#f8f8f8', borderBottom: '2px solid #ddd' }}>Six Sessions (25% off)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>8cm x 4cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>32</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$100</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$240</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$450</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>10cm x 6cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>60</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$150</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$360</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$675</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>12cm x 8cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>96</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$210</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$504</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$945</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>15cm x 12cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>180</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$250</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$600</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$1,125</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>21cm x 15cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>315</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$350</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$840</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$1,575</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>21cm x 20cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>420</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$400</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$960</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$1,800</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 15px', borderBottom: '1px solid #ddd' }}>21cm x 30cm</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>630</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$450</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$1,080</td>
                <td style={{ padding: '12px 15px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>$2,025</td>
              </tr>
            </tbody>
          </table>
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