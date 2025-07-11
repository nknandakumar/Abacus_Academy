import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Creative Abacus Academy
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed">
              Creative Abacus Academy, established in 2021 by Founder Anthony Serao and led by Headmaster Nirmala Sunitha Mendonca, is recognized as the best abacus center in Shivamogga. Our ISO-certified curriculum has empowered 100+ students through structured finger abacus and vedic maths programs.
            </p>
            <div className="space-y-4 text-muted-foreground">
              <h3 className="font-semibold text-card-foreground">Branches & Addresses:</h3>
              <p><strong>🎯 Gandhinagar:</strong> 2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
              <p><strong>🎯 Devraj Aras Badavane:</strong> Somina Koppa, Shivamogga</p>
              <p><strong>School Timings:</strong> Mon–Sat: 10 AM–6 PM</p>
            </div>
             <Button asChild variant="outline">
              <Link href="#gallery">Explore Our Story</Link>
            </Button>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
               <Image
                  src="https://placehold.co/300x300.png"
                  width="300"
                  height="300"
                  alt="Founder Anthony Serao"
                  className="rounded-lg object-cover w-full aspect-square"
                  data-ai-hint="male portrait"
                />
                 <Image
                  src="https://placehold.co/300x300.png"
                  width="300"
                  height="300"
                  alt="Headmaster Nirmala Sunitha Mendonca"
                  className="rounded-lg object-cover w-full aspect-square"
                  data-ai-hint="female portrait"
                />
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="ISO Certificate"
              className="rounded-lg object-cover w-full"
              data-ai-hint="certificate document"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
