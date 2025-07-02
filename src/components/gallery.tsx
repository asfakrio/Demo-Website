import Image from 'next/image';
import { AnimatedSection } from './animated-section';

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Students working on a science project", hint: "science experiment" },
  { src: "https://placehold.co/600x400.png", alt: "Teacher writing complex math formulas on a whiteboard", hint: "whiteboard equation" },
  { src: "https://placehold.co/600x400.png", alt: "A student focused on studying in a library", hint: "student studying" },
  { src: "https://placehold.co/600x400.png", alt: "A stack of educational books on a desk", hint: "library books" },
  { src: "https://placehold.co/600x400.png", alt: "A collaborative group discussion in a classroom", hint: "classroom discussion" },
  { src: "https://placehold.co/600x400.png", alt: "Close-up of a physics experiment setup", hint: "physics experiment" },
];

const Gallery = () => {
  return (
    <AnimatedSection id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center text-primary mb-12">
          A Glimpse into Our Academy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden group shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                data-ai-hint={image.hint}
                className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Gallery;
