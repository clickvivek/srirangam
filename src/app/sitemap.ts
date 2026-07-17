import { MetadataRoute } from 'next';

const languages = ['en', 'ta', 'hi', 'te', 'ml', 'kn'];
const routes = [
  '',
  '/deity-pooja',
  '/chakrathalwar',
  '/dhanvantri',
  '/garudalwar',
  '/ramanujar',
  '/ranganatha-perumal',
  '/thulukka-nachiyar',
  '/viswaroopa-seva',
  '/history',
  '/surroundings',
  '/darshan'
];

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://srirangam.org'; // Replace with actual domain when going to production
  
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 0.9 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
