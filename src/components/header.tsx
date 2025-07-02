"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#gallery', label: 'Gallery' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">Bright Future</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                     <Link href="#" className="flex items-center gap-2">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <SheetTitle asChild>
                          <span className="text-xl font-bold font-headline">Bright Future</span>
                        </SheetTitle>
                      </Link>
                      <SheetClose asChild>
                         <Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button>
                      </SheetClose>
                  </div>
                  <nav className="flex flex-col items-center gap-6 mt-8">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-4">
                     <SheetClose asChild>
                        <Button asChild className="w-full">
                          <Link href="#contact">Contact Us</Link>
                        </Button>
                      </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
