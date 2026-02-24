import Link from 'next/link';
import { SocialLinks } from '@/components/SocialLinks';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0d0d0f]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="mb-3 text-lg font-semibold text-white">TGEC</p>
          <p className="text-sm text-zinc-400">
            Professional accounting, tax advisory, and strategic financial consulting for South African businesses.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Quick links</p>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/book-consultation">Book Consultation</Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-zinc-300">
          <p>Phone/WhatsApp: +27 69 192 8919</p>
          <p>Email: inquiry@tgec.co.za</p>
          <p>Address: Fauna Park, Polokwane, 0700</p>
          <p>Website: www.tgec.co.za</p>
          <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Follow us</p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-white/5 px-6 pb-6 pt-4 text-center text-xs text-zinc-400">
        Website designed and developed by <Link href="#" className="transition hover:text-zinc-300">Killian Studios</Link>.
      </div>
    </footer>
  );
}
