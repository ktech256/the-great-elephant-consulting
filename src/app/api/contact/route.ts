import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { consultationSchema } from '@/lib/validation';
import { CONTACT_CONFIG } from '@/lib/contactConfig';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = consultationSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: parsed.error.flatten() }, { status: 400 });
    }

    const data = parsed.data;

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { ok: false, error: 'SMTP is not configured on this environment.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const receiver = process.env.CONTACT_RECEIVER_EMAIL ?? CONTACT_CONFIG.TO_EMAIL;

    await transporter.sendMail({
      from: smtpUser,
      to: receiver,
      subject: `${CONTACT_CONFIG.SUBJECT_PREFIX} — ${data.service} / ${data.subService}`,
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