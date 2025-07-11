import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { FileText, Award, BrainCircuit, CheckCircle, Brain, History, Atom, Laptop, PenTool, BarChart } from 'lucide-react';


const subjects = [
    { name: 'All Subjects', icon: <BarChart/>, color: 'bg-red-100' },
    { name: 'English', icon: <PenTool/>, color: 'bg-purple-100' },
    { name: 'Business', icon: <Brain/>, color: 'bg-lime-100' },
    { name: 'History', icon: <History/>, color: 'bg-blue-100' },
    { name: 'Geography', icon: <Award/>, color: 'bg-orange-100' },
    { name: 'Chemistry', icon: <Atom/>, color: 'bg-green-100' },
    { name: 'Physics', icon: <FileText/>, color: 'bg-teal-100' },
    { name: 'Engineering', icon: <Laptop/>, color: 'bg-indigo-100' },
    { name: 'Medicine', icon: <CheckCircle/>, color: 'bg-pink-100' },
    { name: 'Computers', icon: <BarChart/>, color: 'bg-sky-100' },
    { name: 'Mathematics', icon: <BrainCircuit/>, color: 'bg-purple-100' },
    { name: 'Arts', icon: <PenTool/>, color: 'bg-lime-100' },
]

export function Courses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl">Where Questions Meet Answers</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {subjects.map(subject => (
                <Card key={subject.name} className="p-4 flex flex-col items-center justify-center rounded-2xl border-0 shadow-sm hover:shadow-lg transition-shadow">
                    <div className={`p-3 rounded-full ${subject.color} mb-2`}>
                        {React.cloneElement(subject.icon, {className: "w-6 h-6"})}
                    </div>
                    <p className="font-semibold text-sm text-center">{subject.name}</p>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
