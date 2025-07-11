import { BrainCircuit, Target, Sparkles, Calculator } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
  {
    icon: <BrainCircuit className="w-12 h-12 mb-4 text-accent" />,
    title: 'Improved Concentration',
    description: 'The focus required for abacus training significantly enhances a child\'s ability to concentrate.',
  },
  {
    icon: <Target className="w-12 h-12 mb-4 text-accent" />,
    title: 'Enhanced Memory',
    description: 'Visualizing the abacus strengthens photographic memory and information retention.',
  },
  {
    icon: <Sparkles className="w-12 h-12 mb-4 text-accent" />,
    title: 'Boosts Creativity',
    description: 'Abacus learning stimulates right-brain development, fostering greater creativity and intuition.',
  },
  {
    icon: <Calculator className="w-12 h-12 mb-4 text-accent" />,
    title: 'Stronger Math Skills',
    description: 'Builds a solid foundation and deep understanding of numbers, making all areas of math easier.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefits of Abacus</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">More Than Just Math</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Abacus training offers a wealth of cognitive benefits that extend far beyond the classroom, shaping well-rounded individuals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 text-center border-2 border-transparent hover:border-accent hover:shadow-2xl transition-all duration-300">
              <CardHeader className="items-center p-0">
                {benefit.icon}
                <CardTitle className="mt-2 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {benefit.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
