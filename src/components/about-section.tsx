import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from './animated-section';

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-accent">
              About Bright Future Academy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a passion for education, Bright Future Academy is dedicated to nurturing young minds and guiding them towards academic excellence. Our mission is to provide a supportive and challenging learning environment where every student can thrive.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in a personalized approach to teaching. Our experienced educators utilize modern teaching methodologies, focusing on conceptual clarity and application-based learning. We aim to build a strong foundation for our students, preparing them not just for exams, but for a lifetime of learning and success.
            </p>
          </div>
          <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://www.olevelmaster.com.sg/wp-content/uploads/2023/01/DSC_0822-1024x683.jpg"
              alt="Teacher explaining a concept to students"
              fill
              data-ai-hint="teacher explaining"
              className="object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
