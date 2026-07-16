import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ViswaroopamSevaPage() {
  return (
    <div style={{ backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Stylish Hero Section */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <Link href="/deity-pooja" style={backLinkStyle}>
            <ArrowLeft size={20} />
            Back to Deity & Pooja
          </Link>
          <span style={{ color: '#fce8d5', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>Sacred Dawn Worship</span>
          <h1 style={{ color: 'white', fontSize: '2.2rem', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Vishwaroopam Seva
          </h1>
          <p style={{ color: '#eee', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
            The ceremonial awakening of Lord Namperumal at Sri Ranganathaswamy Temple
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '-3rem auto 3rem', position: 'relative', zIndex: 10, padding: '0 2rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          
          <img src="/Viswaroopam.png" alt="Viswaroopam Seva" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          
          <p style={leadParagraphStyle}>
            <strong>Vishwaroopam</strong> is the first and most sacred seva (worship service) performed every day at dawn in the Arulmigu Ranganathaswamy Temple at Srirangam. It is the ritual of <em>"Palli Ezhuchi"</em> — the ceremonial awakening of Namperumal from his Yoga Nidra (divine slumber, known as Thiruppallik Kolludhal), conducted through Vedic chanting, Divya Prabandha hymns, the ringing of bells and the waving of lamps (deepaaradhanai), beseeching the Lord to rise and bestow his grace upon the world.
          </p>

          <h2 style={headingStyle}>Timing of the Vishwaroopam Seva</h2>
          <p style={paragraphStyle}>
            The Vishwaroopam seva generally takes place at around <strong>6.15 AM</strong>. Minor changes in timing may occur during festivals and on special occasions.
          </p>

          <h2 style={headingStyle}>Significance of Vishwaroopam</h2>
          <ul style={listStyle}>
            <li>It marks the commencement of all pujas at the temple for the day.</li>
            <li>The first deepaaradhanai (lamp offering) takes place immediately after the Lord's awakening.</li>
            <li>Vedic chanting (Veda Parayanam) and recitation of the Nalayira Divya Prabandham are performed.</li>
            <li>Witnessing this seva at dawn is considered highly meritorious by devotees.</li>
            <li>It is a cherished belief in the Vaishnava tradition that those who witness this seva will be blessed with divine grace throughout the day.</li>
          </ul>

          <h2 style={headingStyle}>The Tradition of Bringing Kaveri Theertham</h2>
          <p style={paragraphStyle}>
            Every day for the Vishwaroopam seva, the temple elephant carries sacred water (theertham) in pots from the Vada Thirukaveri (the northern branch of the Kaveri river). This theertham is used for the Lord's thirumanjanam (ceremonial ablution) and for the day's pujas.
          </p>
          <p style={paragraphStyle}>
            During the month of Thula (Aippasi, October–November), when the water level in the Vada Thirukaveri rises high, there is also a tradition of drawing the theertham from the Then Thirukaveri (southern Kaveri), near the Amma Mandapam area.
          </p>

          <h2 style={headingStyle}>The Spiritual Role of the Elephant</h2>
          <p style={paragraphStyle}>
            The elephant that carries the theertham bows in reverence towards the Moolasthanam (main sanctum) before setting out through the temple's principal gateways. This spectacle is a feast for the eyes of the devotees.
          </p>
          <p style={paragraphStyle}>
            In the Vaishnava tradition, the temple elephant is regarded as a reminder of Gajendraazhwan and is seen as evoking the episode of Gajendra Moksham (the liberation of the elephant-king by Lord Vishnu). The Kaveri theertham brought by the elephant is revered as a sacred union of the Lord's grace and the sanctity of Mother Kaveri.
          </p>

          <h2 style={headingStyle}>Spiritual Benefits of Witnessing Vishwaroopam</h2>
          <ul style={listStyle}>
            <li>It bestows peace of mind and spiritual fulfilment.</li>
            <li>The day is believed to unfold auspiciously for those who witness it.</li>
            <li>Many devotees participate in this seva seeking the welfare, health and prosperity of their families.</li>
            <li>Among the dawn sevas conducted at the 108 Divyadesams, the Vishwaroopam at Srirangam is regarded as one of the most distinguished.</li>
          </ul>

          <h2 style={headingStyle}>Vishwaroopam in Vaishnava Literature</h2>
          <p style={paragraphStyle}>
            The Thiruppalliyeluchi tradition is closely associated with the hymns composed by Thondaradippodi Azhwar. These verses, which lovingly rouse the Lord with the refrain <em>"Palli Ezhundarulaaye"</em> ("May You graciously awaken"), form the spiritual foundation of the dawn worship tradition at the Srirangam temple.
          </p>

          <h2 style={headingStyle}>What Devotees Should Know</h2>
          <ul style={listStyle}>
            <li>Arriving at the temple early in the morning allows one to witness the Vishwaroopam seva in its entirety.</li>
            <li>Crowds tend to be larger on festival days.</li>
            <li>It is advisable to observe the darshan with quietness and decorum, in keeping with temple traditions.</li>
            <li>Witnessing the morning pujas that follow the Vishwaroopam is also considered especially auspicious by devotees.</li>
          </ul>
          
          <p style={{ ...paragraphStyle, marginTop: '2rem', fontStyle: 'italic', fontWeight: 'bold', color: '#571a15', textAlign: 'center' }}>
            The Vishwaroopam at Srirangam is not merely an ordinary dawn puja; it is cherished in the Vaishnava tradition as the very moment when the world awakens to divine grace alongside Lord Ranganatha's rising from his sacred slumber.
          </p>
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
  height: '175px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center'
};

const heroOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(87, 26, 21, 0.7)' // Deep temple maroon overlay
};

const heroContentStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 10,
  padding: '0 2rem'
};

const backLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'white',
  textDecoration: 'none',
  position: 'absolute',
  top: '-50px',
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
  textAlign: 'justify' as const
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
