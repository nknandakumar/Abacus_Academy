import Link from 'next/link';
import { School, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-8 border-t bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <Link href="#" className="flex items-center space-x-2 mb-4">
            <School className="h-6 w-6 text-primary" />
            <span className="font-bold">Creative Abacus Academy</span>
          </Link>
          <p className="text-muted-foreground text-sm">
            Nurturing young minds for a brighter future.
          </p>
        </div>
        <div className="flex flex-col items-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <li><Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="#courses" className="text-sm text-muted-foreground hover:text-primary">Courses</Link></li>
                <li><Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
                <li><Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
                <Link href="#" aria-label="Instagram">
                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
            </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {year} Creative Abacus Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
