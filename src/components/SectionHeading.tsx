import { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-gold-500">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-zinc-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
