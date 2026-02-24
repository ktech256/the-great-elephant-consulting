import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { PageTransition } from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'The Great Elephant Consulting',
  description:
    'Professional accounting, tax, and financial consulting services for businesses and individuals across South Africa.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/apple-touch-icon.png' }]
  },
  openGraph: {
    title: 'The Great Elephant Consulting',
    description: 'Professional accounting and financial consulting you can trust.',
    url: 'https://www.tgec.co.za',
    siteName: 'The Great Elephant Consulting',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
