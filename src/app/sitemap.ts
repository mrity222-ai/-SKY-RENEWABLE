
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skyrenewable.in';
  
  const pages = [
    '',
    '/about-us',
    '/services',
    '/services/residential-solar',
    '/services/commercial-solar',
    '/services/industrial-solar',
    '/services/rooftop-installation',
    '/services/battery-storage',
    '/services/solar-maintenance',
    '/complete-electrical-solutions',
    '/net-metering-assistance',
    '/solar-panel-cleaning-solutions',
    '/projects',
    '/government-solar-subsidy',
    '/solar-calculator',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/solar-company-in-balod',
    '/solar-company-in-durg',
    '/solar-company-in-rajnandgaon',
    '/solar-company-in-raipur',
    '/solar-company-in-dhamtari',
    '/solar-company-in-kanker',
    '/solar-company-in-bemetara',
    '/solar-company-in-korba',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
