import React from 'react';
import { ExternalLink, MapPin, Heart, Coins, Info, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getDictionary } from '@/dictionaries';

export const metadata = {
  title: 'Annadhanam & Prasadam - Sri Ranganathaswamy Temple',
  description: 'Details about the full-day Annadanam program and donations at Sri Ranganathaswamy Temple, Srirangam.',
};

export default async function AnnadhanamPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.prasadam || {};

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/srirangam/annadhanam.jpg") center/cover no-repeat' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>{t.heroTitle || "Annadhanam & Prasadam"}</h1>
          <div className="subtitle">{t.heroSubtitle || "Free Meals Scheme (Nithya Annadhanam)"}</div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fcfaf8' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            marginBottom: '3rem'
          }}>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image 
                src="/srirangam/annadhanam.jpg" 
                alt="Devotees partaking in Annadhanam at Srirangam" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Heart color="#d95c14" size={28} />
                <h2 style={{ margin: 0, color: '#571a15', fontSize: '1.75rem' }}>{t.programTitle || "Nithya Annadhanam Program"}</h2>
              </div>
              
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: t.programDesc1 || "For the convenience of the devotees, the full-day Annadanam program has been running successfully since <strong>13-09-2012</strong>. Every single day, at least <strong>3,000 devotees</strong> are provided with wholesome, sacred meals as Prasadam." }}>
              </p>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <MapPin color="#b45309" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: '#92400e', fontSize: '1.1rem' }}>{t.locationTitle || "Location"}</h3>
                  <p style={{ margin: 0, color: '#b45309' }}>
                    {t.locationDesc || "Dining Hall near to the Temple Rooftop View Point."} <br/>
                    <Link href={`/${lang}/map`} style={{ color: '#d95c14', textDecoration: 'underline', fontWeight: 600, display: 'inline-block', marginTop: '0.5rem' }}>{t.referMap || "Refer to the Temple Map"}</Link>
                  </p>
                </div>
              </div>

              <div style={{ borderTop: '2px dashed #eee', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <Coins color="#15803d" size={28} />
                  <h2 style={{ margin: 0, color: '#14532d', fontSize: '1.5rem' }}>{t.donationTitle || "Donation Details"}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#166534' }}>{t.oneDayTitle || "One-Day Scheme"}</h4>
                    <p style={{ margin: 0, color: '#15803d', fontSize: '1.1rem', fontWeight: 600 }}>₹3,500/-</p>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#166534', fontSize: '0.9rem' }}>{t.oneDayDesc || "Provides Annadanam to 100 persons for a single day."}</p>
                  </div>
                  
                  <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #22c55e' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: '#166534' }}>{t.permanentTitle || "Permanent Endowment"}</h4>
                    <p style={{ margin: 0, color: '#15803d', fontSize: '1.1rem', fontWeight: 600 }}>₹70,000/-</p>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#166534', fontSize: '0.9rem' }}>{t.permanentDesc || "Deposit for feeding 100 persons on a particular day every year."}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  <Info size={18} style={{ flexShrink: 0 }} />
                  <em>{t.multipleNote || "For multiple Annadanams, the amount will be calculated in the above ratio."}</em>
                </div>

                <a 
                  href="https://srirangamranganathar.hrce.tn.gov.in/ticketing/service_collectionindex.php?tid=25700&scode=21&sscode=1&target_type=1&group_id=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem', 
                    width: '100%', 
                    padding: '1rem',
                    fontSize: '1.1rem'
                  }}
                >
                  {t.donateBtn || "Proceed to Online Donation"} <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
