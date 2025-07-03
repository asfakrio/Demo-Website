import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="https://wallpaperaccess.com/full/2245179.jpg"
        alt="A bright and modern classroom with students"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
        data-ai-hint="classroom students"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline leading-tight tracking-tight mb-4">
          Unlock Your Academic Potential
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
          Personalized Coaching for Class 6–12, JEE, NEET & more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-black text-white hover:bg-gray-800">
            <Link href="#courses">Explore Courses</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
