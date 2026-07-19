import React from 'react';
import { getDictionary } from '@/dictionaries';
import { MapPin, Phone, Info, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Where to Stay - Sri Ranganathaswamy Temple',
  description: 'Information about hotels, lodges, and Yatri Nivas near Sri Ranganathaswamy Temple.',
};

export default async function StayPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> | { lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' } }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.stay || {};

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>{t.title || "Where to Stay in Srirangam"}</h1>
          <div className="subtitle">{t.subtitle || "A guide to hotels, lodges, and temple guest houses"}</div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Introduction */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
            <h2 style={{ color: '#d97706', marginTop: 0 }}>{t.zonesTitle || "Two Main Zones to Choose From"}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{t.zonesIntro || "For a Srirangam pilgrimage, you've basically got two zones to choose from: right at the temple's doorstep (walk to darshan, no traffic hassle) or a bit further out (usually quieter, sometimes cheaper)."}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Walking Distance */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#571a15', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={24} color="#d97706" /> 
                {t.walkingDistanceTitle || "Walking distance to the temple"}
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>{t.walkingDistanceDesc || "Best if you want to avoid autos during early-morning or late-night darshan:"}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(t.hotels || []).map((hotel: any, idx: number) => (
                  <li key={idx} style={{ paddingBottom: '1rem', borderBottom: idx !== t.hotels.length - 1 ? '1px solid #eee' : 'none' }}>
                    <strong>
                      {hotel.link ? <a href={hotel.link} target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', textDecoration: 'none' }}>{hotel.name}</a> : hotel.name}
                    </strong> – {hotel.desc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Further Out */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#571a15', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={24} color="#d97706" /> 
                {t.furtherOutTitle || "Slightly further out, quieter"}
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>{t.furtherOutDesc || "Good if you're also visiting Rockfort or Jambukeswarar Temple:"}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(t.furtherOutHotels || []).map((hotel: any, idx: number) => (
                  <li key={idx} style={{ paddingBottom: '1rem', borderBottom: idx !== t.furtherOutHotels.length - 1 ? '1px solid #eee' : 'none' }}>
                    <strong>
                      {hotel.link ? <a href={hotel.link} target="_blank" rel="noopener noreferrer" style={{ color: '#d97706', textDecoration: 'none' }}>{hotel.name}</a> : hotel.name}
                    </strong> – {hotel.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Practical Notes */}
          <div style={{ backgroundColor: '#fffbeb', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b', marginBottom: '3rem' }}>
            <h3 style={{ color: '#b45309', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={24} />
              {t.practicalNotesTitle || "Practical Notes"}
            </h3>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#78350f' }}>
              {(t.practicalNotes || []).map((note: string, idx: number) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '3rem 0' }} />

          {/* Yatri Nivas Detailed Section */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ color: '#571a15', fontSize: '2rem', marginBottom: '0.5rem' }}>
              {t.yatriNivasDetailsLink ? (
                <a href={t.yatriNivasDetailsLink} target="_blank" rel="noopener noreferrer" style={{ color: '#571a15', textDecoration: 'none' }}>{t.yatriNivasDetailsTitle || "Yatri Nivas Srirangam"}</a>
              ) : (
                t.yatriNivasDetailsTitle || "Yatri Nivas Srirangam"
              )}
            </h2>
            <p style={{ color: '#666', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>{t.yatriNivasDetailsDesc || "The temple-run guest house – pulled together from booking guides, official temple contacts, and traveler reviews."}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* The Basics */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: '#571a15', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid #fde68a', paddingBottom: '0.5rem' }}>
                <Info size={24} color="#d97706" /> 
                {t.basicsTitle || "The Basics"}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {(t.basics || []).map((item: string, idx: number) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div style={{ color: '#d97706', marginTop: '2px' }}>•</div>
                    <div>{item}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Pros */}
              <div style={{ backgroundColor: '#f0fdf4', padding: '2rem', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <h3 style={{ color: '#166534', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={24} color="#22c55e" /> 
                  {t.prosTitle || "Pros"}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#166534' }}>
                  {(t.pros || []).map((item: string, idx: number) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <div style={{ marginTop: '2px' }}>+</div>
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div style={{ backgroundColor: '#fef2f2', padding: '2rem', borderRadius: '12px', border: '1px solid #fecaca' }}>
                <h3 style={{ color: '#991b1b', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <XCircle size={24} color="#ef4444" /> 
                  {t.consTitle || "Cons"}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#991b1b' }}>
                  {(t.cons || []).map((item: string, idx: number) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <div style={{ marginTop: '2px' }}>-</div>
                      <div>{item}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div style={{ backgroundColor: '#571a15', color: 'white', padding: '2.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <h3 style={{ color: '#fde68a', marginTop: 0, marginBottom: '1rem', fontSize: '1.5rem' }}>{t.bottomLineTitle || "Bottom Line"}</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, opacity: 0.9 }}>
              {t.bottomLineDesc || "Yatri Nivas is a solid pick if you're budget-conscious, traveling as a group or family, and don't mind commuting 2 km for darshan – but go in with realistic expectations on upkeep, and always confirm your booking by phone. If proximity to the temple and consistent quality matter more to you, one of the private lodges right by the South Gate will likely serve you better."}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
