import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'calendar.json');
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(fileContents));
  } catch (err) {
    console.error('Failed to read calendar data:', err);
    return NextResponse.json({ error: 'Failed to read calendar data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Verify secret code (basic auth)
    if (data.secretCode !== 'secret123') {
      return NextResponse.json({ error: 'Invalid secret code' }, { status: 401 });
    }

    if (!data.link) {
      return NextResponse.json({ error: 'Link is required' }, { status: 400 });
    }

    const dataFilePath = path.join(process.cwd(), 'data', 'calendar.json');
    
    // Ensure directory exists
    const dirPath = path.dirname(dataFilePath);
    try {
      await fs.access(dirPath);
    } catch {
      await fs.mkdir(dirPath, { recursive: true });
    }

    const calendarData = {
      link: data.link
    };

    await fs.writeFile(dataFilePath, JSON.stringify(calendarData, null, 2), 'utf8');

    return NextResponse.json({ success: true, link: data.link });
  } catch (error) {
    console.error('Failed to update calendar link:', error);
    return NextResponse.json({ error: 'Failed to update calendar link' }, { status: 500 });
  }
}
