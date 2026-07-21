"use client";

import React, { useState, useEffect } from 'react';

export default function AdminTimingsTab({ secretCode, onLogout }: { secretCode: string, onLogout: () => void }) {
  const [timingsData, setTimingsData] = useState<any>(null);
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
        // We just fetch to ensure it's alive, but we don't display it since it's a file upload now
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        
        // Normalize old format if uploaded
        let normalizedJson = json;
        if (Array.isArray(json)) {
          normalizedJson = {
             default: json[0]?.timings || { viswaroopa: '06:00 AM - 07:15 AM', morning: '09:00 AM - 12:30 PM', afternoon: '02:30 PM - 05:30 PM', evening: '07:00 PM - 09:00 PM' },
             overrides: json
          };
        } else if (!json.default) {
          const baseTimings = json.timings || json;
          normalizedJson = {
            default: {
              viswaroopa: baseTimings.viswaroopa || baseTimings.Viswaroopa || '',
              morning: baseTimings.morning || baseTimings.Morning || '',
              afternoon: baseTimings.afternoon || baseTimings.Afternoon || '',
              evening: baseTimings.evening || baseTimings.Evening || ''
            },
            overrides: json.overrides || []
          };
        }

        if (normalizedJson.default && typeof normalizedJson.default === 'object') {
          setTimingsData(normalizedJson);
          setStatus({ type: 'success', message: `JSON loaded! Found default timings and ${normalizedJson.overrides?.length || 0} date overrides.` });
          setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        } else {
          const receivedInfo = Array.isArray(json) ? 'Array' : Object.keys(json).join(', ');
          throw new Error(`Invalid JSON structure. Received keys: [${receivedInfo}]. Please ensure it matches the required format.`);
        }
      } catch (err: any) {
        setStatus({ type: 'error', message: err.message || 'Failed to parse JSON file' });
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!timingsData) {
      setStatus({ type: 'error', message: 'Please upload a JSON file first.' });
      return;
    }
    
    setStatus({ type: 'loading', message: 'Saving changes...' });

    try {
      const res = await fetch('/srirangam/api/timings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...timingsData, secretCode }),
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
        onLogout();
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: '#571a15', marginBottom: '1.5rem', borderBottom: '2px solid #f0f0f0', paddingBottom: '0.5rem' }}>Temple Timings (JSON Upload)</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ padding: '1.5rem', border: '2px dashed #cbd5e1', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
            <label style={labelStyle}>Upload Timings JSON (Default + Overrides)</label>
            <input type="file" accept=".json" onChange={handleFileUpload} required={!timingsData} />
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', marginBottom: 0 }}>
              Upload a JSON file containing the default schedule and any specific date overrides.
            </p>
          </div>

          {timingsData && (
            <div style={{ padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '6px', backgroundColor: '#f1f5f9' }}>
              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', color: '#334155' }}>Preview</h3>
              <p style={{ fontSize: '0.9rem', margin: '0 0 0.25rem 0' }}><strong>Default Viswaroopa:</strong> {timingsData.default.viswaroopa}</p>
              <p style={{ fontSize: '0.9rem', margin: 0 }}><strong>Overrides Count:</strong> {timingsData.overrides?.length || 0}</p>
            </div>
          )}

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

          <button type="submit" style={buttonStyle} disabled={!timingsData}>
            Save JSON Changes
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
  marginTop: '1rem',
  alignSelf: 'flex-start'
};
