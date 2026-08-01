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
            {dict?.navigation?.dressCode || "Temple Dress Code Guidelines"}
          </h1>
          <p style={{ color: '#f0f0f0', maxWidth: '600px', margin: '1rem auto 0' }}>
            Please follow these guidelines to maintain the sanctity and spiritual atmosphere of the temple.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '60vh', padding: '4rem 0' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Men's Dress Code Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <h2 style={{ color: '#571a15', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                For Men
              </h2>
              
              <h3 style={{ color: '#0e492c', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={20} color="#0e492c" /> Recommended Attire
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Dhoti (Veshti)</strong>
                  Traditional white or colored dhoti. Wearing an <strong>angavastram</strong> (upper cloth) is encouraged.
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Panchakacham</strong>
                  The traditional five-fold style of draping a dhoti, especially appropriate for religious ceremonies.
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Kurta with Dhoti</strong>
                  A simple kurta or traditional shirt paired with a dhoti is a respectful choice.
                </li>
                <li style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <strong style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>Formal Shirt with Trousers (Permitted)</strong>
                  Formal trousers with a collared shirt, collar T-shirts, or jeans are permitted. However, traditional Indian attire is preferred.
                </li>
              </ul>

              <h3 style={{ color: '#d95c14', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <XCircle size={20} color="#d95c14" /> Not Permitted
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Shorts:</strong> Not allowed inside the temple premises.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Sleeveless Shirts/Vests:</strong> Clothing must cover the shoulders.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Ripped/Revealing Clothing:</strong> Please wear clean, modest attire.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Leather Items:</strong> Avoid carrying/wearing leather belts inside the main sanctum.</span>
                </li>
              </ul>
            </div>

            {/* Women's Dress Code Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
              <h2 style={{ color: '#571a15', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                For Women
              </h2>
              
              <h3 style={{ color: '#0e492c', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <CheckCircle2 size={20} color="#0e492c" /> Recommended Attire
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Saree</strong>
                  The most traditional and widely preferred attire for temple visits.
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Half Saree (Pavadai Davani)</strong>
                  A traditional South Indian outfit suitable for all religious occasions.
                </li>
                <li style={{ backgroundColor: '#f0f9f4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #0e492c' }}>
                  <strong style={{ display: 'block', color: '#0e492c', marginBottom: '0.25rem' }}>Salwar Kameez</strong>
                  Acceptable when worn with a <strong>dupatta</strong> covering the shoulders.
                </li>
                <li style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                  <strong style={{ display: 'block', color: '#666', marginBottom: '0.25rem' }}>Churidar with Long Kurta (Permitted)</strong>
                  A modest, comfortable, and appropriate choice for temple visits.
                </li>
              </ul>

              <h3 style={{ color: '#d95c14', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <XCircle size={20} color="#d95c14" /> Not Permitted
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Jeans/Western Casuals:</strong> Traditional attire is preferred for main sanctum darshan.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Sleeveless Tops:</strong> Clothing should adequately cover the shoulders.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Short Skirts/Dresses:</strong> Attire should extend below the knees.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#d95c14', fontWeight: 'bold' }}>•</span>
                  <span><strong>Revealing Clothing:</strong> Please wear modest clothing that reflects the sanctity.</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div style={{ maxWidth: '800px', margin: '3rem auto 0', backgroundColor: '#eef2f5', padding: '1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #c7d2db' }}>
            <Info size={28} color="#2b5a84" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, color: '#2b5a84', fontSize: '0.95rem' }}>
              <strong>Note:</strong> The temple administration reserves the right to deny entry to anyone not adhering to the dress code. Your cooperation in maintaining the spiritual decorum is highly appreciated.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
