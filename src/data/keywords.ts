export interface Keyword {
  keyword: string;
  group: 
    | 'core'
    | 'commercial'
    | 'stability'
    | 'value'
    | 'performance'
    | 'route'
    | 'region'
    | 'comparison'
    | 'scenario'
    | 'guide'
    | 'question'
    | 'entity'
    | 'longTail';
  intent: 'informational' | 'commercial' | 'comparative' | 'navigational';
  priority?: 'high' | 'medium' | 'low';
  pageType?: 'homepage' | 'category' | 'guide' | 'article' | 'service' | 'tag';
  targetUrl?: string;
  titlePatterns?: string[];
  relatedKeywords?: string[];
  status?: 'planned' | 'mapped' | 'published' | 'optimized' | 'archived';
}

export const regionKeywords = {
  hongkong: [
    "香港节点机场",
    "香港节点测速",
    "香港节点延迟",
    "香港节点速度",
    "香港节点稳定性",
    "香港线路机场"
  ],
  japan: [
    "日本节点机场",
    "日本节点测速",
    "日本节点延迟",
    "日本节点速度",
    "日本节点稳定性",
    "日本线路机场"
  ],
  singapore: [
    "新加坡节点机场",
    "新加坡节点测速",
    "新加坡节点延迟",
    "新加坡节点速度",
    "新加坡节点稳定性"
  ],
  taiwan: [
    "台湾节点机场",
    "台湾节点测速",
    "台湾节点延迟",
    "台湾节点速度"
  ],
  korea: [
    "韩国节点机场",
    "韩国节点测速",
    "韩国节点延迟",
    "韩国节点速度"
  ],
  usa: [
    "美国节点机场",
    "美国节点测速",
    "美国节点延迟",
    "美国节点速度",
    "美国节点稳定性"
  ],
  europe: [
    "欧洲节点机场",
    "欧洲节点测速",
    "欧洲节点延迟",
    "欧洲节点速度"
  ]
};

