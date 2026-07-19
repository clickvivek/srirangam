import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const secretCode = formData.get('secretCode') as string;

    if (secretCode !== 'srirangam123*') {
      return NextResponse.json({ error: 'Unauthorized: Incorrect secret code' }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    // Basic sanitization
    const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    
    // Save to public/gallery
    const uploadDir = path.join(process.cwd(), 'public', 'gallery');
    
    // Ensure dir exists (just in case)
    await fs.mkdir(uploadDir, { recursive: true });
    
    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ success: true, filename, url: `/srirangam/gallery/${filename}` });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
  }
}
