'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/data/services';
import { GradientBorder } from './GradientBorder';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './ImageWithFallback';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <GradientBorder className="h-full transition duration-300 hover:shadow-gold">
        <GlassCard className="h-full p-5 md:p-6">
          <div className="relative mb-4 h-40 overflow-hidden rounded-xl border border-white/10">
            <ImageWithFallback src={service.cardImage} alt={service.title} className="object-cover" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
          <ul className="mb-5 space-y-2 text-sm text-zinc-300">
            {service.subServices.map((item) => (
              <li key={item.title} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {item.title}
              </li>
            ))}
          </ul>
          <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-semibold text-gold-500 hover:text-gold-400">
            Learn More →
          </Link>
        </GlassCard>
      </GradientBorder>
    </motion.div>
  );
}
