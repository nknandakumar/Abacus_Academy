'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Phone, MapPin } from 'lucide-react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the top mobile menu

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsSheetOpen(false);
    setIsMenuOpen(false); // Close top menu on link click
  };

  // Close the top menu if the window is resized to a larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) { // 768px is the md breakpoint
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]); // Add isMenuOpen to the dependency array

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#courses', label: 'Courses' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];



  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">C</span>
              </div>
              <span className="text-primary font-semibold text-lg hidden sm:block">
                Creative Abacus Academy
              </span>
              <span className="text-primary font-semibold text-lg sm:hidden">
                CAA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium flex-grow justify-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-primary hover:text-secondary transition-smooth font-medium"
              >
                {link.label}
              </button>
            ))}            
          </nav>
          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+91 9449456636</span>
              </div>
          
            </div>

            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium rounded-full"
            >
              Contact Us
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary hover:text-secondary transition-smooth"
            >
            {isMenuOpen ? "x" : <Menu className="w-6 h-6" /> }
            </button>
          </div>
        </div>

        {/* Mobile Navigation List (appears from top) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#FEFEFE] absolute top-16 left-0 right-0  backdrop-blur  py-4 border-t border-white/20">
            <div className="flex flex-col items-center space-y-4 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-primary hover:text-secondary transition-smooth"
                >{link.label}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
