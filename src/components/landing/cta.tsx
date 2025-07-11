import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { School } from 'lucide-react';

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-orange-100 to-purple-100 p-8 md:p-16 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                 <School className="w-12 h-12 text-primary mb-4" />
                  <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
                    Join Our Community
                  </h2>
                   <div className="mt-8">
                     <Button size="lg" asChild>
                       <Link href="#contact">Join Now</Link>
                     </Button>
                  </div>
            </div>
        </div>
      </div>
    </section>
  );
}
