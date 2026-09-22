import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('tech-editor'),
    publishedAt: z.string(),
    updatedAt: z.string(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(),
    intent: z.enum(['informational', 'commercial', 'comparative', 'navigational']).optional(),
    source: z.string().optional(),
    dataPeriod: z.string().optional(),
    lastChecked: z.string().optional(),
    relatedServices: z.array(z.string()).optional(),
    relatedArticles: z.array(z.string()).optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    updatedAt: z.string(),
    publishedAt: z.string().optional(),
    summary: z.string().optional(),
    featured: z.boolean().default(true),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    author: z.string().default('tech-editor'),
    keywords: z.array(z.string()).default([]),
    summary: z.string().optional(),
    featured: z.boolean().default(true),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

const authorsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    bio: z.string(),
    role: z.string(),
    updatedAt: z.string()
  })
});

export const collections = {
  articles: articlesCollection,
  guides: guidesCollection,
  reviews: reviewsCollection,
  authors: authorsCollection
};
