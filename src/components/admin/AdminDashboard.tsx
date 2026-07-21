"use client";

import React, { useState } from 'react';
import AdminTimingsTab from './AdminTimingsTab';
import AdminUpdatesTab from './AdminUpdatesTab';
import GalleryUploadForm from '@/components/GalleryUploadForm';

export default function AdminDashboard({ dict, lang }: { dict: any, lang: string }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretCode, setSecretCode] = useState('');
  const [activeTab, setActiveTab] = useState<'timings' | 'gallery' | 'updates'>('timings');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretCode === 'secret123') { // Same shared code for all
      setIsAuthenticated(true);
      setStatus({ type: '', message: '' });
    } else {
      setStatus({ type: 'error', message: 'Invalid secret code!' });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSecretCode('');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '500px', margin: '0 auto', backgroundColor: 'white', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#571a15', marginBottom: '1.5rem', textAlign: 'center' }}>Admin Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.95rem', color: '#444', marginBottom: '0.5rem', fontWeight: '600' }}>Secret Code</label>
            <input 
              type="password" 
              value={secretCode} 
              onChange={(e) => setSecretCode(e.target.value)} 
              style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '1rem', outline: 'none' }} 
              placeholder="Enter admin secret code"
              required
            />
          </div>
          {status.message && <p style={{ color: '#dc2626', margin: 0, fontSize: '0.9rem' }}>{status.message}</p>}
          <button type="submit" style={{ backgroundColor: '#d95c14', color: 'white', border: 'none', padding: '12px 24px', fontSize: '1rem', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      
      {/* Sidebar Navigation */}
      <div style={{ flex: '1 1 250px', maxWidth: '280px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', backgroundColor: '#571a15', color: 'white' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Admin Menu</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => setActiveTab('timings')} style={getTabStyle(activeTab === 'timings')}>Temple Timings</button>
          <button onClick={() => setActiveTab('gallery')} style={getTabStyle(activeTab === 'gallery')}>Photo Gallery</button>
          <button onClick={() => setActiveTab('updates')} style={getTabStyle(activeTab === 'updates')}>Recent Updates</button>
        </div>
        <div style={{ padding: '1rem', borderTop: '1px solid #eee' }}>
          <button onClick={handleLogout} style={{ width: '100%', padding: '10px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '6px', color: '#475569', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: '3 1 500px', backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', minHeight: '60vh' }}>
        {activeTab === 'timings' && <AdminTimingsTab secretCode={secretCode} onLogout={handleLogout} />}
        {activeTab === 'gallery' && (
          <div>
            <h2 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Photo Gallery Upload</h2>
            <GalleryUploadForm dict={dict} />
          </div>
        )}
        {activeTab === 'updates' && <AdminUpdatesTab secretCode={secretCode} onLogout={handleLogout} />}
      </div>

    </div>
  );
}

const getTabStyle = (isActive: boolean) => ({
  padding: '1rem 1.5rem',
  textAlign: 'left' as const,
  backgroundColor: isActive ? '#fff6ed' : 'transparent',
  border: 'none',
  borderLeft: isActive ? '4px solid #d95c14' : '4px solid transparent',
  color: isActive ? '#d95c14' : '#475569',
  fontWeight: isActive ? 'bold' : 'normal',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.2s',
  borderBottom: '1px solid #f8fafc'
});
