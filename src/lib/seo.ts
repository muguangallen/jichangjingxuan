import { siteConfig } from '../data/site';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  keywords?: string[];
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
}

export interface PageSeoObject {
  primaryKeyword: string;
  secondaryKeywords?: string[];
  searchIntent?: 'informational' | 'commercial' | 'comparative' | 'navigational';
  title: string;
  h1: string;
  description: string;
  canonical: string;
  relatedKeywords?: string[];
  relatedPages?: { title: string; url: string }[];
  noindex?: boolean;
  image?: string;
}

export function generateAutoDescription(params: {
  primaryKeyword: string;
  pageType: 'homepage' | 'guide' | 'article' | 'service' | 'category';
  summary?: string;
}): string {
  const { primaryKeyword, summary } = params;
  if (summary && summary.length > 20) {
    return summary;
  }
  return `本文围绕${primaryKeyword}展开，从节点分布、线路架构、晚高峰表现、延迟与套餐价格等维度进行客观测评与说明，帮助用户了解选择网络连接服务时应该关注的核心指标。`;
}

export function buildSEOProps(props: SEOProps) {
  const fullTitle = props.title.includes(siteConfig.name) || props.title.includes(siteConfig.shortName)
    ? props.title 
    : `${props.title} - ${siteConfig.shortName}`;

  const canonicalUrl = props.canonical || siteConfig.url;
  const ogImage = props.image 
    ? (props.image.startsWith('http') ? props.image : `${siteConfig.url}${props.image}`)
    : `${siteConfig.url}${siteConfig.defaultOgImage}`;

  return {
    title: fullTitle,
    description: props.description || siteConfig.description,
    canonical: canonicalUrl,
    image: ogImage,
    imageAlt: props.imageAlt || fullTitle,
    noindex: props.noindex || false,
    keywords: props.keywords ? props.keywords.join(', ') : '',
    article: props.article
  };
}
