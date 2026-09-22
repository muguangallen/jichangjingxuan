export interface SiteConfig {
  brandName: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  url: string;
  locale: string;
  defaultOgImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: '机场精选',
  name: '机场精选 · 2026 网络连接服务与节点性能指南',
  shortName: '机场精选',
  title: '机场精选 - 2026 稳定机场推荐|IPLC专线|节点测速排行榜',
  description: '机场精选：2026 中文网络连接服务与机场节点性能实测指南。整理各大服务商线路架构、节点分布与套餐说明，提供客观选型参考与避坑建议。',
  url: 'https://jichangjingxuan.xyz',
  locale: 'zh-CN',
  defaultOgImage: '/og/default-og.png',
  author: {
    name: '网络性能评测实验室',
    avatar: '/images/author-avatar.png',
    bio: '网络连接服务性能评测团队，负责搜集与整理各大网络连接服务提供商的公开线路规格、节点配置与服务动态。'
  }
};
