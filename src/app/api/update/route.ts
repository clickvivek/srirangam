import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

const dataFilePath = path.join(process.cwd(), 'data', 'update.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const updateData = JSON.parse(fileContents);
    return NextResponse.json(updateData);
  } catch (error) {
    console.error('Error reading update file:', error);
    return NextResponse.json({ error: 'Failed to read update data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate secret code
    const SECRET_CODE = process.env.ADMIN_SECRET || 'secret123';
    if (data.secretCode !== SECRET_CODE) {
      return NextResponse.json({ error: 'Unauthorized: Invalid secret code' }, { status: 401 });
    }

    if (typeof data.text !== 'string' || !data.language) {
      return NextResponse.json({ error: 'Missing required text or language field' }, { status: 400 });
    }

    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const updateData = JSON.parse(fileContents);

    updateData[data.language] = data.text;

    await fs.writeFile(dataFilePath, JSON.stringify(updateData, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, update: updateData });
  } catch (error) {
    console.error('Error writing update file:', error);
    return NextResponse.json({ error: 'Failed to save update data' }, { status: 500 });
  }
}
