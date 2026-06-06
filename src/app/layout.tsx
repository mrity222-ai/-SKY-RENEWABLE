import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { CustomCursor } from '@/components/ui/custom-cursor';

export const metadata: Metadata = {
  title: 'Arkā Solar | Pure Power from the Sun',
  description: 'Premium solar energy solutions for residential and industrial rooftops in India.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-16 md:pt-24">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
