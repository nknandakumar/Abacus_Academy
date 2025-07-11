import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Parent of a 7-year-old',
    avatar: 'SL',
    image: 'https://placehold.co/100x100.png',
    text: "My son's confidence in math has soared since joining. The teachers are fantastic and make learning so much fun. I can't recommend this academy enough!",
  },
  {
    name: 'Michael P.',
    role: 'Parent of two students',
    avatar: 'MP',
    image: 'https://placehold.co/100x100.png',
    text: 'The progress my children have made in just a few months is astounding. Their concentration and calculation speed are incredible. A truly wonderful program.',
  },
  {
    name: 'Emily R.',
    role: 'Parent of a 9-year-old',
    avatar: 'ER',
    image: 'https://placehold.co/100x100.png',
    text: "Creative Abacus Academy provides a nurturing and challenging environment. My daughter looks forward to her classes every week. It's the best investment in her education.",
  },
  {
    name: 'David C.',
    role: 'Parent of an 11-year-old',
    avatar: 'DC',
    image: 'https://placehold.co/100x100.png',
    text: "I was skeptical at first, but the results speak for themselves. My son's performance in school has improved dramatically, not just in math but in all subjects.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Families Say</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're proud of the positive impact we've had on our students and their families.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                       <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.text}"</p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint="person portrait" />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
