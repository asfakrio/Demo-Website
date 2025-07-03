import Link from 'next/link';
import { Facebook, Instagram, Twitter, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline text-white">Bright Future Academy</span>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
             <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">About</Link>
             <Link href="#courses" className="text-gray-400 hover:text-primary transition-colors">Courses</Link>
             <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter /></Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook /></Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram /></Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Bright Future Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
