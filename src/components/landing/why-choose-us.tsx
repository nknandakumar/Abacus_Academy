import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Medal, BookOpen, TrendingUp, Users, MapPin, Brain } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Medal className="w-10 h-10 text-primary" />,
    title: 'ISO-Certified Excellence',
    description: 'Excellence in Abacus & Vedic Maths.',
  },
  {
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    title: 'Levels 0–8 Curriculum',
    description: 'From Beginner to Advanced Mental Calculation.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'Championship Prep',
    description: 'Regional & National Finger Abacus Exams.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Expert Trainers',
    description: 'Over 15 Years of Experience.',
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: 'Two Convenient Shivamogga Locations',
    description: 'Located in Shivamogga.',
  },
  {
    icon: <Brain className="w-10 h-10 text-primary" />,
    title: 'Holistic Brain Development',
    description: 'Focus, Memory & Confidence.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Why Choose Creative Abacus Academy?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover what makes us the <strong className="text-primary">best abacus center in Shivamogga</strong> with{" "}
            <strong >ISO certification</strong> and proven track record.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center p-6 rounded-3xl hover:shadow-xl transition-shadow duration-300 border-0 bg-background">
              <CardHeader className="items-center">
                <div className="p-4 rounded-xl bg-primary/10 w-fit">{feature.icon}</div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
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
