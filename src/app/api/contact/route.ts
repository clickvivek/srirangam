import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured.");
      // Fallback to console log for local dev if API key is missing
      console.log("📨 NEW CONTACT FORM SUBMISSION (No API Key):", { name, phone, email, message });
      return NextResponse.json({ success: true, message: "Email logged successfully (API key missing)" });
    }

    const resend = new Resend(resendApiKey);
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_EMAIL_TO || 'admin@srirangam.net';

    const { data, error } = await resend.emails.send({
      from: `Srirangam Contact <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
