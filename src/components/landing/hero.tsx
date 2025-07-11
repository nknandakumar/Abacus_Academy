import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A child happily learning with an abacus"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50"
        data-ai-hint="child abacus learning"
      />
      <div className="container px-4 md:px-6 text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Unlock Your Child's Genius with Abacus
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            At Creative Abacus Academy, we nurture young minds to achieve exceptional mental math skills, speed, and concentration through our optimized, high-performance coaching.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button size="lg" asChild>
              <Link href="#courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Book a Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
