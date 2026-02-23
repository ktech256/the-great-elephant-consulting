import { HeroSection } from '@/components/HeroSection';
import { ConsultationForm } from '@/components/ConsultationForm';

export default function BookConsultationPage({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <div className="space-y-10 pb-10">
      <HeroSection
        title="Book a Consultation"
        subtitle="Share your requirements and preferred schedule. Our team will confirm your consultation and next steps promptly."
        image="/images/elephant-hero.jpg"
      />
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <ConsultationForm defaultService={searchParams.service} />
      </section>
    </div>
  );
}
