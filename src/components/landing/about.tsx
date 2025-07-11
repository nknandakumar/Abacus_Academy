import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Nurturing the Next Generation of Thinkers
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Creative Abacus Academy was founded with a simple yet powerful mission: to transform the way children learn mathematics. We believe in making learning fun, engaging, and highly effective. Our unique teaching philosophy combines traditional abacus techniques with modern educational strategies to build a strong foundation in mental arithmetic, boost cognitive skills, and instill a lifelong love for learning.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our experienced instructors are dedicated to providing personalized attention, ensuring that every child reaches their full potential in a supportive and encouraging environment.
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://placehold.co/550x450.png"
                width="550"
                height="450"
                alt="Friendly teacher in a classroom"
                className="aspect-[4/3] object-cover"
                data-ai-hint="friendly teacher classroom"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
