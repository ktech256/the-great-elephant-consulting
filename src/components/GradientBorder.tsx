import { ReactNode } from 'react';

export function GradientBorder({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br from-gold-600/65 via-gold-500/35 to-white/10 p-[1px] ${className}`}>
      <div className="rounded-2xl bg-gradient-to-b from-[#1d1d20]/80 to-[#111113]/80">{children}</div>
    </div>
  );
}
