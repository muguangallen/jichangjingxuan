export interface ServicePlan {
  name: string;
  price: string;
  duration: string;
  traffic?: string;
}

export interface PerformanceRecord {
  region: string;
  latency?: string;
  download?: string;
  upload?: string;
  testedAt?: string;
}

export interface ServiceEntity {
  name: string;
  slug: string;
  description: string;
  status: 'active' | 'monitoring' | 'updated' | 'archived';
  regions: string[];
  routes: string[];
  plans: ServicePlan[];
  performance: PerformanceRecord[];
  features: string[];
  suitableFor: string[];
  updatedAt: string;
  lastChecked: string;
  affiliateUrl?: string;
  promoCode?: string;
  commercialDisclosure?: string;
  hasDetails: boolean;
}

// Strictly verified brands (1-15) + Clean Empty Reserved Entities (16-68)
export const servicesData: ServiceEntity[] = [
  {
    name: '浪网',
    slug: 'langwang',
    description: 'IEPL/IPLC 高速专线 (多线动态 BGP 容灾接入)，不限在线客户端与连接数。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本', '新加坡', '美国', '台湾'],
    routes: ['IEPL/IPLC 高速专线 (多线动态 BGP 容灾接入)'],
    plans: [
      { name: '平价月付', price: '¥18.00', duration: '1个月' },
      { name: '按量不限时储备', price: '¥99.00', duration: '不限时', traffic: '100 GB' }
    ],
    performance: [
      { region: '晚高峰 1000M 压测', latency: '18ms', download: '1000 Mbps', testedAt: '2026-09-21' }
    ],
    features: ['全节点原生 IP', '4K/8K 流媒体全解', 'ChatGPT/Claude/OpenAI API 特化支持', '不限客户端连通'],
    suitableFor: ['全能型主力推荐', '不限时流量储备党', 'AI 高频交互者'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://varnexa.wavenetaff.com/#/?code=B74yNBrX'
  },
  {
    name: '暮光加速',
    slug: 'muguang',
    description: '全 IPLC 专线，流媒体与 AI 高速特化通道，无暗调倍率。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本', '新加坡', '美国'],
    routes: ['全 IPLC 专线 (流媒体与 AI 高速特化通道)'],
    plans: [
      { name: '轻量月付', price: '¥20.00', duration: '1个月', traffic: '120 GB' }
    ],
    performance: [
      { region: '单节点峰值', download: '2.5 Gbps', testedAt: '2026-09-21' }
    ],
    features: ['全 1x 倍率透明计费', 'Netflix/Disney+/Claude 纯净解锁', '多设备同时在线'],
    suitableFor: ['追剧达人', '跨国 AI 办公人群'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://varnexa.twilightaff.com/#/?code=7JJkL0nQ'
  },
  {
    name: '飞猫云',
    slug: 'feimaoyun',
    description: 'IEPL 极速专线 + BGP 隧道中转，握手快，性价比高。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '台湾', '日本', '美国'],
    routes: ['IEPL 极速专线 + BGP 隧道中转'],
    plans: [
      { name: '平价月付', price: '¥15.00', duration: '1个月' },
      { name: '学生年付小包', price: '¥88.00', duration: '12个月' }
    ],
    performance: [
      { region: '握手延迟测试', latency: '18ms', testedAt: '2026-09-21' }
    ],
    features: ['TikTok/Netflix 原生解锁', '不限制在线设备数', '学生年付折扣'],
    suitableFor: ['预算有限的学生党', '短视频与流媒体追剧'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://flycat1.flycatvipaff.cc/#/?code=5x2GffAy'
  },
  {
    name: '微风网络 (Breezenet)',
    slug: 'breezenet',
    description: '全专线内网传输，低延迟游戏与外贸特化，晚高峰无抖动。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本', '美国', '德国'],
    routes: ['全专线内网传输 (低延迟游戏与外贸特化)'],
    plans: [
      { name: '高阶稳定月付', price: '¥25.00', duration: '1个月', traffic: '150 GB' }
    ],
    performance: [],
    features: ['跨境电商独立 IP 支持', 'Claude/Midjourney 稳定访问'],
    suitableFor: ['外贸独立站运营', '外服竞技游戏', 'AI 设计师'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://edp01.breezenetaff.com/#/?code=I7kVjWNj'
  },
  {
    name: '梯子云',
    slug: 'tidiziyun',
    description: '多协议中转 (SS / Trojan / VLESS)，备用按量方案。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本', '美国'],
    routes: ['多协议中转 (SS / Trojan / VLESS)'],
    plans: [
      { name: '极致性价比月付', price: '¥12.00', duration: '1个月', traffic: '80 GB' },
      { name: '不限时按量', price: '¥39.00', duration: '不限时' }
    ],
    performance: [],
    features: ['多协议支持', '低门槛按量包'],
    suitableFor: ['日常查资料', '容灾第二节点'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://varnexa.ladderaff.com/#/?code=xYcmEPCS'
  },
  {
    name: '隐形人',
    slug: 'yinxingren',
    description: '境外运营纯净专线，高私密性防封锁架构。',
    status: 'active',
    hasDetails: true,
    regions: ['海外原生住宅/机房 IP'],
    routes: ['境外运营纯净专线 (高私密性防封锁架构)'],
    plans: [
      { name: '周期订阅', price: '¥22.00', duration: '1个月', traffic: '100 GB' }
    ],
    performance: [],
    features: ['原生住宅 IP', '防封锁深度优化'],
    suitableFor: ['高风控平台账号维护', 'Gemini/Grok/Claude 使用者'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://varnexa.invisibleaff.com/#/?code=imh34Zc0'
  },
  {
    name: 'FlyV',
    slug: 'flyv',
    description: 'IEPL 特化专线，游戏与流媒体双特化。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '台湾', '日本'],
    routes: ['IEPL 特化专线 (游戏与流媒体双特化)'],
    plans: [
      { name: '平价月付', price: '¥25.00', duration: '1个月', traffic: '150 GB' }
    ],
    performance: [
      { region: '1000M 压测', latency: '16ms', download: '930 Mbps', testedAt: '2026-09-21' }
    ],
    features: ['Bilibili港澳台/TVB原生解锁', '4K/8K Netflix', '使用优惠码 fly20'],
    suitableFor: ['追剧党', '港澳台锁区服务使用者'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    promoCode: 'fly20',
    affiliateUrl: 'https://varnexa.flyvaff.com/#/?code=j5jD2aZH'
  },
  {
    name: 'Sogo云 (Sogo Cloud)',
    slug: 'sogoyun',
    description: '全 IPLC 专线，单节点 2.5Gbps 接入。',
    status: 'active',
    hasDetails: true,
    regions: ['全线原生 IP'],
    routes: ['全 IPLC 专线 (单节点 2.5Gbps)'],
    plans: [
      { name: '平价月付', price: '¥25.00', duration: '1个月', traffic: '150 GB' },
      { name: '小包年付', price: '¥98.00', duration: '12个月' },
      { name: '不限时按量', price: '¥120.00', duration: '不限时', traffic: '120 GB' }
    ],
    performance: [],
    features: ['全 1x 倍率', '2.5Gbps 端口'],
    suitableFor: ['大流量下载', '按量与月付双兼顾'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://wzjc.sogoyunaff.cc/#/?code=bmZdfUPS'
  },
  {
    name: '边缘节点 (EdgeNova)',
    slug: 'edgenova',
    description: '全 IPLC 专线，前端负载均衡调度。',
    status: 'active',
    hasDetails: true,
    regions: ['原生 IP'],
    routes: ['全 IPLC 专线 (最高 2.5Gbps)'],
    plans: [
      { name: '体验月付', price: '¥15.00', duration: '1个月', traffic: '30 GB' },
      { name: '主力月付', price: '¥22.00', duration: '1个月' },
      { name: '限时年付', price: '¥98.00', duration: '12个月' }
    ],
    performance: [],
    features: ['按量 8 折重置', '全线原生 IP'],
    suitableFor: ['轻度体验体验', '主力订阅'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://work.edgenovaaff.cc/#/?code=RWwACi81'
  },
  {
    name: '二猫云 (2mao Cloud)',
    slug: '2maoyun',
    description: '全 IEPL 专线，60+ 精品节点。',
    status: 'active',
    hasDetails: true,
    regions: ['原生 IP'],
    routes: ['全 IEPL 专线 (60+ 精品节点, 2.5Gbps)'],
    plans: [
      { name: '二猫年付小包', price: '¥89.00', duration: '12个月', traffic: '折合 ¥7.4/月' },
      { name: '白猫月付', price: '¥20.00', duration: '1个月', traffic: '130 GB' }
    ],
    performance: [],
    features: ['IEPL 低门槛', '全 1x 倍率'],
    suitableFor: ['平民超低预算', '学生党选型'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://waaa.2maoyunaff.cc/#/?code=aL4OQdtn'
  },
  {
    name: 'U1S1 (有一说一)',
    slug: 'u1s1',
    description: 'BGP 三网智能优化 + IEPL 专线出口。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本', '新加坡', '美国'],
    routes: ['BGP 三网智能优化 + IEPL 专线出口'],
    plans: [
      { name: '普通人真够了包', price: '¥20.00', duration: '1个月', traffic: '120 GB' },
      { name: '年付轻量', price: '¥96.00', duration: '12个月' }
    ],
    performance: [],
    features: ['Shadowsocks 协议快连', '每两个月固定扩容'],
    suitableFor: ['老牌稳定性偏好者', '常规影音交流'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://pkdj7.vipaff.cc/#/?code=yAQPU94O'
  },
  {
    name: '飞为 (Firefly)',
    slug: 'firefly',
    description: 'IPLC 专线 + VLESS 协议，海外团队运营。',
    status: 'active',
    hasDetails: true,
    regions: ['原生 IP'],
    routes: ['IPLC 专线 + VLESS 协议'],
    plans: [
      { name: 'Firefly Lite', price: '¥25.00', duration: '1个月', traffic: '150 GB' },
      { name: '年付方案', price: '¥96.00', duration: '12个月' },
      { name: '一次性不限时', price: '¥100.00', duration: '不限时', traffic: '100 GB' }
    ],
    performance: [],
    features: ['VLESS 协议栈', '高纯净 IP', '多模态 AI 适配'],
    suitableFor: ['AI 开发者', '风控敏感账号'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://vip02.fireflyaff.com/#/?code=TygAVCsi'
  },
  {
    name: '灵动云',
    slug: 'lingdong',
    description: 'BGP 优质隧道中转，适合轻度用户。',
    status: 'active',
    hasDetails: true,
    regions: ['香港', '日本'],
    routes: ['BGP 优质隧道中转'],
    plans: [
      { name: '平价月付', price: '¥16.00', duration: '1个月' }
    ],
    performance: [],
    features: ['基础中转', '日常网页开'],
    suitableFor: ['轻度浏览用户'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://varnexa.lingdongaff.com/#/?code=rkO2qp1g'
  },
  {
    name: '星岛梦 (StarDream)',
    slug: 'xingdaomeng',
    description: 'BGP 优质多线中转，轻量入门。',
    status: 'active',
    hasDetails: true,
    regions: ['常规节点'],
    routes: ['BGP 优质多线中转'],
    plans: [
      { name: '轻量入门月付', price: '¥15.00', duration: '1个月' }
    ],
    performance: [],
    features: ['入门轻量'],
    suitableFor: ['日常影音'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://kfccbb.xingdaomeng.com/#/?code=eDaGM37W'
  },
  {
    name: '光速云 (LightSpeed)',
    slug: 'guangshou',
    description: '极速中转隧道，三网均衡。',
    status: 'active',
    hasDetails: true,
    regions: ['三网节点'],
    routes: ['极速中转隧道'],
    plans: [
      { name: '平价月付', price: '¥18.00', duration: '1个月' }
    ],
    performance: [],
    features: ['低延迟中转'],
    suitableFor: ['常规浏览'],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21',
    affiliateUrl: 'https://mdlky.gsyaff.com/#/?code=N9Q90WbR'
  }
];

// Generate clean empty reserved entities 16 to 68 (NO fabricated prices, traffic, speedtests, or nodes)
for (let i = 16; i <= 68; i++) {
  servicesData.push({
    name: `储备评估服务 ${i}`,
    slug: `service-entity-${i}`,
    description: '暂无公开资料，待补充测试数据，以服务商页面实际信息为准。',
    status: 'monitoring',
    hasDetails: false,
    regions: [],
    routes: [],
    plans: [],
    performance: [],
    features: [],
    suitableFor: [],
    updatedAt: '2026-09-21',
    lastChecked: '2026-09-21'
  });
}
