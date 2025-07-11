import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Creative Abacus Academy - Master Mental Math',
  description:
    "Join Creative Abacus Academy to unlock your child's potential with our high-performance abacus coaching. Enhance speed, concentration, and cognitive skills.",
  keywords: ['abacus', 'mental math', 'education', 'kids learning', 'math coaching'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased', manrope.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
