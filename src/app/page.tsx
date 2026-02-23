import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { TestimonialCard } from '@/components/TestimonialCard';

const testimonials = [
  { name: 'Lerato Mokoena', company: 'Mokoena Logistics', rating: 5, text: 'TGEC brought discipline to our reporting and helped us make confident expansion decisions.' },
  { name: 'David Naidoo', company: 'Naidoo Medical Supply', rating: 5, text: 'Their tax planning saved us costly surprises and improved our annual cash position.' },
  { name: 'Nombulelo Sithole', company: 'Sithole Foods', rating: 5, text: 'Highly professional team with exceptional turnaround and practical strategic advice.' }
];

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <HeroSection
        title="Professional Accounting & Financial Consulting You Can Trust"
        subtitle="TGEC delivers compliance, clarity, and sustainable growth through rigorous financial management and strategic advisory support."
        image="/images/elephant-hero.jpg"
        actions={
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="rounded-full bg-gold-metallic px-6 py-3 text-sm font-semibold text-zinc-950">Book a Consultation</Link>
            <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">View Services</Link>
          </div>
        }
      />

      <Reveal>
        <SectionHeading eyebrow="Our expertise" title="Premium financial services built for ambitious organisations" description="Comprehensive solutions tailored for growing businesses, professional firms, and established enterprises across South Africa." />
      </Reveal>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </section>

      <Reveal>
        <SectionHeading eyebrow="Trusted by businesses across South Africa" title="Client confidence is our benchmark" />
      </Reveal>
      <section className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.name}>
            <TestimonialCard {...testimonial} />
          </Reveal>
        ))}
      </section>

      <CTASection />
    </div>
  );
}
