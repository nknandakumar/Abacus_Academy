import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="outline" className="py-1 px-4 rounded-full border-orange-200 bg-orange-50">
            <Star className="w-4 h-4 mr-2 text-primary" />
            <span className="font-semibold text-primary">ISO-Certified Excellence</span>
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            Welcome to <span className="text-primary">Creative Abacus Academy</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Best Abacus Classes in Shivamogga to Supercharge Young Minds
          </p>
          <div className="w-full max-w-sm">
            <Button size="lg" asChild>
              <Link href="#contact">Book a Free Trial Class</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="3D Abacus Illustration"
            width={1200}
            height={600}
            className="w-full h-auto object-cover rounded-3xl"
            data-ai-hint="abacus 3d illustration"
          />
        </div>
      </div>
    </section>
  );
}
