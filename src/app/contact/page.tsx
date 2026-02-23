import { HeroSection } from '@/components/HeroSection';
import { ConsultationForm } from '@/components/ConsultationForm';

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-10">
      <HeroSection
        title="Contact TGEC"
        subtitle="Reach our team for accounting, tax, and strategic finance support tailored to your organisation."
        image="/images/elephant-hero.jpg"
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <ConsultationForm />
        </section>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300">
            <h3 className="mb-4 text-xl font-semibold text-white">Contact details</h3>
            <p>Phone/WhatsApp: +27 69 192 8919</p>
            <p>Address: Fauna Park, Polokwane, 0700</p>
            <p>Website: www.tgec.co.za</p>
            <p>Email: inquiry@tgec.co.za</p>
          </div>
          <div className="relative h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-gold-900/30 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500">Map Placeholder</p>
            <p className="mt-2 text-zinc-300">Fauna Park, Polokwane, 0700</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
