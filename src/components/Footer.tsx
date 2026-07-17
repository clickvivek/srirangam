import Link from 'next/link';
import { Mail, MessageSquare, Lightbulb } from 'lucide-react';
import ContactFormPopup from './ContactFormPopup';

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="did-you-know">
          <Lightbulb className="did-you-know-icon" size={24} />
          <p>
            <strong>Did you know?</strong> The temple&apos;s annual revenue exceeds ₹3,500 crore, making it the richest religious institution in the world. The Hundi (donation box) alone receives over 50 kg of gold annually.
          </p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <img src="/srirangam/logo_new.png" alt="Srirangam Temple Logo" style={{ height: '50px', width: 'auto', marginRight: '1rem' }} />
              <h3>Srirangam Temple Portal</h3>
            </div>
            <p className="footer-desc">
              An informational portal for Sri Ranganathaswamy Temple, Srirangam — the world&apos;s largest functioning Hindu temple and a premier Vaishnava Divya Desam.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href={`/${lang}/timings`}>Darshan Timings</Link></li>
              <li><Link href={`/${lang}/surroundings`}>Surroundings</Link></li>
              <li><Link href={`/${lang}/history`}>Temple History</Link></li>
              <li><Link href={`/${lang}/seva-booking`}>Seva Booking</Link></li>
              <li><Link href={`/${lang}/prasadam`}>Prasadam</Link></li>
              <li><Link href={`/${lang}/dharma-salas`}>Dharma Salas</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail />
                <span>srirangam.net@gmail.com</span>
              </li>
              <li>
                <MessageSquare />
                <ContactFormPopup />
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p style={{marginBottom: '0.5rem'}}><strong>Disclaimer:</strong> This is not the official government website of Sriranganatha temple. This website is maintained by Sri Ranganathar Devotees (Volunteers).</p>
          <p>© 2024 Devasthana Portal • Made with 🙏 for devotees • सर्वे भवन्तु सुखिनः</p>
        </div>
      </div>
    </footer>
  );
}