export const keywordGroups = {
  core: [
    "机场推荐",
    "稳定机场",
    "梯子推荐",
    "翻墙机场",
    "性价比机场"
  ],
  commercial: [
    "机场推荐2026",
    "2026机场推荐",
    "2026最新机场推荐",
    "稳定机场推荐",
    "2026稳定机场",
    "2026稳定机场推荐",
    "性价比机场推荐",
    "2026性价比机场",
    "2026性价比机场推荐",
    "便宜机场推荐",
    "高速机场推荐",
    "低延迟机场推荐",
    "专线机场推荐",
    "IPLC机场推荐",
    "IEPL机场推荐",
    "大流量机场推荐",
    "流媒体机场推荐",
    "游戏机场推荐",
    "机场评测",
    "机场测评",
    "机场对比",
    "机场排行榜",
    "机场排名"
  ],
  performance: [
    "机场测速",
    "机场节点测速",
    "机场速度测试",
    "机场最新测速",
    "机场实时测速",
    "机场晚高峰测速",
    "机场高峰期测速",
    "机场延迟测试",
    "机场延迟测速",
    "机场下载速度",
    "机场上传速度",
    "机场速度对比",
    "节点速度对比",
    "节点延迟对比",
    "节点稳定性测试",
    "节点可用性测试",
    "IPLC测速",
    "IEPL测速",
    "专线测速"
  ],
  stability: [
    "稳定机场",
    "稳定机场推荐",
    "长期稳定机场",
    "高峰期稳定机场",
    "稳定机场评测",
    "稳定机场测评",
    "稳定机场对比",
    "稳定机场测速",
    "稳定机场节点",
    "稳定机场线路",
    "稳定机场晚高峰",
    "稳定机场高峰期",
    "稳定机场延迟",
    "稳定机场速度",
    "稳定机场套餐",
    "长期使用机场"
  ],
  value: [
    "性价比机场",
    "性价比机场推荐",
    "高性价比机场",
    "高性价比机场推荐",
    "便宜机场",
    "便宜机场推荐",
    "平价机场",
    "平价机场推荐",
    "低价机场推荐",
    "便宜稳定机场",
    "便宜高速机场",
    "性价比专线机场",
    "性价比IPLC机场",
    "性价比IEPL机场",
    "大流量机场",
    "大流量机场推荐",
    "机场套餐性价比",
    "机场流量性价比",
    "机场每GB价格",
    "机场月付价格",
    "机场年付价格"
  ],
  route: [
    "IPLC机场",
    "IPLC专线机场",
    "IPLC机场推荐",
    "2026 IPLC机场",
    "IPLC线路机场",
    "IPLC专线推荐",
    "IPLC机场测速",
    "IPLC机场评测",
    "IPLC机场对比",
    "IPLC线路测速",
    "IPLC线路稳定性",
    "IPLC节点",
    "IPLC节点测速",
    "IEPL机场",
    "IEPL专线机场",
    "IEPL机场推荐",
    "2026 IEPL机场",
    "IEPL线路机场",
    "IEPL机场测速",
    "IEPL机场评测",
    "IEPL机场对比",
    "IEPL节点",
    "IEPL节点测速",
    "IPLC和IEPL区别",
    "IPLC IEPL区别",
    "IPLC普通线路区别",
    "专线机场推荐",
    "专线机场测速",
    "专线机场对比",
    "专线机场价格"
  ],
  region: Object.values(regionKeywords).flat(),
  question: [
    "机场是什么",
    "什么是机场",
    "机场节点是什么",
    "机场线路是什么",
    "机场怎么选",
    "机场推荐怎么看",
    "稳定机场怎么判断",
    "机场测速怎么看",
    "机场延迟怎么看",
    "机场速度怎么看",
    "机场为什么高峰期变慢",
    "机场为什么节点不稳定",
    "IPLC是什么",
    "IEPL是什么",
    "IPLC和IEPL有什么区别",
    "IPLC机场是什么意思",
    "IEPL机场是什么意思",
    "普通线路和专线有什么区别",
    "机场流量怎么算",
    "机场套餐怎么选",
    "机场月付和年付有什么区别",
    "机场价格怎么看",
    "机场性价比怎么算",
    "什么机场适合流媒体",
    "什么机场适合游戏",
    "什么机场适合大流量",
    "什么机场适合低延迟",
    "选择机场应该看什么"
  ],
  comparison: [
    "机场对比",
    "2026机场对比",
    "稳定机场对比",
    "性价比机场对比",
    "机场线路对比",
    "机场节点对比",
    "机场套餐对比",
    "机场价格对比",
    "机场流量对比",
    "机场速度对比",
    "机场延迟对比",
    "机场高峰期对比",
    "IPLC和IEPL对比",
    "IPLC和普通线路对比",
    "IEPL和普通线路对比",
    "专线机场和普通机场对比",
    "月付机场和年付机场对比",
    "大流量机场对比",
    "便宜机场对比"
  ],
  scenario: [
    "流媒体机场",
    "流媒体机场推荐",
    "游戏机场",
    "游戏机场推荐",
    "大流量机场",
    "大流量机场推荐",
    "低延迟机场",
    "低延迟机场推荐",
    "长期使用机场",
    "长期稳定机场",
    "日常使用机场",
    "AI工具机场",
    "远程办公机场"
  ],
  guide: [
    "机场避坑",
    "机场避坑指南",
    "机场怎么选不踩坑",
    "机场选择避坑",
    "机场稳定性怎么看",
    "机场测速怎么看",
    "机场线路怎么看",
    "机场套餐怎么选",
    "机场价格怎么比较",
    "机场月付和年付怎么选",
    "机场评测应该看什么",
    "机场推荐怎么看"
  ],
  entity: [
    "浪网", "微风网络", "暮光加速", "飞猫云", "Sogo云",
    "梯子云", "隐形人", "二猫云", "边缘节点", "U1S1",
    "飞为", "疾风云", "闪电云", "星河专线", "极光网络"
  ],
  longTail: []
};

export const primaryPageKeywordMap: Record<string, { primaryKeyword: string; secondaryKeywords: string[]; searchIntent: Keyword['intent'] }> = {
  '/': {
    primaryKeyword: '机场推荐',
    secondaryKeywords: ['稳定机场', '性价比机场', '机场评测', '机场测速', '机场对比', '2026机场推荐'],
    searchIntent: 'commercial'
  },
  '/guide/airport-recommendation/': {
    primaryKeyword: '2026机场推荐',
    secondaryKeywords: ['机场推荐', '机场排行榜', '机场列表', '专线机场推荐'],
    searchIntent: 'commercial'
  },
  '/guide/stable-airport/': {
    primaryKeyword: '稳定机场',
    secondaryKeywords: ['稳定机场推荐', '2026稳定机场', '长期稳定机场', '高峰期稳定机场'],
    searchIntent: 'commercial'
  },
  '/guide/value-airport/': {
    primaryKeyword: '性价比机场',
    secondaryKeywords: ['性价比机场推荐', '便宜机场推荐', '大流量机场', '机场套餐性价比'],
    searchIntent: 'commercial'
  },
  '/guide/node-speed-test/': {
    primaryKeyword: '机场测速',
    secondaryKeywords: ['节点测速', '机场速度测试', '机场延迟测试', '高峰期测速'],
    searchIntent: 'informational'
  },
  '/guide/iplc/': {
    primaryKeyword: 'IPLC机场',
    secondaryKeywords: ['IPLC专线机场', 'IPLC机场推荐', 'IPLC测速', 'IPLC和IEPL区别'],
    searchIntent: 'commercial'
  },
  '/guide/airport-comparison/': {
    primaryKeyword: '机场对比',
    secondaryKeywords: ['机场价格对比', '机场套餐对比', '机场速度对比', '机场线路对比'],
    searchIntent: 'comparative'
  },
  '/guide/airport-pitfalls/': {
    primaryKeyword: '机场避坑',
    secondaryKeywords: ['机场避坑指南', '机场怎么选不踩坑', '机场选择避坑', '机场跑路预警'],
    searchIntent: 'informational'
  },
  '/guide/airport-guide/': {
    primaryKeyword: '机场选择指南',
    secondaryKeywords: ['机场怎么选', '选择机场应该看什么', '机场评测指南'],
    searchIntent: 'informational'
  }
};

