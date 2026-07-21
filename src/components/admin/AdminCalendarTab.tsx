"use client";

import React, { useState, useEffect } from 'react';

export default function AdminCalendarTab({ secretCode, onLogout }: { secretCode: string, onLogout: () => void }) {
  const [link, setLink] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLink();
  }, []);

  const fetchLink = async () => {
    try {
      setLoading(true);
      const res = await fetch('/srirangam/api/calendar');
      if (res.ok) {
        const data = await res.json();
        if (data.link) {
          setLink(data.link);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!link.trim()) {
      setStatus({ type: 'error', message: 'Link cannot be empty.' });
      return;
    }
    
    setStatus({ type: 'loading', message: 'Saving changes...' });

    try {
      const res = await fetch('/srirangam/api/calendar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ link: link.trim(), secretCode }),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Calendar link updated successfully!' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save calendar link');
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err.message || 'Failed to save calendar link.' });
      if (err.message.includes('Invalid secret code')) {
        onLogout();
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Full Calendar Link</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <label style={labelStyle}>Calendar PDF URL</label>
            <input 
              type="url" 
              value={link} 
              onChange={(e) => setLink(e.target.value)} 
              placeholder="https://..." 
              required 
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem', outline: 'none' }} 
            />
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', marginBottom: 0 }}>
              Provide the direct URL to the full calendar PDF or document. This link will be updated across the portal.
            </p>
          </div>

          {status.message && (
            <div style={{ 
              padding: '1rem', 
              borderRadius: '8px', 
              backgroundColor: status.type === 'error' ? '#fee2e2' : status.type === 'success' ? '#dcfce3' : '#e0f2fe',
              color: status.type === 'error' ? '#991b1b' : status.type === 'success' ? '#166534' : '#075985'
            }}>
              {status.message}
            </div>
          )}

          <button type="submit" style={buttonStyle}>
            Save Link
          </button>
        </form>
      )}
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.95rem',
  color: '#444',
  marginBottom: '0.5rem',
  fontWeight: '600'
};

const buttonStyle = {
  backgroundColor: '#d95c14',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '8px',
  cursor: 'pointer',
  marginTop: '0.5rem',
  alignSelf: 'flex-start'
};
