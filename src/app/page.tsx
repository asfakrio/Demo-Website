import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import CoursesSection from '@/components/courses-section';
import WhyChooseUs from '@/components/why-choose-us';
import Testimonials from '@/components/testimonials';
import Gallery from '@/components/gallery';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
