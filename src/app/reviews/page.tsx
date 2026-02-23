import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { TestimonialCard } from '@/components/TestimonialCard';

const reviews = [
  {
    name: 'Sibusiso Dlamini',
    company: 'Dlamini Engineering Works',
    rating: 5,
    text: 'TGEC transformed our monthly reporting quality and gave leadership real confidence in our numbers.'
  },
  {
    name: 'Anika Patel',
    company: 'Patel Property Group',
    rating: 5,
    text: 'Highly dependable team with exceptional tax advisory depth and responsive support.'
  },
  {
    name: 'Thabo Maseko',
    company: 'Maseko Retail Holdings',
    rating: 5,
    text: 'Their compliance reviews identified key risk gaps before they became costly issues.'
  },
  {
    name: 'Chanté van Rensburg',
    company: 'CVR Foods',
    rating: 5,
    text: 'Professional, detailed, and strategic. TGEC has become an essential extension of our finance function.'
  },
  {
    name: 'Mpho Nkosi',
    company: 'Nkosi Digital Services',
    rating: 5,
    text: 'From setup to ongoing advisory, every interaction has been clear, practical, and high value.'
  }
];

export default function ReviewsPage() {
  return (
    <div className="space-y-10 pb-10">
      <HeroSection
        title="Client Reviews"
        subtitle="Businesses across South Africa trust TGEC for accuracy, strategic guidance, and dependable service delivery."
        image="/images/elephant-hero.jpg"
      />
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <Reveal key={review.name}>
            <TestimonialCard {...review} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
