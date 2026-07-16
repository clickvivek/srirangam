"use client";

import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

export default function ImportantNotePopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ marginTop: '1.5rem', textAlign: 'center', width: '100%', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#d95c14', 
            textDecoration: 'underline', 
            fontWeight: 'bold', 
            fontSize: '1rem', 
            cursor: 'pointer' 
          }}
        >
          Important note
        </button>
      </div>

      {isOpen && (
        <div style={overlayStyle} onClick={() => setIsOpen(false)}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>
              <X size={24} color="#555" />
            </button>
            
            <h2 style={{ color: '#571a15', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem' }}>
              <AlertCircle color="#d95c14" size={28} />
              Important Information for Devotees
            </h2>
            
            <div style={contentStyle}>
              <p style={paragraphStyle}>
                Devotees are strongly advised to join the darshan queue at least <strong>30 minutes</strong> before the scheduled temple closing time to ensure entry before the queue is closed.
              </p>
              
              <p style={paragraphStyle}>
                During major festivals, especially <strong>Vaikunta Ekadasi</strong>, the darshan queue may be closed up to <strong>one hour</strong> before the scheduled closing time, depending on the number of devotees and the crowd within the temple complex. Visitors are therefore encouraged to arrive well in advance during festival periods.
              </p>
              
              <p style={paragraphStyle}>
                Please note that the <strong>Sri Ranga Nachiyar Temple</strong> (also known as Sri Ranga Nayaki Temple, Thayar Sannidhi, or Amma Sannidhi) located within the temple complex generally closes at approximately the same time as the Sri Ranganathar Temple. Devotees planning to have darshan at both shrines are advised to schedule their visit accordingly to avoid missing the closing time.
              </p>
            </div>
          </div>
        </div>
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
  textAlign: 'justify' as const
};
