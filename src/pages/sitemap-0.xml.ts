import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../data/site';
import { categories } from '../data/categories';
import { servicesData } from '../data/services';
import { highValueTags } from './tag/[slug].astro';

interface SitemapItem {
  url: string;
  lastmod: string;
  priority: string;
  changefreq: string;
}

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({ data }) => data.draft !== true);
  const guides = await getCollection('guides');
  const reviews = await getCollection('reviews');
  
  const items: SitemapItem[] = [];

  // Static core pages
  const staticPages = [
    { url: '/', lastmod: '2026-09-22', priority: '1.0', changefreq: 'daily' },
    { url: '/about/', lastmod: '2026-09-22', priority: '0.6', changefreq: 'monthly' },
    { url: '/contact/', lastmod: '2026-09-22', priority: '0.5', changefreq: 'monthly' },
    { url: '/methodology/', lastmod: '2026-09-22', priority: '0.6', changefreq: 'monthly' },
    { url: '/privacy/', lastmod: '2026-09-22', priority: '0.4', changefreq: 'yearly' },
    { url: '/disclaimer/', lastmod: '2026-09-22', priority: '0.4', changefreq: 'yearly' },
    { url: '/article/', lastmod: '2026-09-21', priority: '0.8', changefreq: 'daily' },
    { url: '/guide/', lastmod: '2026-09-21', priority: '0.8', changefreq: 'weekly' },
    { url: '/service/', lastmod: '2026-09-21', priority: '0.8', changefreq: 'weekly' },
    { url: '/category/', lastmod: '2026-09-20', priority: '0.7', changefreq: 'weekly' },
    { url: '/review/', lastmod: '2026-09-21', priority: '0.9', changefreq: 'weekly' }
  ];

  staticPages.forEach(p => items.push(p));

  // Category pages
  categories.forEach(c => {
    items.push({
      url: `/category/${c.slug}/`,
      lastmod: '2026-09-20',
      priority: '0.7',
      changefreq: 'weekly'
    });
  });

  // Pillar Guide pages
  guides.forEach(g => {
    items.push({
      url: `/guide/${g.slug}/`,
      lastmod: g.data.updatedAt || '2026-09-20',
      priority: '0.9',
      changefreq: 'weekly'
    });
  });

  // Comprehensive Review Handbook pages
  reviews.forEach(r => {
    items.push({
      url: `/review/${r.slug}/`,
      lastmod: r.data.updatedAt || '2026-09-21',
      priority: '0.95',
      changefreq: 'weekly'
    });
  });

  // Supporting Article pages
  articles.forEach(a => {
    items.push({
      url: `/article/${a.slug}/`,
      lastmod: a.data.updatedAt || a.data.publishedAt || '2026-09-21',
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  // Verified Service Entities (EXCLUDING empty entities 16-68)
  const verifiedServices = servicesData.filter(s => s.hasDetails === true);
  verifiedServices.forEach(s => {
    items.push({
      url: `/service/${s.slug}/`,
      lastmod: s.updatedAt || '2026-09-21',
      priority: '0.85',
      changefreq: 'weekly'
    });
  });

  // Pruned High-Value Tags ONLY
  highValueTags.forEach(t => {
    items.push({
      url: `/tag/${encodeURIComponent(t)}/`,
      lastmod: '2026-09-21',
      priority: '0.6',
      changefreq: 'weekly'
    });
  });

  // Author pages
  items.push({
    url: '/author/tech-editor/',
    lastmod: '2026-09-22',
    priority: '0.5',
    changefreq: 'monthly'
  });

  const xmlUrls = items.map(item => `
  <url>
    <loc>${siteConfig.url}${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
