import { Users, BookCheck, MessageSquareQuote, Award } from 'lucide-react';
import { AnimatedSection } from './animated-section';
import { ScrollReveal } from './scroll-reveal';

const features = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Experienced Faculty',
    description: 'Our team comprises highly qualified and passionate teachers with years of experience.',
  },
  {
    icon: <BookCheck className="w-8 h-8 text-primary" />,
    title: 'Proven Curriculum',
    description: 'We offer a comprehensive and structured curriculum designed for conceptual clarity.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-primary" />,
    title: 'Doubt-Clearing Sessions',
    description: 'Regular sessions dedicated to resolving student queries to ensure no one is left behind.',
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: 'Excellent Results',
    description: 'Our students consistently achieve top ranks and scores in board and competitive exams.',
  },
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection id="why-us" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 text-gray-800">
          Why Choose Bright Future?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index}>
              <div className="text-center p-6 bg-yellow-50 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300 h-full">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-headline mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
