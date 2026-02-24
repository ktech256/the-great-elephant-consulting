import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { howWeWorkSteps, services, serviceBySlug } from '@/data/services';

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
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">What we deliver</h2>
          <p className="text-zinc-300">{service.intro}</p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h3 className="mb-4 text-2xl font-semibold text-white">Service scope</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {service.subServices.map((subService) => (
              <article key={subService.title} className="rounded-2xl border border-white/10 bg-zinc-900/65 p-5">
                <h4 className="mb-3 text-lg font-semibold text-white">{subService.title}</h4>
                <p className="text-sm leading-relaxed text-zinc-300">{subService.description}</p>
                {subService.deliverables?.length ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
                    {subService.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-2xl font-semibold text-white">Typical outcomes</h3>
            <ul className="space-y-2 text-zinc-300">
              {service.typicalOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-2xl font-semibold text-white">How we work</h3>
            <div className="space-y-4">
              {howWeWorkSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold-400">
                    Step {index + 1}: {step.title}
                  </p>
                  <p className="text-sm text-zinc-300">{step.description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border border-gold-500/30 bg-gradient-to-r from-zinc-900/90 via-zinc-800/80 to-gold-700/20 p-6 md:p-8">
          <h3 className="mb-2 text-2xl font-semibold text-white">Ready to get started?</h3>
          <p className="mb-5 max-w-3xl text-zinc-200">
            Book a consultation with TGEC to discuss your priorities and get a service plan tailored to your business objectives.
          </p>
          <Link
            href={`/book-consultation?service=${encodeURIComponent(service.title)}`}
            className="inline-flex rounded-full bg-gold-metallic px-6 py-3 font-semibold text-zinc-950 transition hover:opacity-90"
          >
            Book Consultation for this Service
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
