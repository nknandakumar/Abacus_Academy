import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Skills That Shape Tomorrow</h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
               Learn Essential Life Skills Tailored to Help You Succeed in School, Work, and Life
            </p>
             <Button asChild>
                <Link href="#courses">Join Now</Link>
            </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#FFECE5]">
            <h3 className="text-2xl font-bold mb-4">Join Our Academy To Activate Your Learning</h3>
             <Button variant="ghost" size="icon" className="mt-auto bg-background rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="Activate learning" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="student focused"/>
            </div>
          </Card>
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#F2F8DE]">
            <h3 className="text-2xl font-bold mb-4">Join Our Academy To Activate Your Teaching</h3>
            <Button variant="ghost" size="icon" className="mt-auto bg-background rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="Activate teaching" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="teacher instructing" />
            </div>
          </Card>
          <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#EBE4FF]">
            <h3 className="text-2xl font-bold mb-4">Support Your Child's Learning Through Our Academy</h3>
            <Button variant="ghost" size="icon" className="mt-auto bg-background rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </Button>
            <div className="relative w-full aspect-[4/3] mt-4">
                <Image src="https://placehold.co/600x450.png" alt="Parent with child" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="parent child learning"/>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
