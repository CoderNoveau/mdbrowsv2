import Link from 'next/link';
import Image from 'next/image';
import ClientSeo from '@/components/ClientSeo';

export const metadata = {
  title: 'Brow Lamination | Melbourne Designer Brows',
  description: 'Transform your eyebrows with professional brow lamination services in Melbourne. Achieve fuller, fluffier, and perfectly styled brows that last for weeks.',
};

export default function BrowLamination() {
  const freshaLink = 'https://www.fresha.com/providers/melbourne-designer-brows-y0m3n797?pId=469429';

  return (
    <div className="page-content">
      <ClientSeo
        title="Brow Lamination | Melbourne Designer Brows"
        description="Transform your eyebrows with professional brow lamination services in Melbourne. Achieve fuller, fluffier, and perfectly styled brows that last for weeks."
        canonical="https://mdbrows.com.au/services/brow-lamination"
        ogImage="/images/service-brow-lamination.webp"
        ogType="article"
      />
      
      <h2 className="page-section-heading">Brow Lamination</h2>
      
      <div className="service-hero">
        <div className="service-hero-content">
          <h3>Transform Your Brows with Professional Lamination</h3>
          <p>
            Brow lamination is a semi-permanent treatment that restructures brow hairs to stay brushed up, creating a fuller, fluffier look. This innovative technique gives you perfectly styled brows that last for weeks.
          </p>
          <div className="service-cta">
            <Link href={freshaLink} className="btn" target="_blank">
              Book Now
            </Link>
          </div>
        </div>
        <div className="service-hero-image">
          <Image 
            src="/images/service-brow-lamination.webp" 
            alt="Brow Lamination at Melbourne Designer Brows" 
            width={500} 
            height={400}
            priority
          />
        </div>
      </div>
      
      <div className="service-details">
        <h3>About Brow Lamination</h3>
        <p>
          Brow lamination is a revolutionary treatment that straightens and sets brow hairs in place for a fuller, more defined look. Perfect for those with unruly, curly, or thinning brows, lamination helps achieve that coveted fluffy, brushed-up appearance that's both natural and striking.
        </p>
        
        <h3>The Process</h3>
        <ul>
          <li><strong>Consultation:</strong> We'll discuss your desired brow shape and style</li>
          <li><strong>Preparation:</strong> Brows are cleansed and a gentle lifting solution is applied</li>
          <li><strong>Restructuring:</strong> Hairs are brushed into the desired position</li>
          <li><strong>Setting:</strong> A neutralizing solution fixes the new shape</li>
          <li><strong>Nourishment:</strong> Keratin treatment to strengthen and condition the hairs</li>
        </ul>
        
        <h3>Benefits of Brow Lamination</h3>
        <ul>
          <li>Creates fuller-looking brows without the need for makeup</li>
          <li>Tames unruly hairs and gives them direction</li>
          <li>Results last 4-6 weeks with proper aftercare</li>
          <li>Quick procedure (approximately 45 minutes)</li>
          <li>Painless and non-invasive</li>
        </ul>
        
        <h3>Aftercare</h3>
        <p>
          For the first 24-48 hours after treatment, avoid getting your brows wet, applying makeup, or using skincare products on the area. We recommend using a brow conditioning serum to maintain the health of your brow hairs.
        </p>
        
        <div className="service-cta centered">
          <Link href={freshaLink} className="btn" target="_blank">
            Book Your Brow Lamination
          </Link>
        </div>
      </div>
    </div>
  );
} 