import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default async function JambukeswararTemple({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'legend-name', title: '2. The Legend Behind the Name' },
    { id: 'second-legend', title: "3. A Second Legend — Akilandeswari's Penance" },
    { id: 'significance', title: "4. Temple Significance — Why It's a Pancha Bhoota Sthalam" },
    { id: 'architecture', title: '5. Architecture and Temple Layout' },
    { id: 'deities', title: '6. Deities of the Temple' },
    { id: 'darshan', title: '7. Darshan and Pooja Timings' },
    { id: 'festivals', title: '8. Festivals' },
    { id: 'transport', title: '9. How to Reach — Transport Information' },
    { id: 'best-time', title: '10. Best Time to Visit' },
    { id: 'visitor-notes', title: '11. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/thiruvanikovil-hero.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 style={{ marginTop: '0', fontSize: '2.5rem' }}>Jambukeswarar Temple, Thiruvanaikaval</h1>
          <div className="subtitle" style={{ whiteSpace: 'normal' }}>The Water Shrine of Srirangam</div>
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
            <p><strong>Arulmigu Jambukeswarar Akilandeswari Thirukoil, Thiruvanaikaval, Tiruchirappalli</strong></p>
            <p>Barely two kilometres from the Ranganathaswamy Temple, on the same island cradled by the Kaveri and Kollidam rivers, stands one of the five Pancha Bhoota Sthalams of Shaivism — temples where Lord Shiva is worshipped as one of the five elements of nature. Jambukeswarar Temple at Thiruvanaikaval represents <strong>Appu</strong>, the element of Water, and is among the oldest and most atmospheric shrines in the Srirangam temple cluster. Where Ranganathaswamy overwhelms with scale and gold, Jambukeswarar draws pilgrims inward — into cool, dim, moisture-laden corridors where a spring still rises, unbidden, around the base of the lingam.</p>
            
            <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/thiruvanikovil-1.png" 
                alt="Thiruvanaikaval Jambukeswarar Temple" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deity:</strong> Sri Jambukeswarar (Shiva, as Appu Lingam / Water Lingam)</li>
              <li><strong>Consort Deity:</strong> Sri Akilandeswari Amman (Parvati)</li>
              <li><strong>Category:</strong> Pancha Bhoota Sthalam (represents the Water element)</li>
              <li><strong>Built by:</strong> Kochengot Chola (Kochengannan), Early Chola dynasty</li>
              <li><strong>Approx. age:</strong> ~1,800 years (2nd century CE), with major additions later</li>
              <li><strong>Location:</strong> Thiruvanaikaval / Thiruvanaikoil, Srirangam Island, Tiruchirappalli</li>
              <li><strong>Distance from Srirangam Temple:</strong> ~2 km</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>Jambukeswarar Temple sits on the western side of Srirangam Island, a short hop from the Ranganathaswamy Temple, in the locality still called by its old name, Thiruvanaikaval (also spelt Thiruvanaikoil or Jambukeswaram).</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Address:</strong> Arulmigu Jambukeswarar Akilandeswari Temple, North Car Street, Thiruvanaikoil, Srirangam, Tiruchirappalli, Tamil Nadu 620005</li>
              <li><strong>Coordinates:</strong> 10.8539° N, 78.7061° E</li>
              <li><strong>Google Map:</strong> <a href="https://maps.app.goo.gl/R3ghZBs72q2UGbk47" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            <p>Because it sits on the same island as Ranganathaswamy, most pilgrims combine both temples in a single visit — Ranganathaswamy in the morning or evening, and Jambukeswarar as a cooler, quieter counterpoint either right before or after.</p>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <Image 
                src="/srirangam/Map_Thiruvanikovil.png" 
                alt="Map of Thiruvanaikaval Jambukeswarar Temple" 
                width={800} 
                height={500} 
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} 
              />
            </div>

            <h2 id="legend-name" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. The Legend Behind the Name</h2>
            <p>The name <em>Thiruvanaikaval</em> comes from Tamil — <strong>Thiru</strong> (sacred), <strong>Aanai</strong> (elephant), <strong>Kaa</strong> (forest) — "the sacred elephant's forest." The story behind it is one of Tamil Nadu's most loved temple legends:</p>
            <p>Two of Shiva's ganas (attendants), Malyavan and Pushpadanta, quarrelled and cursed each other — one to be reborn as an elephant, the other as a spider. Both were reborn in this forest and, unaware of their shared past, both began worshipping the same Shiva lingam under a <em>Naaval</em> (Indian blackberry / jambu) tree. The elephant carried water from the Kaveri in its trunk to bathe the lingam every day; the spider spun a web over it to shield it from falling leaves and the sun.</p>
            <p>Each mistook the other's devotion for vandalism. The elephant, seeing the web as dirt, kept washing it away; the spider, seeing its web destroyed daily, grew furious and one day crawled into the elephant's trunk and bit it. The elephant died in the act of devotion; the spider, crushed, died too. Moved by the depth of both their devotions, Shiva liberated them from their curses on the spot.</p>
            <p>In their next birth, the spider was said to be born as <strong>Kochengot Chola</strong> — a king born with red eyes, a mark of his spider ancestry — who atoned by building 70 Shiva temples, of which Jambukeswarar was one. In memory of the elephant's fate, it is said no elephant is kept or paraded inside the temple's Shiva sannidhi to this day.</p>
            <p>The tree under which the original lingam stood gave the deity his name: <strong>Jambukeswarar</strong>, "Lord of the Jambu forest."</p>

            <div style={{ margin: '3.5rem 0 1.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/thiruvanikovil-2.png" 
                alt="Thiruvanaikaval Legend" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="second-legend" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. A Second Legend — Akilandeswari's Penance</h2>
            <p>The temple's other central story concerns the Goddess. Parvati, in a playful moment, is said to have covered Shiva's eyes, plunging the universe into darkness. As penance for this act, she was instructed to come to earth and perform tapas. She arrived at this forest in the form of <strong>Akilandeswari</strong>, fashioned a lingam out of the waters of the Kaveri with her own hands, installed it beneath the Jambu tree, and worshipped it. Pleased with her devotion, Shiva appeared before her as Jambukeswarar and imparted to her the secret knowledge of <em>Siva Gnana</em> (supreme wisdom), after which her fierce form was said to have been calmed and she was given ear studs (<em>thodu</em>) by Adi Shankaracharya to soften her energy — a detail still referenced in her iconography today.</p>
            <p>This is why, uniquely among Shiva-Shakti temples, the Goddess here is worshipped as the primary teacher and the more prominent deity in daily ritual life, even though the Shiva shrine remains the sanctum sanctorum of the complex.</p>

            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. Temple Significance — Why It's a Pancha Bhoota Sthalam</h2>
            <p>The Pancha Bhoota Sthalams are five Shiva temples in Tamil Nadu, each associated with one of the five classical elements:</p>
            <ol style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Kanchipuram (Ekambareswarar)</strong> — Earth (Prithvi)</li>
              <li><strong>Tiruvannamalai (Arunachaleswarar)</strong> — Fire (Agni)</li>
              <li><strong>Sri Kalahasti</strong> — Air (Vayu)</li>
              <li><strong>Chidambaram (Nataraja)</strong> — Sky/Space (Akasha)</li>
              <li><strong>Thiruvanaikaval (Jambukeswarar)</strong> — Water (Appu)</li>
            </ol>
            <p>At Jambukeswarar, this elemental association isn't symbolic alone — it is physical. The lingam sits in a sanctum with a natural underground spring, and water is said to continuously seep up around its base regardless of the season, even though the sanctum is periodically drained. Devotees consider this a living manifestation of the element the temple represents, and it's the detail every pilgrim is told to look for during darshan.</p>

            <div style={{ margin: '3.5rem 0 1.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/thiruvanikovil-hero.png" 
                alt="Thiruvanaikaval Gopuram" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="architecture" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. Architecture and Temple Layout</h2>
            <p>Jambukeswarar is a sprawling complex built in classic Dravidian temple architecture, with five concentric enclosures (prakarams) — among the more elaborate walled layouts in the Srirangam region.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Gopurams:</strong> Multiple ornately carved and painted towers mark the entrances through the successive walls, each layered with sculpted deities and mythological scenes.</li>
              <li><strong>Thousand-Pillar-style Mandapams:</strong> The temple has grand pillared halls with intricately carved monolithic pillars, some depicting yalis and Chola-era iconography.</li>
              <li><strong>Twin Sanctums:</strong> Unusually, Shiva and Devi are enshrined in two separate shrines with their own courtyards, rather than sharing a single sanctum.</li>
              <li><strong>The Water Sanctum:</strong> The innermost shrine of Jambukeswarar is low-ceilinged, cool, and often slightly damp underfoot — visitors frequently comment on the sudden drop in temperature.</li>
              <li><strong>Inscriptions:</strong> The temple walls carry inscriptions from multiple dynasties — Cholas, Pandyas, and Vijayanagara rulers.</li>
              <li><strong>Elephant-proof design:</strong> True to the legend, the layout and low entrances of the Shiva sannidhi are said to have been designed so that no elephant could physically enter.</li>
            </ul>

            <div style={{ margin: '3.5rem 0 1.5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/thiruvanikovil-tower1.png" 
                alt="Thiruvanaikaval Tower" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="deities" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. Deities of the Temple</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Jambukeswarar:</strong> Appu Lingam (Water Lingam); Presiding deity; sanctum has a natural spring.</li>
              <li><strong>Akilandeswari Amman:</strong> Parvati, seated form; Considered a Shakti Peetham; worshipped as the primary teacher deity.</li>
              <li><strong>Kubera Lingam:</strong> Subsidiary Shiva form mentioned by pilgrims as a notable subsidiary shrine.</li>
              <li><strong>Parivara devatas:</strong> Subrahmanya, Vinayaka, Nataraja, Chandikeswarar.</li>
              <li><strong>Adi Shankaracharya shrine:</strong> Honours the sage credited with calming Akilandeswari's fierce energy.</li>
            </ul>
            <p>Devotees often describe visiting four principal sannidhis in sequence: Jambukeswarar, Akilandeswari, and two or more subsidiary shrines within the same complex.</p>

            <h2 id="darshan" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. Darshan and Pooja Timings</h2>
            <p>Timings can shift slightly around festivals, so it's worth confirming close to your visit date, but the temple's regularly published hours are:</p>
            <p><strong>Monday – Thursday</strong><br/>Morning: 5:30 AM – 1:00 PM<br/>Evening: 3:00 PM – 8:30 PM</p>
            <p><strong>Friday – Sunday</strong><br/>5:30 AM – 8:30 PM (continuous, no midday closure)</p>
            <p><strong>Special daily ritual:</strong> At <strong>12:00 noon</strong>, the temple priest dresses in the attire of Goddess Akilandeswari and performs the noon pooja in her sanctum — a ritual devotees consider especially auspicious to witness.</p>
            <p>A few practical darshan notes gathered from recent visitor experience:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>The temple can see a lull in footfall between roughly 10:30 AM and noon on weekdays — a good window for an unhurried visit.</li>
              <li>Mobile phones typically need to be deposited at a counter before entering.</li>
              <li>A paid special-entry ticket (a nominal amount) is usually available for faster darshan, with visitors let into the inner sanctum in small batches.</li>
              <li>Traditional attire is preferred; footwear must be removed before entering.</li>
            </ul>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Panguni Brahmotsavam</strong> — the major annual festival (Tamil month of Panguni, Mar–Apr).</li>
              <li><strong>Vasanta Utsavam</strong> — a spring festival.</li>
              <li><strong>Aadi Pooram</strong> — dedicated to the Goddess (Jul–Aug).</li>
              <li><strong>Karthigai Deepam</strong> — the festival of lights (Nov–Dec).</li>
              <li><strong>Margazhi Thiruvadhirai Utsavam</strong> — a Shaivite festival (Dec–Jan).</li>
              <li><strong>Pancha Prakara</strong> — a ritual circumambulation festival unique to the temple's five-walled layout.</li>
            </ul>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. How to Reach — Transport Information</h2>
            <p><strong>By Air:</strong> Tiruchirappalli International Airport (TRZ) is the nearest airport, roughly 15–18 km away.</p>
            <p><strong>By Rail:</strong> Srirangam Railway Station is the closest, only about 1–2 km from the temple. Tiruchirappalli Junction (Trichy Central) is about 8–11 km away.</p>
            <p><strong>By Road:</strong> Well connected by Tamil Nadu State Transport Corporation buses from Trichy's central and Chathiram bus stands, as well as by private taxis and autos.</p>
            <p><strong>Local Tip:</strong> If you're basing yourself in Srirangam to cover the Ranganathaswamy Temple, Jambukeswarar is easily done as a short side trip by auto or on foot.</p>

            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>10. Best Time to Visit</h2>
            <p>October to March offers the most comfortable weather for temple-hopping in Trichy, avoiding both the peak summer heat and the heavier spells of the northeast monsoon. Early mornings, particularly on weekdays, tend to be the quietest time for an unhurried darshan.</p>

            <h2 id="visitor-notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>11. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Amenities:</strong> Basic visitor facilities exist, though some pilgrims note restrooms and dining options within the complex are limited.</li>
              <li><strong>Photography:</strong> Photography inside the sanctum areas is generally restricted.</li>
              <li><strong>Combine with:</strong> Given the proximity, this temple pairs naturally with a Ranganathaswamy Temple visit.</li>
              <li><strong>Dress:</strong> Traditional South Indian attire is preferred, particularly for entry into the inner sanctums.</li>
            </ul>

            <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#777', fontStyle: 'italic', textAlign: 'center' }}>
              *Please note Images used in this website were enhanced using advance techniques and AI to make it better.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
