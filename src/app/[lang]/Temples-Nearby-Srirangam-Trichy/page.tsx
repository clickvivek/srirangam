import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { getDictionary } from '@/dictionaries';

export default async function Surroundings({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> | { lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' } }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang) as any;
  const nearby = dict.nearby || {};
  const temples = [
    {
      name: nearby.temples?.[0]?.name || "Thiruvanaikaval Jambukeswarar Temple",
      desc: nearby.temples?.[0]?.desc || "One of the five major Shiva Temples of Tamil Nadu representing the Mahābhūta or five great elements. This temple represents the element of water (Appu Lingam).",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg",
      distSrirangam: "2.5 km",
      distTrichy: "8 km"
    },
    {
      name: nearby.temples?.[1]?.name || "Rockfort Ucchi Pillayar Temple",
      desc: nearby.temples?.[1]?.desc || "A historic temple dedicated to Lord Ganesha built on a 3-billion-year-old rock. It offers panoramic views of Trichy and Srirangam.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rockfort_Temple_Trichy_India.jpg/800px-Rockfort_Temple_Trichy_India.jpg",
      distSrirangam: "6 km",
      distTrichy: "5 km"
    },
    {
      name: nearby.temples?.[2]?.name || "Samayapuram Mariamman Temple",
      desc: nearby.temples?.[2]?.desc || "A very popular and powerful temple dedicated to Goddess Mariamman, located on the outskirts of Trichy.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Samayapuram_Mariamman_Temple.jpg/800px-Samayapuram_Mariamman_Temple.jpg",
      distSrirangam: "12 km",
      distTrichy: "20 km"
    },
    {
      name: nearby.temples?.[3]?.name || "Uraiyur Vekkali Amman Temple",
      desc: nearby.temples?.[3]?.desc || "A unique and powerful temple in Uraiyur (the ancient Chola capital) where the sanctum of the Goddess does not have a roof, symbolizing her connection to the sky and nature.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vekkali_Amman_Temple_Gopuram.jpg/800px-Vekkali_Amman_Temple_Gopuram.jpg",
      distSrirangam: "9 km",
      distTrichy: "6 km"
    },
    {
      name: nearby.temples?.[4]?.name || "Vayalur Murugan Temple",
      desc: nearby.temples?.[4]?.desc || "Located amidst lush green fields, this peaceful temple dedicated to Lord Murugan is associated with the great saint Arunagirinathar.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vayalur_Murugan_Temple.jpg/800px-Vayalur_Murugan_Temple.jpg",
      distSrirangam: "15 km",
      distTrichy: "11 km"
    },
    {
      name: nearby.temples?.[5]?.name || "Tanjore Brahadeswara Temple",
      desc: nearby.temples?.[5]?.desc || "Also known as the Peruvudaiyar Kovil, this UNESCO World Heritage Site is one of the largest and most magnificent Chola temples, located in Thanjavur.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Brihadeeswarar_Temple_Thanjavur.jpg/800px-Brihadeeswarar_Temple_Thanjavur.jpg",
      distSrirangam: "60 km",
      distTrichy: "55 km"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fdfaf4', minHeight: '100vh', padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>{nearby.title || "Nearby Temples"}</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '4rem', textAlign: 'center', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 4rem' }}>
          {nearby.subtitle || "Extend your spiritual journey by visiting these magnificent and powerful temples located in and around the Trichy and Tanjore regions."}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {temples.map((temple, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              backgroundColor: 'white', 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.06)', 
              border: '1px solid #f0e6d6',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} className="row-card">
              
              {/* Image Side */}
              <div style={{ 
                flexShrink: 0, 
                width: '320px', 
                minHeight: '220px',
                backgroundImage: `url(${temple.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
              }}></div>
              
              {/* Content Side */}
              <div style={{ 
                padding: '2.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                flex: 1
              }}>
                <h2 style={{ color: 'var(--primary-color)', fontSize: '1.6rem', marginBottom: '1rem', marginTop: 0 }}>
                  {temple.name}
                </h2>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
                  {temple.desc}
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#888', fontSize: '0.9rem' }}>
                    <MapPin size={16} color="var(--secondary-color)" />
                    <span><strong>{temple.distSrirangam}</strong> {nearby.fromSrirangam || "from Srirangam"}</span>
                  </div>
                  <div style={{ width: '1px', height: '15px', backgroundColor: '#e0e0e0' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#888', fontSize: '0.9rem' }}>
                    <MapPin size={16} color="var(--secondary-color)" />
                    <span><strong>{temple.distTrichy}</strong> {nearby.fromTrichy || "from Trichy Central"}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
