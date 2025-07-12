import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { BookOpen, Trophy, Calculator, Award } from 'lucide-react';
const programs = [
    {
        title: "Abacus Levels 0–8",
        description: "Step-by-step finger abacus training & mental visualization."
    },
    {
        title: "Finger Abacus Championships",
        description: "Coaching for regional and national exams."
    },
    {
        title: "Vedic Maths",
        description: "Ancient speed math techniques for accuracy & fun."
    },
    { 
        title: "Certification Exams",
        description: "Periodic assessments with official certificates."
    },
]

export function Courses() {
    const icons = [<BookOpen className="w-8 h-8 text-primary" />, <Trophy className="w-8 h-8 text-primary" />, <Calculator className="w-8 h-8 text-primary" />, <Award className="w-8 h-8 text-primary" />];
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Courses & Championships</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Comprehensive <span className="font-semibold">abacus levels</span> and <span className="font-semibold">vedic maths classes</span> designed for complete brain development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
                <Card key={program.title}>
                    <CardHeader className="flex flex-col items-center text-center space-y-2">
                        <div className="bg-muted rounded-full p-3">
                            {icons[index]}
                        </div>
                        <CardTitle className="text-lg font-semibold">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground text-center">{program.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
         <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="#contact">View Detailed Courses & Exam Details</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
