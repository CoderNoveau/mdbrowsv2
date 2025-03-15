import Link from 'next/link';

export const metadata = {
  title: 'FAQ | Melbourne Designer Brows',
  description: 'Frequently asked questions about microblading, cosmetic tattooing, aftercare, and other services at Melbourne Designer Brows.',
};

export default function FAQ() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <h1 className="section-heading">Frequently Asked Questions</h1>
      
      <p className="page-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        Find answers to our most frequently asked questions about our services, aftercare, and what to expect during your appointment at Melbourne Designer Brows.
      </p>
      
      <div className="faq-section">
        <h2 className="service-subtitle">About Microblading</h2>
        
        <div className="faq-item">
          <h3 className="faq-question">What is Microblading?</h3>
          <div className="faq-answer">
            <p>
              Microblading is a form of permanent eyebrow makeup that creates natural, beautiful eyebrows.
            </p>
            <p>
              Although microblading is considered a form of eyebrow tattooing, the difference is that every hair stroke is drawn by the artist with a handheld microblade. Each stroke is manually shaped and blended into the client's existing eyebrow hair which results in natural, beautiful eyebrows.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How long does the procedure take?</h3>
          <div className="faq-answer">
            <p>
              For the first Microblading session, the entire procedure usually takes about 2 hours.
            </p>
            <p>
              During this session, we will shape and style your brows and answer any questions you may have. We then follow with pigment colour selection.
            </p>
            <p>
              Once you are satisfied with the design and colour choice, we begin the procedure.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">Is the procedure painful?</h3>
          <div className="faq-answer">
            <p>
              The pain level for the procedure is considered mild to none. Prior to the procedure we will apply a topical anaesthetic to numb the area, and we'll continue to apply anaesthetic during the procedure to ensure your comfort level is maintained.
            </p>
            <p>
              Everyone responds differently to anaesthetic; depending on the client, the feeling of the procedure has been described as light scratches to not feeling anything. Topical anaesthetics used may contain lidocaine, prilocaine, benzocaine, tetracaine and epinephrine.
            </p>
            <p>
              After the procedure, redness and slight swelling in the area is normal. Clients describe the area feeling similar to a light sunburn. Clients can take Paracetamol but not aspirin or ibuprofen.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How long does it take to heal?</h3>
          <div className="faq-answer">
            <p>
              The eyebrow area will be slightly red after the procedure and the colour will appear darker initially. This is normal and is part of the healing process. The colour may fade by up to 40% as it heals and the shape can heal up to 20% smaller in size once the swelling settles down.
            </p>
            <p>
              In the following days, the eyebrows will continue to be dark and some clients may notice a slight scabbing.
            </p>
            <p>
              The eyebrows will lighten up in colour as it heals. No down time is required after microblading procedure. It takes approximately 7-14 days for the brows to heal over, and about 1 month for the colour to fully set in.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">Why do I need a touch-up session?</h3>
          <div className="faq-answer">
            <p>
              A touch up session after 6-8 weeks is necessary as everyone heals differently and outcomes will vary.
            </p>
            <p>
              Certain areas may not pick up during first session and will need to be refilled. Pigment colour may need to be adjusted, brow thickness and more strokes can be added. Individuals with oily skin often require a deeper shade during the touch up session as the oils tend to lighten the pigment.
            </p>
            <p>
              Most importantly, your touch up session is when we refine your brows to ensure it looks perfect and retains the colour for as long as possible.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How long does microblading last?</h3>
          <div className="faq-answer">
            <p>
              Since microblading pigments are not implanted into the skin as deep as traditional tattoos, the area will naturally fade overtime. Microblading typically lasts 1-2 years, depending on skin type (normal, oily, dry), age (youthful/mature).
            </p>
            <p>
              Clients with oily skin will find that their brows will fade faster and may need more regular touch-ups. Skincare routine will also affect the lasting effect of the pigment: clients who tan, use products with AHA or Glycolic Acid will fade faster as the skin will resurface faster. Each individual's colour retention within the skin will vary.
            </p>
            <p>
              To maintain the brows looking fresh, a touch up is recommended every 6-12 months depending on your skin type.
            </p>
          </div>
        </div>
      </div>
      
      <div className="faq-section">
        <h2 className="service-subtitle">Eligibility & Preparation</h2>
        
        <div className="faq-item">
          <h3 className="faq-question">Who is not suitable for microblading?</h3>
          <div className="faq-answer">
            <p>
              Microblading is not suitable for the following candidates:
            </p>
            <ul>
              <li>Using Accutane</li>
              <li>Have heart conditions or using heart medications</li>
              <li>Have diabetes (please consult your doctor regarding suitability)</li>
              <li>Have skin disease or irritations</li>
              <li>Have had Botox in the last 2 weeks</li>
              <li>Have gotten a deep tan or chemical peels in the last 2 weeks</li>
              <li>Allergic to lidocaine, prilocaine, benzocaine, tetracaine or epinephrine</li>
              <li>Anyone who has a serious medical condition, please consult your doctor regarding suitability</li>
              <li>Pregnant or nursing clients who want to microblade can be done at your own discretion. We suggest discussing with your doctor first</li>
            </ul>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">How should I prepare for my microblading appointment?</h3>
          <div className="faq-answer">
            <p>
              To ensure the best results from your microblading procedure, we recommend the following:
            </p>
            <ul>
              <li>Avoid alcohol, caffeine, and blood thinners like aspirin for 24-48 hours before your appointment</li>
              <li>Avoid sun exposure or tanning for at least a week before your appointment</li>
              <li>Don't tint, wax, or thread your eyebrows within 3-5 days of your appointment</li>
              <li>Avoid chemical peels, dermabrasion, or laser treatments for at least 2 weeks before</li>
              <li>Come to your appointment with clean skin and no makeup on the brow area</li>
              <li>If you have a low pain tolerance, you may take Paracetamol one hour before your appointment</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="faq-section">
        <h2 className="service-subtitle">Aftercare & Maintenance</h2>
        
        <div className="faq-item">
          <h3 className="faq-question">What aftercare is required?</h3>
          <div className="faq-answer">
            <p>
              Proper aftercare is essential for optimal healing and retention of the pigment. We will provide you with detailed aftercare instructions, but the basics include:
            </p>
            <ul>
              <li>Keep the brow area clean and dry for the first 7-10 days</li>
              <li>Avoid touching or scratching the area</li>
              <li>Don't apply makeup to the brow area during the healing period</li>
              <li>Avoid swimming, saunas, steam rooms, and excessive sweating</li>
              <li>Avoid direct sun exposure and tanning beds</li>
              <li>Apply any recommended aftercare products as instructed</li>
              <li>Don't use skincare products containing AHA, retinol, or glycolic acid on or near the brows</li>
            </ul>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">When will I see the final results?</h3>
          <div className="faq-answer">
            <p>
              After your initial session, your brows will go through several phases:
            </p>
            <ul>
              <li>Days 1-2: The brows appear darker and more defined</li>
              <li>Days 3-7: You may experience some flaking or scabbing</li>
              <li>Days 7-14: The color appears lighter as the skin heals</li>
              <li>Days 14-30: The pigment settles and true color emerges</li>
            </ul>
            <p>
              The final results will be visible after the touch-up session and complete healing, usually about 30 days after your touch-up appointment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="faq-section">
        <h2 className="service-subtitle">About Other Services</h2>
        
        <div className="faq-item">
          <h3 className="faq-question">What is the difference between Microblading and Ombré Brows?</h3>
          <div className="faq-answer">
            <p>
              Microblading creates fine, hair-like strokes that mimic natural eyebrow hairs, using a manual hand tool. This technique is ideal for creating a natural, feathered look.
            </p>
            <p>
              Ombré Brows (or Powder Brows) use a machine to create a soft, powdered effect similar to brow powder makeup. The result is a more defined, filled-in look. This technique is often better for those with oily skin, as the pigment tends to last longer than microblading.
            </p>
            <p>
              Our Signature Combo Brows combine both techniques to achieve the most natural and dimensional brow look possible.
            </p>
          </div>
        </div>
        
        <div className="faq-item">
          <h3 className="faq-question">What is Microneedling and how does it work?</h3>
          <div className="faq-answer">
            <p>
              Microneedling is a minimally invasive cosmetic procedure that creates tiny punctures in the top layer of the skin using micro-fine needles. These micro-injuries trigger the body's natural wound healing processes, resulting in increased cell turnover and collagen production.
            </p>
            <p>
              This treatment is effective for improving skin texture, reducing fine lines, minimizing scarring, and creating a more youthful appearance. Multiple sessions are typically recommended for optimal results.
            </p>
          </div>
        </div>
      </div>
      
      <div className="booking-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 className="section-heading">Still Have Questions?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 1.5rem' }}>
          If you have any other questions that weren't answered here, please feel free to contact us directly. 
          We're happy to address any concerns you might have about our services.
        </p>
        <a 
          href={freshaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary center-btn"
        >
          BOOK A CONSULTATION
        </a>
      </div>
    </div>
  );
} 