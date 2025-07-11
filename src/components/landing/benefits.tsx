import { Brain, Zap, ShieldCheck, GraduationCap, Ear, Lightbulb, ArrowRight, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
                 <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Experience Learning Like Never Before</h2>
                 <p className="text-muted-foreground md:text-xl">
                    Discover Personalized, AI-Powered Learning That Prepares Students for Success in The Real World.
                 </p>
                 <Button size="lg" asChild>
                    <Link href="#contact">Start Your Journey</Link>
                 </Button>
            </div>
            <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <Card className="rounded-3xl overflow-hidden p-6 relative bg-card">
                             <Image
                                src="https://placehold.co/600x400.png"
                                alt="Personalized Learning Paths"
                                width={600}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover rounded-3xl brightness-75"
                                data-ai-hint="student headphones"
                             />
                            <CardContent className="relative z-10 text-white">
                                <h3 className="text-2xl font-bold">Personalized Learning Paths</h3>
                                <p>AI-driven courses to your unique learning style.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="rounded-3xl p-6 bg-[#F2F8DE]">
                        <Star className="w-8 h-8 text-lime-600 mb-4"/>
                        <h3 className="text-xl font-bold">Earn While You Learn</h3>
                        <p className="text-muted-foreground mt-2">Accumulate scholarship funds as you progress.</p>
                    </Card>
                     <Card className="rounded-3xl p-6 bg-[#EBE4FF]">
                        <ShieldCheck className="w-8 h-8 text-purple-600 mb-4"/>
                        <h3 className="text-xl font-bold">Verified Credentials</h3>
                        <p className="text-muted-foreground mt-2">Secure blockchain certificates for your achievements.</p>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
