import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-static';

const dataFilePath = path.join(process.cwd(), 'data', 'timings.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Determine today's date in IST (since temple is in India)
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' }); // returns YYYY-MM-DD
    
    let currentTimings = data.default || data; // fallback to legacy format if needed
    let overrideDate = '';
    
    if (data.overrides && Array.isArray(data.overrides)) {
      const override = data.overrides.find((o: any) => o.date === today);
      if (override && override.timings) {
        currentTimings = override.timings;
        overrideDate = override.date;
      }
    }
    
    return NextResponse.json({ ...currentTimings, date: overrideDate });
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
    if (!data.default || !data.default.viswaroopa || !data.default.morning || !data.default.afternoon || !data.default.evening) {
      return NextResponse.json({ error: 'Missing required default timing fields' }, { status: 400 });
    }

    const newData = {
      default: data.default,
      overrides: Array.isArray(data.overrides) ? data.overrides : []
    };

    await fs.writeFile(dataFilePath, JSON.stringify(newData, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, message: 'Timings saved successfully.' });
  } catch (error) {
    console.error('Error writing timings file:', error);
    return NextResponse.json({ error: 'Failed to save timings data' }, { status: 500 });
  }
}
