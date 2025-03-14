import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Contact Us | Melbourne Designer Brows',
  description: 'Get in touch with Melbourne Designer Brows for all your eyebrow microblading and cosmetic tattooing needs. Visit our studios in Richmond and Springvale.',
};

export default function Contact() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  return (
    <div className="page-content">
      <h2 className="page-section-heading">CONTACT US</h2>
      
      <p className="page-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        We'd love to hear from you! Whether you have questions about our services, pricing, or want to schedule a consultation,
        please reach out using the form below or contact us directly.
      </p>

      {/* Contact Form and Info Grid */}
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <h3 className="contact-section-title">Send Us a Message</h3>
          
          {/* Elfsight Contact Form */}
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
          <div className="elfsight-app-e8769bfb-7e99-494d-af08-72fc95114045" data-elfsight-app-lazy></div>
        </div>
        
        <div className="contact-details">
          <div className="contact-info-card">
            <h3 className="contact-section-title">Contact Details</h3>
            <div className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', color: 'var(--accent)' }}>
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
              </svg>
              <a href="tel:+61418188277" className="contact-link">0418 188 277</a>
            </div>
            <div className="contact-info-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', color: 'var(--accent)' }}>
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/>
              </svg>
              <a href="mailto:info@mdbrows.com.au" className="contact-link">info@mdbrows.com.au</a>
            </div>
            
            <div className="contact-social-icons">
              <a href="https://www.facebook.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="currentColor">
                  <path d="M9.6 3h-3.2c-.4 0-.8.3-.8.7v2.3h4v3.3h-4V18H2.4V9.3H0V6h2.4V3.7C2.4 1.7 3.8 0 5.6 0h4v3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 1.6c2.4 0 2.7 0 3.6.1.9 0 1.4.2 1.7.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7.1 1 .1 1.2.1 3.6s0 2.7-.1 3.6c0 .9-.2 1.4-.3 1.7-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.3.1-.8.3-1.7.3-1 .1-1.2.1-3.6.1s-2.7 0-3.6-.1c-.9 0-1.4-.2-1.7-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.3-.3-.8-.3-1.7-.1-1-.1-1.2-.1-3.6s0-2.7.1-3.6c0-.9.2-1.4.3-1.7.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1-.1 1.2-.1 3.6-.1M9 0C6.6 0 6.2 0 5.3.1c-1 0-1.6.2-2.2.4-.6.2-1.1.6-1.6 1-.5.5-.8 1-1 1.6-.2.6-.4 1.2-.4 2.2C0 6.2 0 6.6 0 9s0 2.8.1 3.7c0 1 .2 1.6.4 2.2.2.6.6 1.1 1 1.6.5.5 1 .8 1.6 1 .6.2 1.2.4 2.2.4 1 .1 1.3.1 3.7.1s2.8 0 3.7-.1c1 0 1.6-.2 2.2-.4.6-.2 1.1-.6 1.6-1 .5-.5.8-1 1-1.6.2-.6.4-1.2.4-2.2.1-1 .1-1.3.1-3.7s0-2.8-.1-3.7c0-1-.2-1.6-.4-2.2-.2-.6-.6-1.1-1-1.6-.5-.5-1-.8-1.6-1-.6-.2-1.2-.4-2.2-.4C12.8 0 12.4 0 9 0zm0 4.4c-2.5 0-4.6 2-4.6 4.6 0 2.5 2 4.6 4.6 4.6 2.5 0 4.6-2 4.6-4.6 0-2.5-2.1-4.6-4.6-4.6zm0 7.6c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm5.9-7.8c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="locations-wrapper">
            <h3 className="contact-section-title">Our Locations</h3>
            
            <div className="location-cards">
              <div className="location-card">
                <h4 className="location-name">Richmond Studio</h4>
                <p className="location-address">
                  Level 1, 382A Bridge Rd<br />
                  RICHMOND VIC 3122
                </p>
                <div className="location-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7831849810134!2d144.9962453!3d-37.819867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642c9d935a3d1%3A0x65bb71b6d9d363ab!2s382A%20Bridge%20Rd%2C%20Richmond%20VIC%203121!5e0!3m2!1sen!2sau!4v1652333456789!5m2!1sen!2sau" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0, borderRadius: '4px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <div className="location-card">
                <h4 className="location-name">Springvale Studio</h4>
                <p className="location-address">
                  Shop 4, 218 Springvale Rd<br />
                  SPRINGVALE VIC 3171
                </p>
                <div className="location-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.3764236553564!2d145.15308!3d-37.9472089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad616e89c98a63b%3A0xd9aa4bd24b67bc03!2s218%20Springvale%20Rd%2C%20Springvale%20VIC%203171!5e0!3m2!1sen!2sau!4v1652333513456!5m2!1sen!2sau" 
                    width="100%" 
                    height="150" 
                    style={{ border: 0, borderRadius: '4px' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="booking-section">
        <h3 className="booking-title">Ready to Book Your Appointment?</h3>
        <p className="booking-description">
          Experience the transformative power of our expert services. Book your appointment today.
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

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        
        .contact-form-wrapper {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-left: 3px solid var(--accent);
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .contact-info-card {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-left: 3px solid var(--accent);
        }
        
        .contact-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-family: var(--serif);
          letter-spacing: 1px;
        }
        
        .contact-info-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .contact-link {
          color: var(--text);
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: var(--accent);
        }
        
        .contact-social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .contact-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #f5f5f5;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .contact-social-icon:hover {
          background-color: var(--accent);
          color: var(--white);
        }
        
        .locations-wrapper {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          border-left: 3px solid var(--accent);
        }
        
        .location-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .location-card {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 6px;
        }
        
        .location-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
        }
        
        .location-address {
          margin-bottom: 1rem;
          line-height: 1.5;
          color: #666;
        }
        
        .booking-section {
          text-align: center;
          background-color: #f9f9f9;
          padding: 3rem 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          margin-top: 3rem;
        }
        
        .booking-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 1rem;
          font-family: var(--serif);
        }
        
        .booking-description {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: #666;
        }
        
        .center-btn {
          padding: 0.8rem 2rem;
          font-size: 0.9rem;
        }
        
        @media (max-width: 991px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .location-cards {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 767px) {
          .contact-form-wrapper,
          .contact-info-card,
          .locations-wrapper {
            padding: 1.5rem;
          }
          
          .contact-section-title {
            font-size: 1.3rem;
          }
          
          .booking-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
} 