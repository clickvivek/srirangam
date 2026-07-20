'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function TanjoreTemple({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'history', title: '2. History — Raja Raja Chola\'s Seven-Year Wonder' },
    { id: 'significance', title: '3. Temple Significance' },
    { id: 'architecture', title: '4. The Marvellous Architecture' },
    { id: 'mystery', title: '5. The Mystery of the Capstone' },
    { id: 'shadowless', title: '6. The "Shadowless" Tower — Fact or Folklore?' },
    { id: 'deities', title: '7. Deities and Shrines' },
    { id: 'timings', title: '8. Darshan and Pooja Timings' },
    { id: 'festivals', title: '9. Festivals' },
    { id: 'transport', title: '10. How to Reach — Transport Information' },
    { id: 'best-time', title: '11. Best Time to Visit' },
    { id: 'notes', title: '12. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/tanjore1.png") center 40%/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Tanjore Brahadeswara Temple</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>
            The Chola Empire's Greatest Monument
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
            <p><em>Arulmigu Brihadeeswarar Thirukoil (Peruvudaiyar Kovil), Thanjavur — UNESCO World Heritage Site</em></p>
            <p>About an hour's drive south-east of Srirangam, in the temple town of Thanjavur, stands a building that has no real precedent — and, in some ways, no real successor. The Brihadeeswarar Temple, popularly called the <strong>Big Temple</strong>, was raised in a mere seven years by the Chola emperor Raja Raja Chola I in the early 11th century, and its 216-foot granite tower remained the tallest temple structure on Earth for the better part of a millennium. Where Srirangam's Ranganathaswamy overwhelms with the sheer scale of its seven concentric walls, and Jambukeswarar draws you inward into cool water-fed shrines, Brihadeeswarar does something different: it makes you look <strong>up</strong>, and then makes you wonder how an 11th-century civilisation with no cranes, no wheels-and-pulleys as we know them, and no iron scaffolding ever got an 80-ton stone to the top of it.</p>
            
            <div style={{ margin: '2.5rem 0 1rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/tanjore1.png" 
                alt="Tanjore Brahadeswara Temple Architecture" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            
            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deity:</strong> Sri Brihadeeswarar (Shiva, as a colossal lingam) — also called Peruvudaiyar</li>
              <li><strong>Consort Deity:</strong> Sri Brihannayaki Amman (Parvati)</li>
              <li><strong>Built by:</strong> Emperor Raja Raja Chola I</li>
              <li><strong>Built between:</strong> c. 1003–1010 CE (completed within ~7 years)</li>
              <li><strong>Vimana height:</strong> ~216 ft / 66 m — among the tallest temple towers in the world</li>
              <li><strong>Capstone weight:</strong> ~80 tons, carved from a single block of granite</li>
              <li><strong>Status:</strong> UNESCO World Heritage Site (1987)</li>
              <li><strong>Distance from Srirangam:</strong> ~55 km</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>Brihadeeswarar Temple sits in the heart of old Thanjavur city, well inside the fort area, a short walk from the Thanjavur Palace and Saraswathi Mahal Library.</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Address:</strong> Brihadeeswarar Temple, South Main Street, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613001</li>
              <li><strong>Coordinates:</strong> 10.7827° N, 79.1315° E</li>
              <li><strong>Google Maps:</strong> <a href="https://share.google/zhWdIS5OxmUoRGCFb" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            <p>Given the distance, most visitors coming from Srirangam treat this as a half-day or full-day excursion rather than a quick add-on — it pairs naturally with the other two "Great Living Chola Temples" nearby (Gangaikonda Cholapuram and Airavatesvara Temple at Darasuram), and with Thanjavur's palace complex if time allows.</p>
            
            <h2 id="history" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. History — Raja Raja Chola's Seven-Year Wonder</h2>
            <p>The temple was commissioned by <strong>Raja Raja Chola I</strong> (reigned 985–1014 CE), one of the most powerful rulers South India ever produced, at the height of the Chola empire's reach across southern India, Sri Lanka, and the Maldives, with naval influence stretching further into Southeast Asia. Inscriptions on the temple walls record that it was consecrated in the <strong>275th day of the 25th year of his reign</strong> — corresponding to around 1010 CE — meaning construction was completed in roughly <strong>five to seven years</strong>, an extraordinary pace for a structure of this scale even by modern standards.</p>
            <p>The temple was originally called <strong>Rajarajeswaram</strong>, after its builder, and is still referred to in Tamil as <strong>Peruvudaiyar Kovil</strong> ("Temple of the Great Lord"). Unusually for a monument of this magnitude, the temple's own walls function as a historical archive: thousands of lines of <strong>Tamil inscriptions</strong> cover the base of the sanctum, meticulously recording the temple's endowments, the gold and silver donated for its rituals, the villages assigned to support its priests and dancers, the officials and craftsmen involved, and even administrative details of Chola governance — making it one of the richest single epigraphical sources for reconstructing 11th-century South Indian society.</p>
            <p>Raja Raja's son and successor, <strong>Rajendra Chola I</strong>, went on to build a second, related masterpiece — the Brihadeeswarar Temple at <strong>Gangaikonda Cholapuram</strong> — modelled on his father's temple but on an even larger footprint (though with a shorter tower), together with the temple at <strong>Airavatesvara, Darasuram</strong>, built by a later Chola king. These three temples are jointly inscribed by UNESCO as the <strong>"Great Living Chola Temples."</strong></p>
            <p>The temple has remained in continuous worship for over a thousand years, surviving dynastic transitions from the Cholas to the Pandyas, Vijayanagar rulers, the Nayaks of Thanjavur, and the Maratha rulers of Thanjavur, each of whom added structures, gopurams, or shrines to the complex without displacing its original Chola core.</p>

            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. Temple Significance</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>Architectural benchmark:</strong> For centuries, the Brihadeeswarar vimana was the tallest temple tower ever built anywhere in the world — a record it held from its completion until the later, taller Gangaikonda Cholapuram and other South Indian towers approached (though even today it remains one of the tallest and most technically celebrated).</li>
              <li><strong>UNESCO recognition:</strong> Inscribed as a World Heritage Site in 1987 for its outstanding architectural, artistic, and technical achievement, and grouped with two related Chola temples in a rare joint listing.</li>
              <li><strong>Living epigraphical record:</strong> Few monuments anywhere in the world carry as detailed a contemporary written record of their own construction, funding, and administration as this temple's inscriptions provide.</li>
              <li><strong>National symbol:</strong> The temple has appeared on Indian currency and postage stamps, and remains one of the most widely recognised symbols of classical Tamil and South Indian civilisation.</li>
              <li><strong>A living temple, not a monument:</strong> Despite its heritage status and the tourist footfall it draws, Brihadeeswarar functions as an active place of worship, with daily rituals continuing largely as they have for over a thousand years — a detail visitors sometimes don't expect from a UNESCO site of this scale.</li>
            </ul>
            
            <div style={{ margin: '3rem 0 1rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/tanjore3.png" 
                alt="Tanjore Brahadeswara Temple Significance" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="architecture" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. The Marvellous Architecture</h2>
            <p>Brihadeeswarar is widely regarded as the high-water mark of <strong>Dravidian temple architecture</strong>, and several of its features were genuinely without precedent when built:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>The Vimana:</strong> The 13-tiered pyramidal tower rising to roughly 216 feet is the temple's defining feature — and unusually, it is significantly <em>taller</em> than the temple's entrance gopurams, a reversal of the pattern seen at most Dravidian temples (including Srirangam's Ranganathaswamy, where the outer gopurams dwarf the inner sanctum tower). This design choice is widely read as a deliberate architectural statement of the Chola king's power and the primacy of the deity within.</li>
              <li><strong>All-granite construction:</strong> The entire structure is built from granite — a material with no local source anywhere near Thanjavur, since the surrounding delta is alluvial plain. The nearest granite quarries are tens of kilometres away, meaning every stone block used in the temple, including the largest, had to be transported significant distances before construction even began.</li>
              <li><strong>Interlocking masonry:</strong> The blocks are joined using a precise interlocking technique rather than mortar or binding material, a method that has allowed the structure to remain structurally sound through a thousand years of monsoons, temperature shifts, and at least one recorded major regional earthquake.</li>
              <li><strong>The Nandi Mandapam:</strong> At the entrance sits one of India's largest monolithic Nandi (bull) statues — roughly 16 feet long and 13 feet high, carved from a single block of granite and estimated to weigh around 20–25 tons.</li>
              <li><strong>Frescoes and sculpture:</strong> The inner corridors preserve rare Chola-period frescoes (later painted over in places by Nayak-era artists, with both layers now studied by conservators), alongside extensive sculptural work depicting Shiva in multiple forms, Chola royal portraiture, and scenes from Hindu mythology.</li>
              <li><strong>The Shivalingam:</strong> The sanctum houses one of the largest Shivalingams in India, matching the scale of the tower above it.</li>
            </ul>
            
            <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/tanjore2.png" 
                alt="Tanjore Brahadeswara Temple Shivalingam" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="mystery" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. The Mystery of the Capstone — How Did an 80-Ton Stone Reach the Top?</h2>
            <p>This is the question every visitor eventually asks, and it remains, honestly, the temple's most debated engineering puzzle.</p>
            <p>Crowning the vimana is the <strong>Kumbam</strong> — an octagonal cupola/capstone carved from a single block of granite, estimated at roughly <strong>80 tons</strong>, sitting at a height of over 200 feet. There were no cranes, no steel cabling, and no combustion-powered machinery available to 11th-century builders. So how did it get up there?</p>
            <p><strong>The prevailing theory — a giant earthen ramp.</strong> The most widely accepted explanation, repeated by historians and referenced by sources including <em>Encyclopaedia Britannica</em>, is that the Chola engineers built a long, gently sloping earthen ramp — estimates for its length range from roughly <strong>4 to 6.5 kilometres</strong>, reportedly starting from a site associated with the nearby village of <strong>Sarapallam</strong>. A ramp of that length, kept at a shallow gradient, would have made it physically possible for teams of elephants and large groups of workers to drag the stone upward gradually, a few feet at a time, over what may have taken weeks or months, rather than needing to lift it vertically at all. Once the capstone was manoeuvred into position at the summit, the ramp's earth would have been removed, leaving the tower standing free — a method with clear parallels to how ancient Egyptian builders are believed to have moved similarly massive stones for the pyramids.</p>
            <p><strong>What's genuinely uncertain:</strong></p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>No physical trace of the ramp survives today</strong> — it isn't visible in the surrounding landscape, so the theory rests on the physics of what would have been necessary rather than on excavated remains.</li>
              <li><strong>The exact ramp length is disputed</strong> across sources — figures anywhere from about 4 to 6.5 km appear depending on the account, and no single measurement is treated as definitive.</li>
              <li>Alternative or supplementary theories propose the combined use of <strong>ropes, log rollers, and pulley-like systems</strong> alongside the ramp, rather than a ramp alone — the truth may well be a combination of methods rather than one single technique.</li>
              <li>A well-loved but unverifiable folk story holds that a humble cowherdess who had never been able to afford an offering brought a simple stone to Shiva, and that Shiva appeared in dreams to both her and Raja Raja Chola instructing that this very stone become the capstone — a devotional legend more than a historical account, but one still told at the temple today.</li>
            </ul>
            <p><strong>What isn't in dispute</strong> is the outcome: a granite block of that mass has sat, without mortar, at a height of over 200 feet, through a millennium of monsoons and at least one significant regional earthquake, without failing. Whatever the exact method, it remains one of the most discussed feats of pre-modern engineering in the world, and modern structural engineers still study the temple's load distribution and foundation techniques for insight into how it has endured.</p>

            <h2 id="shadowless" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. The "Shadowless" Tower — Fact or Folklore?</h2>
            <p>A frequently repeated claim is that the vimana's shadow "never falls on the ground" at noon, regardless of the sun's position. This is one of the temple's most popular legends, but it's worth being precise about what's actually verified:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li>The tower is positioned and proportioned such that, around midday, its shadow largely falls <strong>within the temple's own inner courtyard</strong> rather than extending outward onto open ground beyond the complex — which is what gives rise to the "no shadow" impression for casual observers.</li>
              <li>This is best understood as a <strong>deliberate and impressive feat of architectural planning and orientation</strong> by Chola engineers — not a literal absence of a shadow, which would violate basic physics. Multiple modern accounts note that the shadow is verifiably present; it is simply contained within the temple's own walls at certain times of day rather than stretching visibly across the surrounding town.</li>
            </ul>
            <p>It's a detail worth sharing with visitors as a genuine mark of the builders' skill in orienting and proportioning the tower — while being straightforward that it's a clever design outcome, not a supernatural one.</p>

            <h2 id="deities" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. Deities and Shrines</h2>
            
            <div style={{ margin: '2rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Shrine</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Deity</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Main sanctum</td>
                    <td style={{ padding: '1rem' }}>Sri Brihadeeswarar (Shiva lingam)</td>
                    <td style={{ padding: '1rem' }}>One of the largest Shivalingams in India</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Amman shrine</td>
                    <td style={{ padding: '1rem' }}>Sri Brihannayaki Amman (Parvati)</td>
                    <td style={{ padding: '1rem' }}>Added in a later period by Chola successors</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Nandi Mandapam</td>
                    <td style={{ padding: '1rem' }}>Nandi (Shiva's bull)</td>
                    <td style={{ padding: '1rem' }}>Monolithic, ~20–25 tons, at the temple's entrance axis</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Subsidiary shrines</td>
                    <td style={{ padding: '1rem' }}>Ganesha, Murugan (Subrahmanya), Chandikeswarar, and others</td>
                    <td style={{ padding: '1rem' }}>Located within the outer courtyards</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem' }}>Chola gallery / museum</td>
                    <td style={{ padding: '1rem' }}>Bronze and stone Chola-era sculpture</td>
                    <td style={{ padding: '1rem' }}>Housed within the temple premises, notable for Chola-period bronze casting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="timings" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. Darshan and Pooja Timings</h2>
            <p>Published temple hours (small variations exist across sources, and hours may shift around festivals):</p>
            <p><strong>Daily</strong><br/>Morning: 6:00 AM – 12:30 PM<br/>Evening: 4:00 PM – 8:30 PM</p>
            <p>Some listings show a single continuous window of roughly 6:30 AM – 8:30 PM, so treat the exact midday closure as worth double-checking close to your visit date. Entry to the temple is free.</p>
            <p><strong>Daily poojas</strong> are typically conducted at set points across the day — commonly cited as including a dawn abhishekam shortly after opening, a midday pooja, and evening rituals through to closing — with six ritual observances mentioned across temple guides in total. As with any major working temple, exact seva timings can shift, so it's best confirmed with temple authorities or posted signage on the day.</p>
            <p><strong>Visitor tips:</strong></p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Photography inside the inner sanctum is generally restricted, though the outer courtyard, Nandi mandapam, and vimana are commonly photographed by visitors — check current signage, as rules can change.</li>
              <li>Footwear must be removed before entering, with cloakroom facilities available near the entrance for both footwear and bags (a small fee applies).</li>
              <li>Sundays and festival days draw much larger crowds; some accounts mention a nominal-fee special-entry line to speed up darshan during the busiest periods.</li>
              <li>Budget at least 1.5–2 hours for a comfortable visit; if you want to witness a full abhishekam or ritual sequence, closer to 3 hours is more realistic.</li>
            </ul>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Maha Shivaratri:</strong> One of the temple's biggest annual draws, in keeping with its status as a major Shiva shrine.</li>
              <li><strong>Panguni festival / annual Brahmotsavam:</strong> A multi-day annual festival period, traditionally associated with the month of Panguni (roughly March–April).</li>
              <li><strong>Day of the Ruling Star (Sathabhishag):</strong> Observed monthly, marking the star under which Raja Raja Chola himself was born; treated by many devotees as a significant recurring observance specific to this temple.</li>
              <li><strong>Vishakha month annual festival:</strong> A nine-day annual festival period cited in some temple accounts, held around May.</li>
              <li><strong>Pongal:</strong> The Tamil harvest festival in mid-January draws large crowds with extended temple hours.</li>
            </ul>
            <p>Festival periods bring considerably heavier crowds; if you'd prefer a quieter, unhurried visit to take in the architecture, a non-festival weekday is the better choice.</p>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>10. How to Reach — Transport Information</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>By Air:</strong> The nearest airport is Tiruchirappalli International Airport (TRZ), roughly 55 km from Thanjavur, with domestic connections to major Indian cities and a few international routes. Taxis and app-cabs run regularly between the airport and Thanjavur.</li>
              <li><strong>By Rail:</strong> Thanjavur Railway Station is well connected to major cities across Tamil Nadu and beyond, and is only a short auto or taxi ride from the temple itself.</li>
              <li><strong>By Road:</strong> Thanjavur has strong road connectivity via National Highway routes linking it to Trichy, Chennai, Madurai, and Coimbatore, as well as to Kerala destinations like Kochi and Thiruvananthapuram. From <strong>Srirangam</strong>, the drive is approximately 55 km (roughly 1 to 1.5 hours by road). A metered car park operates near the temple's main entrance, with charges typically around ₹30 for cars and ₹10 for two-wheelers.</li>
            </ul>
            <p><strong>Local Tip:</strong> Since Gangaikonda Cholapuram and Airavatesvara (Darasuram) — the other two "Great Living Chola Temples" — are both within a similar radius of Thanjavur, a single day trip from Srirangam can be extended into a broader Chola-temple circuit if time allows.</p>

            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>11. Best Time to Visit</h2>
            <p>October to March offers the most comfortable weather for exploring the temple's open courtyards, which offer little shade during the hotter months (April–July). A hat or umbrella is worth carrying regardless of season, given how much of the visit takes place in open granite courtyards. Early morning, shortly after opening, tends to be both cooler and less crowded than the late-morning to midday window.</p>
            
            <h2 id="notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>12. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Combine with:</strong> Thanjavur Palace, the Saraswathi Mahal Library, and the Thanjavur Art Gallery, all a short distance away, if you have extra time in the city.</li>
              <li><strong>Wheelchair/mobility access:</strong> The outer courtyards and Nandi mandapam are relatively accessible; parts of the inner sanctum approach involve steps, so those with mobility concerns may want to check current accessibility arrangements in advance.</li>
              <li><strong>What to bring:</strong> Water, sun protection, and comfortable footwear that's easy to remove — most of the visit is on stone underfoot in the open sun.</li>
              <li><strong>Underground passage stories:</strong> Local legend holds that tunnels beneath the temple complex once connected it to the old Chola/Thanjavur palace and other nearby sites. This remains folklore rather than a documented archaeological finding, and is worth presenting to readers as such rather than as verified fact.</li>
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
