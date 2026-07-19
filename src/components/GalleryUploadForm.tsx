'use client';

import React, { useState } from 'react';
import { UploadCloud, CheckCircle, XCircle } from 'lucide-react';

export default function GalleryUploadForm({ dict }: { dict: any }) {
  const [file, setFile] = useState<File | null>(null);
  const [secretCode, setSecretCode] = useState('');
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'unauthorized'>('idle');
  const t = dict.gallery || {};

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setStatus('idle');
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setStatus('idle');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('secretCode', secretCode);

    try {
      const res = await fetch('/srirangam/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setFile(null); // clear form
        setSecretCode('');
      } else if (res.status === 401) {
        setStatus('unauthorized');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#571a15' }}>
          {t.selectImage || "Select Image:"}
        </label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#571a15' }}>
          {t.secretCode || "Secret Code:"}
        </label>
        <input 
          type="password" 
          value={secretCode}
          onChange={(e) => setSecretCode(e.target.value)}
          placeholder={t.enterSecret || "Enter admin secret code"}
          style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px' }}
          required
        />
      </div>

      <button 
        type="submit" 
        disabled={!file || !secretCode || uploading} 
        className="btn btn-primary"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: (!file || !secretCode || uploading) ? 0.7 : 1 }}
      >
        <UploadCloud size={20} />
        {uploading ? (t.uploading || "Uploading...") : (t.uploadBtn || "Upload Photo")}
      </button>

      {status === 'success' && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CheckCircle size={20} />
          {t.uploadSuccess || "Photo uploaded successfully!"}
        </div>
      )}

      {status === 'unauthorized' && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <XCircle size={20} />
          {t.unauthorized || "Incorrect secret code. Upload denied."}
        </div>
      )}

      {status === 'error' && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', color: '#991b1b', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <XCircle size={20} />
          {t.uploadFailed || "Upload failed."}
        </div>
      )}
    </form>
  );
}
