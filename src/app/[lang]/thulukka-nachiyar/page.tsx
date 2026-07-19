import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function ThulukkaNachiyarPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div style={{ backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Stylish Hero Section */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <Link href={`/${lang}/deity-seva`} style={backLinkStyle}>
            <ArrowLeft size={20} />
            Back to Deities & Poojas
          </Link>
          <span style={{ color: '#fce8d5', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>The Celestial Princess</span>
          <h1 style={{ color: 'white', fontSize: '2.8rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Sri Thulukka Nachiyar
          </h1>
          <p style={{ color: '#eee', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            The unique history of Bibi Nachiyar and her eternal devotion to Lord Namperumal
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '-3rem auto 3rem', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          
          <img src="/srirangam/Thulukka-Nachiyar.jpg" alt="Sri Thulukka Nachiyar" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          
          <p style={leadParagraphStyle}>
            This is a delightful and wondrous history handed down by the <em>Koyil Ozhugu</em>, the temple chronicle of Thiruvarangam (Srirangam).
          </p>

          <p style={paragraphStyle}>
            The Padushah who ruled Delhi, wishing to extend the boundaries of his empire as far as the Tamil country, attempted to enter the temple with his soldiers, but the gatekeepers resisted his entry. After a great battle, Malik Kafur stormed the treasury and, scooping up the ornaments, gold coins and other riches within it with both hands, laughed aloud in a flood of joy. There, he was struck with wonder at the sight of the vigraham (processional image) of Azhagiya Manavalan, shining with a radiant brilliance. Carrying the heap of gold he had plundered from Thiruvarangam back to Delhi, he showed it to his daughter Surathani and said, "Take whatever you wish, without hesitation." She lifted up the resplendent vigraham of Azhagiya Manavalan in her hands and declared, "There is nothing in this world to equal this image." She kept the vigraham of Azhagiya Manavalan in her private chambers, and delighted in singing, dancing and playing with it.
          </p>

          <p style={paragraphStyle}>
            Here in Srirangam, meanwhile, with Azhagiya Manavalan stolen, the temple was ceremonially sealed (thirukkappu), and no festivals were conducted. Acting on the information brought by Karambanur Ammaiyar, who had come there at that time, and knowing that the Delhi Padushah was deeply devoted to music and dance, a troupe of dancers and singers from Srirangam hastened to Delhi to see him. Greatly enchanted by the singers' music, the Delhi Padushah offered them gold and diamond jewellery, precious ornaments, fine muslin cloth and silk peethambarams as gifts. When they refused to accept them, the Padushah stood bewildered. "Did you think what I gave was not enough, or is there something else you want?" he asked. They replied that they wanted nothing else — only the vigraham of Azhagiya Manavalan with which his daughter played.
          </p>

          <p style={paragraphStyle}>
            The Delhi Padushah pondered deeply and said that, in that case, without room for further discussion, they should sing before Azhagiya Manavalan at once; if the Lord came to them, they could take him away. Within a short while of their beginning the song in praise of their Lord, Azhagiya Manavalan granted darshan to the dancers and singers, gladdening their eyes. To Surathani too he appeared, extending his abhaya hastam (hand of protection). Immersed in a flood of joy, Surathani fell into a swoon on the spot. At that very moment, Azhagiya Manavalan passed into the hands of the singers. Waking a short while later, Surathani felt that all that had happened was like a dream, and ran here and there searching for Azhagiya Manavalan. Seeing his daughter standing exhausted, her face withered with tears and lamentation, the Delhi Padushah at once dispatched his soldiers with orders to recover the vigraham of Azhagiya Manavalan.
          </p>

          <p style={paragraphStyle}>
            In the meantime, those who had carried away the Lord's vigraham reasoned that if they all travelled together they would be caught. So three of them alone bore the Lord away and concealed him under leaves and foliage on a hill slope in a dense forest tract of Thirumalai (Tirupati).
          </p>

          <p style={paragraphStyle}>
            Learning of his daughter's condition, the Padushah sent her to Thiruvarangam with his armies and with fitting arrangements. Arriving at Srirangam with the Padushah's forces that had come in search of Azhagiya Manavalan, Surathani did not find the Lord; seeing the temple entrance ceremonially sealed, she collapsed to the ground in a swoon. Thinking of the Lord, she gave up her life. At that moment the Lord's supreme grace manifested itself: a light rose from Surathani's body and merged into the sacred form (thirumeni) of Azhagiya Manavalan.
          </p>

          <p style={paragraphStyle}>
            After spending many years in concealment (ajnaathavaasam) at Thirumalai itself, Azhagiya Manavala Perumal was brought back to Thiruvarangam and reconsecrated. The Chola king who ruled the land at that time carried out this sacred service (kainkaryam). That night the Lord appeared in his dream, narrated the story of Surathani, and asked him to build a shrine for her. Accordingly, the Chola king built a sannidhi for Surathani at the north-eastern corner near the Lord's sanctum, and had her form rendered there as a painting.
          </p>

          <p style={paragraphStyle}>
            From that day onwards, in keeping with Muslim custom, the daily offerings (nithyapadi) to the Lord include roti and butter in the morning and milk at night. During the thirumanjanam (ceremonial bath), the custom of draping the Lord in a kaili (lungi) is also observed.
          </p>

          <p style={paragraphStyle}>
            Moreover, during the Pagal Pathu festival of the Vaikunta Ekadasi celebrations, when Azhagiya Manavalan comes in procession before the steps of the shrine where Surathani resides, the bearers of the sacred palanquin lift Tholukkiniyaan (the Lord "pleasing to the shoulder") high on their shoulders and perform the padi-yetram (step-ascending) sevai, so that Surathani may have a full and clear view of him — a practice that continues to this day. Likewise, in the Thulukka Nachiyar sannidhi, in keeping with Muslim customs, incense of agil (agarwood) mixed with sandalwood is offered even today.
          </p>

          <p style={paragraphStyle}>
            In commemoration of Sri Ranganatha's forty-year stay at Thirumalai, from the year 2004 onwards, on Kaisika Ekadasi — one of the most important days at this temple — vastram (sacred cloth) and umbrella honours are sent from Tirumala Tirupati to Sri Ranganatha, Sri Ranganachiyar and Ramanuja of this temple. In gratitude for this, on the Ani Vaara Aasthana day, vastra mariyathai (cloth honours) is sent from this temple to Tirumala Tirupati.
          </p>

          <h2 style={headingStyle}>The Thulukka Nachiyar Shrine — Additional Notes</h2>
          <ul style={listStyle}>
            <li>Unlike the other Nachiyar shrines, Thulukka Nachiyar is worshipped not in the form of a stone or metal idol but as a painting — a gesture of respect towards the Islamic tradition that avoids graven images. Her shrine is situated adjacent to the sanctum, near the Arjuna Mandapam.</li>
            <li>In honour of her Islamic heritage, her naivedhyam consists of butter rotis and sugar prepared in the Mughlai style. By tradition, these are offered first to Thulukka Nachiyar, and only then to the Lord.</li>
            <li>According to some accounts, a kalyana utsavam (divine marriage festival) of Thulukka Nachiyar with Lord Ranganatha is celebrated once a year with great ceremony. On Panguni Uthiram — the day of the celebrated Serthi Seva with Sri Ranganachiyar — Thulukka Nachiyar is also formally honoured alongside the other consorts, and her roti-and-butter offering is made with special ceremony.</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

const heroStyle: React.CSSProperties = {
  position: 'relative',
  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/1200px-Sri_Ranganathaswamy_Temple_Gopuram.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '300px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const heroOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(87, 26, 21, 0.7)'
};

const heroContentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  padding: '5rem 2rem 5rem'
};

const backLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'white',
  textDecoration: 'none',
  position: 'absolute',
  top: '-70px',
  left: '0',
  fontWeight: 'bold',
  opacity: 0.9
};

const headingStyle: React.CSSProperties = {
  color: '#d95c14',
  marginTop: '2.5rem',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  borderBottom: '1px solid #fce8d5',
  paddingBottom: '0.5rem'
};

const leadParagraphStyle: React.CSSProperties = {
  color: '#333',
  lineHeight: '1.8',
  fontSize: '1.15rem',
  textAlign: 'justify' as const,
  marginBottom: '1rem',
  fontStyle: 'italic'
};

const paragraphStyle: React.CSSProperties = {
  color: '#444',
  lineHeight: '1.8',
  marginBottom: '1rem',
  fontSize: '1.05rem',
  textAlign: 'justify' as const
};

const listStyle: React.CSSProperties = {
  color: '#444',
  lineHeight: '1.8',
  fontSize: '1.05rem',
  paddingLeft: '1.5rem',
  marginBottom: '1rem'
};
