import { 
  Clock, MapPin, FileText, CalendarHeart, Gift, 
  Building, Bus, Camera, Users, Calendar, Map, Compass
} from 'lucide-react';
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import ImportantNotePopup from '../../components/ImportantNotePopup';
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
  return (
    <>
      <section className="hero animate-fade-in">
        <div className="container hero-content">
          <h1>Sri Ranganathaswamy Temple</h1>
          <div className="subtitle">ஸ்ரீரங்கம் ரங்கநாதர் — Srirangam, Tamil Nadu</div>
          <p className="desc">
            The largest functioning Hindu temple in the world, dedicated to Lord Ranganatha (Vishnu). A premier Vaishnava Divya Desam on the sacred island of Srirangam.
          </p>
          
          <div className="hero-actions">
            <button className="btn glass hero-btn">
              <CalendarHeart size={20} style={{marginBottom: '0.25rem'}}/>
              <span>OPEN TODAY</span>
              <strong>4 Slots Today</strong>
            </button>
            <button className="btn glass hero-btn">
              <Users size={20} style={{marginBottom: '0.25rem'}}/>
              <span>TODAY&apos;S QUEUE</span>
              <strong>~45 min wait</strong>
            </button>
            <button className="btn glass hero-btn">
              <Calendar size={20} style={{marginBottom: '0.25rem'}}/>
              <span>SPECIAL SEVA</span>
              <strong>Sahasranama Archana</strong>
            </button>
          </div>
        </div>
      </section>

      <section className="quick-access-section animate-fade-in">
        <div className="container">
          <div className="section-title">
            <span>QUICK ACCESS</span>
          </div>
          
          <div className="quick-access-grid">
            <Link href={`/${lang}/timings`} className="quick-link-item">
              <div className="quick-icon">
                <Clock size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.darshan}</span>
            </Link>
            <Link href={`/${lang}/surroundings`} className="quick-link-item">
              <div className="quick-icon">
                <MapPin size={32} color="#d69f12" />
              </div>
              <span>{dict.navigation.surroundings}</span>
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
            <Link href={`/${lang}/dharma-salas`} className="quick-link-item">
              <div className="quick-icon">
                <Building size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.dharmaSalas}</span>
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
            <Link href={`/${lang}/map`} className="quick-link-item">
              <div className="quick-icon">
                <Map size={32} color="#571a15" />
              </div>
              <span>{dict.navigation.map}</span>
            </Link>
            <Link href={`/${lang}/deity-pooja`} className="quick-link-item">
              <div className="quick-icon">
                <Compass size={32} color="#c28e5e" />
              </div>
              <span>{dict.navigation.deity}</span>
            </Link>
          </div>
          
          <div className="section-divider"></div>
        </div>
      </section>

      <section className="timings-section">
        <div className="container">
          <div className="section-title">
            <span>DARSHAN SCHEDULE</span>
            <h2>Temple Timings</h2>
            <p>கோயில் நேரம் — 4 Darshan Slots Daily</p>
          </div>
          
          <div style={{display: 'flex', justifyContent: 'center'}}>
             {/* Note: I'll leave a placeholder for the timings list based on screenshots, 
                 since it's a bit cut off in the provided screenshot, we'll keep it simple */}
             <div style={{maxWidth: '600px', width: '100%', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)'}}>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>Viswaroopa Darshan</strong>
                 <span>{timings.viswaroopa}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>General Darshan (Morning)</strong>
                 <span>{timings.morning}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid #eee', marginBottom: '1rem'}}>
                 <strong style={{color: 'var(--primary-color)'}}>General Darshan (Afternoon)</strong>
                 <span>{timings.afternoon}</span>
               </div>
               <div style={{display: 'flex', justifyContent: 'space-between'}}>
                 <strong style={{color: 'var(--primary-color)'}}>General Darshan (Evening)</strong>
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

          <div className="nearby-grid">
            {/* Card 1 */}
            <div className="temple-card">
              <div className="temple-card-img" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/800px-Sri_Ranganathaswamy_Temple_Gopuram.jpg')"}}>
                <span className="temple-badge">Must Visit</span>
                <span className="temple-distance"><MapPin size={12}/> 5 km</span>
              </div>
              <div className="temple-info">
                <h3>Sri Padmavathi Temple</h3>
                <p>Goddess Padmavathi</p>
                <div className="temple-rating">
                   <span>⭐⭐⭐⭐⭐</span> 4.9
                </div>
                <div className="temple-time">
                  <Clock size={16} /> 6:00 AM - 8:00 PM
                </div>
                <button className="btn btn-outline btn-full">Get Directions →</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="temple-card">
              <div className="temple-card-img" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg')"}}>
                <span className="temple-badge ancient">Ancient</span>
                <span className="temple-distance"><MapPin size={12}/> 8 km</span>
              </div>
              <div className="temple-info">
                <h3>Sri Govindaraja Swami</h3>
                <p>Lord Vishnu</p>
                <div className="temple-rating">
                   <span>⭐⭐⭐⭐⭐</span> 4.7
                </div>
                <div className="temple-time">
                  <Clock size={16} /> 5:30 AM - 9:00 PM
                </div>
                <button className="btn btn-outline btn-full">Get Directions →</button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
