import { getCollection } from 'astro:content';

export async function getSortedArticles() {
  const articles = await getCollection('articles', ({ data }) => {
    return data.draft !== true;
  });

  return articles.sort((a, b) => {
    return new Date(b.data.updatedAt || b.data.publishedAt).getTime() - 
           new Date(a.data.updatedAt || a.data.publishedAt).getTime();
  });
}

export async function getArticlesByCategory(categorySlug: string) {
  const articles = await getSortedArticles();
  return articles.filter(art => art.data.category === categorySlug);
}

export async function getArticlesByTag(tagSlug: string) {
  const articles = await getSortedArticles();
  return articles.filter(art => art.data.tags && art.data.tags.includes(tagSlug));
}

export async function getFeaturedArticles() {
  const articles = await getSortedArticles();
  return articles.filter(art => art.data.featured === true);
}

export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 300;
  const clean = text.replace(/<[^>]*>/g, '');
  return Math.ceil(clean.length / wordsPerMinute);
}
