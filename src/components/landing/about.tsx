import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Creative Abacus Academy</h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
               Creative Abacus Academy, established in 2021 by Founder Anthony Serao and led by Headmaster Nirmala Sunitha Mendonca, is recognized as the best abacus center in Shivamogga. Our ISO‑certified curriculum has empowered 100+ students through structured finger abacus and vedic maths programs.
            </p>
             <Button asChild>
                <Link href="#courses">Explore Our Story</Link>
            </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#FFECE5]">
            <h3 className="text-2xl font-bold mb-4">Gandhinagar Branch</h3>
             <p className="text-muted-foreground">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="Founder Photo" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="founder portrait"/>
            </div>
          </Card>
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#F2F8DE]">
            <h3 className="text-2xl font-bold mb-4">Devraj Aras Badavane Branch</h3>
             <p className="text-muted-foreground">Somina Koppa, Shivamogga</p>

            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="Headmaster Photo" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="headmaster portrait" />
            </div>
          </Card>
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#EBE4FF]">
            <h3 className="text-2xl font-bold mb-4">ISO Certified</h3>
            <p className="text-muted-foreground">Mon–Sat: 10 AM–6 PM</p>
            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="ISO Certificate" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="certificate document"/>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
