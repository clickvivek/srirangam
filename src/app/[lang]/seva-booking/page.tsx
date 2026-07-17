import React from 'react';
import { ExternalLink, AlertTriangle, CalendarHeart, Sparkles, MapPin, Ticket } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Seva Booking - Sri Ranganathaswamy Temple',
  description: 'Book official Sevas and Darshans for Sri Ranganathaswamy Temple, Srirangam.',
};

export default function SevaBookingPage() {
  const sevas = [
    {
      title: "All Seva Bookings",
      desc: "Explore and book all available Sevas and services.",
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collectionindex.php?tid=25700&scode=21&sscode=1&target_type=1&group_id=4",
      icon: <CalendarHeart size={36} color="#d95c14" />,
      color: "border-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Perumal Sannathi Vishwaroopam Sevai",
      desc: "Book tickets for the early morning Vishwaroopam Darshan of Lord Ranganatha.",
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58649&rules_sid=36108&group_id=4&action=P",
      icon: <Sparkles size={36} color="#15803d" />,
      color: "border-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Perumal Sannathi Special Entrance",
      desc: "Special entry tickets for Lord Ranganatha's main sanctum.",
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58666&rules_sid=36114&group_id=4&action=P",
      icon: <Ticket size={36} color="#4338ca" />,
      color: "border-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Thayaar Sannathi Special Entrance",
      desc: "Special entry tickets for Goddess Sri Ranganayaki Thayar's sanctum.",
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58668&rules_sid=36115&group_id=4&action=P",
      icon: <MapPin size={36} color="#be123c" />,
      color: "border-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Thirumanjanam Tanvandiri",
      desc: "Book Thirumanjanam service for Lord Dhanvantri.",
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=30104&rules_sid=21374&group_id=4&action=P",
      icon: <Sparkles size={36} color="#0369a1" />,
      color: "border-sky-600",
      bg: "bg-sky-50"
    }
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>Seva Booking</h1>
          <div className="subtitle">Official Darshan & Services</div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Disclaimer Alert */}
          <div 
            style={{
              backgroundColor: '#fffbeb',
              border: '1px solid #f59e0b',
              borderLeft: '5px solid #d97706',
              padding: '1.5rem',
              borderRadius: '8px',
              marginBottom: '3rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
          >
            <AlertTriangle color="#d97706" size={32} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#b45309', fontSize: '1.25rem' }}>Important Notice</h3>
              <p style={{ margin: 0, color: '#92400e', lineHeight: 1.6 }}>
                <strong>srirangam.net</strong> is an informational portal and is <strong>not</strong> the official temple booking site. 
                All seva and darshan bookings are securely processed through the official Tamil Nadu Government (HR&CE) website. 
                The links below will redirect you to the official government portal for booking.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {sevas.map((seva, index) => (
              <a 
                key={index}
                href={seva.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  borderTop: '5px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="seva-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    padding: '1rem', 
                    borderRadius: '50%',
                    backgroundColor: '#f8fafc',
                    boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
                  }}>
                    {seva.icon}
                  </div>
                  <ExternalLink color="#94a3b8" size={24} />
                </div>
                
                <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', color: '#1e293b' }}>
                  {seva.title}
                </h3>
                <p style={{ margin: '0', color: '#64748b', lineHeight: 1.6, flexGrow: 1 }}>
                  {seva.desc}
                </p>

                <div style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #f1f5f9',
                  color: '#d95c14',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Proceed to Official Booking <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
