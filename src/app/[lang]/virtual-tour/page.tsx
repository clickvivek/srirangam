import React from 'react';
import { getDictionary } from '@/dictionaries';
import { MonitorPlay } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any) as any;
  return {
    title: dict?.navigation?.virtualTour || "Virtual Tour" + " - Sri Ranganathaswamy Temple",
  };
}

export default async function VirtualTourPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as any;

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '15vh', minHeight: '15vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <h1 style={{ marginTop: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            <MonitorPlay size={36} color="var(--secondary-color)" />
            {dict?.navigation?.virtualTour || "Virtual Tour"}
          </h1>
        </div>
      </section>

      <section style={{ width: '100%', height: 'calc(100vh - 15vh)', margin: 0, padding: 0 }}>
        <iframe 
          src="https://srirangamranganathar.hrce.tn.gov.in/resources/docs/virtualtour/25700/index.html" 
          style={{ width: '100%', height: '100%', border: 'none' }}
          allowFullScreen
          title="Virtual Tour"
        />
      </section>
    </>
  );
}
