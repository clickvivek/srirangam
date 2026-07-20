'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function VekkaliAmmanTemple({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'history', title: '2. Historical Context — The Ancient Chola Capital' },
    { id: 'legend', title: '3. The Legend of the Roofless Sanctum' },
    { id: 'significance', title: '4. Temple Significance' },
    { id: 'architecture', title: '5. Architecture and Layout' },
    { id: 'deities', title: '6. Deities' },
    { id: 'timings', title: '7. Darshan and Pooja Timings' },
    { id: 'festivals', title: '8. Festivals' },
    { id: 'transport', title: '9. How to Reach — Transport Information' },
    { id: 'best-time', title: '10. Best Time to Visit' },
    { id: 'notes', title: '11. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/uraiyur1.jpg") center 40%/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Uraiyur Vekkali Amman Temple</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>
            The Roofless Guardian of the Chola Capital
          </p>
        </div>
      </section>

      <div className="temple-wrapper" style={{ backgroundColor: '#fdfaf4', minHeight: '100vh', padding: '4rem 1rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="temple-card-inner" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--primary-color)', marginTop: 0, marginBottom: '1.5rem', borderBottom: '2px solid #f0e6d6', paddingBottom: '0.5rem' }}>Contents</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {topics.map(t => (
                <li key={t.id}>
                  <a href={`#${t.id}`} style={{ color: '#d95c14', textDecoration: 'none', fontWeight: 500, display: 'inline-block', transition: 'color 0.2s ease' }}>
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="temple-card-inner" style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', lineHeight: '1.8', color: '#444', fontSize: '1.05rem' }}>
            <p><em>Arulmigu Vekkaliyamman Thirukoil, Uraiyur (Woraiyur), Tiruchirappalli</em></p>
            <p>A few kilometres south of Srirangam, in the old town of Uraiyur — once the seat of the Chola empire itself, centuries before Thanjavur ever became its capital — stands a small but fiercely revered temple with one of the most unusual features of any shrine in the region: <strong>its sanctum has no roof.</strong> Come rain or blazing sun, the Goddess Vekkali Amman sits open to the sky, exactly as she has for centuries, and every attempt to cover her — so the legend goes — has ended in failure. For a temple this modest in size, Vekkali Amman punches well above its weight in historical significance: this was the guardian deity Chola kings turned to before marching into battle, in a town that was, quite literally, the cradle of their empire.</p>
            
            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deity:</strong> Sri Vekkaliamman (a fierce form of Shakti/Kali, some accounts identify her with Parvati)</li>
              <li><strong>Distinctive feature:</strong> The sanctum sanctorum has no roof/vimana — open to the sky</li>
              <li><strong>Built by:</strong> Traditionally attributed to Gochenkan Chola (Kochengannan), of the early Chola dynasty</li>
              <li><strong>Historical role:</strong> Guardian deity worshipped by Chola kings before military campaigns</li>
              <li><strong>Distance from Srirangam:</strong> ~7–8 km</li>
              <li><strong>Distance from Trichy Junction:</strong> ~5 km</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>Uraiyur (often spelled Woraiyur) is a historic suburb of Tiruchirappalli, a short distance south of the Kaveri and Srirangam Island.</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Address:</strong> Arulmigu Vekkaliyamman Temple, S.S. Kovil Street, Woraiyur, Tiruchirappalli, Tamil Nadu 620003</li>
              <li><strong>Coordinates:</strong> approx. 10.8300° N, 78.6703° E</li>
              <li><strong>Google Maps:</strong> <a href="https://share.google/8uh4xvRXzuqlywFlJ" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            <p>Given its proximity to both Srirangam and Rockfort, Vekkali Amman Temple fits naturally into a broader Trichy-Srirangam temple circuit — many pilgrims visit it alongside Uraiyur's other notable shrine, the Panchavarna Swamy Temple, in the same trip.</p>
            
            <h2 id="history" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. Historical Context — The Ancient Chola Capital</h2>
            <p>To understand this temple, it helps to understand Uraiyur itself. Long before Thanjavur or Gangaikonda Cholapuram rose to prominence, <strong>Uraiyur was the capital of the early Chola kingdom</strong> — a city referenced in Ashokan-era inscriptions from around the 3rd century BCE, and described by the Satavahana dynasty as "the citadel and centre of the Cholas." It was ruled by the legendary Chola king <strong>Karikala Cholan</strong> well before the 1st century BCE, and the Chola line was later revived here by <strong>Vijayalaya Chola</strong> around 850 CE, from where the dynasty went on to build the empire that would eventually produce Raja Raja Chola and the great temple at Thanjavur.</p>
            <p>Two Chola figures associated with this town appear repeatedly in temple accounts: <strong>Kochengannan (Gochenkan Chola)</strong> — the king credited both with building this temple and, in Srirangam's own temple tradition, with founding Jambukeswarar Temple at Thiruvanaikaval — and <strong>Pugazh Chola Nayanar</strong>, another Chola king born here and venerated as one of the Nayanmar Shaivite saints. Uraiyur was also the birthplace of <strong>Thiruppaanalwar</strong>, one of the twelve Vaishnavite Alwar saints, underscoring just how central this small town once was to Tamil devotional history across both Shaiva and Vaishnava traditions.</p>
            <p>As with many claims about very old regional temples, historians note that while Vekkali Amman worship in Uraiyur is accepted as dating back to the early Chola period, there are <strong>no surviving contemporary historical records</strong> that precisely date the temple's founding — its antiquity rests on inscriptional references, literary mentions (including in the poems of the medieval Tamil poet Ottakkoothar), and long-standing local tradition rather than a single dated foundation record.</p>

            <h2 id="legend" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. The Legend of the Roofless Sanctum</h2>
            <p>The temple's best-known story explains why the Goddess has remained without a roof for as long as anyone can remember — though it's worth knowing upfront that different sources tell this legend with varying levels of drama.</p>
            <p><strong>The core story:</strong> A sage (in some versions named Sarma) living in Uraiyur maintained a garden of rare flowers, which he offered daily to Lord Thayumanavar (Shiva) at what is today the Rockfort Temple across the river. A local florist began secretly stealing these flowers and selling them to the Chola king, who grew fond of them without knowing their origin. When the sage complained to the king and received no response, he turned to Lord Thayumanavar himself with his grievance.</p>
            <p>Enraged on the sage's behalf, Shiva — who is said to have originally faced east — turned to face <strong>west</strong>, toward Uraiyur, and unleashed his fury on the town. Milder versions of the legend describe this as a <strong>devastating sandstorm</strong> that tore the roofs off homes across the settlement; more dramatic retellings describe it as <strong>fire from Shiva's third eye</strong>, reducing the town — including the fort of a Chola king — to ashes, with panicked residents fleeing for safety.</p>
            <p>In every version, one place alone was spared: the open ground where <strong>Goddess Vekkali Amman</strong> stood. The terrified townspeople took refuge at her feet, and she is said to have intervened to calm Shiva's anger and end the devastation. In gratitude — and in some tellings, as a mark of her own power in having withstood what nothing else in the town survived — the Goddess is said to have chosen to remain in that same open, roofless spot ever since. Local tradition holds that every subsequent attempt across the centuries to build a proper roof or vimana over her sanctum has failed, and so, to this day, Vekkali Amman sits open to the sky, in sun and in rain alike.</p>
            <p><strong>Worth noting for readers:</strong> As with the Uraiyur founding history above, this is a devotional legend passed down through oral and literary tradition rather than a documented historical event, and it appears with meaningful variation (sandstorm vs. fire, different named characters) across different retellings — the roofless sanctum itself, however, is an entirely real and verifiable physical feature of the temple today.</p>

            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. Temple Significance</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>A royal guardian deity:</strong> Historically, Chola kings are said to have worshipped Vekkali Amman before setting out on military campaigns, seeking her blessing for victory — a tradition some accounts describe her as continuing to serve even today, for anyone facing a significant undertaking or challenge.</li>
              <li><strong>Facing north — a mark of victory:</strong> Unusually, the deity faces <strong>north</strong> rather than the more common east or south orientation seen at most Tamil temples. North-facing war deities are traditionally associated with added strength and the granting of victory in Tamil temple custom, which is consistent with Vekkali Amman's role as a protector invoked before battle.</li>
              <li><strong>A wish-fulfilling deity:</strong> In present-day practice, devotees commonly write their wishes on paper and tie them to a trident (soolam) at the sanctum, or place them at the Goddess's feet — returning to complete their worship once the wish is fulfilled. Numerous visitor accounts describe strong personal faith in this practice.</li>
              <li><strong>A living link to Chola history:</strong> Because Uraiyur itself was the original Chola capital, this temple offers a direct devotional through-line to the earliest chapter of the Chola dynasty — centuries before that dynasty's better-known later monuments at Thanjavur and Gangaikonda Cholapuram were ever built.</li>
              <li><strong>Distinctive iconography:</strong> The Goddess is shown seated in Yoga Pitha posture, holding an Akshaya Patra (bowl of plenty), a trident, a rope, and an udukkai (small drum) across her four hands — with her right leg bent and her left leg resting upon a demon figure, a posture some accounts note is the reverse of the more commonly seen leg position at other roofless Shakti shrines in the region, and is read as a mark of her sustained, undiminished energy.</li>
            </ul>

            <h2 id="architecture" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. Architecture and Layout</h2>
            <p>Vekkali Amman Temple is modest in physical scale compared to the grand multi-walled complexes of Srirangam or Thanjavur, and this compactness is part of its particular character.</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Single prakaram:</strong> The temple has just one surrounding enclosure (prakaram), unlike the many-walled layouts of larger regional temples.</li>
              <li><strong>The roofless sanctum:</strong> The temple's defining architectural feature — the moolavar (main deity) sits entirely open to the sky, with no vimana or roof structure above the sanctum, unlike virtually every other major Tamil temple.</li>
              <li><strong>Golden chariot:</strong> The temple possesses an elaborately decorated golden processional chariot, cited at roughly 9.75 feet in height and crafted using around 10.5 kg of gold and 25 kg of silver — a striking possession for a temple of this size, reflecting the depth of devotion and patronage it has drawn over time. A newer gold chariot was reported to have been introduced around 2010.</li>
              <li><strong>Dravidian style:</strong> What structure does exist around the open sanctum follows traditional Dravidian temple architecture, built up over successive periods of renovation.</li>
            </ul>

            <h2 id="deities" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. Deities</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Vekkali Amman:</strong> Fierce Shakti form, associated with Kali/Durga; some sources describe her as a form of Parvati (Presiding deity; open-air sanctum)</li>
              <li><strong>Subsidiary shrines:</strong> Various guardian and attendant deities within the single prakaram (Standard for a Shakti-guardian temple of this scale)</li>
            </ul>

            <h2 id="timings" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. Darshan and Pooja Timings</h2>
            <p><strong>Daily</strong></p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Approx. 6:00 AM – 9:00 PM (some listings show 5:30 AM opening, or a midday-evening split of roughly 6:00 AM–11:00 AM and 4:00 PM–8:00 PM — treat the exact cutoffs as a detail to verify locally)</li>
            </ul>
            <p><strong>The temple observes seven ritual poojas a day</strong>, among the more elaborate daily ritual schedules of any temple in the Trichy region:</p>
            
            <div style={{ margin: '2rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Ritual</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Approx. Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Visvarupa Pooja</td><td style={{ padding: '1rem' }}>5:15 AM</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Morning Abhishekam</td><td style={{ padding: '1rem' }}>5:30 AM</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Morning Deepa Tharisanam</td><td style={{ padding: '1rem' }}>6:15 AM</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Uchikala Abhishekam (noon)</td><td style={{ padding: '1rem' }}>12:00 PM</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Uchikala Deepa</td><td style={{ padding: '1rem' }}>1:00 PM</td></tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '1rem' }}>Maazhai Tharisanam (evening)</td><td style={{ padding: '1rem' }}>6:00–7:00 PM</td></tr>
                  <tr><td style={{ padding: '1rem' }}>Night Tharisanam</td><td style={{ padding: '1rem' }}>9:00 PM</td></tr>
                </tbody>
              </table>
            </div>

            <p>A special paid ritual, <strong>Thanga Kavasam</strong> (golden armour adornment), is typically offered mid-morning (roughly 10:15–11:45 AM). Visitor accounts also note a special abhishekam performed on every full moon and new moon evening.</p>
            <p><strong>Visitor tips:</strong></p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Many devotees recommend visiting after 10 AM to be able to witness the midday abhishekam and pooja in full.</li>
              <li>Devotees can purchase a simple pooja thattu (tray with coconut, oil, flowers, and other items) from shops outside the temple before entering.</li>
              <li>Wish-writing is a well-established practice here — visitors are often guided to a counter inside where they can note a prayer request on paper to tie near the sanctum.</li>
              <li>Photography may be restricted in and around the sanctum — check current signage on arrival.</li>
            </ul>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Panguni Poochoridal:</strong> A flower festival in the Tamil month of Panguni (March), one of the temple's most cited annual observances.</li>
              <li><strong>Chithirai Festival:</strong> Features processions of the deity on different ceremonial vehicles.</li>
              <li><strong>Vaikasi Mango Abhishekam:</strong> A special ritual observance in the month of Vaikasi (May–June).</li>
              <li><strong>Aadi Perukku:</strong> Celebrated in the Tamil month of Aadi (mid-July to mid-August), marking a ritual dip in the Kaveri; the Goddess's idol is taken in procession to the riverbank as part of this observance.</li>
              <li><strong>Aavani Sathasadi Vellvi & Deepa Dharisanam:</strong> Festival observances in the Tamil month of Aavani (August–September).</li>
              <li><strong>Aipasi Annabhishekam:</strong> In the month of Aipasi (October–November).</li>
              <li><strong>Karthigai Deepam:</strong> The Tamil Nadu-wide festival of lights, in Karthigai (November); the temple performs a special 108 Sank Abhishekam on the last Monday of the month.</li>
              <li><strong>Thai Theerthavizha and Thai Velli:</strong> Observances during the Tamil month of Thai (January–February).</li>
              <li><strong>Navaratri:</strong> An important nine-day festival for the temple, in keeping with its identity as a Shakti shrine.</li>
            </ul>
            <p>With six to nine distinct named festival observances across the year, the temple maintains an unusually full ritual calendar for its size — a reflection of how central Vekkali Amman remains to the devotional life of Uraiyur.</p>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. How to Reach — Transport Information</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>By Air:</strong> Tiruchirappalli International Airport (TRZ) is the nearest airport, with regular taxi and app-cab access to Uraiyur.</li>
              <li><strong>By Rail:</strong> Tiruchirappalli Fort Railway Station and Trichy Junction are both commonly cited as the nearest rail access points, roughly 5 km away.</li>
              <li><strong>By Road:</strong> The temple is well connected by town buses running within and around Woraiyur, with regular services from Trichy Central Bus Stand and Chathiram Bus Stand. From Srirangam, it's a straightforward 7–8 km drive. The temple is located on S.S. Kovil Street / accessible via Vathukara Street within Woraiyur.</li>
            </ul>
            <p><strong>Local Tip:</strong> Given its short distance from both Srirangam and Rockfort, Vekkali Amman Temple works well as a compact half-day addition to a broader temple circuit — many visitors combine it with the nearby Uraiyur Panchavarna Swamy Temple in the same trip.</p>

            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>10. Best Time to Visit</h2>
            <p>October to March offers the most comfortable weather, as with most temples in the region. Since the sanctum itself is entirely open to the sky, weather matters more here than at most temples — a visit during the monsoon may mean witnessing the Goddess quite literally being rained upon, which many devotees consider a meaningful part of the experience rather than a drawback. Arriving after 10 AM lets you catch the midday abhishekam in full.</p>
            
            <h2 id="notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>11. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Combine with:</strong> The nearby Uraiyur Panchavarna Swamy Temple, along with Srirangam's Ranganathaswamy and Jambukeswarar Temples, and Rockfort — all within a short driving radius, making Vekkali Amman an easy addition to a fuller Trichy-Srirangam temple day.</li>
              <li><strong>The wish tradition:</strong> If you'd like to participate in the temple's well-known practice of writing wishes on paper to tie near the sanctum, temple staff and counters near the entrance can guide first-time visitors through the process.</li>
              <li><strong>Crowd management:</strong> Festival days, particularly Navaratri and Karthigai Deepam, draw considerably larger crowds — a regular weekday remains the most comfortable time for an unhurried visit.</li>
              <li><strong>What to expect:</strong> This is a smaller, more intimate temple than Srirangam's grand shrines — visitors consistently describe it as carrying a distinctly intense, powerful atmosphere despite its modest physical size.</li>
            </ul>

            <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#777', fontStyle: 'italic', textAlign: 'center' }}>
              *Please note Images used in this website were enhanced using advance techniques and AI to make it better.*
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
