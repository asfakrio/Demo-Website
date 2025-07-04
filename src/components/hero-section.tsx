import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="/gallery/photo1.jpg"
        alt="A bright and modern classroom with students"
        data-ai-hint="modern classroom"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
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
          <Button size="lg" asChild className="bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm border border-white/20">
            <Link href="#courses">Explore Courses</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30 hover:text-white">
            <Link href="#contact">Enroll Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
