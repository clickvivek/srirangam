import Link from 'next/link';
import { Mail, MessageSquare, Lightbulb } from 'lucide-react';
import ContactFormPopup from './ContactFormPopup';
import DidYouKnow from './DidYouKnow';
import { getDictionary } from '../dictionaries';

export default async function Footer({ lang }: { lang: string }) {
  const dict = await getDictionary(lang as "en" | "ta" | "hi" | "te" | "ml" | "kn") as any;
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="did-you-know">
          <Lightbulb className="did-you-know-icon" size={24} />
            <p className="footer-desc">
              <DidYouKnow lang={lang} />
            </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/srirangam/logo_new.png" alt="Srirangam Temple Logo" style={{ height: '50px', width: 'auto', marginRight: '1rem' }} />
              <h3>Srirangam Temple Portal</h3>
            </div>
            <p className="footer-desc">
              {dict.footer.desc}
            </p>
          </div>

          <div className="footer-col">
            <h4>{dict.footer.quickLinks}</h4>
            <ul className="footer-links">
              <li><Link href={`/${lang}/timings`}>{dict.navigation.darshan}</Link></li>
              <li><Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`}>{dict.navigation.surroundings}</Link></li>
              <li><Link href={`/${lang}/history`}>{dict.navigation.history}</Link></li>
              <li><Link href={`/${lang}/seva-booking`}>{dict.navigation.seva}</Link></li>
              <li><Link href={`/${lang}/prasadam`}>{dict.navigation.prasadam}</Link></li>
              <li><Link href={`/${lang}/Stay-Hotel-Lodge`}>{dict.navigation.dharmaSalas}</Link></li>
              <li><Link href={`/${lang}/transport`}>{dict.navigation.transport}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{dict.footer.contact}</h4>
            <ul className="footer-contact">
              <li>
                <Mail />
                <span>srirangam.net@gmail.com</span>
              </li>
              <li>
                <MessageSquare />
                <ContactFormPopup label={dict.footer.contactForm} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p style={{marginBottom: '0.5rem'}}>{dict.footer.disclaimer}</p>
          <p>© 2024 Srirangam.net • {dict.footer.madeWith} • {dict.footer.sarveBhavantu}</p>
        </div>
      </div>
    </footer>
  );
}
