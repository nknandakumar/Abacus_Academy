import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, Smile } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Expert Instructors',
    description: 'Our certified teachers have years of experience in abacus and child education.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Optimized Curriculum',
    description: 'A structured, level-based program designed for high-performance learning and retention.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Proven Results',
    description: 'Our students consistently show dramatic improvements in speed, accuracy, and confidence.',
  },
  {
    icon: <Smile className="w-10 h-10 text-primary" />,
    title: 'Fun Learning',
    description: 'We make learning an enjoyable experience with interactive activities and games.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">The Creative Abacus Advantage</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover what makes our academy the premier choice for abacus and mental math coaching.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
