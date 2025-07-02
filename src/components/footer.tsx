import Link from 'next/link';
import { Facebook, Instagram, Twitter, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Bright Future Academy</span>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
             <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
             <Link href="#courses" className="text-muted-foreground hover:text-primary transition-colors">Courses</Link>
             <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-8 pt-8 border-t">
          <p>&copy; {new Date().getFullYear()} Bright Future Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
