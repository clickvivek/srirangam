import React from 'react';
import { Bus, Train, Plane, MapPin, Info, Car, AlertCircle } from 'lucide-react';
import { getDictionary } from '@/dictionaries';

export const metadata = {
  title: 'Transport Information - Sri Ranganathaswamy Temple',
  description: 'How to reach Sri Ranganathaswamy Temple, Srirangam by road, rail, and air.',
};

export default async function TransportPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.transport || {};
  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>{t.heroTitle || "Transport Information"}</h1>
          <div className="subtitle">{t.heroSubtitle || "How to Reach Srirangam"}</div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444', textAlign: 'center', marginBottom: '3rem' }}>
            {t.intro || "Sri Ranganathaswamy Temple is located on Srirangam Island in Tiruchirappalli (Trichy), Tamil Nadu. The temple is well connected by air, rail and road, making it easy for devotees from across India and abroad to visit."}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Bus Stands */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #d95c14' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#571a15' }}>
                <Bus size={28} />
                <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{t.busTitle || "Local Bus Stands"}</h2>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#d95c14', fontSize: '1.1rem' }}>{t.busChathiram || "From Chathiram Bus Stand"}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span><MapPin size={14} style={{display:'inline'}}/> {t.busChathiramD || "~5 km"}</span>
                  <span>{t.busChathiramT || "⏱ 15–20 mins"}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444', fontSize: '0.95rem' }}>
                  <li>{t.busChathiramL1 || "Frequent city buses to Srirangam."}</li>
                  <li>{t.busChathiramL2 || "Auto-rickshaws readily available."}</li>
                  <li>{t.busChathiramL3 || "Taxis and app-based cabs offer direct drop."}</li>
                </ul>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#d95c14', fontSize: '1.1rem' }}>{t.busTrichy || "From Trichy Central Bus Stand"}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span><MapPin size={14} style={{display:'inline'}}/> {t.busTrichyD || "~10 km"}</span>
                  <span>{t.busTrichyT || "⏱ 25–35 mins"}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444', fontSize: '0.95rem' }}>
                  <li>{t.busTrichyL1 || "City buses operate regularly."}</li>
                  <li>{t.busTrichyL2 || "Autos and taxis available outside terminal."}</li>
                  <li>{t.busTrichyL3 || "Recommended for families travelling with luggage."}</li>
                </ul>
              </div>

              <div>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#d95c14', fontSize: '1.1rem' }}>{t.busPanjapur || "From Panjapur Integrated Terminus"}</h3>
                <div style={{ display: 'flex', gap: '1rem', color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <span><MapPin size={14} style={{display:'inline'}}/> {t.busPanjapurD || "~15–18 km"}</span>
                  <span>{t.busPanjapurT || "⏱ 30–45 mins"}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444', fontSize: '0.95rem' }}>
                  <li>{t.busPanjapurL1 || "Direct or connecting buses."}</li>
                  <li>{t.busPanjapurL2 || "Allow extra time during peak traffic."}</li>
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Railway Stations */}
              <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #c28e5e' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#571a15' }}>
                  <Train size={28} />
                  <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{t.trainTitle || "Railway Stations"}</h2>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: '#c28e5e', fontSize: '1.1rem' }}>{t.trainSrirangam || "Srirangam Railway Station"}</h3>
                  <p style={{ margin: 0, color: '#444', fontSize: '0.95rem' }}>{t.trainSrirangamD || "~1.5 km from the temple. Easily accessible by walk, auto or taxi."}</p>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 0.25rem 0', color: '#c28e5e', fontSize: '1.1rem' }}>{t.trainTrichy || "Tiruchirappalli Junction"}</h3>
                  <p style={{ margin: 0, color: '#444', fontSize: '0.95rem' }}>{t.trainTrichyD || "~10 km from the temple. City buses, autos and taxis available outside."}</p>
                </div>
              </div>

              {/* Airport */}
              <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', borderTop: '4px solid #15803d' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#571a15' }}>
                  <Plane size={28} />
                  <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{t.airTitle || "By Air"}</h2>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <span><MapPin size={14} style={{display:'inline'}}/> {t.airD || "~15 km to Airport"}</span>
                  <span>{t.airT || "⏱ 30–40 mins travel"}</span>
                </div>
                <p style={{ margin: '0 0 1rem 0', color: '#444', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {t.airDesc || "Trichy International Airport has domestic connectivity to Chennai, Bengaluru, Hyderabad, Mumbai, Delhi and Kochi, along with international flights to Singapore, Kuala Lumpur, Colombo and Gulf destinations."}
                </p>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444', fontSize: '0.95rem' }}>
                  <li>{t.airL1 || "24×7 prepaid taxis & App-based cabs."}</li>
                  <li>{t.airL2 || "Airport buses to city with Srirangam connections."}</li>
                </ul>
              </div>
            </div>

          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Train Travel Table */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#571a15' }}>
                <Train size={24} />
                <h2 style={{ margin: 0, fontSize: '1.3rem' }}>{t.trainTravelTitle || "Train Travel from Major Cities"}</h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee', color: '#d95c14' }}>
                    <th style={{ padding: '0.75rem 0' }}>{t.thCity || "City"}</th>
                    <th style={{ padding: '0.75rem 0' }}>{t.thDist || "Distance"}</th>
                    <th style={{ padding: '0.75rem 0' }}>{t.thTime || "Time"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: 'Chennai', dist: '330 km', time: '5–6.5 hrs' },
                    { city: 'Bengaluru', dist: '340 km', time: '6–8 hrs' },
                    { city: 'Hyderabad', dist: '850 km', time: '14–17 hrs' },
                    { city: 'Mumbai', dist: '1,350 km', time: '22–28 hrs' },
                    { city: 'Delhi', dist: '2,350 km', time: '35–40 hrs' },
                    { city: 'Kolkata', dist: '1,900 km', time: '30–36 hrs' }
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <td style={{ padding: '0.75rem 0', color: '#333', fontWeight: 500 }}>{row.city}</td>
                      <td style={{ padding: '0.75rem 0', color: '#666' }}>{row.dist}</td>
                      <td style={{ padding: '0.75rem 0', color: '#666' }}>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Road Travel Table */}
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: '#571a15' }}>
                <Car size={24} />
                <h2 style={{ margin: 0, fontSize: '1.3rem' }}>{t.roadTravelTitle || "By Road (Driving)"}</h2>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee', color: '#d95c14' }}>
                    <th style={{ padding: '0.75rem 0' }}>{t.thCity || "City"}</th>
                    <th style={{ padding: '0.75rem 0' }}>{t.thDist || "Distance"}</th>
                    <th style={{ padding: '0.75rem 0' }}>{t.thTime || "Time"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: 'Chennai', dist: '330 km', time: '5.5–6.5 hrs' },
                    { city: 'Bengaluru', dist: '340 km', time: '6–7 hrs' },
                    { city: 'Madurai', dist: '135 km', time: '2.5 hrs' },
                    { city: 'Coimbatore', dist: '220 km', time: '4 hrs' },
                    { city: 'Salem', dist: '160 km', time: '3 hrs' },
                    { city: 'Tanjore', dist: '55 km', time: '1 hr' }
                  ].map((route, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f5f5f5' }}>
                      <td style={{ padding: '0.75rem 0', color: '#333', fontWeight: 500 }}>{route.city}</td>
                      <td style={{ padding: '0.75rem 0', color: '#666' }}>{route.dist}</td>
                      <td style={{ padding: '0.75rem 0', color: '#666' }}>{route.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#571a15', fontSize: '1.1rem' }}>{t.parkingTitle || "Parking Information"}</h3>
                <p style={{ margin: 0, color: '#444', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {t.parkingDesc || "Dedicated parking is available around the temple. During weekends and major festivals (like Vaikunta Ekadasi), arrive early as parking fills quickly."}
                </p>
              </div>
            </div>
          </div>

          {/* Travel Tips */}
          <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', borderLeft: '5px solid #f59e0b', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#b45309' }}>
              <AlertCircle size={28} />
              <h2 style={{ margin: 0, fontSize: '1.4rem' }}>{t.tipsTitle || "Travel Tips"}</h2>
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#92400e', fontSize: '1rem', lineHeight: 1.8 }}>
              <li>{t.tip1 || "Arrive at least 30 minutes before the queue closing time."}</li>
              <li>{t.tip2 || "Expect additional traffic during festivals."}</li>
              <li>{t.tip3 || "If your train stops at Srirangam Station, alight there for the shortest transfer."}</li>
              <li>{t.tip4 || "Carry drinking water and small cash for local transport."}</li>
              <li>{t.tip5 || "Early morning visits are recommended during summer."}</li>
              <li>{t.tip6 || "We recommend RedTaxi as a reliable Cab service. Affordable and reliable. Phone Number 0431 456 7890 or you can download Redtaxi from Playstore or Appstore."}</li>
              <li>{t.tip7 || "Annadhanam (Free Food/ Meals) Available from 8 am to 9 PM. Waiting time is approx 0-30 minutes."}</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
