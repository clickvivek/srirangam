import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    
    // Check if dir exists, if not return empty
    try {
      await fs.access(galleryDir);
    } catch {
      return NextResponse.json([]);
    }

    const files = await fs.readdir(galleryDir);
    
    // Filter out non-images just in case
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    const urls = images.map(file => `/srirangam/gallery/${file}`);
    return NextResponse.json(urls);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json({ error: 'Error fetching gallery' }, { status: 500 });
  }
}
