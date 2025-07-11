import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const courseData = [
  {
    title: 'Beginner Level',
    description: 'Introduction to the abacus, basic counting, and simple addition & subtraction. Perfect for young starters.',
    ageGroup: 'Ages 5-7',
    image: {
      src: 'https://placehold.co/600x400.png',
      hint: 'abacus beginner',
    },
  },
  {
    title: 'Intermediate Level',
    description: 'Mastering all four arithmetic operations (+, -, ×, ÷) with the abacus. Focus on speed and accuracy.',
    ageGroup: 'Ages 8-10',
    image: {
      src: 'https://placehold.co/600x400.png',
      hint: 'abacus intermediate',
    },
  },
  {
    title: 'Advanced Level',
    description: 'Complex calculations, decimals, and negative numbers. Introduction to mental visualization (Anzan).',
    ageGroup: 'Ages 11-14',
    image: {
      src: 'https://placehold.co/600x400.png',
      hint: 'abacus advanced',
    },
  },
];

export function Courses() {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Courses</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Programs for Every Skill Level</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We offer a range of courses tailored to different age groups and abilities, ensuring a perfect learning path for every child.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course) => (
            <Card key={course.title} className="flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg">
              <Image
                src={course.image.src}
                width={600}
                height={400}
                alt={course.title}
                className="w-full h-48 object-cover"
                data-ai-hint={course.image.hint}
              />
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.ageGroup}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
