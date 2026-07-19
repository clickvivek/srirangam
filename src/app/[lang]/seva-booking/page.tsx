import React from 'react';
import { ExternalLink, AlertTriangle, CalendarHeart, Sparkles, MapPin, Ticket } from 'lucide-react';
import Link from 'next/link';
import ImportantNotePopup from '@/components/ImportantNotePopup';
import { getDictionary } from '@/dictionaries';

export const metadata = {
  title: 'Seva Booking - Sri Ranganathaswamy Temple',
  description: 'Book official Sevas and Darshans for Sri Ranganathaswamy Temple, Srirangam.',
};

export default async function SevaBookingPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  
  const sevas = [
    {
      title: dict.sevaBooking.items.allSevas.title,
      desc: dict.sevaBooking.items.allSevas.desc,
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collectionindex.php?tid=25700&scode=21&sscode=1&target_type=1&group_id=4",
      icon: <CalendarHeart size={36} color="#d95c14" />,
      color: "border-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: dict.sevaBooking.items.vishwaroopam.title,
      desc: dict.sevaBooking.items.vishwaroopam.desc,
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58649&rules_sid=36108&group_id=4&action=P",
      icon: <Sparkles size={36} color="#15803d" />,
      color: "border-green-600",
      bg: "bg-green-50",
      timing: dict.sevaBooking.items.vishwaroopam.timing,
      importantNote: dict.sevaBooking.items.vishwaroopam.importantNote
    },
    {
      title: dict.sevaBooking.items.perumalSpecial.title,
      desc: dict.sevaBooking.items.perumalSpecial.desc,
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58666&rules_sid=36114&group_id=4&action=P",
      icon: <Ticket size={36} color="#4338ca" />,
      color: "border-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: dict.sevaBooking.items.thayaarSpecial.title,
      desc: dict.sevaBooking.items.thayaarSpecial.desc,
      url: "https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collection.php?tid=25700&scode=21&sscode=1&target_type=&fees_slno=58668&rules_sid=36115&group_id=4&action=P",
      icon: <MapPin size={36} color="#be123c" />,
      color: "border-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: dict.sevaBooking.items.thirumanjanam.title,
      desc: dict.sevaBooking.items.thirumanjanam.desc,
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
          <h1 style={{ marginTop: '0' }}>{dict.sevaBooking.title}</h1>
          <div className="subtitle">{dict.sevaBooking.subtitle}</div>
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
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#b45309', fontSize: '1.25rem' }}>{dict.sevaBooking.noticeTitle}</h3>
              <p style={{ margin: 0, color: '#92400e', lineHeight: 1.6 }}>
                {dict.sevaBooking.noticeText}
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
                
                {seva.timing && (
                  <div style={{ 
                    marginBottom: '0.75rem', 
                    color: '#0f766e', 
                    fontSize: '0.9rem', 
                    fontWeight: 500,
                    backgroundColor: '#f0fdf4',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #bbf7d0'
                  }}>
                    {seva.timing}
                  </div>
                )}

                <p style={{ margin: '0 0 1rem 0', color: '#64748b', lineHeight: 1.6, flexGrow: 1 }}>
                  {seva.desc}
                </p>

                {seva.importantNote && (
                  <div style={{ marginBottom: '0.5rem' }}>
                    <ImportantNotePopup 
                      label={dict.sevaBooking.importantNoteLabel} 
                      content={seva.importantNote} 
                    />
                  </div>
                )}

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
                  {dict.sevaBooking.proceedToBooking} <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
