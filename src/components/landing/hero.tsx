import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
              Best Abacus Classes in Shivamogga & Beyond
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              ISO-Certified Abacus & Vedic Maths Training | Levels 0–8 | Championship Prep | 100+ Students Trained
            </p>
            <div className="w-full max-w-sm">
              <Button size="lg" className="w-full" asChild>
                <Link href="#contact">Book a Free Trial Class</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Card className="w-full overflow-hidden rounded-3xl">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Student learning on laptop"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    data-ai-hint="student laptop"
                  />
                  <CardContent className="p-4 bg-white/50 backdrop-blur-sm absolute bottom-4 left-4 rounded-2xl w-fit">
                    <p className="font-semibold">Learn anytime, anywhere with our online courses.</p>
                  </CardContent>
                </Card>
              </div>
              <Card className="bg-[#F2F8DE] rounded-3xl p-4 flex flex-col justify-between">
                <h3 className="text-lg font-bold">Professional Teachers</h3>
                <div className="flex -space-x-2">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Teacher 1" />
                    <AvatarFallback>T1</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" alt="Teacher 2" />
                    <AvatarFallback>T2</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>40+</AvatarFallback>
                  </Avatar>
                </div>
              </Card>
               <Card className="relative overflow-hidden rounded-3xl">
                 <Image
                    src="https://placehold.co/300x300.png"
                    alt="Child learning math"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    data-ai-hint="child learning"
                 />
                 <CardContent className="absolute bottom-2 left-2 right-2 p-2 bg-white/50 backdrop-blur-sm rounded-xl flex justify-between items-center">
                   <div className="font-semibold">
                      <p>Math</p>
                      <p className="text-xs text-muted-foreground">For Beginners</p>
                   </div>
                   <div className="font-bold text-sm bg-background/70 rounded-lg px-2 py-1">12 Weeks</div>
                 </CardContent>
              </Card>
               <Card className="col-span-2 bg-[#EBE4FF] rounded-3xl p-6 flex flex-col items-center justify-center text-center">
                  <CheckCircle className="w-10 h-10 text-purple-600 mb-2"/>
                  <h3 className="text-xl font-bold">Every child deserves the chance to learn</h3>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
