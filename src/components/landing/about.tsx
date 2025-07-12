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
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl" data-ai-hint="Description of the creative abacus academy">
 Creative Abacus Academy, established in 2021 by <strong>Founder Anthony Serao</strong> and led by <strong>Headmaster Nirmala Sunitha Mendonca</strong>, is recognized as the <strong>best abacus center in Shivamogga</strong>. Our ISO-certified curriculum has empowered <strong>100+ students</strong> through structured finger abacus and vedic maths programs.
            </p>
             <Button asChild>
                <Link href="#courses">Explore Our Story</Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#FFECE5]">
 <div className="flex items-center mb-4">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
 <h3 className="text-xl font-bold">Our Branches</h3>
 </div>
 <div className="space-y-4">
 <div>
 <h4 className="font-semibold">Gandhinagar Branch</h4>
 <p className="text-muted-foreground text-sm">2nd Cross, Beside Vidhathri Bhavan, Opp. Arun Ice Cream, Shimoga</p>
 </div>
 <div>
 <h4 className="font-semibold">Devraj Aras Badavane Branch</h4>
 <p className="text-muted-foreground text-sm">Somina Koppa, Shivamogga</p>
 </div>
 </div>
 </Card>
 <div className="grid grid-cols-1 gap-8">
 <Card className="p-6 rounded-3xl flex flex-col items-start bg-[#F2F8DE]">
 <div className="flex items-center mb-4">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
 <h3 className="text-xl font-bold">School Timings</h3>
 </div>
 <p className="text-muted-foreground">Mon–Sat: 10 AM–6 PM</p>
 </Card>
 <div className="grid grid-cols-2 gap-8">
 <Card className="p-6 rounded-3xl flex flex-col items-center text-center bg-[#EBE4FF]">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.004 12.004 0 003 12c0 2.83 1.517 5.48 4 7.165V22h10v-2.835c2.483-1.685 4-4.335 4-7.165a12.004 12.004 0 00-1.382-5.016z"/></svg>
 <h4 className="font-semibold">ISO</h4>
 <p className="text-muted-foreground text-sm">Certified</p>
 </Card>
 <Card className="p-6 rounded-3xl flex flex-col items-center text-center bg-[#D1FAE5]">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
 <h4 className="font-semibold">100+</h4>
 <p className="text-muted-foreground text-sm">Students Trained</p>
 </Card>
 </div>
 </div>
 </div>
      </div>
    </section>
  );
}

