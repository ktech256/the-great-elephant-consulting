import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { consultationSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = consultationSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_RECEIVER_EMAIL ?? 'inquiry@tgec.co.za',
      subject: `TGEC Consultation Request — ${data.service} / ${data.subService}`,
      html: `
        <h2>TGEC Consultation Request</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Company:</strong> ${data.companyName || '-'}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Sub-service:</strong> ${data.subService}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
        <p><strong>Message:</strong> ${data.message || '-'}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Failed to process request.' }, { status: 500 });
  }
}
