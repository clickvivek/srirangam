"use client";

import React, { useState } from 'react';
import { X, MessageSquare } from 'lucide-react';

export default function ContactFormPopup({ label = "Contact Form" }: { label?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/srirangam/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message })
      });

      if (res.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSuccess(false);
          setName('');
          setPhone('');
          setEmail('');
          setMessage('');
        }, 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
        {label}
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
            
            {isSuccess ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#166534' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem', color: '#22c55e' }}>✓</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p>Thank you for contacting us. We have received your message and will get back to you soon.</p>
              </div>
            ) : (
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>

                <button type="submit" style={{ ...submitBtnStyle, opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
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
