import Image from 'next/image';
import { AnimatedSection } from './animated-section';
import { ScrollReveal } from './scroll-reveal';

const galleryImages = [
  { src: "/gallery/gallery-1.jpg", alt: "A bright and modern classroom with students" },
  { src: "/gallery/gallery-2.jpg", alt: "Teacher explaining a concept to students" },
  { src: "/gallery/gallery-3.jpg", alt: "Students in a library" },
  { src: "/gallery/gallery-4.jpg", alt: "Students working on computers" },
  { src: "/gallery/gallery-5.jpg", alt: "Teacher helping student with work" },
  { src: "/gallery/gallery-6.jpg", alt: "Happy students collaborating in class" },
  { src: "/gallery/gallery-7.jpg", alt: "School auditorium with students" },
  { src: "/gallery/gallery-8.jpg", alt: "University library with students" },
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
