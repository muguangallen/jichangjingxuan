export interface NavItem {
  title: string;
  path: string;
  badge?: string;
  children?: NavItem[];
}

export const headerNav: NavItem[] = [
  { title: '首页', path: '/' },
  { title: '机场推荐', path: '/guide/airport-recommendation/' },
  { title: '稳定机场', path: '/guide/stable-airport/' },
  { title: '性价比机场', path: '/guide/value-airport/' },
  { title: 'IPLC专线', path: '/guide/iplc/' },
  { title: '节点测速', path: '/guide/node-speed-test/' },
  { title: '服务列表', path: '/service/' },
  { title: '使用指南', path: '/guide/airport-guide/' },
];

export const footerNav = {
  categories: [
    { title: '机场推荐', path: '/category/airport/' },
    { title: '稳定专线', path: '/category/stable/' },
    { title: '性价比选型', path: '/category/value/' },
    { title: '节点测速', path: '/category/speed-test/' },
    { title: 'IPLC专线', path: '/category/iplc/' },
    { title: 'IEPL专线', path: '/category/iepl/' },
    { title: '流媒体解锁', path: '/category/streaming/' },
    { title: '游戏低延迟', path: '/category/gaming/' },
  ],
  guides: [
    { title: '2026机场推荐指南', path: '/guide/airport-recommendation/' },
    { title: '稳定机场选型指南', path: '/guide/stable-airport/' },
    { title: '性价比机场对比', path: '/guide/value-airport/' },
    { title: 'IPLC专线深入解析', path: '/guide/iplc/' },
    { title: '节点测速与延迟说明', path: '/guide/node-speed-test/' },
    { title: '机场避坑指南', path: '/guide/airport-pitfalls/' },
  ],
  about: [
    { title: '关于本站', path: '/about/' },
    { title: '评测方法论', path: '/methodology/' },
    { title: '联系我们', path: '/contact/' },
    { title: '隐私政策', path: '/privacy/' },
    { title: '免责声明', path: '/disclaimer/' },
    { title: 'Sitemap', path: '/sitemap-index.xml' },
  ]
};
