import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default async function RockfortTemple({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'history', title: '2. History' },
    { id: 'legend', title: '3. The Legend of Ucchi Pillayar' },
    { id: 'significance', title: '4. Temple Significance' },
    { id: 'fact-check', title: '5. How Old Is the Rock, Really? (A Fact-Check)' },
    { id: 'architecture', title: '6. Architecture and Layout' },
    { id: 'deities', title: '7. Deities' },
    { id: 'climb', title: '8. The Climb — Steps Are the Only Way Up' },
    { id: 'darshan', title: '9. Darshan Timings' },
    { id: 'festivals', title: '10. Festivals' },
    { id: 'transport', title: '11. How to Reach — Transport Information' },
    { id: 'best-time', title: '12. Best Time to Visit' },
    { id: 'visitor-notes', title: '13. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/Rockfort2.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 style={{ marginTop: '0', fontSize: '2.5rem' }}>Rockfort Ucchi Pillayar Temple</h1>
          <div className="subtitle" style={{ whiteSpace: 'normal' }}>Trichy's Sky-High Shrine to Ganesha</div>
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
            <p><em>Arulmigu Ucchi Pillayar Thirukoil, atop the Rockfort (Malaikottai), Tiruchirappalli</em></p>
            <p>Rising straight out of the middle of Trichy's old town, the Rockfort is impossible to miss — an 83-metre monolith of bare rock, among the oldest rock formations exposed anywhere in India, with a Ganesha shrine perched right at its summit. For anyone visiting the Srirangam temple cluster, Rockfort is the natural next stop: it sits just across the Kaveri, offers a view back over Srirangam's gopurams from the top, and is reached the old-fashioned way — on foot, step by step, with no shortcut available at any price.</p>
            
            <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/Rockfort3.png" 
                alt="Rockfort Temple View" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deity (summit):</strong> Sri Ucchi Vinayagar / Ucchi Pillayar (Lord Ganesha)</li>
              <li><strong>Presiding Deity (midway):</strong> Sri Thayumanaswamy (Shiva) with Goddess Mattuvarkuzhali (Parvati)</li>
              <li><strong>Deity (foot of hill):</strong> Sri Manikka Vinayakar (Ganesha)</li>
              <li><strong>Category:</strong> Padal Petra Sthalam (temple sung by the Nayanmar saints), major Ganesha pilgrimage site</li>
              <li><strong>Rock type / age:</strong> Charnockite; popularly cited as ~3.8 billion years old, though published geological dating for this rock family in Tamil Nadu points to roughly ~2.5 billion years (see Geology section)</li>
              <li><strong>Height:</strong> ~83 m / 273 ft</li>
              <li><strong>Steps to the top:</strong> 417–437 rock-cut steps (figures vary slightly by source) — <strong>the only way up; there is no road, ramp, or lift</strong></li>
              <li><strong>Origins:</strong> Rock-cut cave shrines from the 7th century CE (Pallava period); later Chola and Nayak-era additions</li>
              <li><strong>Location:</strong> Rockfort, Chinna Kadai Street area, Tiruchirappalli, Tamil Nadu 620002</li>
              <li><strong>Distance from Srirangam:</strong> ~5–7 km (across the Kaveri)</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>The Rockfort stands in the heart of old Trichy town, on the southern bank of the Kaveri — a short drive or auto ride from both Trichy Junction and the Srirangam temple cluster across the river.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Address:</strong> Rockfort Temple, Chinna Kadai Street, Teppakulam, Tiruchirappalli, Tamil Nadu 620002</li>
              <li><strong>Coordinates:</strong> approx. 10.8273° N, 78.6972° E</li>
              <li><strong>Access point:</strong> Entry is from Rockfort Bazaar, Trichy's busy old market street — the walk through the bazaar to the ticket counter and steps is part of the experience in itself.</li>
              <li><strong>Google Maps:</strong> <a href="https://maps.app.goo.gl/toeJ1qJFsYvSVv32A" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            
            <h2 id="history" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. History</h2>
            <p>The Rockfort's story runs in two parallel tracks — sacred and military.</p>
            <p><strong>As a temple site:</strong> The rock's earliest carved shrines date to the <strong>7th century CE</strong>, cut directly into the stone during the <strong>Pallava</strong> period — among them the Lalitankura Pallaveswaram cave-temple lower on the hill. Inscriptions found within the complex have been dated as far back as the <strong>3rd century BCE</strong>, with further layers added under the <strong>Chola</strong> dynasty and later, more substantially, under the <strong>Nayak</strong> rulers of Madurai, who are credited with much of the temple architecture visible today, including the Thayumanaswamy shrine's hundred-pillared hall.</p>
            <p><strong>As a fort:</strong> The same rock was fortified and used as a military stronghold — first by the <strong>Vijayanagar empire</strong>, and later contested fiercely between the <strong>British East India Company and the French</strong> during the 18th-century Carnatic Wars, giving the site its English name, "Rock Fort." The British eventually secured it and held the fort until Indian independence in 1947. This military past is why the complex is called <strong>Malaikottai</strong> (மலைக்கோட்டை, "hill fort") in Tamil, and why the Archaeological Survey of India maintains parts of the site as a protected monument alongside its active temple function.</p>

            <h2 id="legend" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. The Legend of Ucchi Pillayar</h2>
            <p>The temple's founding legend ties it directly to the story of Ranganathaswamy across the river in Srirangam.</p>
            <p>After Rama's victory over Ravana, he gifted Vibhishana (Ravana's brother, now installed as king of Lanka) a sacred idol of Vishnu, with strict instructions never to set it down on the ground before reaching Lanka — for it would fix itself permanently wherever it touched earth. On his journey home, Vibhishana passed through Trichy and paused by the Kaveri to bathe and perform his daily rituals, entrusting the idol briefly to a young boy he met on the riverbank.</p>
            <p>The boy — Lord Ganesha in disguise — set the idol down and vanished. It fixed itself to the ground exactly where it was placed, which became the sanctum of the Ranganathaswamy Temple at Srirangam. Furious at being tricked, Vibhishana chased the boy, caught up with him at the top of the nearby rock outcrop, and struck him on the forehead in anger. The boy then revealed his true form as Ganesha. Realizing who he had struck, Vibhishana was filled with remorse; Ganesha, in turn, blessed him and chose to remain permanently at the summit of the rock — which is how the temple came to be called <strong>Ucchi Pillayar</strong> ("Ganesha of the Summit").</p>
            <p>A second, related legend gives the Shiva shrine midway up the hill its name. A devotee named Ratnavati, in labour and unable to reach her mother across the flooding Kaveri, prayed to Shiva — who appeared in the form of her own mother to assist at the birth. When her real mother arrived later, the truth came out, and Shiva here is worshipped as <strong>Thayumanavar</strong>, "the One who became the Mother."</p>
            
            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. Temple Significance</h2>
            <p>Rockfort holds a distinctive place among Trichy's temples for a few reasons:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>It is a <strong>Padal Petra Sthalam</strong> — one of the Shiva temples explicitly praised in the devotional hymns of the Nayanmar saints, placing the Thayumanaswamy shrine within the canon of classical Tamil Shaiva literature.</li>
              <li>The <strong>Ucchi Pillayar shrine</strong> at the summit is one of Tamil Nadu's most visited Ganesha temples, considered especially powerful for devotees seeking to overcome obstacles — fitting, given Ganesha's role as <em>Vighnaharta</em>, remover of obstacles, and given that reaching this particular shrine is itself an act of physical effort and devotion.</li>
              <li>The site is a rare instance where a temple and a fort share the same rock and history — its layered identity as both a spiritual summit and a strategic military position (fought over by three colonial and regional powers) makes it as important historically as it is religiously.</li>
              <li>Geologically, the rock itself is genuinely ancient Precambrian crust — see the section below for what's verified and what's popular folklore.</li>
            </ul>

            <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/rockfort temple art.png" 
                alt="Rockfort Temple Art" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="fact-check" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. How Old Is the Rock, Really? (A Fact-Check)</h2>
            <p>Almost every article on Rockfort repeats the same claim: that the rock is <strong>3.8 billion years old</strong>, making it one of the oldest exposed rock formations on Earth — older than the Himalayas, and in some versions of the story, "second oldest in the world after Mount Kailash." It's worth separating what's solid from what's folklore, since the two get blended together online.</p>
            <p><strong>What's accurate:</strong></p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>The rock is genuine <strong>charnockite</strong>, a coarse-grained metamorphic rock formed deep in the Earth's crust under high heat and pressure. Charnockite was first scientifically identified in Tamil Nadu (near St. Thomas Mount, Chennai, in 1900) and forms much of the exposed basement rock across the state, including the Nilgiris, Palani Hills, and the Southern Granulite Terrain that Trichy sits within.</li>
              <li>The rock genuinely predates the Himalayas by a wide margin. The Himalayas are a young mountain range, roughly 40–50 million years old, formed by the ongoing collision of the Indian and Eurasian plates. Rockfort's charnockite, as part of India's ancient Precambrian peninsular shield, is far older than that by any reasonable estimate.</li>
              <li>The Rockfort outcrop is a striking, scientifically genuine example of a very old, deeply eroded piece of continental crust standing exposed above an otherwise flat landscape — the kind of geology that draws real academic interest in the region.</li>
            </ul>
            
            <h2 id="architecture" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. Architecture and Layout</h2>
            <p>Rockfort unfolds in three distinct tiers as you climb:</p>
            <ol style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Manikka Vinayakar Temple (base):</strong> A Ganesha shrine at the foot of the hill, near the entrance from Rockfort Bazaar — the starting point of the climb.</li>
              <li><strong>Sri Thayumanaswamy Temple (midway):</strong> The largest of the three, dedicated to Shiva and Goddess Mattuvarkuzhali. Notable for its <strong>hundred-pillared mandapam</strong>, a striking Vimana, and a massive natural rock projection over five feet high representing the Shiva lingam — said to be carved directly out of the hill itself rather than installed. The temple's original entrance is believed to have faced east; today it faces the opposite direction.</li>
              <li><strong>Ucchi Pillayar Temple (summit):</strong> A smaller, more intimate 7th-century shrine at the very top, dedicated to Ganesha, built in Dravidian style with Nayak-era additions. From here, the views stretch across Trichy city, the Kaveri and Kollidam (Coleroon) rivers, and — on a clear day — the gopurams of the Ranganathaswamy Temple at Srirangam and Jambukeswarar Temple at Thiruvanaikaval in the distance.</li>
            </ol>
            <p>Along the climb, several smaller rock-cut shrines and cave temples from the Pallava period are also visible, making the ascent itself something of a walk through layered temple history rather than a single uninterrupted staircase.</p>
            <p>At the base of the hill is the <strong>Teppakulam</strong>, the temple tank, near which stands a colonial-era house once used as a residence by Robert Clive during British rule — another marker of the site's dual religious-and-military past.</p>

            <h2 id="deities" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. Deities</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Manikka Vinayakar Temple:</strong> Lord Ganesha (Foot of the hill)</li>
              <li><strong>Thayumanaswamy Temple:</strong> Lord Shiva (as Thayumanavar) with Goddess Mattuvarkuzhali (Midway up, ~halfway point of the climb)</li>
              <li><strong>Ucchi Pillayar Temple:</strong> Lord Ganesha (as Ucchi Vinayagar) (Summit)</li>
            </ul>
            <p>Pilgrims typically visit all three in sequence on the way up, treating the climb itself as a graduated darshan rather than a single stop.</p>

            <div style={{ margin: '2.5rem 0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/srirangam/Rockfort Thayumanavar.png" 
                alt="Rockfort Thayumanavar" 
                width={900} 
                height={500} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>

            <h2 id="climb" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. The Climb — Steps Are the Only Way Up</h2>
            <p>This is the detail every first-time visitor needs to know: <strong>there is no road, vehicle access, ramp, or elevator to either the Thayumanaswamy shrine or the Ucchi Pillayar summit.</strong> The temple is reached exclusively via a flight of rock-cut steps carved into the hill — commonly cited as somewhere between <strong>417 and 437 steps</strong> depending on the source and exact counting point.</p>
            <p>A few practical points on the climb:</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>No vehicles beyond the base.</strong> Cars cannot be parked near the entrance itself — the surrounding streets are narrow and congested, so plan to park a short distance away and walk in, or arrive by auto/taxi that can drop you at the bazaar entrance.</li>
              <li><strong>Footwear:</strong> Footwear is not permitted on the steps, in keeping with temple tradition. Many visitors carry socks for the climb, especially in the heat of the day, since the stone can get hot underfoot.</li>
              <li><strong>Shade:</strong> Most of the stairway is covered and shaded for a large part of the ascent, with the final stretch near the summit typically the most exposed to open sun.</li>
              <li><strong>Pace yourself:</strong> The climb is a genuine physical effort — not extreme, but continuous. It is generally not recommended for elderly visitors or anyone with mobility or cardiac concerns without taking it slowly, with breaks at the midway Thayumanaswamy shrine.</li>
              <li><strong>Along the way:</strong> The ascent passes several smaller shrines and rock-cut niches, which double as natural resting points.</li>
              <li><strong>No entry ticket for basic darshan</strong>, though donation counters and, at times, separate arrangements exist inside — carrying small cash is useful.</li>
              <li><strong>Best time to climb:</strong> Early morning or late afternoon/evening, both for cooler stone underfoot and for the views — sunrise and sunset from the summit are widely considered the best time to be at the top.</li>
            </ul>
            <p>In short: if you can't manage a sustained flight of around 400+ steps, the summit Ucchi Pillayar shrine may not be accessible to you on a given day, though the base-level Manikka Vinayakar shrine remains reachable without any climb.</p>

            <h2 id="darshan" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. Darshan Timings</h2>
            <p>Published temple hours (may shift slightly around festivals — worth a quick check before visiting):</p>
            <p><strong>Daily</strong><br/>Morning: 6:00 AM – 12:00 Noon<br/>Evening: 4:00 PM – 8:00 PM</p>
            <p>Some listings cite a simpler continuous window of roughly 6:00 AM – 8:00 PM; the midday closure above reflects the temple's own posted hours, so it's safest to plan your climb for the morning or evening sessions rather than the midday gap.</p>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>10. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Vinayaka Chaturthi</strong> — the single biggest festival at Rockfort, drawing large crowds to the Ganesha shrines at both the base and the summit.</li>
              <li><strong>Maha Shivaratri</strong> — a major draw at the Thayumanaswamy shrine.</li>
              <li>Regular Tamil monthly festival days (Pradosham, Sashti, and similar Ganesha- and Shiva-specific observances) also see increased footfall.</li>
            </ul>
            <p>Festival days bring significantly heavier crowds on the stairway itself — since it's the only route up, queues can back up considerably, so plan for extra time or consider a non-festival day if the climb itself is already a concern.</p>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>11. How to Reach — Transport Information</h2>
            <p><strong>By Air:</strong> Tiruchirappalli International Airport (TRZ) is about 8–10 km from Rockfort, with regular domestic connections and taxis/app-cabs available at the airport.</p>
            <p><strong>By Rail:</strong> Tiruchirappalli Junction (Trichy Central) is the nearest major station, roughly 2–3 km from Rockfort — a short auto or taxi ride away. Srirangam Railway Station, if you're coming from the Srirangam side, is a bit further, on the other side of the Kaveri.</p>
            <p><strong>By Road:</strong></p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Rockfort is about 5 km from Trichy's Central Bus Stand and roughly 1 km from the Chathiram Bus Stand, both well served by city and state transport buses.</li>
              <li>From Srirangam / Jambukeswarar Temple, it's a straightforward 5–7 km drive across the river — easily combined into the same day's itinerary by auto, taxi, or local bus.</li>
              <li>Once you arrive at Rockfort Bazaar, the final approach to the temple entrance is on foot through the market street, as vehicles cannot get closer.</li>
            </ul>
            <p><strong>Local Tip:</strong> If you're already covering Srirangam and Thiruvanaikaval, doing Rockfort as a sunset stop on the same day works well — you get the golden-hour view over the river and both temple towns from the summit.</p>
            
            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>12. Best Time to Visit</h2>
            <p>October to March gives the most comfortable climbing weather. Within the day, early morning (soon after opening) or the evening session close to sunset are the most popular and most comfortable windows — both for temperature and for the views from the top. Avoid the midday sun if climbing, given there's no way up other than the open-air stone steps for at least part of the route.</p>
            
            <h2 id="visitor-notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>13. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li><strong>Combine with:</strong> Ranganathaswamy Temple and Jambukeswarar Temple across the river in Srirangam — Rockfort completes a natural three-temple circuit for a full day of Trichy-Srirangam temple visits.</li>
              <li><strong>Photography:</strong> Generally allowed on the climb and from the summit viewpoint; restrictions may apply within the inner sanctums, as is standard at most active temples.</li>
              <li><strong>Nearby:</strong> The Teppakulam tank at the base, the old Rockfort Bazaar market, and Robert Clive's historic residence near the tank are worth a few extra minutes if you have time before or after the climb.</li>
              <li><strong>Physical readiness:</strong> Carry water, wear comfortable clothing, and budget at least 45–60 minutes for a comfortable round trip up and down, longer if visiting all three shrines along the way.</li>
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
