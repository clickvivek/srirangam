"use client";

import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

export default function ContactFormPopup() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`;
    window.location.href = `mailto:srirangam.net@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsOpen(false);
    // Reset form
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <button 
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(true);
        }}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: 'inherit', 
          fontSize: '0.9rem', 
          cursor: 'pointer',
          padding: 0,
          fontFamily: 'inherit'
        }}
        className="contact-btn"
      >
        Contact Form
      </button>

      {isOpen && (
        <div style={overlayStyle} onClick={() => setIsOpen(false)}>
          <div style={modalStyle} onClick={e => e.stopPropagation()}>
            <button style={closeBtnStyle} onClick={() => setIsOpen(false)}>
              <X size={24} color="#555" />
            </button>
            
            <h2 style={{ color: '#571a15', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.3rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.75rem' }}>
              <MessageSquare color="#d95c14" size={28} />
              Contact Us
            </h2>
            
            <form onSubmit={handleSubmit} style={formStyle}>
              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="name">Full Name *</label>
                <input 
                  id="name"
                  type="text" 
                  required 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  style={inputStyle} 
                />
              </div>
              
              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="phone">Phone Number *</label>
                <input 
                  id="phone"
                  type="tel" 
                  required 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                  style={inputStyle} 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="email">Email ID (Optional)</label>
                <input 
                  id="email"
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  style={inputStyle} 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle} htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  required 
                  rows={4}
                  value={message} 
                  onChange={e => setMessage(e.target.value)} 
                  style={{ ...inputStyle, resize: 'vertical' }} 
                />
              </div>

              <button type="submit" style={submitBtnStyle}>
                Send Message
              </button>
            </form>
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
  maxWidth: '500px',
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

const formStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
};

const inputGroupStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: '#333'
};

const labelStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#555'
};

const inputStyle: React.CSSProperties = {
  padding: '0.75rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  fontFamily: 'inherit'
};

const submitBtnStyle: React.CSSProperties = {
  backgroundColor: '#d95c14',
  color: 'white',
  border: 'none',
  padding: '0.75rem',
  borderRadius: '6px',
  fontSize: '1rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '0.5rem'
};
