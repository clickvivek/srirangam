import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Lightbulb } from 'lucide-react';

export default function Footer() {
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
              <h3>Srirangam Temple Portal</h3>
            </div>
            <p className="footer-desc">
              An informational portal for Sri Ranganathaswamy Temple, Srirangam — the world&apos;s largest functioning Hindu temple and a premier Vaishnava Divya Desam.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">Temple Timings</Link></li>
              <li><Link href="/">Seva Booking</Link></li>
              <li><Link href="/">Prasadam Orders</Link></li>
              <li><Link href="/">Accommodation</Link></li>
              <li><Link href="/">Contact TTD</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>
                <Phone />
                <span>TTD Helpline: 1800-123-4567</span>
              </li>
              <li>
                <Mail />
                <span>info@ttdsevaonline.com</span>
              </li>
              <li>
                <MapPin />
                <span>Srirangam, Tiruchirappalli - 620 006</span>
              </li>
              <li>
                <Clock />
                <span>Office: 8:00 AM – 8:00 PM</span>
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
