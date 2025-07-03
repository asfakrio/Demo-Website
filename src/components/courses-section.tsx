import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FlaskConical, BookOpenText, Atom, TestTube2, Target } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const courses = [
  {
    icon: <Calculator className="w-10 h-10 text-foreground" />,
    title: 'Mathematics',
    description: 'Covering everything from algebra to calculus with a focus on problem-solving skills.',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-foreground" />,
    title: 'Science',
    description: 'Integrated science curriculum for junior classes, building a strong foundation.',
  },
  {
    icon: <BookOpenText className="w-10 h-10 text-foreground" />,
    title: 'English',
    description: 'Enhancing grammar, literature comprehension, and creative writing skills.',
  },
  {
    icon: <Atom className="w-10 h-10 text-foreground" />,
    title: 'Physics',
    description: 'In-depth study of mechanics, electricity, and modern physics concepts.',
  },
  {
    icon: <TestTube2 className="w-10 h-10 text-foreground" />,
    title: 'Chemistry',
    description: 'Exploring organic, inorganic, and physical chemistry with practical applications.',
  },
  {
    icon: <Target className="w-10 h-10 text-foreground" />,
    title: 'JEE & NEET',
    description: 'Specialized, intensive coaching for top engineering and medical entrance exams.',
  },
];

const CoursesSection = () => {
  return (
    <AnimatedSection id="courses">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
          Our Courses
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col text-center items-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl">
              <CardHeader className="items-center">
                <div className="p-4 bg-secondary rounded-full">
                  {course.icon}
                </div>
                <CardTitle className="font-headline pt-4">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default CoursesSection;
