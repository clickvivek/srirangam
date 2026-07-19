"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AdminUpdatePage({ params }: { params: Promise<{ lang: string }> }) {
  const resolvedParams = use(params);
  const lang = resolvedParams.lang;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [allUpdates, setAllUpdates] = useState<Record<string, string>>({
    en: '', ta: '', hi: '', te: '', ml: '', kn: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpdate();
  }, []);

  const fetchUpdate = async () => {
    try {
      setLoading(true);
      const res = await fetch('/srirangam/api/update');
      if (res.ok) {
        const data = await res.json();
        setAllUpdates(data);
      } else {
        throw new Error('Failed to fetch update text');
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', message: 'Failed to load current update text.' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretCode === 'secret123') {
      setIsAuthenticated(true);
      setStatus({ type: '', message: '' });
    } else {
      alert("Invalid secret code!");
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAllUpdates({ ...allUpdates, [selectedLanguage]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Saving changes...' });

    try {
      const res = await fetch('/srirangam/api/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: allUpdates[selectedLanguage], 
          language: selectedLanguage, 
          secretCode 
        }),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: 'Update text saved successfully!' });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save update text');
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err.message || 'Failed to save update text.' });
      if (err.message.includes('Invalid secret code')) {
        setIsAuthenticated(false);
      }
    }
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'Tamil' },
    { code: 'hi', name: 'Hindi' },
    { code: 'te', name: 'Telugu' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'kn', name: 'Kannada' }
  ];

  return (
    <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f9f9f9', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        <div style={{ marginBottom: '2rem' }}>
          <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#571a15', textDecoration: 'none', fontWeight: 'bold' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {!isAuthenticated ? (
          <div>
            <h1 style={{ color: '#571a15', marginBottom: '1.5rem', textAlign: 'center' }}>Admin Login (Updates)</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
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
            <h1 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Admin: Manage Recent Update</h1>
            
            {loading ? (
              <p>Loading current update text...</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div>
                  <label style={labelStyle}>Select Language</label>
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    style={{ ...inputStyle, padding: '12px', cursor: 'pointer', backgroundColor: '#fdfdfd' }}
                  >
                    {languages.map(l => (
                      <option key={l.code} value={l.code}>{l.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Recent Update Text ({languages.find(l => l.code === selectedLanguage)?.name})</label>
                  <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>Enter the text to display in the "Update :" box on the home page. Use new lines as needed.</p>
                  <textarea 
                    value={allUpdates[selectedLanguage] || ''} 
                    onChange={handleTextChange} 
                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} 
                    placeholder="Enter recent update text here..."
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
  outline: 'none',
  fontFamily: 'inherit'
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
  marginTop: '1rem',
  alignSelf: 'flex-start'
};
