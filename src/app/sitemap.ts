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
    '/projects',
    '/government-solar-subsidy',
    '/solar-calculator',
    '/contact-us',
    '/legal/privacy',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
