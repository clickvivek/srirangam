"use client";

import React, { useState, useEffect } from 'react';

export default function AdminQueueTab({ secretCode, onLogout }: { secretCode: string, onLogout: () => void }) {
  const [waitMin, setWaitMin] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('/srirangam/api/queue')
      .then(res => res.json())
      .then(data => {
        if (data.waitMin) {
          setWaitMin(data.waitMin);
        }
      })
      .catch(err => console.error("Failed to load queue data:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/srirangam/api/queue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secretCode,
          waitMin,
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Queue wait time updated successfully!' });
      } else {
        if (res.status === 401) {
          onLogout();
        } else {
          setStatus({ type: 'error', message: data.error || 'Failed to update queue time' });
        }
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Today's Queue Status</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: '#f9fafa', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        
        <div>
          <label style={{ display: 'block', fontSize: '0.95rem', color: '#444', marginBottom: '0.5rem', fontWeight: '600' }}>
            Current Wait Time
          </label>
          <input 
            type="text"
            value={waitMin}
            onChange={(e) => setWaitMin(e.target.value)}
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem', outline: 'none', backgroundColor: '#fff' }}
            placeholder="e.g. ~45 min wait"
            required
          />
          <small style={{ display: 'block', marginTop: '0.5rem', color: '#64748b' }}>
            This text will be displayed in the hero section on the home page under "Today's Queue".
          </small>
        </div>

        {status.message && (
          <div style={{ padding: '10px', borderRadius: '6px', backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2', color: status.type === 'success' ? '#166534' : '#991b1b', fontSize: '0.9rem' }}>
            {status.message}
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ backgroundColor: '#0e492c', color: 'white', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1, marginTop: '0.5rem' }}
        >
          {isSubmitting ? 'Updating...' : 'Update Queue Status'}
        </button>

      </form>
    </div>
  );
}
