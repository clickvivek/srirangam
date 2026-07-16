"use client";

import React, { useState, useEffect } from 'react';

export default function AdminTimingsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  
  const [timings, setTimings] = useState({
    viswaroopa: '',
    morning: '',
    afternoon: '',
    evening: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTimings();
  }, []);

  const fetchTimings = async () => {
    try {
      setLoading(true);
      const res = await fetch('/srirangam/api/timings');
      if (res.ok) {
        const data = await res.json();
        setTimings(data);
      } else {
        throw new Error('Failed to fetch timings');
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to load current timings.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you might want to call an API to verify, but for this simple setup:
    if (secretCode === 'secret123') {
      setIsAuthenticated(true);
      setStatus({ type: '', message: '' });
    } else {
      alert("Invalid secret code!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Saving changes...' });

    try {
      const res = await fetch('/srirangam/api/timings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...timings, secretCode }),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Timings updated successfully!' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save timings');
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err.message || 'Failed to save timings.' });
      if (err.message.includes('Invalid secret code')) {
        setIsAuthenticated(false); // kick them out
      }
    }
  };

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        {!isAuthenticated ? (
          <div>
            <h1 style={{ color: '#571a15', marginBottom: '1.5rem', textAlign: 'center' }}>Admin Login</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Secret Code</label>
                <input 
                  type="password" 
                  value={secretCode} 
                  onChange={(e) => setSecretCode(e.target.value)} 
                  style={inputStyle} 
                  placeholder="Enter secret code to access"
                  required
                />
              </div>
              <button type="submit" style={buttonStyle}>Login</button>
            </form>
          </div>
        ) : (
          <div>
            <h1 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Admin: Edit Temple Timings</h1>
            
            {loading ? (
              <p>Loading current timings...</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <label style={labelStyle}>Viswaroopa Darshan</label>
                  <input 
                    type="text" 
                    name="viswaroopa" 
                    value={timings.viswaroopa} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    placeholder="e.g., 06:00 AM - 07:15 AM"
                    required
                  />
                </div>
                
                <div>
                  <label style={labelStyle}>General Darshan (Morning)</label>
                  <input 
                    type="text" 
                    name="morning" 
                    value={timings.morning} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    placeholder="e.g., 09:30 AM - 12:30 PM"
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>General Darshan (Afternoon)</label>
                  <input 
                    type="text" 
                    name="afternoon" 
                    value={timings.afternoon} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    placeholder="e.g., 02:30 PM - 05:30 PM"
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>General Darshan (Evening)</label>
                  <input 
                    type="text" 
                    name="evening" 
                    value={timings.evening} 
                    onChange={handleChange} 
                    style={inputStyle} 
                    placeholder="e.g., 07:00 PM - 09:00 PM"
                    required
                  />
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
                  Save Changes
                </button>
              </form>
            )}
          </div>
        )}
      </div>
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

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  border: '1px solid #ccc',
  borderRadius: '6px',
  fontSize: '1rem',
  outline: 'none'
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
  marginTop: '1rem'
};
