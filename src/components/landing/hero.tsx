import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
              Best Abacus Classes in Shivamogga & Beyond to Supercharge Young Minds
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              ISO-Certified Abacus & Vedic Maths Training | Levels 0–8 | Championship Prep | 100+ Students Trained
            </p>
             <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Unlock your child’s potential with finger abacus, mental calculation, and vedic maths at our two premier branches.
            </p>
             <div className="space-y-2">
                <p>📍 Gandhinagar Branch & Devraj Aras Badavane Branch, Shivamogga</p>
                <p>📞 Call/WhatsApp: 96634 44851</p>
            </div>
            <div className="w-full max-w-sm">
              <Button size="lg" className="w-full" asChild>
                <Link href="#contact">Book a Free Trial Class</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
             <Image
                src="https://placehold.co/600x400.png"
                alt="3D Abacus Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-3xl"
                data-ai-hint="abacus 3d illustration"
              />
          </div>
        </div>
      </div>
    </section>
  );
}
