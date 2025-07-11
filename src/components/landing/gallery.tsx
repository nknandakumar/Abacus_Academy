import Image from 'next/image';
import { Card } from '@/components/ui/card';

const images = [
  { src: 'https://placehold.co/600x400.png', alt: 'Students in a classroom', hint: 'students classroom' },
  { src: 'https://placehold.co/400x600.png', alt: 'Child concentrating on an abacus', hint: 'child concentrating' },
  { src: 'https://placehold.co/600x400.png', alt: 'An abacus competition event', hint: 'abacus competition' },
  { src: 'https://placehold.co/600x400.png', alt: 'Happy student receiving an award', hint: 'happy student award' },
  { src: 'https://placehold.co/400x600.png', alt: 'A teacher guiding a student', hint: 'teacher guiding' },
  { src: 'https://placehold.co/600x400.png', alt: 'Group of students with abacuses', hint: 'students group' },
];

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Gallery</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">A Glimpse Into Our Academy</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See our students in action and get a feel for our vibrant learning community.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <Image
                src={image.src}
                width={600}
                height={400}
                alt={image.alt}
                data-ai-hint={image.hint}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
