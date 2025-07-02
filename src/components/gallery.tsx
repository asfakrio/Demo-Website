import Image from 'next/image';
import { AnimatedSection } from './animated-section';

const galleryImages = [
  { src: "https://www.instituteofpracticalscience.com/images/Institute%20Class%20Tuition%20Center%20,%20Coaching%20Center%20,%20Coaching%20Classes%20in%20rohini%20Delhi.jpg", alt: "Classroom with students and teacher", hint: "classroom students" },
  { src: "https://isbaindore.in/blog/wp-content/uploads/2021/07/asas.jpg", alt: "Students in a modern classroom setting", hint: "modern classroom" },
  { src: "https://athrav.in/wp-content/uploads/2024/09/image.jpg", alt: "A female teacher mentoring a student", hint: "teacher mentoring" },
  { src: "https://www.kidwise.in/wp-content/uploads/2023/01/iStock-1351416161.jpg", alt: "Happy students collaborating in class", hint: "students collaborating" },
  { src: "https://www.dais.edu.in/img/slider/img9.jpg", alt: "School auditorium with students", hint: "school auditorium" },
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
                fill
                data-ai-hint={image.hint}
                className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
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
