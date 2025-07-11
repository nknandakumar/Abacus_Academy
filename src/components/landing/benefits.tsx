import { Brain, Zap, ShieldCheck, GraduationCap, Ear, Lightbulb, ArrowRight, Star, ArrowUp, MemoryStick, Award, ListTree, BrainCircuit } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const benefits = [
    {
        icon: <MemoryStick className="w-8 h-8 text-primary"/>,
        title: "Enhances Memory & Concentration"
    },
    {
        icon: <Zap className="w-8 h-8 text-primary"/>,
        title: "Boosts Mental Calculation Speed"
    },
    {
        icon: <Award className="w-8 h-8 text-primary"/>,
        title: "Builds Confidence & Self-Discipline"
    },
    {
        icon: <ArrowUp className="w-8 h-8 text-primary"/>,
        title: "Improves Academic Performance"
    },
     {
        icon: <Ear className="w-8 h-8 text-primary"/>,
        title: "Sharpens Observation & Listening Skills"
    },
     {
        icon: <BrainCircuit className="w-8 h-8 text-primary"/>,
        title: "Develops Logical & Visualization Abilities"
    },
]

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
       <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Why Abacus? Benefits for Your Child</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(benefit => (
                 <Card key={benefit.title} className="p-6 rounded-2xl flex items-start gap-4">
                    {benefit.icon}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
