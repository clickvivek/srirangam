import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/dictionaries';

export default async function ViswaroopamSevaPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.viswaroopaSeva;

  // Fallback to english if not available in dictionary
  if (!t) return null;

  return (
    <div style={{ backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Stylish Hero Section */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <Link href={`/${lang}/deity-pooja`} style={backLinkStyle}>
            <ArrowLeft size={20} />
            {t.backLink}
          </Link>
          <span style={{ color: '#fce8d5', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>{t.subheading}</span>
          <h1 style={{ color: 'white', fontSize: '2.2rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {t.title}
          </h1>
          <p style={{ color: '#eee', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            {t.description}
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '-3rem auto 3rem', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          
          <img src="/srirangam/Viswaroopam.png" alt="Viswaroopam Seva" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          
          <p style={leadParagraphStyle} dangerouslySetInnerHTML={{ __html: t.leadParagraph }}></p>

          <h2 style={headingStyle}>{t.timingHeading}</h2>
          <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: t.timingParagraph }}></p>

          <h2 style={headingStyle}>{t.significanceHeading}</h2>
          <ul style={listStyle}>
            {t.significanceList.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2 style={headingStyle}>{t.theerthamHeading}</h2>
          <p style={paragraphStyle}>{t.theerthamParagraph1}</p>
          <p style={paragraphStyle}>{t.theerthamParagraph2}</p>

          <h2 style={headingStyle}>{t.elephantHeading}</h2>
          <p style={paragraphStyle}>{t.elephantParagraph1}</p>
          <p style={paragraphStyle}>{t.elephantParagraph2}</p>

          <h2 style={headingStyle}>{t.benefitsHeading}</h2>
          <ul style={listStyle}>
            {t.benefitsList.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2 style={headingStyle}>{t.literatureHeading}</h2>
          <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: t.literatureParagraph }}></p>

          <h2 style={headingStyle}>{t.knowHeading}</h2>
          <ul style={listStyle}>
            {t.knowList.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          
          <p style={{ ...paragraphStyle, marginTop: '2rem', fontStyle: 'italic', fontWeight: 'bold', color: '#571a15', textAlign: 'center' }}>
            {t.footerQuote}
          </p>
        </div>
      </div>
    </div>
  );
}

const heroStyle: React.CSSProperties = {
  position: 'relative',
  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/1200px-Sri_Ranganathaswamy_Temple_Gopuram.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '175px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const heroOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(87, 26, 21, 0.7)' // Deep temple maroon overlay
};

const heroContentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  padding: '0 2rem'
};

const backLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'white',
  textDecoration: 'none',
  position: 'absolute',
  top: '-50px',
  left: '0',
  fontWeight: 'bold',
  opacity: 0.9
};

const headingStyle: React.CSSProperties = {
  color: '#d95c14',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  borderBottom: '1px solid #fce8d5',
  paddingBottom: '0.5rem'
};

const leadParagraphStyle: React.CSSProperties = {
  color: '#333',
  lineHeight: '1.8',
  fontSize: '1.15rem',
  textAlign: 'justify' as const
};

const paragraphStyle: React.CSSProperties = {
  color: '#444',
  lineHeight: '1.8',
  marginBottom: '1rem',
  fontSize: '1.05rem',
  textAlign: 'justify' as const
};

const listStyle: React.CSSProperties = {
  color: '#444',
  lineHeight: '1.8',
  fontSize: '1.05rem',
  paddingLeft: '1.5rem',
  marginBottom: '1rem'
};
