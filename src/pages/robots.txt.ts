import type { APIRoute } from 'astro';
import { siteConfig } from '../data/site';

export const GET: APIRoute = () => {
  const sitemapUrl = `${siteConfig.url}/sitemap-index.xml`;

  const robotsTxt = `User-agent: *
Allow: /

# Exclude internal search results from indexing
Disallow: /search/
Disallow: /search

Sitemap: ${sitemapUrl}
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
