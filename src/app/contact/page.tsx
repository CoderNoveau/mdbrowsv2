import Link from 'next/link';

export default function Contact() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  return (
    <div className="page-content">
      <h1 className="section-heading">Get In Touch</h1>
      
      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-section">
            <h3 className="contact-heading">Contact Details</h3>
            <p className="contact-detail">
              <strong>Phone:</strong> <a href="tel:+61418188277" className="footer-link">0418 188 277</a>
            </p>
            <p className="contact-detail">
              <strong>Email:</strong> <a href="mailto:info@mdbrows.com.au" className="footer-link">info@mdbrows.com.au</a>
            </p>
          </div>
          
          <div className="contact-section">
            <h3 className="contact-heading">Richmond Location</h3>
            <p className="contact-detail">
              Level 1, 382A Bridge Rd<br />
              RICHMOND VIC 3122
            </p>
            <div className="map-placeholder" style={{ height: "200px", backgroundColor: "#f5f5f5", marginTop: "1rem" }}>
              {/* Map would go here */}
            </div>
          </div>
          
          <div className="contact-section">
            <h3 className="contact-heading">Springvale Location</h3>
            <p className="contact-detail">
              Shop 4, 218 Springvale Rd<br />
              SPRINGVALE VIC 3171
            </p>
            <div className="map-placeholder" style={{ height: "200px", backgroundColor: "#f5f5f5", marginTop: "1rem" }}>
              {/* Map would go here */}
            </div>
          </div>
        </div>
        
        <div className="contact-social">
          <h3 className="contact-heading">Follow Us</h3>
          <div className="contact-social-links">
            <a href="https://www.facebook.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook
            </a>
            <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div className="booking-section">
        <h2 className="section-heading">Ready to Book Your Appointment?</h2>
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