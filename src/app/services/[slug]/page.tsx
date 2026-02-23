import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { services, serviceBySlug } from '@/data/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-10">
      <HeroSection title={service.title} subtitle={service.summary} image={service.heroImage} />

      <Reveal>
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="mb-4 text-2xl font-semibold text-white">What we deliver</h2>
          <ul className="space-y-3 text-zinc-300">
            <li>• Accurate, standards-aligned outputs with clear audit trails.</li>
            <li>• Proactive compliance guidance to reduce operational risk.</li>
            <li>• Practical recommendations aligned to business strategy.</li>
            <li>• Reliable advisory support with transparent communication.</li>
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h3 className="mb-4 text-2xl font-semibold text-white">Included sub-services</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {service.subServices.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-zinc-900/65 p-4 text-zinc-200">✓ {item}</div>
            ))}
          </div>
        </section>
      </Reveal>

      <Link
        href={`/book-consultation?service=${encodeURIComponent(service.title)}`}
        className="inline-flex rounded-full bg-gold-metallic px-6 py-3 font-semibold text-zinc-950"
      >
        Book Consultation for this Service
      </Link>
    </div>
  );
}
