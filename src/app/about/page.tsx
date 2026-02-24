import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { GradientBorder } from '@/components/GradientBorder';
import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10">
      <HeroSection
        title="About The Great Elephant Consulting"
        subtitle="TGEC is a South African advisory partner focused on disciplined financial management, compliance confidence, and strategic growth outcomes."
        image="/images/elephant-hero.jpg"
      />

      <Reveal>
        <SectionHeading
          title="Company profile"
          description="We work alongside leadership teams to build financially resilient organisations. Our consultants combine technical precision with practical insight to ensure that reporting, tax, and governance processes are never an afterthought."
        />
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Vision and Mission"
            description="These principles guide how we serve clients, mentor talent, and uphold trusted standards in every engagement."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <GradientBorder>
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gold-500/80" />
                <h3 className="mb-3 text-xl font-semibold text-white">Vision</h3>
                <p className="text-zinc-300">
                  “We aspire to build the largest accounting firm in the Republic, where young South African professionals are nurtured in the ethical values of honesty, integrity, and excellence.”
                </p>
              </GlassCard>
            </GradientBorder>

            <GradientBorder>
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gold-500/80" />
                <h3 className="mb-3 text-xl font-semibold text-white">Mission</h3>
                <p className="text-zinc-300">
                  “Our mission is to deliver trusted, high-quality accounting, tax, and advisory services that help individuals and organisations thrive, while developing young Southern African professionals through mentorship, skills transfer, and a culture of honesty, integrity, and excellence.”
                </p>
              </GlassCard>
            </GradientBorder>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="mb-3 text-xl text-white">Values</h3>
          <ul className="space-y-2 text-zinc-300">
            <li>• Integrity in every recommendation and submission.</li>
            <li>• Technical excellence grounded in standards and legislation.</li>
            <li>• Partnership mindset with responsive client service.</li>
            <li>• Continuous improvement through data-driven insight.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          title="Why choose TGEC"
          description="Clients choose TGEC for our precision, discretion, and ability to translate complexity into strategic direction. We deliver consistent communication, practical implementation support, and outcomes that stand up to scrutiny."
        />
      </Reveal>
      <Link href="/book-consultation" className="inline-flex rounded-full bg-gold-metallic px-6 py-3 font-semibold text-zinc-950">
        Book a Consultation
      </Link>
    </div>
  );
}
