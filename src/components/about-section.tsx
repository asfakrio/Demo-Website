import Image from 'next/image';
import { ScrollReveal } from './scroll-reveal';

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-16 md:py-24 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
              About Bright Future Academy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for education, Bright Future Academy is dedicated to nurturing young minds and guiding them towards academic excellence. Our mission is to provide a supportive and challenging learning environment where every student can thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in a personalized approach to teaching. Our experienced educators utilize modern teaching methodologies, focusing on conceptual clarity and application-based learning. We aim to build a strong foundation for our students, preparing them not just for exams, but for a lifetime of learning and success.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl shadow-accent/30">
              <Image
                src="/gallery/photo2.jpg"
                alt="Teacher explaining a concept to students"
                data-ai-hint="teacher students"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
