export interface CategoryMeta {
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  faq?: { question: string; answer: string }[];
}

export const categories: CategoryMeta[] = [
  {
    slug: 'airport',
    name: '机场推荐',
    title: '2026机场推荐与网络连接服务评测',
    description: '汇集2026年优质网络连接服务与机场推荐，涵盖专线线路、套餐价格、稳定表现与节点分布综合评测。',
    summary: '针对不同预算与场景需求，精选具备良好品牌声誉、稳定线路与服务支持的网络连接服务提供商。',
    faq: [
      {
        question: '如何选择适合自己的网络连接服务（机场）？',
        answer: '主要根据使用场景选择：如果是日常网页浏览与办公，中端公网或直连线路即可；如果需要观看4K流媒体或进行实时跨国游戏，建议优先选择具备IPLC/IEPL专线的服务。'
      },
      {
        question: '月付和年付套餐哪个更值得推荐？',
        answer: '建议新用户优先选择月付或季付套餐，在验证服务的高峰期稳定性与节点响应速度满意后再考虑长周期套餐。'
      }
    ]
  },
  {
    slug: 'stable',
    name: '稳定机场',
    title: '稳定机场推荐：高可用线路与高峰期抗压分析',
    description: '专注于高可用性、低丢包率与晚高峰抗抖动能力表现突出的稳定机场与专线服务评测。',
    summary: '评估各服务的SLA保障、多点冗余备用线路以及在国际出口拥堵时段的实际吞吐量表现。',
    faq: [
      {
        question: '影响机场线路稳定性的核心要素有哪些？',
        answer: '包括入口带宽充裕度、中转专线带宽（如IPLC/IEPL）容量、后端节点负载均衡能力以及运维团队对突发拥堵的响应速度。'
      }
    ]
  },
  {
    slug: 'value',
    name: '性价比机场',
    title: '性价比机场推荐：平价高流量与试用体验比较',
    description: '针对预算有限的用户，搜集流量充裕、价格平易且基础网络体验过关的性价比网络服务。',
    summary: '帮助用户在控制月度支出的同时，找到吞吐量与连接成功率平衡良好的套餐产品。',
    faq: [
      {
        question: '便宜的性价比机场会不会容易跑路或频繁卡顿？',
        answer: '部分低价服务因超售严重可能在晚高峰出现速率下降。选择性价比服务时，应优先考虑运营时间较长、支持月付且有合理限量控制的服务商。'
      }
    ]
  },
  {
    slug: 'speed-test',
    name: '节点测速',
    title: '节点测速与性能评估：延迟、带宽与抖动数据',
    description: '定期发布针对各大网络连接服务的节点测速数据、高峰期吞吐量测试与延迟监控报告。',
    summary: '通过真实测试环境记录多地区节点的单线程/多线程下载速度与ICMP/TCP延迟。',
    faq: [
      {
        question: '节点测速的下载速度和实际使用速度是一样的吗？',
        answer: '测速结果反映的是测速服务器与节点间的瞬时极限吞吐量。实际使用体验还会受到本地宽带运营商、跨网路由及目标网站服务器带宽的影响。'
      }
    ]
  },
  {
    slug: 'iplc',
    name: 'IPLC专线',
    title: 'IPLC专线机场评测：内网点对点传输与低延迟解析',
    description: '深度分析IPLC（国际专线电路）网络服务，探讨点对点物理专线在防封锁与稳定低延迟方面的优势。',
    summary: 'IPLC专线不经过公网防火墙审查，具备极高的连通性与极低的网络抖动，适合对稳定性要求极高的场景。',
    faq: [
      {
        question: '什么是IPLC专线？它有什么突出特点？',
        answer: 'IPLC（International Private Leased Circuit）即国际私人专线电路。数据在专网内传输，不受公网拥堵影响，延迟固定且不经过公网GFW审查。'
      }
    ]
  },
  {
    slug: 'iepl',
    name: 'IEPL专线',
    title: 'IEPL专线服务对比：以太网专线性能与架构解析',
    description: '介绍IEPL（国际以太网专线）技术架构、与IPLC的异同点及其在跨国企业与高要求个人服务中的应用。',
    summary: 'IEPL基于二层以太网技术，提供灵活的协议封装能力与极高可靠性的网络连接传输。'
  },
  {
    slug: 'streaming',
    name: '流媒体解锁',
    title: '流媒体解锁服务：Netflix, Disney+, YouTube4K支持度',
    description: '针对全网各大视频平台的原生解锁情况、解封响应速度与4K高码率流畅度进行追踪评测。',
    summary: '整理各服务在香港、日本、新加坡、美国等关键地区节点的流媒体解锁稳定性与IP原生度。'
  },
  {
    slug: 'gaming',
    name: '游戏低延迟',
    title: '跨国游戏节点推荐：外服游戏低延迟与UDP协议支持',
    description: '面向亚服、美服、欧服游戏玩家，评测节点的UDP转发能力、游戏加速效果与丢包率。',
    summary: '评判各节点在Steam、Epic、外服网游连接过程中的Ping值稳定性与NAT类型表现。'
  },
  {
    slug: 'tutorial',
    name: '使用指南',
    title: '网络连接服务配置与选型入门指南',
    description: '提供主流客户端使用教程、协议选择、节点配置技巧及常见网络排障指南。',
    summary: '帮助新手用户快速掌握各类网络服务的使用规范与优化配置。'
  },
  {
    slug: 'news',
    name: '行业观察',
    title: '2026网络服务与国际专线行业动态与观察',
    description: '追踪国际海底光缆建设、出口带宽调整以及网络服务提供商的最新技术升级动态。',
    summary: '深度解读影响跨国网络连接质量的底层基础设施变化与趋势。'
  }
];
