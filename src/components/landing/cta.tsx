import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-accent-foreground">
            Ready for your child to become a mental math champ?
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Book Your Free Trial Class Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-accent hover:bg-accent/90 border-accent-foreground text-accent-foreground">
              <a href="https://wa.me/9663444851" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" /> WhatsApp: 96634 44851
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
