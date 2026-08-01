import React from 'react';
import { getDictionary } from '@/dictionaries';
import { Shirt, CheckCircle2, XCircle, Info } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any) as any;
  return {
    title: (dict?.navigation?.dressCode || "Dress Code") + " - Sri Ranganathaswamy Temple",
  };
}

export default async function DressCodePage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as any;

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '25vh', minHeight: '25vh', background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative', marginTop: '4rem' }}>
          <h1 style={{ marginTop: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <Shirt size={36} color="var(--secondary-color)" />
            {dict?.dressCodePage?.title || "Temple Dress Code Guidelines"}
          </h1>
          <p style={{ color: '#f0f0f0', maxWidth: '600px', margin: '1rem auto 0' }}>
            {dict?.dressCodePage?.subtitle || "Please follow these guidelines to maintain the sanctity and spiritual atmosphere of the temple."}
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '60vh', padding: '4rem 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Men's Dress Code Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <h2 style={{ color: '#571a15', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                {dict?.dressCodePage?.forMen || "For Men"}
              </h2>
              
              <h3 style={{ color: '#0e492c', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={20} color="#0e492c" /> {dict?.dressCodePage?.recommended || "Recommended Attire"}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.men?.rec1Title || "Dhoti (Veshti)"}</strong>
                  {dict?.dressCodePage?.men?.rec1Desc}
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.men?.rec2Title || "Panchakacham"}</strong>
                  {dict?.dressCodePage?.men?.rec2Desc}
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.men?.rec3Title || "Kurta with Dhoti"}</strong>
                  {dict?.dressCodePage?.men?.rec3Desc}
                </li>
                <li style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <strong style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.men?.rec4Title || "Formal Shirt with Trousers (Permitted)"}</strong>
                  {dict?.dressCodePage?.men?.rec4Desc}
                </li>
              </ul>

              <h3 style={{ color: '#d95c14', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <XCircle size={20} color="#d95c14" /> {dict?.dressCodePage?.notPermitted || "Not Permitted"}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.men?.not1Title}:</strong> {dict?.dressCodePage?.men?.not1Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.men?.not2Title}:</strong> {dict?.dressCodePage?.men?.not2Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.men?.not3Title}:</strong> {dict?.dressCodePage?.men?.not3Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.men?.not4Title}:</strong> {dict?.dressCodePage?.men?.not4Desc}</span>
                </li>
              </ul>
            </div>

            {/* Women's Dress Code Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <h2 style={{ color: '#571a15', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                {dict?.dressCodePage?.forWomen || "For Women"}
              </h2>
              
              <h3 style={{ color: '#0e492c', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={20} color="#0e492c" /> {dict?.dressCodePage?.recommended || "Recommended Attire"}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.women?.rec1Title}</strong>
                  {dict?.dressCodePage?.women?.rec1Desc}
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.women?.rec2Title}</strong>
                  {dict?.dressCodePage?.women?.rec2Desc}
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.women?.rec3Title}</strong>
                  {dict?.dressCodePage?.women?.rec3Desc}
                </li>
                <li style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <strong style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>{dict?.dressCodePage?.women?.rec4Title}</strong>
                  {dict?.dressCodePage?.women?.rec4Desc}
                </li>
              </ul>

              <h3 style={{ color: '#d95c14', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <XCircle size={20} color="#d95c14" /> {dict?.dressCodePage?.notPermitted || "Not Permitted"}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.women?.not1Title}:</strong> {dict?.dressCodePage?.women?.not1Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.women?.not2Title}:</strong> {dict?.dressCodePage?.women?.not2Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.women?.not3Title}:</strong> {dict?.dressCodePage?.women?.not3Desc}</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>{dict?.dressCodePage?.women?.not4Title}:</strong> {dict?.dressCodePage?.women?.not4Desc}</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div style={{ maxWidth: '800px', margin: '3rem auto 0', backgroundColor: '#eef2f5', padding: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #c7d2db' }}>
            <Info size={28} color="#2b5a84" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, color: '#2b5a84', fontSize: '0.95rem' }}>
              {dict?.dressCodePage?.note || "Note: The temple administration reserves the right to deny entry to anyone not adhering to the dress code. Your cooperation in maintaining the spiritual decorum is highly appreciated."}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
