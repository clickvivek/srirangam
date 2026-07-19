import React from 'react';
import { getDictionary } from '@/dictionaries';
import GalleryUploadForm from '@/components/GalleryUploadForm';

export const metadata = {
  title: 'Admin - Photo Upload - Sri Ranganathaswamy Temple',
  description: 'Admin interface for uploading photos to the public gallery.',
};

export default async function AdminGalleryPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> | { lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' } }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.gallery || {};

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '15vh', minHeight: '15vh', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content">
          <h1 style={{ marginTop: '0' }}>{t.adminTitle || "Admin Photo Upload"}</h1>
          <div className="subtitle">{t.adminSubtitle || "Upload photos to the public gallery"}</div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '50vh', padding: '3rem 0' }}>
        <div className="container">
          <GalleryUploadForm dict={dict} />
        </div>
      </section>
    </>
  );
}
