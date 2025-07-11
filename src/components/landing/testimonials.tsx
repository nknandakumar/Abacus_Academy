import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Parent, Gandhinagar Branch',
    role: 'Satisfied Parent',
    avatar: 'P',
    image: 'https://placehold.co/100x100.png',
    text: "My daughter’s math speed and confidence skyrocketed after joining Creative Abacus Academy.",
  },
  {
    name: 'Student, Devraj Aras Badavane',
    role: 'Happy Student',
    avatar: 'S',
    image: 'https://placehold.co/100x100.png',
    text: 'The instructors are amazing, and the results are visible!',
  },
   {
    name: 'Parent of a 9-year-old',
    role: 'Emily R.',
    avatar: 'ER',
    image: 'https://placehold.co/100x100.png',
    text: "Creative Abacus Academy provides a nurturing and challenging environment. My daughter looks forward to her classes every week. It's the best investment in her education.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Families Say</h2>
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
