import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ta" | "hi" | "te" | "ml" | "kn") as any;
  return {
    title: dict?.thayar?.title || "Sri Ranga Nayaki",
  };
}

export default async function ThayarPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as any;
  const t = dict.thayar;

  if (!t) return null;

  const heroStyle: React.CSSProperties = {
    position: 'relative',
    height: '60vh',
    minHeight: '400px',
    backgroundImage: `url('/srirangam/thayar.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '3rem',
  };

  const heroOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.4) 100%)',
    backgroundColor: 'rgba(0,0,0,0.2)', // Additional darkening
  };

  const heroContentStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '800px',
  };

  const backLinkStyle: React.CSSProperties = {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    zIndex: 10,
    padding: '0.5rem 1rem',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '20px',
    backdropFilter: 'blur(5px)',
  };

  const headingStyle: React.CSSProperties = {
    color: '#571a15',
    marginTop: '2rem',
    marginBottom: '1rem',
    fontSize: '1.8rem',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '0.5rem',
  };

  return (
    <div style={{ backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Stylish Hero Section */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <Link href={`/${lang}/deity-seva`} style={backLinkStyle}>
          <ArrowLeft size={20} />
          {t.backLink}
        </Link>
        <div style={heroContentStyle}>
          <span style={{ color: '#fce8d5', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>{t.subheading}</span>
          <h1 style={{ color: 'white', fontSize: '2.5rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {t.title}
          </h1>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '-3rem auto 3rem', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <Image 
              src="/srirangam/thayar.jpg" 
              alt={t.title} 
              width={500} 
              height={700} 
              style={{ borderRadius: '8px', objectFit: 'contain', maxHeight: '500px' }}
              priority
            />
          </div>
          {t.content.split('\n').filter((p: string) => p.trim() !== '').reduce((acc: any[], paragraph: string, idx: number) => {
            const trimmed = paragraph.trim();
            if (trimmed.startsWith('- ')) {
               const last = acc[acc.length - 1];
               if (last && last.type === 'list') {
                  last.items.push(trimmed.substring(2).trim());
               } else {
                  acc.push({ type: 'list', items: [trimmed.substring(2).trim()], key: idx });
               }
            } else {
               acc.push({ type: 'text', content: trimmed, key: idx });
            }
            return acc;
          }, []).map((block: any) => {
            if (block.type === 'list') {
               return (
                 <ul key={block.key} style={{ paddingLeft: '2rem', marginBottom: '1.5rem', color: '#444', lineHeight: '1.8', fontSize: '1.05rem' }}>
                   {block.items.map((item: string, i: number) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                 </ul>
               );
            }
            const trimmed = block.content;
            if (trimmed.length < 60 && !trimmed.endsWith('.') && !trimmed.endsWith(',') && !trimmed.endsWith(':')) {
              return <h2 key={block.key} style={headingStyle}>{trimmed}</h2>;
            }
            return <p key={block.key} style={{ lineHeight: '1.8', color: '#444', marginBottom: '1.2rem', fontSize: '1.05rem', textAlign: 'justify' }}>{trimmed}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