/**
 * 模式化标题生成器
 */
export function generateTitle(params: {
  keyword: string;
  intent?: Keyword['intent'];
  topic?: string;
  year?: number;
  patternMode?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
}): string {
  const { keyword, topic, year = 2026, patternMode = 'A' } = params;

  switch (patternMode) {
    case 'A': // 推荐型
      return `${year}${keyword}推荐：${topic || '核心维度'}怎么选？`;
    case 'B': // 指南型
      return `${keyword}指南：${topic || '核心内容'}全面说明`;
    case 'C': // 问题型
      return `${keyword}？${topic || '核心答案方向'}详解`;
    case 'D': // 比较型
      return `${keyword}有什么区别？${topic || '核心维度'}对比`;
    case 'E': // 数据型
      return `${keyword}怎么看？节点、延迟、速度与稳定性分析`;
    case 'F': // 避坑型
      return `${keyword}避坑指南：选择时重点看什么？`;
    default:
      return `${year} ${keyword}评测与选型指南`;
  }
}

/**
 * 长尾关键词自动扩展生成逻辑
 */
export function generateLongTailKeywords(): string[] {
  const cores = ['机场推荐', '稳定机场', '性价比机场', '机场测速', 'IPLC专线'];
  const modifiers = ['2026', '香港节点', '日本节点', '高清流媒体', '高峰期不卡顿', '月付套餐', '年付优惠'];
  const results: string[] = [];

  for (const c of cores) {
    for (const m of modifiers) {
      results.push(`${c} ${m}`);
    }
  }

  return results;
}

/**
 * 根据关键词自动生成文章选题建议
 */
export function suggestArticleTopics(keyword: string): string[] {
  return [
    `${keyword}是什么？`,
    `${keyword}推荐与实测`,
    `${keyword}怎么选？`,
    `${keyword}测速怎么看？`,
    `${keyword}与普通线路有什么区别？`,
    `${keyword}稳定性与高峰期表现`,
    `${keyword}套餐与价格对比`
  ];
}

/**
 * 服务实体关键词自动扩展
 */
export function generateServiceKeywords(serviceName: string): string[] {
  return [
    serviceName,
    `${serviceName} 评测`,
    `${serviceName} 测速`,
    `${serviceName} 节点`,
    `${serviceName} 线路`,
    `${serviceName} 套餐`,
    `${serviceName} 价格`,
    `${serviceName} 稳定性`,
    `${serviceName} 高峰期`,
    `${serviceName} 对比`
  ];
}

/**
 * 关键词冲突 / Cannibalization 检查器
 */
export function checkKeywordConflicts(mappedPages: { url: string; primaryKeyword: string; title: string; description: string }[]) {
  const primaryMap = new Map<string, string[]>();
  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();
  const warnings: string[] = [];

  for (const page of mappedPages) {
    // Check primary keyword conflict
    const existingK = primaryMap.get(page.primaryKeyword) || [];
    existingK.push(page.url);
    primaryMap.set(page.primaryKeyword, existingK);

    // Check title similarity
    const existingT = titleMap.get(page.title) || [];
    existingT.push(page.url);
    titleMap.set(page.title, existingT);

    // Check description duplication
    const existingD = descMap.get(page.description) || [];
    existingD.push(page.url);
    descMap.set(page.description, existingD);
  }

  primaryMap.forEach((urls, kw) => {
    if (urls.length > 1) {
      warnings.push(`警告: 多个页面把 "${kw}" 设置为相同的 Primary Keyword: ${urls.join(', ')}`);
    }
  });

  titleMap.forEach((urls, title) => {
    if (urls.length > 1) {
      warnings.push(`警告: 多个页面的 Title 完全重复: "${title}" -> ${urls.join(', ')}`);
    }
  });

  descMap.forEach((urls, desc) => {
    if (urls.length > 1) {
      warnings.push(`警告: 多个页面的 Description 完全重复: "${desc.slice(0, 30)}..." -> ${urls.join(', ')}`);
    }
  });

  return warnings;
}
