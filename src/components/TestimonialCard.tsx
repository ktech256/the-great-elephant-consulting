'use client';

import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

export function TestimonialCard({ name, company, rating, text }: { name: string; company: string; rating: number; text: string }) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
      <GlassCard className="h-full p-6">
        <div className="mb-3 flex gap-1" aria-label={`${rating} star rating`}>
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-gold-500">★</span>
          ))}
        </div>
        <p className="mb-4 text-zinc-200">“{text}”</p>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-zinc-400">{company}</p>
      </GlassCard>
    </motion.div>
  );
}
