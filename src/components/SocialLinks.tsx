import type { ReactNode } from 'react';
import Link from 'next/link';

type SocialLinkItem = {
  name: string;
  href: string;
  icon: ReactNode;
  placeholder?: boolean;
};

const socialLinks: SocialLinkItem[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/great_elephant_consulting?igsh=MWYzYmloZ2o4a2k0cw%3D%3D&utm_source=qr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
        <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/17wC3X4PVy/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
        <path
          d="M13.2 21V12.8H16l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.8V3.1c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H8v3.2h2.2V21h3z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: 'LinkedIn (coming soon)',
    href: '#',
    placeholder: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10v6M8 8.1a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8zM12 16v-3.3c0-1.2.8-2 1.9-2 .9 0 1.8.5 1.8 2.1V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: 'X / Twitter (coming soon)',
    href: '#',
    placeholder: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-full w-full">
        <path d="M5 4h3.1l3.4 4.8L15.6 4H19l-5.8 6.5L19.5 20h-3.1l-3.8-5.4L7.7 20H4.3l6-6.8L5 4z" fill="currentColor"/>
      </svg>
    )
  }
];

type SocialLinksProps = {
  iconSizeClass?: string;
  className?: string;
};

export function SocialLinks({ iconSizeClass = 'h-9 w-9', className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
      {socialLinks.map((item) => {
        const isPlaceholder = item.placeholder;

        return (
          <Link
            key={item.name}
            href={item.href}
            target={isPlaceholder ? undefined : '_blank'}
            rel={isPlaceholder ? undefined : 'noopener noreferrer'}
            aria-label={item.name}
            className={`group flex items-center justify-center rounded-full border border-gold-500/40 bg-white/[0.04] p-2 text-gold-400 transition hover:border-gold-400 hover:text-gold-300 ${iconSizeClass} ${isPlaceholder ? 'cursor-not-allowed opacity-60 hover:text-gold-400' : ''}`}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
