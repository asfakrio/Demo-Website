import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookCheck, MessageSquareQuote, Award } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const features = [
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Experienced Faculty',
    description: 'Our team comprises highly qualified and passionate teachers with years of experience.',
  },
  {
    icon: <BookCheck className="w-8 h-8 text-accent" />,
    title: 'Proven Curriculum',
    description: 'We offer a comprehensive and structured curriculum designed for conceptual clarity.',
  },
  {
    icon: <MessageSquareQuote className="w-8 h-8 text-accent" />,
    title: 'Doubt-Clearing Sessions',
    description: 'Regular sessions dedicated to resolving student queries to ensure no one is left behind.',
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: 'Excellent Results',
    description: 'Our students consistently achieve top ranks and scores in board and competitive exams.',
  },
];

const WhyChooseUs = () => {
  return (
    <AnimatedSection id="why-us" className="bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 bg-gradient-to-r from-sky-700 to-pink-400 bg-clip-text text-transparent">
          Why Choose Bright Future?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseUs;
