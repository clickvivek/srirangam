"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, X, Eye, Info } from 'lucide-react';

const deities = [
  {
    id: 1,
    name: "Sri Ranganatha Perumal",
    title: "The Presiding Deity",
    description: "The presiding deity of the temple, Lord Ranganatha, is seen in a reclining posture (Anantha Sayanam) on the serpent Adisesha. He is the ultimate symbol of peace and grace, facing south towards Lanka to bless His great devotee, King Vibhishana.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg" // Using placeholder images
  },
  {
    id: 2,
    name: "Sri Ranga Nayaki",
    title: "Thayar / Amma Sannidhi",
    description: "Sri Ranga Nayaki, affectionately known as Thayar (Mother), is the divine consort of Lord Ranganatha. Her shrine is located in the fourth enclosure. According to tradition, Lord Ranganatha never leaves the temple without Her permission.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/800px-Sri_Ranganathaswamy_Temple_Gopuram.jpg"
  },
  {
    id: 3,
    name: "Sri Chakrathalvar",
    title: "Lord Sudarshana",
    description: "The Sri Chakrathalvar shrine is one of the most prominent sub-shrines. It houses the personification of Lord Vishnu's divine discus (Sudarshana Chakra). On the reverse of the idol is Lord Narasimha, offering dual blessings to devotees.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg"
  },
  {
    id: 4,
    name: "Sri Ramanujar",
    title: "The Great Preceptor",
    description: "The shrine of Sri Ramanujacharya holds his preserved mortal remains (Thaan Ana Thirumeni). He was the most important philosopher of the Sri Vaishnava tradition, and he administered the Srirangam temple for many decades during his lifetime.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/800px-Sri_Ranganathaswamy_Temple_Gopuram.jpg"
  },
  {
    id: 5,
    name: "Sri Thulakka Nachiyar",
    title: "The Celestial Princess",
    description: "Sri Thulakka Nachiyar (also known as Bibi Nachiyar or Surathani) is a unique and revered shrine dedicated to a Muslim princess from Delhi who fell deeply in love with the processional deity, Lord Namperumal. Her devotion represents the universal nature of the Lord's grace.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg"
  },
  {
    id: 6,
    name: "Sri Garudalwar Sannidhi",
    title: "The Divine Mount",
    description: "Sri Garudalwar, the sacred eagle mount (Vahana) of Lord Vishnu, has a significant shrine in the temple. The majestic idol of Garuda is depicted with folded hands in deep devotion, facing the main sanctum of Lord Ranganatha.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/800px-Sri_Ranganathaswamy_Temple_Gopuram.jpg"
  },
  {
    id: 7,
    name: "Sri Dhavanthri Sannidhi",
    title: "The God of Medicine",
    description: "This shrine is dedicated to Lord Dhanvantari, the divine physician and avatar of Lord Vishnu who emerged with the nectar of immortality (Amrita). Devotees offer prayers here seeking good health, healing, and well-being.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg"
  },
  {
    id: 8,
    name: "Viswaroopam Seva",
    title: "Sacred Dawn Worship",
    description: "Vishwaroopam is the first and most sacred seva performed every day at dawn. It is the ritual of 'Palli Ezhuchi' — the ceremonial awakening of Namperumal from his divine slumber.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sri_Ranganathaswamy_Temple_Gopuram.jpg/800px-Sri_Ranganathaswamy_Temple_Gopuram.jpg",
    link: "/viswaroopa-seva"
  }
];

export default function ExplorePage() {
  const [selectedDeity, setSelectedDeity] = useState<typeof deities[0] | null>(null);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#571a15', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: '#571a15', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Deities & Poojas</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Discover the divine shrines and deities of Srirangam</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {deities.map(deity => (
            <div key={deity.id} style={cardStyle}>
              <div style={{ ...imageStyle, backgroundImage: `url('${deity.image}')` }}>
                <div style={imageOverlayStyle}></div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ color: '#d95c14', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{deity.title}</span>
                <h3 style={{ color: '#333', fontSize: '1.4rem', margin: '0.5rem 0 1rem 0' }}>{deity.name}</h3>
                
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  {deity.link ? (
                    <Link href={deity.link} style={buttonStyle as React.CSSProperties}>
                      <Info size={18} />
                      View Details
                    </Link>
                  ) : (
                    <button 
                      onClick={() => setSelectedDeity(deity)}
                      style={buttonStyle}
                    >
                      <Info size={18} />
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedDeity && (
          <div style={overlayStyle} onClick={() => setSelectedDeity(null)}>
            <div style={modalStyle} onClick={e => e.stopPropagation()}>
              <button style={closeBtnStyle} onClick={() => setSelectedDeity(null)}>
                <X size={24} color="#555" />
              </button>
              
              <div style={{...modalImageStyle, backgroundImage: `url('${selectedDeity.image}')`}}></div>
              
              <div style={{ padding: '2rem' }}>
                <span style={{ color: '#d95c14', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedDeity.title}</span>
                <h2 style={{ color: '#571a15', fontSize: '2rem', margin: '0.5rem 0 1.5rem 0' }}>{selectedDeity.name}</h2>
                <p style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem', textAlign: 'justify' }}>
                  {selectedDeity.description}
                </p>
              </div>
            </div>
          </div>
        )}
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
  height: '200px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
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
