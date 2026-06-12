import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import { CustomCursor } from '@/components/ui/custom-cursor';

const SITE_URL = 'https://skyrenewable.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sky Renewable | A Complete Solar Solution',
    template: '%s | Sky Renewable Solar Energy',
  },
  description: 'Sky Renewable is a leading solar energy company providing premium residential, commercial, and industrial rooftop solar installation, EPC services, and government subsidy assistance.',
  keywords: [
    'Best Solar Company',
    'Solar Panel Installation',
    'Solar Company Near Me',
    'Solar Energy Solutions',
    'Rooftop Solar Installer',
    'Solar EPC Contractor',
    'Residential Solar Installation',
    'Industrial Solar Systems',
    'Commercial Solar Solutions',
    'Government Solar Subsidy 2026',
    'Solar Battery Storage',
  ],
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Sky Renewable',
    title: 'Sky Renewable | Pure Power from the Sun',
    description: 'Expert solar energy solutions for residential and industrial rooftops in India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sky Renewable Solar Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sky Renewable | Pure Power from the Sun',
    description: 'Expert solar energy solutions for residential and industrial rooftops in India.',
    images: ['/og-image.jpg'],
  },
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Sky Renewable',
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-88711-05807',
                contactType: 'customer service',
                areaServed: 'IN',
                availableLanguage: ['en', 'Hindi', 'Gujarati'],
              },
              sameAs: [
                'https://facebook.com/skyrenewable',
                'https://twitter.com/skyrenewable',
                'https://linkedin.com/company/skyrenewable',
                'https://instagram.com/skyrenewable',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Sky Renewable',
              image: `${SITE_URL}/og-image.jpg`,
              '@id': SITE_URL,
              url: SITE_URL,
              telephone: '+91-88711-05807',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bazar Chowk Complex, Kachandur, Gunderdehi',
                addressLocality: 'Balod',
                addressRegion: 'Chhattisgarh',
                postalCode: '491223',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 20.9624,
                longitude: 81.2587,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '19:00',
              },
            }),
          }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
