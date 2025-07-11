import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { FileText, Award, BrainCircuit, CheckCircle } from 'lucide-react';

const programHighlights = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Abacus Levels 0–8',
    description: 'Step-by-step finger abacus training & mental visualization.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Finger Abacus Championships',
    description: 'Coaching for regional and national exams.',
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'Vedic Maths',
    description: 'Ancient speed math techniques for accuracy & fun.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: 'Certification Exams',
    description: 'Periodic assessments with official certificates.',
  },
];

export function Courses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Courses & Championships</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Program Highlights</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a comprehensive curriculum designed for mastery and competitive success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {programHighlights.map((item) => (
            <Card key={item.title} className="text-center p-6 border-2 border-transparent hover:border-primary transition-all duration-300">
              <CardHeader className="items-center p-0 mb-4">
                {item.icon}
                <CardTitle className="mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-3xl text-center space-y-6">
           <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Admission Process & Documents</h3>
           <p className="text-muted-foreground md:text-lg/relaxed">
            Complete the enquiry & admission form below. Visit any branch with the required documents and schedule your free level assessment.
           </p>
           <div className="flex justify-center flex-wrap gap-4">
             <Badge variant="secondary" className="text-base py-1 px-3">Recent passport-size photo</Badge>
             <Badge variant="secondary" className="text-base py-1 px-3">Aadhar card copy</Badge>
             <Badge variant="secondary" className="text-base py-1 px-3">Birth certificate copy</Badge>
           </div>
           <Button asChild>
             <Link href="#contact">View Detailed Courses & Exam Details</Link>
           </Button>
        </div>
      </div>
    </section>
  );
}
