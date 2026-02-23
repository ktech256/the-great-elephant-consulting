# The Great Elephant Consulting (TGEC) Website

Premium multi-page consulting website built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Stack
- Next.js (App Router) + TypeScript
- TailwindCSS
- Framer Motion
- React Hook Form + Zod
- Nodemailer via `/api/contact`

## Run locally
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Environment variables
Create `.env.local`:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_RECEIVER_EMAIL=inquiry@tgec.co.za
```

## Features
- Multi-page premium grey/gold UI
- Reusable animated components
- Service-driven content model in `src/data/services.ts`
- Book Consultation + Contact forms with validation
- API email dispatch + WhatsApp formatted submission
