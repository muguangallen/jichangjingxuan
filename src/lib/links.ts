import { getCollection } from 'astro:content';
import { servicesData } from '../data/services';

/**
 * 语义化内部链接锚文本映射表
 */
export const semanticAnchorMap: Record<string, string[]> = {
  '/guide/stable-airport/': ['稳定机场推荐', '稳定机场选择指南', '稳定机场怎么选', '2026稳定机场测评'],
  '/guide/value-airport/': ['性价比机场推荐', '性价比机场怎么比较', '便宜机场推荐', '平价流量包选择'],
  '/guide/node-speed-test/': ['机场测速报告', '节点延迟测试', '高峰期速度测试', '机场测速怎么看'],
  '/guide/iplc/': ['IPLC专线指南', 'IPLC和IEPL区别', 'IPLC专线机场推荐', '物理专线线路说明'],
  '/guide/airport-comparison/': ['机场对比指南', '机场价格与套餐对比', '节点与线路对比', '机场性能横向比较'],
  '/guide/airport-recommendation/': ['2026机场推荐', '机场排行榜', '主流网络服务推荐', '专线机场列表'],
  '/guide/airport-pitfalls/': ['机场避坑指南', '选择机场防踩坑', '机场跑路风险识别', '资金安全防护']
};

/**
 * 获取随机或指定的语义化锚文本
 */
export function getSemanticAnchorText(targetUrl: string, fallback: string): string {
  const anchors = semanticAnchorMap[targetUrl];
  if (!anchors || anchors.length === 0) return fallback;
  return anchors[0];
}

export async function getRelatedArticles(currentSlug: string, category: string, tags: string[] = [], limit: number = 4) {
  const allArticles = await getCollection('articles', ({ data }) => data.draft !== true);
  
  const filtered = allArticles.filter(art => art.slug !== currentSlug);
  
  const scored = filtered.map(art => {
    let score = 0;
    if (art.data.category === category) score += 5;
    if (art.data.tags) {
      const tagMatches = art.data.tags.filter(t => tags.includes(t)).length;
      score += tagMatches * 2;
    }
    return { article: art, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.article);
}

export async function getRelatedGuides(category: string, limit: number = 3) {
  const allGuides = await getCollection('guides');
  const matched = allGuides.filter(g => g.data.category === category || g.data.featured);
  if (matched.length >= limit) return matched.slice(0, limit);
  return allGuides.slice(0, limit);
}

export function getRelatedServices(routesOrRegions: string[] = [], limit: number = 3) {
  const activeServices = servicesData.filter(s => s.status === 'active' || s.status === 'updated');
  if (routesOrRegions.length === 0) return activeServices.slice(0, limit);

  const scored = activeServices.map(srv => {
    let score = 0;
    srv.routes.forEach(r => { if (routesOrRegions.includes(r)) score += 3; });
    srv.regions.forEach(reg => { if (routesOrRegions.includes(reg)) score += 1; });
    return { service: srv, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(s => s.service);
}
