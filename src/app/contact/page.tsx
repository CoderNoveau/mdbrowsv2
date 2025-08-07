import Script from 'next/script';
import ElfsightWidget from '@/components/ElfsightWidget';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Consultation | Melbourne Designer Brows',
  description: 'Book your microblading or cosmetic tattooing consultation at our Melbourne locations. Easy online booking available. Get in touch for inquiries or information.',
  openGraph: {
    title: 'Book Your Consultation | Melbourne Designer Brows',
    description: 'Book your microblading or cosmetic tattooing consultation at our Melbourne locations. Easy online booking available. Get in touch for inquiries or information.',
    url: 'https://mdbrows.com.au/contact/',
    images: [{
      url: 'https://mdbrows.com.au/images/contact-banner.webp',
    }],
    type: 'website',
  },
};

export default function Contact() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';
  
  return (
    <div className="page-content">
      <h1 className="page-section-heading">Contact Melbourne Designer Brows</h1>
      
      <div className="contact-grid" style={{ marginBottom: '3rem' }}>
        <div className="contact-info">
          <div className="contact-section">
            <h2 className="contact-heading">Contact Details</h2>
            <p className="contact-detail">
              <strong>Phone:</strong> <a href="tel:+61418188277" className="footer-link">0418 188 277</a>
            </p>
            <p className="contact-detail">
              <strong>Email:</strong> <a href="mailto:info@mdbrows.com.au" className="footer-link">info@mdbrows.com.au</a>
            </p>
          </div>
        </div>
        
        <div className="contact-social">
          <h2 className="contact-heading">Connect With Us</h2>
          <p className="contact-detail">
            Follow us on social media for the latest work, tips, and special offers.
          </p>
          <div className="contact-social-links" style={{ marginTop: '1rem' }}>
            <a href="https://www.facebook.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="social-link">
              Facebook
            </a>
            <a href="https://www.instagram.com/mdbrowsau/" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
          </div>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="contact-form-section" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
        <h2 className="page-section-heading">SEND US A MESSAGE</h2>
        <p className="page-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Have a question about our services or want to inquire about availability? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <ElfsightWidget widgetId="e8769bfb-7e99-494d-af08-72fc95114045" />
      </div>
      
      <div className="booking-section" style={{ backgroundColor: '#f9f7f3', padding: '3rem', borderRadius: '8px' }}>
        <h2 className="page-section-heading">READY TO BOOK YOUR APPOINTMENT?</h2>
        <p className="page-text" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem' }}>
          For fastest service, you can book your appointment directly through our online booking system. 
          Select your preferred location, service, and time.
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