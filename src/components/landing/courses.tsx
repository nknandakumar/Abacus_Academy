import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';

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
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Courses & Championships</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {programs.map(program => (
                <Card key={program.title}>
                    <CardHeader>
                        <CardTitle>{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{program.description}</p>
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
