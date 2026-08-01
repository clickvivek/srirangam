import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-static';

const SECRET_CODE = process.env.ADMIN_SECRET || 'secret123';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    if (body.secretCode !== SECRET_CODE) {
      return NextResponse.json({ error: 'Unauthorized: Incorrect secret code' }, { status: 401 });
    }

    if (!body.waitMin) {
      return NextResponse.json({ error: 'Missing waitMin field' }, { status: 400 });
    }

    const dataFilePath = path.join(process.cwd(), 'data', 'queue.json');
    
    const newQueueData = {
      waitMin: body.waitMin
    };
    
    await fs.writeFile(dataFilePath, JSON.stringify(newQueueData, null, 2));

    return NextResponse.json({ success: true, message: 'Queue updated successfully' });
  } catch (error) {
    console.error('Error updating queue:', error);
    return NextResponse.json({ error: 'Failed to update queue' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'queue.json');
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ waitMin: '' });
  }
}
