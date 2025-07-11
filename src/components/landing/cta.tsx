import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent-foreground">
            Ready to Start Your Child's Journey?
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            Give your child the gift of mental agility and a love for numbers. Sign up for a free demo class today and witness the Creative Abacus difference firsthand.
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Register for a Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
