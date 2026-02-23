import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-10">
      <HeroSection
        title="Comprehensive Services for Finance, Tax, and Compliance"
        subtitle="Explore our full service portfolio designed to support business continuity, regulatory compliance, and growth-focused strategy."
        image="/images/elephant-hero.jpg"
      />
      <Reveal>
        <SectionHeading title="Our Service Lines" description="Each service area is delivered by experienced specialists with a focus on measurable business value." />
      </Reveal>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}><ServiceCard service={service} /></Reveal>
        ))}
      </section>
    </div>
  );
}
