import React from 'react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import { ArrowLeft, Clock } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import ImportantNotePopup from '@/components/ImportantNotePopup';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ta" | "hi" | "te" | "ml" | "kn") as any;
  return {
    title: dict?.navigation?.darshan || "Temple Timings",
  };
}

export default async function TimingsPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang) as any;

  let timings = {
    viswaroopa: "06:00 AM - 07:15 AM",
    morning: "09:00 AM - 12:00 PM",
    afternoon: "01:15 PM - 05:45 PM",
    evening: "06:45 PM - 09:00 PM"
  };

  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'timings.json');
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    timings = JSON.parse(fileContents);
  } catch (err) {
    console.error("Could not load timings, using defaults.", err);
  }

  const isTamil = lang === 'ta';

  return (
    <div style={{ backgroundColor: '#fdfaf4', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#571a15', padding: '2rem', textAlign: 'center', position: 'relative' }}>
        <Link href={`/${lang}`} style={{ position: 'absolute', left: '2rem', top: '2rem', color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={20} />
          {isTamil ? "முகப்பு" : "Home"}
        </Link>
        <h1 style={{ color: '#d69f12', margin: 0, fontSize: '2.5rem' }}>
          {dict?.navigation?.darshan || "Temple Timings"}
        </h1>
        <p style={{ color: 'white', opacity: 0.9, marginTop: '0.5rem' }}>
          {isTamil ? "கோயில் மற்றும் சன்னதி நேரங்கள்" : "Darshan Schedule for all Deities"}
        </p>
      </div>

      <div className="container" style={{ marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Main Temple Timings */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Sri Ranganathaswamy Temple</h2>
              <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>ஸ்ரீ ரங்கநாதர்</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>Viswaroopa Darshan</strong>
                <span>{timings.viswaroopa}</span>
              </div>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>Morning Darshan</strong>
                <span>{timings.morning}</span>
              </div>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>Afternoon Darshan</strong>
                <span>{timings.afternoon}</span>
              </div>
              <div style={{...timingRowStyle, borderBottom: 'none'}}>
                <strong style={timingTitleStyle}>Evening Darshan</strong>
                <span>{timings.evening}</span>
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', width: '100%', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <ImportantNotePopup />
                <a 
                  href="https://srirangamranganathar.hrce.tn.gov.in/resources/docs/invitation/777/invitation_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d95c14', fontWeight: 600, textDecoration: 'underline', fontSize: '0.95rem', whiteSpace: 'nowrap' }}
                >
                  Full calendar
                </a>
              </div>
            </div>
          </div>

          {/* Nachiyar Timings */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Sri Ranga Nayaki (Nachiyar)</h2>
              <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>ஸ்ரீ ரங்கநாயகி தாயார்</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>{isTamil ? "காலை சேவை" : "Morning Seva (Slot 1)"}</strong>
                <span>06:30 AM - 07:30 AM</span>
              </div>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>{isTamil ? "காலை சேவை" : "Morning Seva (Slot 2)"}</strong>
                <span>09:00 AM - 01:00 PM</span>
              </div>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>{isTamil ? "பகல் சேவை" : "Afternoon Seva"}</strong>
                <span>03:00 PM - 05:45 PM</span>
              </div>
              <div style={{...timingRowStyle, borderBottom: 'none'}}>
                <strong style={timingTitleStyle}>{isTamil ? "மாலை சேவை" : "Evening Seva"}</strong>
                <span>06:45 PM - 09:00 PM</span>
              </div>
            </div>
          </div>

          {/* Ramanujar Timings */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={{ margin: 0, color: 'white', fontSize: '1.4rem' }}>Sri Ramanujar</h2>
              <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>ஸ்ரீ ராமானுஜர்</span>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={timingRowStyle}>
                <strong style={timingTitleStyle}>{isTamil ? "காலை சேவை" : "Morning Seva"}</strong>
                <span>06:30 AM - 09:00 AM</span>
              </div>
              <div style={{...timingRowStyle, borderBottom: 'none'}}>
                <strong style={timingTitleStyle}>{isTamil ? "மாலை சேவை" : "Evening Seva"}</strong>
                <span>04:00 PM - 08:30 PM</span>
              </div>
              <div style={{ backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px', marginTop: '1rem', fontSize: '0.9rem', color: '#856404', border: '1px solid #ffeeba' }}>
                <strong>Note: </strong>
                {isTamil 
                  ? "சித்திரை மற்றும் ஐப்பசி மாதங்களில் வடை இலை பச்சைக் கற்பூரம் மற்றும் கலவைச் சாத்துமுறை நடைபெறும்."
                  : "During Chithirai and Aippasi months, Vadai Ilai Pachai Karpuram and Kalavai Sathumurai takes place."}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  backgroundColor: 'white', 
  borderRadius: '12px', 
  boxShadow: '0 4px 20px rgba(0,0,0,0.06)', 
  border: '1px solid #e5dac6',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
};

const cardHeaderStyle: React.CSSProperties = {
  backgroundColor: '#571a15', 
  padding: '1.5rem', 
  color: 'white',
  borderBottom: '4px solid #d69f12'
};

const timingRowStyle: React.CSSProperties = {
  display: 'flex', 
  justifyContent: 'space-between', 
  paddingBottom: '1rem', 
  borderBottom: '1px solid #eee', 
  marginBottom: '1rem',
  alignItems: 'center'
};

const timingTitleStyle: React.CSSProperties = {
  color: '#571a15'
};
