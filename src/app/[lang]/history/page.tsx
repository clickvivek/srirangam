"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { historyChapters } from '../../../data/historyContent';

export default function HistoryPage({ params }: { params: Promise<{ lang: string }> }) {
  // We use React state directly here. We need to unwrap the params promise since we are in a Client Component.
  const [lang, setLang] = useState('en');
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    params.then(p => setLang(p.lang));
  }, [params]);

  const totalPages = historyChapters.length;
  const currentChapter = historyChapters[currentPage];

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fdf0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#571a15', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
          <ArrowLeft size={20} />
          Back to Home
        </Link>
        
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', position: 'relative' }}>
          
          {/* Progress Indicator */}
          <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: '#888', fontSize: '0.9rem', fontWeight: 600 }}>
            Page {currentPage + 1} of {totalPages}
          </div>

          <h1 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '1rem', paddingRight: '6rem' }}>
            {currentChapter.title}
          </h1>
          
          <div style={{ minHeight: '400px' }}>
            {currentChapter.image && currentChapter.imagePosition === 'top' && (
              <div style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img 
                  src={currentChapter.image} 
                  alt={currentChapter.title}
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            )}
            
            {currentChapter.paragraphs.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                {currentChapter.inlineImages?.filter(img => img.beforeParagraph === idx).map((img, imgIdx) => (
                  <div key={`inline-${imgIdx}`} style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                    <img 
                      src={img.src} 
                      alt={currentChapter.title}
                      style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
                <p style={paragraphStyle}>
                  {paragraph}
                </p>
              </React.Fragment>
            ))}
            
            {currentChapter.inlineImages?.filter(img => img.beforeParagraph === currentChapter.paragraphs.length).map((img, imgIdx) => (
              <div key={`inline-end-${imgIdx}`} style={{ marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img 
                  src={img.src} 
                  alt={currentChapter.title}
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            ))}
            
            {currentChapter.image && (!currentChapter.imagePosition || currentChapter.imagePosition === 'bottom') && (
              <div style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <img 
                  src={currentChapter.image} 
                  alt={currentChapter.title}
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', borderTop: '2px solid #f0f0f0', paddingTop: '2rem' }}>
            
            <button 
              onClick={handlePrev} 
              disabled={currentPage === 0}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', borderRadius: '8px',
                border: '1px solid #d95c14', backgroundColor: currentPage === 0 ? '#f5f5f5' : 'white',
                color: currentPage === 0 ? '#aaa' : '#d95c14',
                fontWeight: 'bold', cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
                borderColor: currentPage === 0 ? '#ddd' : '#d95c14',
                transition: 'all 0.2s'
              }}
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            {/* Dots indicator */}
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {historyChapters.map((_, idx) => (
                <div 
                  key={idx} 
                  onClick={() => { setCurrentPage(idx); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ 
                    width: idx === currentPage ? '12px' : '8px', 
                    height: idx === currentPage ? '12px' : '8px', 
                    borderRadius: '50%', 
                    backgroundColor: idx === currentPage ? '#d95c14' : '#ddd',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }} 
                />
              ))}
            </div>

            <button 
              onClick={handleNext} 
              disabled={currentPage === totalPages - 1}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem', borderRadius: '8px',
                border: 'none', backgroundColor: currentPage === totalPages - 1 ? '#f5f5f5' : '#d95c14',
                color: currentPage === totalPages - 1 ? '#aaa' : 'white',
                fontWeight: 'bold', cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {currentPage === totalPages - 1 ? 'Finish' : 'Next'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const paragraphStyle = {
  color: '#444',
  lineHeight: '1.8',
  marginBottom: '1rem',
  fontSize: '1.05rem',
  textAlign: 'justify' as const
};
