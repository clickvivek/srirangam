import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'timings.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const timings = JSON.parse(fileContents);
    return NextResponse.json(timings);
  } catch (error) {
    console.error('Error reading timings file:', error);
    return NextResponse.json({ error: 'Failed to read timings data' }, { status: 500 });
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

    // Basic validation
    if (!data.viswaroopa || !data.morning || !data.afternoon || !data.evening) {
      return NextResponse.json({ error: 'Missing required timing fields' }, { status: 400 });
    }

    const newData = {
      viswaroopa: data.viswaroopa,
      morning: data.morning,
      afternoon: data.afternoon,
      evening: data.evening
    };

    await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, timings: newData });
  } catch (error) {
    console.error('Error writing timings file:', error);
    return NextResponse.json({ error: 'Failed to save timings data' }, { status: 500 });
  }
}
