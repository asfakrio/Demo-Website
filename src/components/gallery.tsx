import Image from 'next/image';
import { AnimatedSection } from './animated-section';

const galleryImages = [
  { src: "https://podarinternationalschool.com/wp-content/uploads/2019/11/Podar-International-School-top-image1-1024x507.jpg", alt: "Students in a library", hint: "students library" },
  { src: "https://tse1.mm.bing.net/th/id/OIP.UWkJ0WGC502MQo_CCIUWuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Students working on computers", hint: "students computers" },
  { src: "https://tse3.mm.bing.net/th/id/OIP.Xe0lW3NO8DVyIFwIFlrdGQHaE8?w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3", alt: "Teacher helping student with work", hint: "teacher helping" },
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
