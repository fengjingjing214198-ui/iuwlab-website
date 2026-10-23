export const labStats = [
  { value: 128, suffix: '+', label: '学术论文', sub: 'Peer-reviewed papers' },
  { value: 36, suffix: '', label: '授权专利与软著', sub: 'Patents & software' },
  { value: 42, suffix: '', label: '在研科研项目', sub: 'Active projects' },
  { value: 28, suffix: '+', label: '合作单位', sub: 'Partner institutions' },
];

export const newsItems = [
  {
    id: 'n1',
    date: '2026-08-12',
    category: '成果分享',
    title: '课题组关于城市排水系统实时智能控制的研究获《Water Research》封面论文',
    excerpt:
      '研究提出融合在线监测与深度强化学习的排水系统实时调控框架，在真实管网中显著降低溢流风险与运行能耗。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20a%20calm%20urban%20river%20channel%20flowing%20through%20a%20modern%20city%2C%20soft%20overcast%20daylight%2C%20muted%20desaturated%20green%20and%20warm%20grey%20tones%2C%20clean%20architectural%20documentary%20composition%20with%20generous%20negative%20space%2C%20high%20detail&width=900&height=600&seq=dxiuw-news-01&orientation=landscape',
  },
  {
    id: 'n2',
    date: '2026-07-05',
    category: '合作动态',
    title: '实验室与行业伙伴共建"城市水系统智能调控"联合研究中心',
    excerpt:
      '双方将围绕智慧调度平台、数字孪生管网与低碳运行等方向开展长期产学研合作。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20futuristic%20water%20treatment%20infrastructure%20with%20stainless%20steel%20pipes%20and%20clear%20flowing%20water%2C%20soft%20diffused%20studio%20lighting%2C%20muted%20grey%20and%20sage%20green%20tones%2C%20clean%20high%20tech%20aesthetic%2C%20generous%20negative%20space%2C%20documentary%20photography%2C%20high%20detail&width=900&height=600&seq=dxiuw-news-02&orientation=landscape',
  },
  {
    id: 'n3',
    date: '2026-06-18',
    category: '学术会议',
    title: '课题组负责人受邀在 IWA 世界水大会作主题报告',
    excerpt:
      '报告系统介绍了课题组在水系统科学评估、空间优化与智能控制三个方向上的最新进展。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20a%20large%20international%20water%20conference%20audience%20seated%20in%20a%20bright%20modern%20auditorium%2C%20soft%20neutral%20lighting%2C%20muted%20grey%20and%20warm%20beige%20tones%2C%20clean%20architectural%20composition%2C%20documentary%20style%2C%20high%20detail&width=900&height=600&seq=dxiuw-news-03&orientation=landscape',
  },
  {
    id: 'n4',
    date: '2026-05-22',
    category: '团队荣誉',
    title: '团队成果入选中国环境科学学会年度十大研究进展',
    excerpt:
      '相关成果聚焦多源数据融合下的城市水系统风险量化，为韧性水系统规划提供了新的方法支撑。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20abstract%20fluid%20dynamics%20data%20visualization%20with%20thin%20white%20line%20networks%20over%20a%20pale%20warm%20grey%20surface%2C%20soft%20diffused%20light%2C%20monochrome%20neutral%20tones%2C%20scientific%20clean%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=900&height=600&seq=dxiuw-news-04&orientation=landscape',
  },
];

export const researchDirections = [
  {
    id: 'r1',
    detailId: 'assessment',
    index: '01',
    title: '科学评估',
    en: 'Scientific Assessment',
    body: '融合多源监测数据与系统分析方法，量化城市与流域水系统的运行状态、风险与不确定性，为决策提供可解释的评估依据。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20water%20quality%20sensors%20and%20scientific%20monitoring%20instruments%20arranged%20on%20a%20clean%20laboratory%20bench%2C%20soft%20natural%20daylight%2C%20muted%20grey%20and%20sage%20green%20tones%2C%20clean%20scientific%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=1200&height=800&seq=dxiuw-research-01&orientation=landscape',
  },
  {
    id: 'r2',
    detailId: 'optimization',
    index: '02',
    title: '空间优化',
    en: 'Spatial Optimization',
    body: '结合环境工程与城市规划，优化污水系统布局与水资源空间配置，在兼顾成本、能耗与资源回收的前提下提升系统韧性。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20aerial%20editorial%20photograph%20of%20a%20modern%20city%20district%20with%20rivers%20and%20green%20corridors%20seen%20from%20above%2C%20soft%20overcast%20light%2C%20muted%20grey%20and%20sage%20green%20tones%2C%20clean%20geometric%20urban%20planning%20composition%2C%20high%20detail&width=1200&height=800&seq=dxiuw-research-02&orientation=landscape',
  },
  {
    id: 'r3',
    detailId: 'control',
    index: '03',
    title: '智能控制',
    en: 'Intelligent Control',
    body: '基于强化学习与在线监测信号，构建排水系统的实时智能调控策略，实现泵站、调蓄与闸门的协同运行与动态优化。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20abstract%20network%20of%20glowing%20control%20nodes%20and%20thin%20connecting%20lines%20over%20a%20pale%20warm%20grey%20surface%20representing%20an%20intelligent%20control%20system%2C%20soft%20diffused%20light%2C%20monochrome%20neutral%20grey%20and%20soft%20sage%20tones%2C%20clean%20tech%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=1200&height=800&seq=dxiuw-research-03&orientation=landscape',
  },
];

export const achievements = [
  { value: 128, label: '研究论文', sub: 'Research papers' },
  { value: 36, label: '专利与软著', sub: 'Patents & software' },
  { value: 45, label: '学术会议', sub: 'Conference papers' },
  { value: 52, label: '学位论文', sub: 'Theses' },
  { value: 12, label: '开源项目', sub: 'Open-source' },
];

export const featuredPapers = [
  'Real-time control of urban drainage systems via deep reinforcement learning. Water Research, 2025.',
  'Spatial optimization of decentralized wastewater systems under carbon constraints. Environmental Science & Technology, 2024.',
  'Explainable fuzzy inference for urban drainage control. Journal of Hydrology, 2023.',
];

export const projects = [
  {
    id: 'p1',
    name: '城市排水系统实时智能调控理论与方法',
    source: '国家自然科学基金重点项目',
    period: '2023 — 2027',
    role: '主持',
  },
  {
    id: 'p2',
    name: '城市水系统碳减排与资源回收协同技术',
    source: '国家重点研发计划课题',
    period: '2021 — 2025',
    role: '课题负责',
  },
  {
    id: 'p3',
    name: '韧性城市水系统发展战略研究',
    source: '中国工程院咨询项目',
    period: '2024 — 2025',
    role: '骨干',
  },
];

export const partnerUnits = [
  '清华大学环境学院',
  '中国环境科学研究院',
  '中国科学院生态环境研究中心',
  '中国水利水电科学研究院',
  '北京排水集团',
  '北控水务集团',
  '上海市政工程设计研究总院',
  '清华苏州环境创新研究院',
  '深圳市水务集团',
  '国家城市给水排水工程技术研究中心',
];

export const contactInfo = {
  address: '北京市海淀区清华大学环境学院',
  email: 'dongxin@tsinghua.edu.cn',
  website: 'iuwlab.tsinghua.edu.cn',
};