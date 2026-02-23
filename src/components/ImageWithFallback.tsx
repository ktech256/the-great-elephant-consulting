export function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-zinc-700/45 via-zinc-800/70 to-gold-700/25 ${className ?? ''}`}
      aria-label={alt}
      role="img"
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -left-10 top-0 h-36 w-36 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-36 w-36 rounded-full bg-zinc-300/20 blur-3xl" />
      </div>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400/90">TGEC</p>
          <p className="mt-2 px-4 text-sm font-medium text-zinc-200">{alt}</p>
        </div>
      </div>
      <div className="noise-overlay absolute inset-0 opacity-30" />
      <span className="sr-only">{src}</span>
    </div>
  );
}
