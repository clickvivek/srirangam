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

  let timings = { date: '', viswaroopa: '', morning: '', afternoon: '', evening: '' };
  let calendarLink = "https://srirangamranganathar.hrce.tn.gov.in/resources/docs/invitation/777/invitation_1.pdf";

  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'timings.json');
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
    let currentTimings = data.default || data;
    let overrideDate = '';
    
    if (data.overrides && Array.isArray(data.overrides)) {
      const override = data.overrides.find((o: any) => {
        if (o.date === todayStr) return true;
        if (o.date && o.date.includes('.')) {
          const [d, m, y] = o.date.split('.');
          const formatted = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
          return formatted === todayStr;
        }
        return false;
      });
      
      if (override) {
        if (override.timings) {
          currentTimings = override.timings;
        } else if (override.slots && Array.isArray(override.slots) && override.slots.length >= 4) {
          currentTimings = {
            viswaroopa: override.slots[0],
            morning: override.slots[1],
            afternoon: override.slots[2],
            evening: override.slots[3]
          };
        }
        overrideDate = override.date;
      }
    }
    
    timings = { ...currentTimings, date: overrideDate };
  } catch (err) {
    console.error("Could not load timings, using defaults.", err);
  }

  try {
    const calFilePath = path.join(process.cwd(), 'data', 'calendar.json');
    const calContents = await fs.readFile(calFilePath, 'utf8');
    const calData = JSON.parse(calContents);
    if (calData.link) {
      calendarLink = calData.link;
    }
  } catch (err) {
    console.error('Failed to read calendar data:', err);
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
            <a href="#temple-timings" className="btn glass hero-btn" style={{textDecoration: 'none'}}>
              <CalendarHeart size={28} style={{marginRight: '0.75rem', flexShrink: 0}}/>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span>{dict.home.openToday}</span>
                <strong>{dict.home.slotsToday}</strong>
              </div>
            </a>
            <button className="btn glass hero-btn">
              <Users size={28} style={{marginRight: '0.75rem', flexShrink: 0}}/>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span>{dict.home.todaysQueue}</span>
                <strong>{dict.home.waitMin}</strong>
              </div>
            </button>

          </div>
        </div>
      </section>

      <section className="quick-access-section animate-fade-in">
        <div className="container">
          <div className="section-title mobile-hidden">
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
            <Link href={`/${lang}/Stay-Hotel-Lodge`} className="quick-link-item">
              <div className="quick-icon">
                <Building size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.dharmaSalas}</span>
            </Link>
            <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="quick-link-item">
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
        <section style={{ backgroundColor: '#fff3cd', padding: '1.5rem', borderTop: '2px solid #0e492c', borderBottom: '2px solid #0e492c' }}>
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

      <section id="temple-timings" className="timings-section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <span>{dict.home.darshanSchedule}</span>
            <h2>{dict.home.templeTimings}</h2>
            {timings.date && <p style={{ display: 'inline-block', backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem', marginTop: '-0.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Timings for: {timings.date}</p>}
            <p>{dict.home.timingsSub}</p>
            <p style={{ marginTop: '0.5rem', color: '#d35400', fontSize: '0.9rem', fontWeight: '500' }}>
              {dict.home.scheduleWarning || "Schedule may change on daily basis, Check the timings everyday"}
            </p>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center'}}>
             <div style={{maxWidth: '600px', width: '100%', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)'}}>
               <div className="timing-row">
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.viswaroopaDarshan}</strong>
                 <span className="timing-val">{(timings.viswaroopa || '').replace(/ AM/gi, '\u00A0AM').replace(/ PM/gi, '\u00A0PM')}</span>
               </div>
               <div className="timing-row">
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalMorning}</strong>
                 <span className="timing-val">{(timings.morning || '').replace(/ AM/gi, '\u00A0AM').replace(/ PM/gi, '\u00A0PM')}</span>
               </div>
               <div className="timing-row">
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalAfternoon}</strong>
                 <span className="timing-val">{(timings.afternoon || '').replace(/ AM/gi, '\u00A0AM').replace(/ PM/gi, '\u00A0PM')}</span>
               </div>
               <div className="timing-row" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
                 <strong style={{color: 'var(--primary-color)'}}>{dict.home.generalEvening}</strong>
                 <span className="timing-val">{(timings.evening || '').replace(/ AM/gi, '\u00A0AM').replace(/ PM/gi, '\u00A0PM')}</span>
               </div>
               
               <div style={{ marginTop: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', width: '100%', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                 <ImportantNotePopup label={dict.home.importantNote} data={dict.importantPopup} />
                 <a 
                   href={calendarLink}
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
            <span>{dict?.nearby?.sacredEnvirons || "SACRED ENVIRONS"}</span>
            <h2>{dict?.nearby?.title || "Nearby Temples"}</h2>
            <p>{dict?.nearby?.pilgrimageCircuit || "समीपवर्ती देवालय — Pilgrimage Circuit"}</p>
          </div>

          <NearbyTemplesCarousel lang={lang} dict={dict} />
        </div>
      </section>
    </>
  );
}
