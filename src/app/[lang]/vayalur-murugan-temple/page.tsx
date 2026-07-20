'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function VayalurTemple({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = React.use(params);

  const topics = [
    { id: 'location', title: '1. Location and Map' },
    { id: 'history', title: '2. History' },
    { id: 'legend', title: '3. The Legend of Arunagirinathar and the Tiruppugazh' },
    { id: 'significance', title: '4. Temple Significance — A Necessary Fact-Check' },
    { id: 'architecture', title: '5. Architecture and Deities — An Unusual Arrangement' },
    { id: 'timings', title: '6. Darshan and Pooja Timings' },
    { id: 'festivals', title: '7. Festivals' },
    { id: 'transport', title: '8. How to Reach — Transport Information' },
    { id: 'best-time', title: '9. Best Time to Visit' },
    { id: 'notes', title: '10. Visitor Notes' },
  ];

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url("/srirangam/vayalur1.png") center 40%/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}/Temples-Nearby-Srirangam-Trichy`} className="back-link">
            <ArrowLeft size={20} />
            Back to Nearby Temples
          </Link>
          <h1 className="hero-title" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Vayalur Murugan Temple</h1>
          <p className="hero-subtitle" style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>
            Where Arunagirinathar Found His Voice
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
            <p><em>Arulmigu Vayalur Sri Subramaniyaswamy (Murugan) Temple, Kumaravayalur, Tiruchirappalli</em></p>
            <p>A short drive west of Trichy city, in the quiet paddy-field village of Kumaravayalur, stands a temple that punches well above its modest size in literary and devotional history. Vayalur Murugan Temple is one of the most visited Murugan shrines in the Trichy region — not because it is enormous or because it belongs to the famous "six abodes" pilgrimage circuit (it doesn't, more on that below), but because of a single, extraordinary claim: this is where the 15th-century poet-saint <strong>Arunagirinathar</strong> is said to have received Lord Murugan's own inspiration to begin composing the <em>Tiruppugazh</em>, one of the most treasured bodies of devotional Tamil poetry ever written.</p>
            
            <h3 style={{ color: 'var(--primary-color)', marginTop: '2rem' }}>Quick Facts</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Presiding Deities:</strong> Lord Shiva as <strong>Adinathar</strong> (main sanctum) and Lord Murugan/Subrahmanya (behind the Shiva sanctum), with consorts Valli and Deivanai; Goddess as Adinayaki</li>
              <li><strong>Popularly known as:</strong> Vayalur Murugan Temple</li>
              <li><strong>Village:</strong> Kumaravayalur (also called Vayalur)</li>
              <li><strong>Built during:</strong> Chola dynasty, with epigraphic evidence from multiple Chola rulers; later additions by the Nayaks</li>
              <li><strong>Age:</strong> Traditionally cited as over 1,200 years old</li>
              <li><strong>Associated saint:</strong> Arunagirinathar, composer of the Tiruppugazh</li>
              <li><strong>Distance from Trichy:</strong> ~9–12 km</li>
              <li><strong>Distance from Srirangam:</strong> ~15–18 km</li>
            </ul>

            <h2 id="location" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>1. Location and Map</h2>
            <p>Vayalur sits amid lush paddy fields on the western outskirts of Tiruchirappalli, giving the temple a quieter, more rural character than the busier shrines closer to the city centre.</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Address:</strong> Arulmigu Vayalur Murugan Temple, Kumaravayalur, Tiruchirappalli, Tamil Nadu 620102</li>
              <li><strong>Coordinates:</strong> approx. 10.8290° N, 78.6232° E</li>
              <li><strong>Google Maps:</strong> <a href="https://share.google/tj2y3t5PA5OuLHhDB" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>View on Google Maps</a></li>
            </ul>
            <p>Its position a little further out from the Srirangam cluster makes it a good candidate for combining with a broader day trip covering Rockfort, Uraiyur, and the western side of Trichy, rather than a quick add-on stop.</p>
            
            <h2 id="history" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>2. History</h2>
            <p>Epigraphic evidence sets Vayalur apart from many similarly sized regional temples: the <strong>Epigraphy Branch of the Archaeological Survey of India</strong> has documented close to <strong>twenty inscriptions</strong> on the walls of the Shiva shrine within this temple complex, recording royal grants and endowments from a remarkable succession of Chola rulers — <strong>Parantaka I, Raja Raja Chola I, Rajendra Chola I, Kulothunga Chola I, and Rajakesari</strong>, among others. These inscriptions also preserve older names for the site — recorded variously as <strong>Tenkarai Brahmadeyam Nandivarma Mangalam</strong> and <strong>Uraiyur Kutrattu Vayalur</strong> — indicating the location's significance stretches back through multiple phases of regional administration.</p>
            <p>Different sources describe the temple's founding slightly differently: several accounts attribute its construction to the Chola dynasty broadly, with more specific claims pointing to the 9th century under a Chola king (<strong>Adittha Cholan</strong>, in some accounts), while at least one other source attributes an earlier 6th-century founding to the Pallava king <strong>Mahendravarman I</strong>. Given how strongly and specifically the ASI-documented Chola inscriptions are attested across multiple sources, the safer and better-supported reading is a <strong>Chola-era origin</strong>, with the temple's structure and inscriptions substantially built up and endowed across successive Chola reigns, and further enhanced later under the <strong>Nayak</strong> rulers. The 6th-century Pallava attribution appears in fewer, less-substantiated sources and should be treated with caution rather than presented as settled fact.</p>
            <p>Local tradition holds the site has been a place of worship since as far back as the <strong>Sangam period</strong>, though — as with much oral temple history in the region — this predates any surviving epigraphic confirmation and rests on tradition and literary references rather than dated inscriptions.</p>
            <p>The temple's location within a fertile village of paddy fields also connects it to its regional identity: Vayalur is sometimes called <strong>Kumaravayalur</strong>, tying the Tamil word for "fields" (<em>vayal</em>) to Murugan's identity as Kumara, the eternal youth.</p>

            <h2 id="legend" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>3. The Legend of Arunagirinathar and the Tiruppugazh</h2>
            <p>The temple's most cherished association is with <strong>Arunagirinathar</strong>, the 15th-century Tamil poet-saint whose personal story is itself one of Tamil devotional literature's most dramatic conversion narratives. Born in Tiruvannamalai, Arunagirinathar lived a self-destructive early life, and, having ruined his health, is said to have attempted to end his life by jumping from a tower of the Annamalaiyar Temple — only to be saved by the divine intervention of Lord Murugan. Transformed by the experience, he became one of Murugan's most devoted poets, composing the <em>Tiruppugazh</em> — thousands of intricately metered devotional verses praising the god across numerous temples he visited on his travels.</p>
            <p>According to the tradition specifically associated with Vayalur, it was <strong>at this temple</strong> that Murugan appeared before Arunagirinathar and inspired him to begin composing verses in praise of the deity — with some accounts specifying that his first set of eighteen verses originated here. This makes Vayalur not just a place of worship but a site of literary pilgrimage for those who revere the Tiruppugazh — visitors and scholars of Tamil devotional poetry continue to visit specifically to connect with this origin story, and recitations of the Tiruppugazh are still performed within the temple premises today.</p>
            <p>A second, older legend explains the site's original discovery: a Chola king, out hunting and searching for water, is said to have come upon sugarcane growing at this spot and attempted to break open a stalk to drink its juice — only to find, to his shock, that it bled. This was taken as a divine sign marking the site as sacred, leading to the temple's founding at this location.</p>

            <h2 id="significance" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>4. Temple Significance — A Necessary Fact-Check</h2>
            <p>Several online sources describe Vayalur as one of the <strong>Arupadai Veedu</strong> — the famous "six abodes" of Lord Murugan associated with his battles against the demon Soorapadman. <strong>This claim does not hold up.</strong> The Arupadai Veedu is a fixed, well-documented set of exactly six temples — <strong>Thiruparankundram, Tiruchendur, Palani, Swamimalai, Thiruthani, and Pazhamudircholai</strong> — a list established in classical Tamil Sangam literature (notably Nakkeerar's <em>Thirumurugatrupadai</em>) and consistently confirmed across scholarly and devotional sources alike. Vayalur is not, and has never been, part of this canonical list, and readers researching this temple should treat any claim to the contrary as an inaccurate exaggeration circulating on some tourism sites.</p>
            <p>What Vayalur genuinely is — and this is significant enough on its own — is:</p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><strong>One of the most important Murugan shrines in the greater Trichy region</strong>, with a documented Chola-era history stretching back roughly 1,200 years.</li>
              <li><strong>The site most closely associated with Arunagirinathar's inspiration for the Tiruppugazh</strong>, a claim to fame independent of, and unrelated to, the Arupadai Veedu tradition.</li>
              <li><strong>An active centre of Tamil devotional culture</strong>, where classical music, Bharatanatyam performances, and recitations of the Tiruppugazh continue to be held.</li>
              <li>A temple believed by devotees to bless those seeking success in <strong>education, the arts, and career endeavours</strong> — a devotional focus distinct from, though related to, Murugan's broader identity as a god of wisdom, valour, and victory.</li>
            </ul>

            <h2 id="architecture" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>5. Architecture and Deities — An Unusual Arrangement</h2>
            <p>Vayalur has one genuinely distinctive structural feature worth knowing before you visit: <strong>the temple most people call "Vayalur Murugan Temple" actually has Lord Shiva, not Murugan, as its principal sanctum deity.</strong></p>
            
            <div style={{ margin: '2rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Shrine</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Deity</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Main sanctum</td>
                    <td style={{ padding: '1rem' }}><strong>Lord Shiva</strong>, worshipped here as <strong>Adinathar</strong></td>
                    <td style={{ padding: '1rem' }}>Front sanctum</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Second shrine</td>
                    <td style={{ padding: '1rem' }}><strong>Lord Murugan (Subrahmanya)</strong>, with consorts <strong>Valli and Deivanai</strong></td>
                    <td style={{ padding: '1rem' }}>Located directly behind the Shiva sanctum</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Goddess shrine</td>
                    <td style={{ padding: '1rem' }}><strong>Adinayaki</strong> (Parvati)</td>
                    <td style={{ padding: '1rem' }}>Within the complex</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '1rem' }}>Processional deity (Utsavar)</td>
                    <td style={{ padding: '1rem' }}><strong>Lord Nataraja</strong></td>
                    <td style={{ padding: '1rem' }}>Taken out during festival processions</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem' }}>Additional shrines</td>
                    <td style={{ padding: '1rem' }}>Lord Vinayaka (Ganesha), and others</td>
                    <td style={{ padding: '1rem' }}>Within the temple complex</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>This layout — Murugan enshrined behind, rather than instead of, a principal Shiva sanctum — is unusual and is part of what makes the temple structurally interesting to visitors familiar with more conventional single-deity Murugan shrines. Architecturally, the temple reflects classic <strong>Dravidian style</strong>, with a tall, intricately carved Rajagopuram at the entrance, granite construction, and a complex reported to span roughly 320 by 87 feet — modest by the standards of Srirangam or Thanjavur, but rich in detail, with devotional paintings adorning parts of the interior. The complex also includes a temple tank and is set amid the lotus ponds and paddy fields that give the whole area its tranquil, semi-rural character.</p>

            <h2 id="timings" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>6. Darshan and Pooja Timings</h2>
            <p>Currently listed temple hours:</p>
            <p><strong>Daily</strong><br/>Morning: 6:00 AM – 1:30 PM<br/>Evening: 3:00 PM – 9:00 PM</p>
            <p>As always, treat these as a solid general guide and check locally or via the temple's listing close to your visit date, since hours can shift around major festival periods.</p>
            <p><strong>Special pooja days:</strong> Tuesdays are considered especially auspicious for Murugan worship generally, and this temple sees increased footfall accordingly, alongside heavier observance during Karthigai and Skanda Sashti.</p>

            <h2 id="festivals" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>7. Festivals</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Skanda Shashti:</strong> The temple's major annual festival, commemorating Lord Murugan's victory over the demon Soorapadman; draws large crowds of devotees.</li>
              <li><strong>Thaipusam:</strong> Celebrated with processions and devotional fervour, as at most major Murugan shrines.</li>
              <li><strong>Panguni Uthiram:</strong> Another significant annual festival at the temple.</li>
              <li><strong>Karthigai:</strong> A monthly and annually heightened observance associated with Murugan worship.</li>
              <li><strong>Kavadi tradition:</strong> Devotees carry kavadi (ornamented structures borne on the shoulder) as an act of penance and devotion, a practice closely associated with Murugan worship across Tamil Nadu and observed here as well.</li>
            </ul>

            <h2 id="transport" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>8. How to Reach — Transport Information</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>By Air:</strong> Tiruchirappalli International Airport (TRZ) is the nearest airport, roughly 15 km away, with taxis and app-cabs available.</li>
              <li><strong>By Rail:</strong> Tiruchirappalli Junction is the nearest major railway station, with onward road connectivity to Vayalur.</li>
              <li><strong>By Road:</strong> Regular bus services connect Vayalur to Trichy's Chathiram Bus Stand, roughly 9–12 km away, with the temple itself reported to have dedicated bus facilities to the bus stand. Ample car and two-wheeler parking is available around the temple. From Srirangam, the drive is approximately 15–18 km.</li>
            </ul>
            <p><strong>Local Tip:</strong> Vayalur is commonly combined with Rockfort, Srirangam's Ranganathaswamy and Jambukeswarar Temples, and Samayapuram Mariamman Temple in broader one-day Trichy temple tours, since all sit within a reasonably compact radius of the city.</p>

            <h2 id="best-time" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>9. Best Time to Visit</h2>
            <p>October to March offers the most comfortable weather for visiting, as with most temples in the region. Tuesdays bring a livelier, more devotional atmosphere given their association with Murugan worship, though also larger crowds — a quieter weekday works better for visitors more interested in the temple's history, inscriptions, and architecture than in the festival atmosphere.</p>
            
            <h2 id="notes" style={{ color: 'var(--primary-color)', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #eee' }}>10. Visitor Notes</h2>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Combine with:</strong> Rockfort, Srirangam's temple cluster, Uraiyur's Vekkali Amman Temple, and Samayapuram Mariamman Temple — all fit within a broader Trichy-area temple circuit.</li>
              <li><strong>For literature and history enthusiasts:</strong> If your interest leans toward Tamil devotional literature, this temple's connection to Arunagirinathar and the Tiruppugazh makes it a particularly meaningful stop — worth allowing a little extra time to take in the atmosphere rather than rushing through.</li>
              <li><strong>Setting:</strong> The surrounding paddy fields, lotus ponds, and relatively quiet village setting make this a calmer, more contemplative visit than some of the busier temples in central Trichy or Srirangam.</li>
              <li><strong>Parking:</strong> Reported as currently adequate, with further dedicated car and bike parking under construction as of recent visitor accounts.</li>
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
