import Link from 'next/link';
import { Reveal } from './Reveal';

export function CTASection() {
  return (
    <Reveal className="rounded-3xl border border-gold-500/30 bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-gold-700/20 px-8 py-12 text-center shadow-gold">
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-gold-400">Strategic Support</p>
      <h3 className="mb-4 text-3xl font-semibold text-white">Build with confidence. Scale with precision.</h3>
      <p className="mx-auto mb-8 max-w-2xl text-zinc-200">
        Partner with TGEC for accounting, tax, and financial advisory expertise designed to keep your organisation compliant, focused, and growth-ready.
      </p>
      <Link href="/book-consultation" className="rounded-full bg-gold-metallic px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:opacity-90">
        Book a Consultation
      </Link>
    </Reveal>
  );
}
