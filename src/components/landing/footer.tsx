import Link from 'next/link';
import { School, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 border-t bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start col-span-1 md:col-span-2">
          <Link href="#" className="flex items-center space-x-2 mb-4">
            <School className="h-8 w-8 text-primary" />
            <span className="font-extrabold text-lg">Creative Abacus</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Empowering Students with Personalized, Innovative Learning Designed to Build Essential Skills for Future Success.
          </p>
        </div>
        
        <div className="flex flex-col">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <li><Link href="#home" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
                <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
            </ul>
        </div>

        <div className="flex flex-col">
             <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
                <li><Link href="#testimonials" className="text-sm text-muted-foreground hover:text-primary">Testimonials</Link></li>
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t flex justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {year} Creative Abacus Academy. All Rights Reserved.</p>
        <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="X">
                <svg className="h-6 w-6 text-muted-foreground hover:text-primary" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.602.75Zm-1.29 12.95h1.436L4.072 2.16h-1.6l10.29 11.54Z"/></svg>
            </Link>
            <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
             <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
