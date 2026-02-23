import { ReactNode } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

export function HeroSection({ title, subtitle, image, actions }: { title: string; subtitle: string; image: string; actions?: ReactNode }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 px-6 py-16 md:px-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-gold-500/20 blur-[120px] animate-aurora" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-zinc-400/20 blur-[120px] animate-aurora" />
      </div>
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="mb-4 text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
          <p className="mb-8 max-w-xl text-lg text-zinc-200">{subtitle}</p>
          {actions}
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 md:h-96">
          <ImageWithFallback src={image} alt={title} className="object-cover" />
        </div>
      </div>
    </section>
  );
}
