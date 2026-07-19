import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Info } from 'lucide-react';
import { getDictionary } from '@/dictionaries';

export default async function ExplorePage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.deitySeva || {};

  const deities = [
    {
      id: 1,
      name: t.deities?.[0]?.name || "Sri Ranganatha Perumal",
      title: t.deities?.[0]?.title || "The Presiding Deity",
      description: t.deities?.[0]?.description || "The presiding deity of the temple, Lord Ranganatha, is seen in a reclining posture (Anantha Sayanam) on the serpent Adisesha. He is the ultimate symbol of peace and grace, facing south towards Lanka to bless His great devotee, King Vibhishana.",
      image: "/srirangam/Sri-Ranga.png",
      link: `/${lang}/ranganatha-perumal`
    },
    {
      id: 2,
      name: t.deities?.[1]?.name || "Sri Ranga Nayaki",
      title: t.deities?.[1]?.title || "Thayar / Amma Sannidhi",
      description: t.deities?.[1]?.description || "Sri Ranga Nayaki, affectionately known as Thayar (Mother), is the divine consort of Lord Ranganatha. Her shrine is located in the fourth enclosure. According to tradition, Lord Ranganatha never leaves the temple without Her permission.",
      image: "/srirangam/thayar.jpg",
      link: `/${lang}/thayar`
    },
    {
      id: 3,
      name: t.deities?.[2]?.name || "Sri Chakrathalvar",
      title: t.deities?.[2]?.title || "Lord Sudarshana",
      description: t.deities?.[2]?.description || "The Sri Chakrathalvar shrine is one of the most prominent sub-shrines. It houses the personification of Lord Vishnu's divine discus (Sudarshana Chakra). On the reverse of the idol is Lord Narasimha, offering dual blessings to devotees.",
      image: "/srirangam/chakrathalwar.png",
      link: `/${lang}/chakrathalwar`
    },
    {
      id: 4,
      name: t.deities?.[3]?.name || "Sri Ramanujar",
      title: t.deities?.[3]?.title || "The Great Preceptor",
      description: t.deities?.[3]?.description || "The shrine of Sri Ramanujacharya holds his preserved mortal remains (Thaan Ana Thirumeni). He was the most important philosopher of the Sri Vaishnava tradition, and he administered the Srirangam temple for many decades during his lifetime.",
      image: "/srirangam/Sri-Ramanujar.png",
      link: `/${lang}/ramanujar`
    },
    {
      id: 5,
      name: t.deities?.[4]?.name || "Sri Thulakka Nachiyar",
      title: t.deities?.[4]?.title || "The Celestial Princess",
      description: t.deities?.[4]?.description || "Sri Thulakka Nachiyar (also known as Bibi Nachiyar or Surathani) is a unique and revered shrine dedicated to a Muslim princess from Delhi who fell deeply in love with the processional deity, Lord Namperumal. Her devotion represents the universal nature of the Lord's grace.",
      image: "/srirangam/Thulukka-Nachiyar.png",
      link: `/${lang}/thulukka-nachiyar`
    },
    {
      id: 6,
      name: t.deities?.[5]?.name || "Sri Garudalwar Sannidhi",
      title: t.deities?.[5]?.title || "The Divine Mount",
      description: t.deities?.[5]?.description || "Located opposite the main sanctum, this impressive shrine features a towering 14-foot image of Garuda, Lord Vishnu's eagle mount. Uniquely, he is depicted in a seated posture, eternally waiting for the Lord's command.",
      image: "/srirangam/garudalwar.jpg",
      link: `/${lang}/garudalwar`
    },
    {
      id: 7,
      name: t.deities?.[6]?.name || "Sri Dhavanthri Sannidhi",
      title: t.deities?.[6]?.title || "The God of Medicine",
      description: t.deities?.[6]?.description || "This shrine is dedicated to Lord Dhanvantari, the divine physician and avatar of Lord Vishnu who emerged with the nectar of immortality (Amrita). Devotees offer prayers here seeking good health, healing, and well-being.",
      image: "/srirangam/Sri-Dhavantri.png",
      link: `/${lang}/dhanvantri`
    },
    {
      id: 8,
      name: t.deities?.[7]?.name || "Viswaroopam Seva",
      title: t.deities?.[7]?.title || "Sacred Dawn Worship",
      description: t.deities?.[7]?.description || "Vishwaroopam is the first and most sacred seva performed every day at dawn. It is the ritual of 'Palli Ezhuchi' — the ceremonial awakening of Namperumal from his divine slumber.",
      image: "/srirangam/Viswaroopam.png",
      link: `/${lang}/viswaroopa-seva`
    }
  ];

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#571a15', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} />
          {t.backToHome || "Back to Home"}
        </Link>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: '#571a15', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{t.title || "Deities and Seva"}</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>{t.subtitle || "Discover the divine shrines and deities of Srirangam"}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {deities.map(deity => {
            const cardContent = (
              <>
                <div style={{ ...imageStyle, backgroundImage: `url('${deity.image}')` }}>
                  <div style={imageOverlayStyle}></div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ color: '#d95c14', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{deity.title}</span>
                  <h3 style={{ color: '#333', fontSize: '1.4rem', margin: '0.5rem 0 1rem 0' }}>{deity.name}</h3>
                  
                  <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                    <div style={buttonStyle as React.CSSProperties}>
                      <Info size={18} />
                      {t.viewDetails || "View Details"}
                    </div>
                  </div>
                </div>
              </>
            );

            if (deity.link) {
              return (
                <Link href={deity.link} key={deity.id} style={{ ...cardStyle, textDecoration: 'none', display: 'flex', flexDirection: 'column', cursor: 'pointer' } as React.CSSProperties}>
                  {cardContent}
                </Link>
              );
            }

            return null; // Fallback for no link (removed modal)
          })}
        </div>
      </div>
    </div>
  );
}


// Styles
const cardStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  border: '1px solid #f0f0f0'
};

const imageStyle: React.CSSProperties = {
  height: '240px',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  position: 'relative'
};

const imageOverlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0, right: 0, bottom: 0,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)'
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.8rem',
  backgroundColor: '#571a15',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(87, 26, 21, 0.2)'
};

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '1rem',
  backdropFilter: 'blur(4px)'
};

const modalStyle: React.CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '16px',
  maxWidth: '600px',
  width: '100%',
  position: 'relative',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
  overflow: 'hidden',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column'
};

const modalImageStyle: React.CSSProperties = {
  height: '250px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  background: 'white',
  border: 'none',
  cursor: 'pointer',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  zIndex: 10
};
