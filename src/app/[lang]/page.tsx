import { 
  Clock, MapPin, FileText, CalendarHeart, Gift, 
  Building, Bus, Camera, Users, Calendar, Map, Compass, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import ImportantNotePopup from '../../components/ImportantNotePopup';
import NearbyTemplesCarousel from '../../components/NearbyTemplesCarousel';
import { getDictionary } from '../../dictionaries';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ta" | "hi" | "te" | "ml" | "kn") as any;
  return {
    title: dict?.home?.title || "Home",
  };
}

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
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

  let updateText = "";
  try {
    const updateFilePath = path.join(process.cwd(), 'data', 'update.json');
    const updateContents = await fs.readFile(updateFilePath, 'utf8');
    const allUpdates = JSON.parse(updateContents);
    updateText = allUpdates[lang] || allUpdates['en'] || "";
  } catch (err) {
    console.error("Could not load update text.", err);
  }
  return (
    <>
      <section className="hero animate-fade-in">
        <div className="container hero-content">
          <h1>{dict.home.title}</h1>
          <div className="subtitle">{dict.home.subtitle}</div>
          <p className="desc">
            {dict.home.desc}
          </p>
          
          <div className="hero-actions">
            <button className="btn glass hero-btn">
              <CalendarHeart size={20} style={{marginBottom: '0.25rem'}}/>
              <span>{dict.home.openToday}</span>
              <strong>{dict.home.slotsToday}</strong>
            </button>
            <button className="btn glass hero-btn">
              <Users size={20} style={{marginBottom: '0.25rem'}}/>
              <span>{dict.home.todaysQueue}</span>
              <strong>{dict.home.waitMin}</strong>
            </button>

          </div>
        </div>
      </section>

      <section className="quick-access-section animate-fade-in">
        <div className="container">
          <div className="section-title">
            <div className="divider">
              <Sparkles size={16} color="#d95c14"/>
              <span>{dict.home.quickAccess}</span>
              <Sparkles size={16} color="#d95c14"/>
            </div>
          </div>
          
          <div className="quick-access-grid">
            <Link href={`/${lang}/timings`} className="quick-link-item">
              <div className="quick-icon">
                <Clock size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.darshan}</span>
            </Link>
            <Link href={`/${lang}/deity-seva`} className="quick-link-item">
              <div className="quick-icon">
                <Compass size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.deity}</span>
            </Link>
            <Link href={`/${lang}/map`} className="quick-link-item">
              <div className="quick-icon">
                <Map size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.map}</span>
            </Link>
            <Link href={`/${lang}/history`} className="quick-link-item">
              <div className="quick-icon">
                <FileText size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.history}</span>
            </Link>
            <Link href={`/${lang}/seva-booking`} className="quick-link-item">
              <div className="quick-icon">
                <CalendarHeart size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.seva}</span>
            </Link>
            <Link href={`/${lang}/prasadam`} className="quick-link-item">
              <div className="quick-icon">
                <Gift size={32} color="#d69f12" />
              </div>
              <span>{dict.navigation.prasadam}</span>
            </Link>
            <Link href={`/${lang}/transport`} className="quick-link-item">
              <div className="quick-icon">
                <Bus size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.transport}</span>
            </Link>
            <Link href={`/${lang}/gallery`} className="quick-link-item">
              <div className="quick-icon">
                <Camera size={32} color="#d69f12" />
              </div>
              <span>{dict.navigation.gallery}</span>
            </Link>
            <Link href={`/${lang}/dharma-salas`} className="quick-link-item">
              <div className="quick-icon">
                <Building size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.dharmaSalas}</span>
            </Link>
            <Link href={`/${lang}/surroundings`} className="quick-link-item">
              <div className="quick-icon">
                <MapPin size={32} color="#d69f12" />
              </div>
              <span>{dict.navigation.surroundings}</span>
            </Link>
          </div>
          
          <div className="section-divider"></div>
        </div>
      </section>

      {updateText && (
        <section style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderBottom: '2px solid #ffe69c' }}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
             <h3 style={{ color: '#856404', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
               <span style={{ backgroundColor: '#856404', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Update :</span>
             </h3>
             <div style={{ color: '#856404', lineHeight: '1.6', fontWeight: '500' }}>
               {updateText.split('\n').map((line: string, i: number) => (
                 <p key={i} style={{ margin: 0 }}>{line}</p>
               ))}
             </div>
          </div>
        </section>
      )}

      <section className="timings-section">
        <div className="container">
          <div className="section-title">
            <span>{dict.home.darshanSchedule}</span>
            <h2>{dict.home.templeTimings}</h2>
            <p>{dict.home.timingsSub}</p>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center'}}>
             {/* Note: I'll leave a placeholder for the timings list based on screenshots, 
                 since it's a bit cut off in the provided screenshot, we'll keep it simple */}
             <div style={{maxWidth: '600px', width: '100%', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)'}}>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.viswaroopaDarshan}</strong>
                 <span>{timings.viswaroopa}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalMorning}</strong>
                 <span>{timings.morning}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalAfternoon}</strong>
                 <span>{timings.afternoon}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between'}}>
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalEvening}</strong>
                 <span>{timings.evening}</span>
               </div>
               
               <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', width: '100%', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                 <ImportantNotePopup label={dict.home.importantNote} />
                 <a 
                   href="https://srirangamranganathar.hrce.tn.gov.in/resources/docs/invitation/777/invitation_1.pdf"
                   target="_blank"
                   rel="noopener noreferrer"
                   style={{ color: '#d95c14', fontWeight: 600, textDecoration: 'underline', fontSize: '0.95rem', whiteSpace: 'nowrap' }}
                 >
                   {dict.home.fullCalendar}
                 </a>
               </div>
             </div>
          </div>

          <div className="section-divider"></div>
        </div>
      </section>

      <section className="nearby-section">
        <div className="container">
          <div className="section-title">
            <span>SACRED ENVIRONS</span>
            <h2>Nearby Temples</h2>
            <p>समीपवर्ती देवालय — Pilgrimage Circuit</p>
          </div>

          <NearbyTemplesCarousel lang={lang} />
        </div>
      </section>
    </>
  );
}
