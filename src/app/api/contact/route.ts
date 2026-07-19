import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // In a real production environment, you would configure an SMTP server 
    // or an email service provider (like Resend, SendGrid, or Nodemailer) here.
    // For now, we will log it to the server console to simulate a successful send.
    
    console.log("\n=========================================");
    console.log("📨 NEW CONTACT FORM SUBMISSION");
    console.log("=========================================");
    console.log(`Name:    ${name}`);
    console.log(`Phone:   ${phone}`);
    console.log(`Email:   ${email || 'N/A'}`);
    console.log(`Message: \n${message}`);
    console.log("=========================================\n");

    return NextResponse.json({ success: true, message: "Email triggered successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
