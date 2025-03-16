import Link from 'next/link';

export const metadata = {
  title: 'Pricing | Melbourne Designer Brows',
  description: 'View our comprehensive price list for microblading, cosmetic tattooing, microneedling, and other brow and beauty services in Melbourne.',
};

export default function Pricing() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="section-heading">Treatment Price List</h1>
      
      <p className="page-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        At Melbourne Designer Brows, we offer professional services at competitive prices. 
        Many of our treatments are currently available at special promotional rates.
      </p>
      
      {/* Eyebrows Section */}
      <div className="price-section">
        <h2 className="service-subtitle">Eyebrows</h2>
        <div className="price-table">
          <div className="price-table-header">
            <div>Service</div>
            <div>Regular Price</div>
            <div>Special Offer</div>
          </div>
          <div className="price-row">
            <div className="price-service">Microblading / Eyebrow Feathering</div>
            <div className="price-amount has-special">$795</div>
            <div className="price-special">$595</div>
          </div>
          <div className="price-row">
            <div className="price-service">Eyebrow Shading</div>
            <div className="price-amount has-special">$795</div>
            <div className="price-special">$595</div>
          </div>
          <div className="price-row">
            <div className="price-service">Combo Brow (Microblading & Shading)</div>
            <div className="price-amount has-special">$990</div>
            <div className="price-special">$795</div>
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
          <div className="price-row">
            <div className="price-service">Brow Shaping & Design</div>
            <div className="price-amount">$90</div>
            <div className="price-special"></div>
          </div>
          <div className="price-row">
            <div className="price-service">Brow Tattoo Removal (Saline)</div>
            <div className="price-amount">$200 per visit</div>
            <div className="price-special"></div>
          </div>
          <div className="price-row">
            <div className="price-service">Brow Tattoo Removal (Laser)</div>
            <div className="price-amount has-special">$200 per visit</div>
            <div className="price-special">$100</div>
          </div>
        </div>
        <p className="price-note">
          * Please contact us to discuss if you require correction of work done by others. We are able to assist in most cases however suitability is on a case by case basis. Corrective work may require removal or lightening procedures performed.
        </p>
      </div>
      
      {/* Eyeliner Section */}
      <div className="price-section">
        <h2 className="service-subtitle">Eyeliner</h2>
        <div className="price-table">
          <div className="price-table-header">
            <div>Service</div>
            <div>Regular Price</div>
            <div>Special Offer</div>
          </div>
          <div className="price-row">
            <div className="price-service">Lash Enhancement</div>
            <div className="price-amount has-special">$550</div>
            <div className="price-special">$450</div>
          </div>
          <div className="price-row">
            <div className="price-service">Eyeliner Top</div>
            <div className="price-amount has-special">$650</div>
            <div className="price-special">$550</div>
          </div>
          <div className="price-row">
            <div className="price-service">Designer Eyeliner (Thick)</div>
            <div className="price-amount has-special">$750</div>
            <div className="price-special">$650</div>
          </div>
          <div className="price-row">
            <div className="price-service">Eyeliner Bottom</div>
            <div className="price-amount">$350</div>
            <div className="price-special"></div>
          </div>
          <div className="price-row">
            <div className="price-service">Eyeliner Top and Bottom</div>
            <div className="price-amount has-special">$1,000</div>
            <div className="price-special">$750</div>
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
      </div>
      
      {/* Lips Section */}
      <div className="price-section">
        <h2 className="service-subtitle">Lips</h2>
        <div className="price-table">
          <div className="price-table-header">
            <div>Service</div>
            <div>Regular Price</div>
            <div>Special Offer</div>
          </div>
          <div className="price-row">
            <div className="price-service">Lip Line</div>
            <div className="price-amount has-special">$750</div>
            <div className="price-special">$500</div>
          </div>
          <div className="price-row">
            <div className="price-service">Lip Line and Blend</div>
            <div className="price-amount has-special">$850</div>
            <div className="price-special">$600</div>
          </div>
          <div className="price-row">
            <div className="price-service">Lips Full</div>
            <div className="price-amount has-special">$990</div>
            <div className="price-special">$690</div>
          </div>
          <div className="price-row">
            <div className="price-service">Lips Neutralisation</div>
            <div className="price-amount has-special">$990</div>
            <div className="price-special">from $690</div>
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
      </div>
      
      {/* Tattoo Removal Section */}
      <div className="price-section">
        <h2 className="service-subtitle">Tattoo Removal</h2>
        <p className="price-note" style={{ marginBottom: '1.5rem' }}>
          Our tattoo removal pricing is based on the size of the tattoo. Package deals offer significant savings for multiple sessions.
        </p>
        <div className="responsive-table-container" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table className="tattoo-price-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
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
        <p className="price-note">
          We offer free consultations including test patches and personalized quotes. Multiple sessions are often required for complete removal, making our package deals a cost-effective option.
        </p>
      </div>
      
      {/* Skin Needling Section */}
      <div className="price-section">
        <h2 className="service-subtitle">Skin Needling</h2>
        <div className="price-table">
          <div className="price-table-header">
            <div>Service</div>
            <div>Regular Price</div>
            <div>Special Offer</div>
          </div>
          <div className="price-row">
            <div className="price-service">Face</div>
            <div className="price-amount">$279/visit</div>
            <div className="price-special"></div>
          </div>
          <div className="price-row">
            <div className="price-service">Pack of Three (20% off)</div>
            <div className="price-amount has-special">$837</div>
            <div className="price-special">$675/$225/visit</div>
          </div>
          <div className="price-row">
            <div className="price-service">Pack of Five (30% off)</div>
            <div className="price-amount has-special">$1395</div>
            <div className="price-special">$975/$195/visit</div>
          </div>
        </div>
      </div>
      
      <div className="pricing-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 className="section-heading">Ready to Book Your Treatment?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          For more information about any of our services or to discuss your specific requirements, please contact us.
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