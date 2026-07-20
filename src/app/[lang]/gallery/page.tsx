import React from 'react';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';
import { getDictionary } from '@/dictionaries';
import { ImageIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Gallery - Sri Ranganathaswamy Temple',
  description: 'View photos of Sri Ranganathaswamy Temple, Srirangam.',
};

async function getGalleryImages() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    try {
      await fs.access(galleryDir);
    } catch {
      return [];
    }
    const files = await fs.readdir(galleryDir);
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });
    return images.map(file => `/srirangam/gallery/${file}`);
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export default async function GalleryPage({ params }: { params: Promise<{ lang: 'en' | 'ta' | 'hi' | 'te' | 'ml' | 'kn' }> }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang) as any;
  const t = dict.gallery || {};
  const images = await getGalleryImages();

  return (
    <>
      <section className="hero animate-fade-in" style={{ height: '30vh', minHeight: '30vh', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/srirangam/hero-bg.png") center/cover no-repeat' }}>
        <div className="container hero-content" style={{ position: 'relative' }}>
          <Link href={`/${lang}`} className="back-link">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 style={{ marginTop: '0' }}>{t.galleryTitle || "Temple Gallery"}</h1>
          <div className="subtitle">{t.gallerySubtitle || "A visual journey through Sri Ranganathaswamy Temple"}</div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#fdfaf4', minHeight: '50vh', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          {images.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#666' }}>
              <ImageIcon size={48} color="#ccc" style={{ marginBottom: '1rem' }} />
              <p style={{ fontSize: '1.2rem' }}>{t.noPhotos || "No photos have been uploaded yet. Please visit the Admin page to upload photos."}</p>
            </div>
          ) : (
            <div>
              <style dangerouslySetInnerHTML={{__html: `
                .gallery-grid {
                  column-count: 1;
                  column-gap: 1.5rem;
                }
                @media (min-width: 768px) {
                  .gallery-grid {
                    column-count: 2;
                  }
                }
                @media (min-width: 1024px) {
                  .gallery-grid {
                    column-count: 3;
                  }
                }
                .gallery-item {
                  break-inside: avoid;
                  margin-bottom: 1.5rem;
                  position: relative;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                  background-color: #eee;
                }
                .gallery-image-hover {
                  width: 100%;
                  display: block;
                  transition: transform 0.3s ease;
                }
                .gallery-item:hover .gallery-image-hover {
                  transform: scale(1.05);
                }
              `}} />
              <div className="gallery-grid">
                {images.map((imgUrl, index) => (
                  <div key={index} className="gallery-item">
                    <img 
                      src={imgUrl} 
                      alt={`Srirangam Gallery Image ${index + 1}`} 
                      className="gallery-image-hover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
