import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center text-center"
    >
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="3D Abacus Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
        data-ai-hint="abacus 3d"
      />
      <div className="container px-4 md:px-6 text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Best Abacus Classes in Shivamogga &amp; Beyond to Supercharge Young Minds
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            ISO-Certified Abacus &amp; Vedic Maths Training | Levels 0–8 | Championship Prep | 100+ Students Trained
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Unlock your child’s potential with finger abacus, mental calculation, and vedic maths at our two premier branches.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 text-base">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Gandhinagar Branch &amp; Devraj Aras Badavane Branch, Shivamogga</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Call/WhatsApp: 96634 44851</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="#contact">Book a Free Trial Class</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
