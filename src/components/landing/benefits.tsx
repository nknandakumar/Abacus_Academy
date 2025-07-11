import { Brain, Zap, ShieldCheck, GraduationCap, Ear, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const benefits = [
  {
    icon: <Brain className="w-12 h-12 mb-4 text-accent" />,
    title: 'Enhances Memory & Concentration',
    description: 'Sharpens focus and improves information retention.',
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-accent" />,
    title: 'Boosts Mental Calculation Speed',
    description: 'Increases speed and accuracy in math.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 mb-4 text-accent" />,
    title: 'Builds Confidence & Self-Discipline',
    description: 'Fosters a can-do attitude and strong work ethic.',
  },
  {
    icon: <GraduationCap className="w-12 h-12 mb-4 text-accent" />,
    title: 'Improves Academic Performance',
    description: 'Positive effects on overall school grades.',
  },
  {
    icon: <Ear className="w-12 h-12 mb-4 text-accent" />,
    title: 'Sharpens Observation & Listening',
    description: 'Develops key skills for learning and life.',
  },
  {
    icon: <Lightbulb className="w-12 h-12 mb-4 text-accent" />,
    title: 'Develops Logical & Visualization',
    description: 'Enhances problem-solving and creative thinking.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Abacus?</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Benefits for Your Child</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Abacus training offers a wealth of cognitive benefits that extend far beyond the classroom, shaping well-rounded individuals.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
