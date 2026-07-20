'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function SamayapuramTemple({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'history', title: '2. History and Legend' },
    { id: 'significance', title: '3. Temple Significance' },
    { id: 'deities', title: '4. Deities' },
    { id: 'timings', title: '5. Darshan and Pooja Timings' },
    { id: 'festivals', title: '6. Festivals' },
    { id: 'transport', title: '7. How to Reach — Transport Information' },
    { id: 'best-time', title: '8. Best Time to Visit' },
    { id: 'notes', title: '9. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/samayapuram1.png") center 20%/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Samayapuram Mariamman Temple</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>
            The Goddess Who Answers at the Right Time
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
            <p><em>Arulmigu Samayapurathu Mariamman Thirukoil, Samayapuram, Tiruchirappalli</em></p>
            <p>A short drive north of Srirangam, on the Trichy–Chennai highway, stands one of Tamil Nadu's busiest and most beloved Shakti shrines — a temple that draws bigger daily crowds than almost any other in the region, and whose devotees come with a very particular kind of urgency. Samayapuram Mariamman Temple is dedicated to the fierce, protective Mother Goddess Mariamman, and its very name is a promise: <strong>Samayam</strong> means "the right time," and devotees believe this Goddess answers prayers precisely when they're needed most — in illness, in crisis, in the moments when other remedies have run out.</p>
            <p>Where Ranganathaswamy and Jambukeswarar draw pilgrims into contemplative, ritual-heavy darshan, Samayapuram feels different — louder, more immediate, more visibly emotional. This is a temple of vows made and kept, of tonsured heads and fire-walking, of gold mangalsutras dropped into the hundi by women praying for marriages to heal. It's an essential stop for understanding the fuller, more folk-rooted side of Tamil Nadu's temple culture that sits right alongside Srirangam's grand classical shrines.</p>
            
            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deity:</strong> Sri Samayapurathu Mariamman (a fierce form of Adi Parashakti / Shakti)</li>
              <li><strong>Deity material:</strong> Made of sand and clay mixed with medicinal herbs, not carved stone — unusual and distinctive for a major Tamil Nadu temple</li>
              <li><strong>Category:</strong> Major Shakti / Amman shrine; among the highest-revenue temples administered by the Tamil Nadu HR&CE department</li>
              <li><strong>Present stone structure built by:</strong> Vijayanagara-era military commanders, 17th century CE</li>
              <li><strong>Distance from Srirangam:</strong> ~10–12 km</li>
              <li><strong>Distance from Trichy city:</strong> ~15–17 km</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>Samayapuram sits just off the busy Trichy–Chennai national highway (NH 32/NH 45), making it one of the more accessible major temples in the region for anyone travelling between the two cities.</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Address:</strong> Arulmigu Samayapuram Mariamman Temple, S. Kannanur West, Samayapuram, Tamil Nadu 621112</li>
              <li><strong>Coordinates:</strong> approx. 10.9185° N, 78.7389° E</li>
              <li><strong>Google Maps:</strong> <a href="https://share.google/7MRPZghsyFR4K1Ka3" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            <p>Its location right on the highway, combined with its proximity to Srirangam, makes it an easy addition to a Srirangam temple circuit — many pilgrims visit either on the way in or out of Trichy from the Chennai direction.</p>
            
            <h2 id="history" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. History and Legend — From Srirangam's Sanctum to a Roadside Shrine</h2>
            <p>The temple's origin story is one of the more striking legends in the Srirangam temple cluster, because it directly ties Samayapuram back to the Ranganathaswamy Temple itself.</p>
            <p>According to temple tradition, the idol now worshipped at Samayapuram was originally housed <strong>within the Ranganathaswamy Temple at Srirangam</strong>. The Goddess's intense, fierce (<em>ugra</em>) energy was believed to be causing illness to the temple priests, or in some versions, was seen as too powerful and unsettling a presence for the serene Vaishnavite sanctum of Lord Ranganatha. The chief priest is said to have ordered the idol's removal from the temple premises altogether.</p>
            <p>The idol was carried out and, in most versions of the story, was later found by ordinary passersby or local devotees along the road. Recognising her power, they raised a simple shrine to her at the site — some accounts describe this as originating at a related site sometimes called Kannur Mariamman Temple before her worship became centred permanently at Samayapuram.</p>
            <p>The permanent stone temple seen today was built roughly two centuries later. In the <strong>17th century CE</strong>, during the period of <strong>Vijayanagara</strong> rule over the Tiruchirappalli region — when the area served as a military base — local commanders are said to have prayed to the Goddess for victory before a battle, vowing to build her a proper temple if they succeeded. After their victory, they honoured that vow, and the stone structure that forms the temple's core today was constructed.</p>
            <p>The name <strong>Samayapuram</strong> itself is widely explained as coming from the Tamil word <em>Samayam</em> (time/occasion) — reflecting the belief that this form of the Goddess helps her devotees "at the right time," in moments of genuine need. Local tradition also holds that the site has been a place of goddess-worship among agrarian communities for centuries before the stone temple was ever built, with the formal structure simply formalising a much older devotional practice.</p>

            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. Temple Significance</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>A premier Shakti shrine:</strong> Samayapuram is considered one of the most powerful and important Amman (Mother Goddess) temples in Tamil Nadu, drawing devotees not just from across the state but from the wider Tamil diaspora.</li>
              <li><strong>Healing and protection:</strong> Mariamman here is worshipped principally as a protector against disease and epidemic — historically associated with safeguarding devotees from smallpox and chickenpox, and more broadly invoked today for health, fertility, marriage, and family wellbeing.</li>
              <li><strong>One of Tamil Nadu's highest-revenue temples:</strong> Reflecting the sheer scale of daily devotion, Samayapuram is frequently cited as among the top-earning temples administered by the state's HR&CE department.</li>
              <li><strong>Distinctive idol material:</strong> Unlike most major Tamil Nadu temple deities carved from granite or bronze, the Mariamman idol here is made from <strong>sand and clay blended with medicinal herbs</strong> — a form and material tradition shared with many Amman/Shakti village deities across the state, but rare to see at this scale of temple and devotion.</li>
              <li><strong>A living folk-devotional tradition:</strong> The forms of worship here — tonsuring, ear-boring, fire-pit walking, rolling around the temple, carrying fire pots, offering gold mangalsutras and silver body-part replicas — represent one of the most intact and visible living traditions of vow-based, intensely personal Tamil Shakti worship still practised at this scale.</li>
            </ul>

            <h2 id="deities" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. Deities</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Samayapurathu Mariamman:</strong> Fierce form of Adi Parashakti / Mariamman (Presiding deity; idol of sand, clay, and medicinal herbs)</li>
              <li><strong>Comparison often drawn to:</strong> Goddess Chamundeshwari of Mysore (Visitor and guide accounts often note a resemblance in form)</li>
              <li><strong>Subsidiary shrines:</strong> Various Amman and guardian deity shrines within the complex (Common at most major Shakti temple complexes)</li>
            </ul>
            <p>The Rajagopuram (main tower) is plated with gold and is one of the temple's most striking visual features — visitors often remark on how brightly it catches the light during the day.</p>

            <h2 id="timings" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. Darshan and Pooja Timings</h2>
            <p><strong>Daily</strong></p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>5:30 AM – 9:00 PM (continuous)</li>
            </ul>
            <p>Some sources cite a brief midday gap (roughly 12:00 PM – 2:00 PM) during which regular darshan may pause for ritual purposes, though the temple's currently listed hours show continuous access through the day — this is one detail worth confirming locally.</p>
            <p><strong>Darshan options:</strong></p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Sarva Darshan (free general darshan):</strong> Open to all, though queues can be long, especially on Tuesdays, Fridays, and Sundays.</li>
              <li><strong>Special/fast-track darshan:</strong> Paid options are available (commonly cited in the ₹100–₹250 range) for a quicker route through the queue.</li>
            </ul>
            <p><strong>Dress code:</strong> Men are generally expected to wear dhotis or trousers with a shirt; women are encouraged toward sarees, salwar kameez, or similarly modest traditional attire with shoulders and legs covered.</p>
            <p><strong>Distinctive ritual note:</strong> For 28 days from the last Sunday of the Tamil month of Masi, the Goddess is said to observe a fast — during this period, regular cooked food offerings (nivedanam) are paused, with only fruits and flour offered instead.</p>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Chithirai Car Festival (Ther Thiruvizha):</strong> The temple's single biggest annual event, when the Goddess is taken in procession on her sacred wooden temple chariot (April–May).</li>
              <li><strong>Poochoriyal Festival (Pushpa Yagotsavam):</strong> A flower festival celebrated in the month of Panguni (March).</li>
              <li><strong>Navaratri (Purattasi Amavasai):</strong> A nine-day festival in the month of Purattasi (September).</li>
              <li><strong>Thai Poosam period observances:</strong> Celebrated in the Tamil month of Thai (January–February) with grand processions and special poojas.</li>
              <li><strong>Angapradakshinam:</strong> A form of prostration-worship (devotees rolling around the temple as an act of vow-fulfilment) performed daily, though it intensifies markedly around major festival periods.</li>
            </ul>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. How to Reach — Transport Information</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>By Air:</strong> Tiruchirappalli International Airport (TRZ) is the nearest airport.</li>
              <li><strong>By Rail:</strong> The nearest major stations are Tiruchirappalli Junction (Trichy Central) and Srirangam Railway Station.</li>
              <li><strong>By Road:</strong> Samayapuram sits directly on the Trichy–Chennai highway. Frequent buses run from Trichy's Chatiram Bus Stand directly to the temple. From Srirangam, the drive is approximately 10–12 km.</li>
            </ul>
            <p><strong>Local Tip:</strong> Because it sits on the main highway between Trichy and Chennai, many pilgrims travelling that route stop at Samayapuram en route rather than treating it as a separate dedicated trip.</p>

            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. Best Time to Visit</h2>
            <p>October to March offers the most comfortable weather for a visit. Within the week, weekday mornings (outside Tuesday, Friday, and Sunday) tend to be considerably quieter than the temple's busiest days. If you want to witness the Chithirai Car Festival specifically, plan around the April–May window, but expect very large crowds.</p>
            
            <h2 id="notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Combine with:</strong> Ranganathaswamy Temple, Jambukeswarar Temple, and Rockfort — all within a short driving radius.</li>
              <li><strong>What devotees offer:</strong> Gold mangalsutras, silver replicas of body parts, tonsuring, and vows involving fire-pot carrying or fire-pit walking are all part of the temple's living devotional practice.</li>
              <li><strong>Sacred neem tree:</strong> Devotees tie red cloths or small cradles to a neem tree within the temple premises as part of prayers for childbirth.</li>
              <li><strong>Crowd management:</strong> Given how busy this temple is on peak days, arriving early morning is the most reliable way to manage both heat and crowd size.</li>
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
