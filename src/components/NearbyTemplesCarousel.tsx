"use client";

import React, { useRef } from 'react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NearbyTemplesCarousel({ lang }: { lang: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const temples = [
    {
      name: "Thiruvanaikaval Jambukeswarar",
      desc: "Appu Lingam (Water element)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Jambukeshwarar_Temple_Trichy.jpg/800px-Jambukeshwarar_Temple_Trichy.jpg",
      distSrirangam: "2.5 km"
    },
    {
      name: "Rockfort Ucchi Pillayar",
      desc: "Ganesha on a 3-billion-year-old rock",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rockfort_Temple_Trichy_India.jpg/800px-Rockfort_Temple_Trichy_India.jpg",
      distSrirangam: "6 km"
    },
    {
      name: "Samayapuram Mariamman",
      desc: "Powerful Goddess Mariamman",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Samayapuram_Mariamman_Temple.jpg/800px-Samayapuram_Mariamman_Temple.jpg",
      distSrirangam: "12 km"
    },
    {
      name: "Uraiyur Vekkali Amman",
      desc: "Goddess without a roof",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vekkali_Amman_Temple_Gopuram.jpg/800px-Vekkali_Amman_Temple_Gopuram.jpg",
      distSrirangam: "9 km"
    },
    {
      name: "Vayalur Murugan",
      desc: "Peaceful Lord Murugan temple",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vayalur_Murugan_Temple.jpg/800px-Vayalur_Murugan_Temple.jpg",
      distSrirangam: "15 km"
    },
    {
      name: "Tanjore Brahadeswara",
      desc: "UNESCO World Heritage Site",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Brihadeeswarar_Temple_Thanjavur.jpg/800px-Brihadeeswarar_Temple_Thanjavur.jpg",
      distSrirangam: "60 km"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Roughly one card width
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', padding: '0 2rem' }}>
      
      {/* Left Arrow */}
      <button 
        onClick={() => scroll('left')}
        style={{
          position: 'absolute', left: '-1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
          background: 'white', border: '1px solid #ddd', borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronLeft size={24} color="#571a15" />
      </button>

      {/* Carousel Track */}
      <div 
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          overflowX: 'auto',
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
          msOverflowStyle: 'none',  // Hide scrollbar for IE/Edge
          padding: '1rem 0'
        }}
        className="hide-scrollbar"
      >
        {temples.map((temple, idx) => (
          <div key={idx} style={{
            flex: '0 0 calc(25% - 1.2rem)', // 4 items per row
            minWidth: '220px',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ height: '140px', backgroundImage: `url(${temple.image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
               <span style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                 <MapPin size={12} /> {temple.distSrirangam}
               </span>
            </div>
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#571a15', minHeight: '40px' }}>{temple.name}</h3>
              <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: '#666', flexGrow: 1 }}>{temple.desc}</p>
              <Link href={`/${lang}/surroundings`} style={{ fontSize: '0.9rem', color: '#d95c14', fontWeight: 600, textDecoration: 'none' }}>Explore →</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll('right')}
        style={{
          position: 'absolute', right: '-1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10,
          background: 'white', border: '1px solid #ddd', borderRadius: '50%', width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronRight size={24} color="#571a15" />
      </button>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
