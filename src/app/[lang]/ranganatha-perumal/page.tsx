import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/dictionaries';

export default async function RanganathaPerumalPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as any;
  const t = dict.ranganathaPerumal;

  // Fallback if not available
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
          <h1 style={{ color: 'white', fontSize: '2.5rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {t.title}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '-3rem auto 3rem', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          
          {t.content.split('\n').filter((p: string) => p.trim() !== '').map((paragraph: string, idx: number) => {
            const trimmed = paragraph.trim();
            // Heuristic for identifying headings vs paragraphs vs list items
            if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
               return <li key={idx} style={{...paragraphStyle, marginLeft: '1.5rem'}}>{trimmed.substring(1).trim()}</li>;
            }
            if (trimmed.length < 80 && !trimmed.endsWith('.') && !trimmed.endsWith(',')) {
              return <h2 key={idx} style={headingStyle}>{trimmed}</h2>;
            }
            return <p key={idx} style={paragraphStyle}>{trimmed}</p>;
          })}
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
  minHeight: '350px',
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
  padding: '5rem 2rem 5rem'
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

const paragraphStyle: React.CSSProperties = {
  color: '#444',
  lineHeight: '1.8',
  marginBottom: '1rem',
  fontSize: '1.05rem',
  textAlign: 'justify' as const
};
