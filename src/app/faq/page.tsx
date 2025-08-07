import TrackingAnchor from '@/components/TrackingAnchor';
import FAQSchema from '@/components/FAQSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Melbourne Designer Brows',
  description: 'Everything you need to know about microblading and cosmetic tattooing in Melbourne. Expert answers about procedures, aftercare, pricing, and results.',
  alternates: {
    canonical: 'https://mdbrows.com.au/faq',
  },
  openGraph: {
    title: 'FAQs | Melbourne Designer Brows',
    description: 'Everything you need to know about microblading and cosmetic tattooing in Melbourne. Expert answers about procedures, aftercare, pricing, and results.',
    url: 'https://mdbrows.com.au/faq',
    images: [{
      url: 'https://mdbrows.com.au/images/faq-banner.webp',
    }],
    type: 'website',
  },
};

export default function FAQ() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  const faqData = [
    {
      question: "What is Microblading?",
      answer: "Microblading is a sophisticated semi-permanent cosmetic tattooing technique used to create fuller, natural-looking eyebrows. This precision artistry involves the use of a specialized handheld microblade to manually draw delicate hair-like strokes that blend into your existing eyebrow hair for natural, beautiful results."
    },
    {
      question: "How long does the procedure take?",
      answer: "For the first Microblading session, the entire procedure usually takes about 2-3 hours. This includes consultation, brow mapping, numbing, and the actual microblading process."
    },
    {
      question: "How long does microblading last?",
      answer: "Microblading typically lasts 12-24 months, depending on your skin type, lifestyle, and aftercare. Oily skin types may fade faster, while dry skin tends to retain the pigment longer."
    },
    {
      question: "Does microblading hurt?",
      answer: "Most clients experience minimal discomfort during microblading. We use topical numbing cream to ensure your comfort throughout the procedure. Many describe the sensation as similar to eyebrow plucking."
    },
    {
      question: "What is the healing process like?",
      answer: "The healing process takes about 4-6 weeks. Initially, brows will appear darker and more defined, then gradually lighten as they heal. Proper aftercare is crucial for optimal results."
    },
    {
      question: "How much does microblading cost?",
      answer: "Our microblading starts from $595, which includes the initial treatment and complimentary touch-up session within 6-8 weeks. We offer package deals and payment plans for your convenience."
    },
    {
      question: "Am I a good candidate for microblading?",
      answer: "Most people are good candidates for microblading. However, we don't recommend the procedure for pregnant or breastfeeding women, those on blood-thinning medications, or people with certain skin conditions. A consultation will determine your suitability."
    },
    {
      question: "What should I avoid before my appointment?",
      answer: "Avoid alcohol, caffeine, blood-thinning medications, and sun exposure 24-48 hours before your appointment. Don't pluck, wax, or tint your eyebrows for at least one week prior to your session."
    }
  ];

  return (
    <div className="page-content">
      <FAQSchema faqs={faqData} pageUrl="https://mdbrows.com.au/faq/" />
      <h1 className="page-section-heading">Frequently Asked Questions</h1>
      
      <p className="page-intro" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
        Find answers to our most frequently asked questions about our services, aftercare, and what to expect during your appointment at Melbourne Designer Brows.
      </p>
      
      <div className="faq-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="faq-section" style={{ backgroundColor: '#fff8f5', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>About Microblading</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What is Microblading?</h3>
            <div className="faq-answer">
              <p>
                Microblading is a sophisticated semi-permanent cosmetic tattooing technique used to create fuller, natural-looking eyebrows. This precision artistry involves the use of a specialized handheld microblade to manually draw delicate hair-like strokes.
              </p>
              <p>
                Although microblading is considered a form of eyebrow tattooing, the difference is that every hair stroke is drawn by the artist with a handheld microblade. Each stroke is manually shaped and blended into the client&apos;s existing eyebrow hair which results in natural, beautiful eyebrows.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How long does the procedure take?</h3>
            <div className="faq-answer">
              <p>
                For the first Microblading session, the entire procedure usually takes about 2-3 hours.
              </p>
              <p>
                During this session, we will shape and style your brows and answer any questions you may have. We then follow with pigment colour selection. Once you are satisfied with the design and colour choice, we begin the procedure.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Is microblading painful?</h3>
            <div className="faq-answer">
              <p>
                The pain level for the procedure is considered mild to none. Prior to the procedure we will apply a topical anesthetic to numb the area, and we&apos;ll continue to apply anesthetic throughout the entire procedure to ensure your comfort level is maintained.
              </p>
              <p>
                Unlike many other studios, we prioritize your comfort by continuously reapplying numbing throughout the entire procedure—not just at the beginning. This comprehensive approach to pain management is so effective that many of our clients experience minimal discomfort, with some even falling asleep during their treatment.
              </p>
              <p>
                Everyone responds differently to anesthetic; depending on the client, the feeling of the procedure has been described as light scratches to not feeling anything. After the procedure, redness and slight swelling in the area is normal. Clients describe the area feeling similar to a light sunburn.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How long does it take to heal?</h3>
            <div className="faq-answer">
              <p>
                The healing process takes approximately 10-14 days. Initially, your brows will appear 30-40% darker and more defined than the final result. During the first week, you may experience some flaking and scabbing as the skin heals.
              </p>
              <p>
                The eyebrows will go through several phases during healing:
              </p>
              <ul>
                <li><strong>Days 1-3:</strong> Brows appear darker and more defined than the final result</li>
                <li><strong>Days 4-7:</strong> Possible flaking and scabbing as the skin heals</li>
                <li><strong>Days 7-14:</strong> Color may appear lighter as new skin forms</li>
                <li><strong>Weeks 2-4:</strong> True color gradually develops as the pigment settles</li>
              </ul>
              <p>
                No down time is required after microblading procedure. It takes approximately 7-14 days for the brows to heal over, and about 1 month for the colour to fully set in.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Why do I need a touch-up session?</h3>
            <div className="faq-answer">
              <p>
                A touch up session after 6-8 weeks is necessary as everyone heals differently and outcomes will vary. This critical follow-up session allows us to:
              </p>
              <ul>
                <li>Assess how your skin has retained the pigment</li>
                <li>Fill in any areas that may need more definition</li>
                <li>Make adjustments to perfect the shape and density</li>
                <li>Ensure symmetry and overall natural appearance</li>
              </ul>
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
                Microblading is a semi-permanent treatment that typically lasts between 12 to 24 months, depending on individual factors like skin type, lifestyle, and personal skincare routine.
              </p>
              <p>
                Since microblading pigments are not implanted into the skin as deep as traditional tattoos, the area will naturally fade overtime. Clients with oily skin will find that their brows will fade faster and may need more regular touch-ups.
              </p>
              <p>
                The longevity of your microbladed brows also depends on factors such as:
              </p>
              <ul>
                <li>Your body&apos;s natural metabolism of the pigment</li>
                <li>Exposure to environmental factors like sun and pollution</li>
                <li>Your adherence to aftercare instructions</li>
                <li>The quality of pigments used (we use only premium, long-lasting pigments)</li>
                <li>The depth of pigment placement during the procedure</li>
              </ul>
              <p>
                To maintain the brows looking fresh, a touch up is recommended every 12-18 months depending on your skin type.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">What&apos;s the difference between microblading and machine brows/powder brows?</h3>
            <div className="faq-answer">
              <p>
                Microblading uses a manual hand tool to create fine, hair-like strokes, resulting in a natural appearance. Machine brows or powder brows (also called Ombré Brows) use a digital machine to implant pigment, creating a softer, shaded effect similar to brow powder makeup.
              </p>
              <p>
                Powder brows typically last longer than microblading and may be better for oily skin but provide a more filled-in look rather than the defined hair strokes of microblading.
              </p>
              <p>
                Our Signature Combo Brows combine both techniques to achieve the most natural and dimensional brow look possible, offering the best of both worlds.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-section" style={{ backgroundColor: '#f5f8ff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>About Cosmetic Tattooing</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What is cosmetic tattooing and how long does it last?</h3>
            <div className="faq-answer">
              <p>
                Cosmetic tattooing, also known as permanent makeup, involves the controlled insertion of safe color pigments into the skin to enhance features like eyebrows, lips, and eyes. Results typically last 1-3 years depending on the treatment area, your skin type, lifestyle, and aftercare.
              </p>
              <p>
                Specific longevity varies by procedure:
              </p>
              <ul>
                <li>Lip blushing generally lasts 2-3 years</li>
                <li>Eyeliner 3-5 years</li>
                <li>Brow treatments 1-3 years</li>
              </ul>
              <p>
                Factors that can affect longevity include sun exposure, skincare routines containing exfoliants or retinol, and how your body processes the pigment. Touch-ups are recommended every 12-18 months to maintain optimal results.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Is cosmetic tattooing painful?</h3>
            <div className="faq-answer">
              <p>
                At Melbourne Designer Brows, we prioritize your comfort during cosmetic tattooing procedures. We apply a topical numbing cream before beginning and, unlike many other studios, we continuously reapply numbing throughout the entire procedure—not just at the beginning.
              </p>
              <p>
                This comprehensive approach to pain management is so effective that many of our clients experience minimal discomfort, with some even falling asleep during their treatment. The level of discomfort varies by procedure and individual pain tolerance, with eyeliner typically being more sensitive than lip or brow treatments.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">What type of pigments do you use?</h3>
            <div className="faq-answer">
              <p>
                We use only the highest quality pigments available in the market. Our premium collection includes a diverse range of colors specifically formulated to match any skin tone perfectly.
              </p>
              <p>
                These professional-grade pigments are chosen for their:
              </p>
              <ul>
                <li>Longevity and color stability</li>
                <li>Hypoallergenic properties</li>
                <li>Ability to complement natural coloring</li>
                <li>Graceful aging (gradually fading rather than changing to unwanted tones)</li>
              </ul>
              <p>
                Our technicians have extensive training in color theory and skin undertone analysis, allowing them to select or custom-blend the perfect shade for your specific features.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">What is the healing process like for cosmetic tattooing?</h3>
            <div className="faq-answer">
              <p>
                The healing process varies by treatment but generally follows these stages:
              </p>
              <ul>
                <li><strong>Initial 24-48 hours:</strong> May involve some swelling and intensity of color</li>
                <li><strong>Days 3-7:</strong> Typically include flaking or scabbing as the skin heals</li>
                <li><strong>Days 7-14:</strong> Color will appear lighter as new skin forms</li>
                <li><strong>Weeks 4-6:</strong> The true color develops as the pigment settles</li>
              </ul>
              <p>
                Specific healing expectations by procedure:
              </p>
              <ul>
                <li><strong>Lip blushing:</strong> Expect 3-5 days of swelling and 7-10 days of flaking</li>
                <li><strong>Eyeliner:</strong> Expect 2-3 days of swelling and 5-7 days of flaking</li>
              </ul>
              <p>
                We provide detailed aftercare instructions specific to your treatment to ensure optimal healing.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-section" style={{ backgroundColor: '#f8fff5', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>About Tattoo Removal</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">How painful is tattoo removal?</h3>
            <div className="faq-answer">
              <p>
                Tattoo removal involves some discomfort, often described as a sensation similar to a rubber band snapping against the skin or a warm pinprick feeling. At Melbourne Designer Brows, we prioritize your comfort by applying premium numbing cream 30 minutes before your treatment begins.
              </p>
              <p>
                This significantly reduces discomfort during the procedure. Most clients find the process very tolerable, especially compared to getting the original tattoo.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How many sessions will I need for tattoo removal?</h3>
            <div className="faq-answer">
              <p>
                The number of sessions required varies significantly based on several factors:
              </p>
              <ul>
                <li>Tattoo age (older tattoos typically require fewer sessions)</li>
                <li>Ink colors (black and dark blue respond best)</li>
                <li>Tattoo depth and density</li>
                <li>Location on the body (areas with better circulation respond faster)</li>
                <li>Individual factors like skin type and immune system function</li>
              </ul>
              <p>
                On average, most clients require 6-10 sessions for significant removal, though this can range from 3-15 sessions in total. During your consultation, we&apos;ll provide a more specific estimate based on your particular tattoo.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Is tattoo removal safe?</h3>
            <div className="faq-answer">
              <p>
                Yes, when performed by trained professionals using quality equipment, tattoo removal is very safe. Our technicians are certified and experienced in the latest removal techniques.
              </p>
              <p>
                Side effects are typically minor and temporary, including redness, swelling, blistering, and temporary changes in skin texture. More serious side effects like scarring are rare when proper aftercare is followed.
              </p>
              <p>
                We conduct a thorough consultation to identify any contraindications before beginning treatment to ensure your safety.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How much does tattoo removal cost?</h3>
            <div className="faq-answer">
              <p>
                Tattoo removal pricing is based primarily on the size of the tattoo being treated. We offer single sessions as well as discounted packages of 3 or 6 sessions, which provide significant savings.
              </p>
              <p>
                Our transparent pricing structure provides package deals: 20% discount for three sessions, 25% discount for six sessions. Multiple sessions are often required for complete removal, making our package deals a cost-effective option.
              </p>
              <p>
                During your consultation, we&apos;ll provide a precise quote based on your specific tattoo and treatment plan.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">Can all tattoo colors be removed?</h3>
            <div className="faq-answer">
              <p>
                While our advanced technology can effectively target most ink colors, some colors respond better than others:
              </p>
              <ul>
                <li>Black, dark blue, and red typically respond well to laser treatment</li>
                <li>Green, yellow, and white can be more challenging and may require more sessions</li>
                <li>Some colors may not completely disappear but can be significantly faded</li>
              </ul>
              <p>
                During your consultation, we&apos;ll assess your specific tattoo colors and provide realistic expectations for the removal process.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-section" style={{ backgroundColor: '#fff5f8', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Eligibility & Preparation</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">Who is not suitable for microblading or cosmetic tattooing?</h3>
            <div className="faq-answer">
              <p>
                Microblading and cosmetic tattooing are not suitable for the following candidates:
              </p>
              <ul>
                <li>Pregnant or breastfeeding women (please consult your doctor first)</li>
                <li>People using Accutane (must be off for at least 6 months)</li>
                <li>Those with diabetes (unless well-controlled; please consult your doctor)</li>
                <li>Those with heart conditions or using heart medications</li>
                <li>People with bleeding disorders or taking blood thinners</li>
                <li>Those with a history of keloids or hypertrophic scarring</li>
                <li>People with skin disease or irritations in the treatment area</li>
                <li>Those who have had Botox in the treatment area in the last 2 weeks</li>
                <li>People with extremely oily skin (results may not last as long)</li>
                <li>Those who have gotten a deep tan or chemical peels in the last 2 weeks</li>
                <li>People allergic to lidocaine, prilocaine, benzocaine, tetracaine or epinephrine</li>
              </ul>
              <p>
                During your consultation, we&apos;ll discuss your medical history to determine if the procedure is right for you.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">How should I prepare for my appointment?</h3>
            <div className="faq-answer">
              <p>
                For optimal results, we recommend:
              </p>
              <ul>
                <li>Avoid alcohol, caffeine, and blood thinners like aspirin, vitamin E, and fish oil supplements for 24-48 hours before your appointment (if medically safe for you)</li>
                <li>Avoid sun exposure or tanning for at least a week before</li>
                <li>Don&apos;t tint, wax, or thread your eyebrows within 3-5 days of your microblading appointment</li>
                <li>Avoid chemical peels, Botox, or other facial treatments for 2-3 weeks before</li>
                <li>Come with clean skin and no makeup on the treatment area</li>
                <li>If you have a low pain tolerance, you may take Paracetamol one hour before (but avoid aspirin or ibuprofen)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="faq-section" style={{ backgroundColor: '#f0f8f5', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Aftercare & Maintenance</h2>
          
          <div className="faq-item">
            <h3 className="faq-question">What aftercare is required for microblading/cosmetic tattooing?</h3>
            <div className="faq-answer">
              <p>
                Proper aftercare is essential for optimal healing and retention of the pigment. We will provide you with detailed aftercare instructions for your specific procedure, but the basics include:
              </p>
              <p><strong>Immediate Aftercare (First 24 Hours):</strong></p>
              <ul>
                <li>Keep the area completely dry</li>
                <li>Avoid touching the treated area except for necessary aftercare</li>
                <li>Sleep with your face up to avoid pressure on the treated area</li>
                <li>Avoid exercise, swimming, and excessive sweating</li>
              </ul>
              
              <p><strong>Days 2-7 (Critical Healing Period):</strong></p>
              <ul>
                <li>Apply a thin layer of the provided aftercare balm with clean fingers 2-3 times per day</li>
                <li>Do not pick, scratch or rub the treated area – let scabs fall off naturally</li>
                <li>Avoid makeup on the treated area until fully healed</li>
                <li>Avoid direct sun exposure, saunas, steam rooms, and swimming pools</li>
                <li>Avoid strenuous exercise that causes excessive sweating</li>
                <li>Do not use facial scrubs, peels, or anti-aging products around the treated area</li>
              </ul>
              
              <p><strong>Long-Term Care (After Healing):</strong></p>
              <ul>
                <li>Apply sunscreen (minimum SPF 30) to the treated area when exposed to direct sunlight</li>
                <li>Avoid chemical treatments directly on the treated area (including glycolic acid, retinol)</li>
                <li>Minimize oil-based products around the treated area</li>
                <li>Schedule regular touch-ups every 12-18 months to maintain results</li>
              </ul>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">What aftercare is required for tattoo removal?</h3>
            <div className="faq-answer">
              <p>
                Proper aftercare is essential for optimal results and minimizing potential side effects after tattoo removal. We will provide specific instructions for your situation, but the general guidelines include:
              </p>
              <p><strong>Immediate Aftercare (First 48 Hours):</strong></p>
              <ul>
                <li>Keep the area clean and dry</li>
                <li>Apply cold compresses for 5-10 minutes every few hours to reduce swelling</li>
                <li>Avoid tight clothing over the treated area</li>
                <li>Elevate the treated area when possible to minimize swelling</li>
                <li>Take any recommended pain relievers as directed</li>
              </ul>
              
              <p><strong>Ongoing Care (Days 3-14):</strong></p>
              <ul>
                <li>Apply any recommended ointments as directed</li>
                <li>Keep the area moisturized with fragrance-free lotion</li>
                <li>Avoid direct sun exposure and use SPF 30+ when healed</li>
                <li>Do not pick or scratch the treated area, even if blisters form</li>
                <li>Avoid swimming pools, hot tubs, and saunas until fully healed</li>
                <li>Gently wash the area with mild, fragrance-free soap</li>
              </ul>
            </div>
          </div>
          
          <div className="faq-item">
            <h3 className="faq-question">When will I see the final results?</h3>
            <div className="faq-answer">
              <p>
                After your initial session, your treated area will go through several phases of healing:
              </p>
              <ul>
                <li><strong>Days 1-2:</strong> The treated area appears darker and more defined</li>
                <li><strong>Days 3-7:</strong> You may experience some flaking or scabbing</li>
                <li><strong>Days 7-14:</strong> The color appears lighter as the skin heals</li>
                <li><strong>Days 14-30:</strong> The pigment settles and true color emerges</li>
              </ul>
              <p>
                The final results will be visible after the touch-up session and complete healing, usually about 30 days after your touch-up appointment.
              </p>
              <p>
                For tattoo removal, results are progressive with each session. You'll notice gradual fading after each treatment, with optimal results usually visible 4-8 weeks after your final session.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-section" style={{ backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 className="service-subtitle" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>About Other Services</h2>
          
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
          
          <div className="faq-item">
            <h3 className="faq-question">What is Eyebrow Correction and when is it needed?</h3>
            <div className="faq-answer">
              <p>
                Eyebrow correction is a specialized service for clients who have received unsatisfactory results from previous microblading or tattooing procedures. This might include uneven shape, poor color choice, or faded, discolored results.
              </p>
              <p>
                Our correction services can:
              </p>
              <ul>
                <li>Reshape uneven or asymmetrical brows</li>
                <li>Correct unflattering colors</li>
                <li>Fix harsh, unnatural-looking strokes</li>
                <li>Address migration or blurring of pigment</li>
              </ul>
              <p>
                Depending on the condition of your current brows, correction may involve color neutralization, removal techniques, or a completely new application. During your consultation, we'll assess your specific situation and recommend the best approach.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="booking-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem' }}>Have More Questions?</h3>
        <p style={{ marginBottom: '1.5rem' }}>Book a consultation to discuss your specific needs and concerns.</p>
        <TrackingAnchor 
          href={freshaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          BOOK A CONSULTATION
        </TrackingAnchor>
      </div>
    </div>
  );
} 