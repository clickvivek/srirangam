"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AlertCircle, X } from 'lucide-react';

export default function ImportantNotePopup({ label = "Important note", content, data }: { label?: string, content?: React.ReactNode, data?: { title: string, p1: string, p2: string, p3: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <span 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        style={{ 
          color: '#d95c14', 
          textDecoration: 'underline', 
          fontWeight: 'bold', 
          fontSize: '1rem', 
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          display: 'inline-block'
        }}
        className="important-note-btn"
      >
        {label}
      </span>

      {isOpen && mounted && createPortal(
        <div style={overlayStyle} onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(false);
        }}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>
              <X size={24} color="#555" />
            </button>
            
            <h2 style={{ color: '#571a15', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem' }}>
              <AlertCircle color="#d95c14" size={28} />
              {data?.title || "Important Information for Devotees"}
            </h2>
            
            <div style={contentStyle}>
              {content ? (
                typeof content === 'string' ? <p style={paragraphStyle}>{content}</p> : content
              ) : data ? (
                <>
                  <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: data.p1 }}></p>
                  <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: data.p2 }}></p>
                  <p style={paragraphStyle} dangerouslySetInnerHTML={{ __html: data.p3 }}></p>
                </>
              ) : (
                <>
                  <p style={paragraphStyle}>
                    Devotees are strongly advised to join the darshan queue at least <strong>30 minutes</strong> before the scheduled temple closing time to ensure entry before the queue is closed.
                  </p>
                  
                  <p style={paragraphStyle}>
                    During major festivals, especially <strong>Vaikunta Ekadasi</strong>, the darshan queue may be closed up to <strong>one hour</strong> before the scheduled closing time, depending on the number of devotees and the crowd within the temple complex. Visitors are therefore encouraged to arrive well in advance during festival periods.
                  </p>
                  
                  <p style={paragraphStyle}>
                    Please note that the <strong>Sri Ranga Nachiyar Temple</strong> (also known as Sri Ranga Nayaki Temple, Thayar Sannidhi, or Amma Sannidhi) located within the temple complex generally closes at approximately the same time as the Sri Ranganathar Temple. Devotees planning to have darshan at both shrines are advised to schedule their visit accordingly to avoid missing the closing time.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '1rem'
};

const modalStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '12px',
  maxWidth: '650px',
  width: '100%',
  position: 'relative',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  maxHeight: '90vh',
  overflowY: 'auto'
};

const closeBtnStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%'
};

const contentStyle = {
  backgroundColor: '#fffaf5',
  padding: '1.5rem',
  borderRadius: '8px',
  border: '1px solid #fce8d5'
};

const paragraphStyle = {
  color: '#444',
  lineHeight: '1.6',
  marginBottom: '1rem',
  fontSize: '1rem',
  textAlign: 'left' as const
};
