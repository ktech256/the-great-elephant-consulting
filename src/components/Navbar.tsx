import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Book Consultation', '/book-consultation'],
  ['Reviews', '/reviews'],
  ['Contact', '/contact']
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#101012]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          The Great Elephant <span className="text-gold-500">Consulting</span>
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-zinc-300">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-gold-400">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
