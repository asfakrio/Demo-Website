import Image from 'next/image';
import { AnimatedSection } from './animated-section';
import { ScrollReveal } from './scroll-reveal';

const galleryImages = [
  { src: "/gallery/photo3.jpg", alt: "A bright and modern classroom with students", "data-ai-hint": "modern classroom" },
  { src: "/gallery/photo4.jpg", alt: "Teacher explaining a concept to students", "data-ai-hint": "teacher students" },
  { src: "/gallery/photo5.jpg", alt: "Students in a library", "data-ai-hint": "students library" },
  { src: "/gallery/photo6.jpg", alt: "Students working on computers", "data-ai-hint": "students computers" },
  { src: "/gallery/photo7.jpg", alt: "Teacher helping student with work", "data-ai-hint": "teacher student" },
  { src: "/gallery/photo8.jpg", alt: "Happy students collaborating in class", "data-ai-hint": "happy students" },
  { src: "/gallery/photo9.jpg", alt: "School auditorium with students", "data-ai-hint": "school auditorium" },
  { src: "/gallery/photo10.jpg", alt: "University library with students", "data-ai-hint": "university library" },
];

const Gallery = () => {
  return (
    <AnimatedSection id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 bg-gradient-to-r from-blue-800 to-red-400 bg-clip-text text-transparent">
          A Glimpse into Our Academy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} direction={index < 4 ? 'right' : 'left'}>
              <div className="relative aspect-video rounded-lg overflow-hidden group shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  data-ai-hint={image['data-ai-hint']}
                  fill
                  className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Gallery;
