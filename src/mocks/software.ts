export const flagshipSoftware = {
  id: 'iudsim',
  name: 'IUDSim',
  fullName: 'Integrated Urban Drainage Simulator',
  cnName: '城市排水系统模拟器',
  badge: '开源项目',
  tagline:
    'IUDSim（Integrated Urban Drainage Simulator）是 iUWLab 开发的一款城市排水系统模拟器，可以实现「事件驱动—设施状态—社会响应—环境质量」的全过程紧耦合模拟，以及「人—地—网—厂—河」互作关系的动态刻画，为城市排水系统管理提供模型支撑。',
  article: 'https://mp.weixin.qq.com/s/KgC1e9SrxEe_Oiikq1Ya6w',
  highlights: [
    {
      icon: 'ri-links-line',
      title: '全过程紧耦合',
      text: '打通降雨、地表、管网、污水厂与河道之间的动态联动',
    },
    {
      icon: 'ri-open-source-line',
      title: '开源免费',
      text: '面向科研与工程应用开放，替代昂贵的商业模拟软件',
    },
    {
      icon: 'ri-node-tree',
      title: '人—地—网—厂—河一体',
      text: '同时刻画基础设施与人类行为的相互作用',
    },
    {
      icon: 'ri-line-chart-line',
      title: '面向决策',
      text: '输出内涝、充满度、淹没水深与水质等关键指标',
    },
  ],
  repo: 'https://gitee.com/iuwlab/iudsim',
  image:
    'https://readdy.ai/api/search-image?query=Minimal%20abstract%20technical%20visualization%20of%20an%20urban%20drainage%20simulation%20system%2C%20thin%20white%20glowing%20network%20lines%20connecting%20surface%20runoff%20nodes%2C%20pipe%20networks%2C%20treatment%20plants%20and%20river%20channels%20over%20a%20deep%20charcoal%20surface%2C%20soft%20diffused%20light%2C%20monochrome%20neutral%20grey%20and%20muted%20sage%20green%20tones%2C%20clean%20scientific%20data%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=1200&height=900&seq=dxiuw-sw-iudsim-01&orientation=landscape',
};

export const softwareCapabilities = [
  {
    id: 'c1',
    index: '01',
    icon: 'ri-water-percent-line',
    title: '地表径流与积水演化',
    short: '产流 · 积水 · 下渗 · 冲刷',
    description:
      '模拟降雨条件下的地表产流、积水扩散、雨水下渗与污染物冲刷等水量水质过程。',
  },
  {
    id: 'c2',
    index: '02',
    icon: 'ri-route-line',
    title: '排水管网输排过程',
    short: '传输路径 · 污染物负荷',
    description:
      '模拟雨污水在管网中的传输路径，以及 TSS、COD、TN、TP、NH₃-N 等污染物的负荷变化。',
  },
  {
    id: 'c3',
    index: '03',
    icon: 'ri-filter-3-line',
    title: '污水处理与尾水排放',
    short: '处理过程 · 出水水质',
    description:
      '模拟污水处理厂的处理过程，以及处理后出水水量与水质的动态变化。',
  },
  {
    id: 'c4',
    index: '04',
    icon: 'ri-road-map-line',
    title: '河道水力水质响应',
    short: '溢流 · 顶托 · 河道响应',
    description:
      '模拟污水溢流、尾水排放、河道顶托与地表径流影响下，河道水量与水质的动态响应。',
  },
  {
    id: 'c5',
    index: '05',
    icon: 'ri-run-line',
    title: '人类行为与系统互动',
    short: '绕路 · 用水 · 排水互动',
    description:
      '模拟居民因积水绕路、用水与排水行为变化等，与排水系统之间的相互作用。',
  },
];

export const usageSteps = [
  {
    id: 'u1',
    index: '01',
    icon: 'ri-download-cloud-line',
    title: '获取与安装',
    description:
      '前往课题组 Gitee 仓库下载源码，按照文档说明配置运行环境与依赖，完成本地部署。',
  },
  {
    id: 'u2',
    index: '02',
    icon: 'ri-database-2-line',
    title: '准备数据',
    description:
      '整理管网拓扑、节点与管道属性、监测数据及降雨序列，按模板导入为模型输入。',
  },
  {
    id: 'u3',
    index: '03',
    icon: 'ri-settings-3-line',
    title: '构建模型',
    description:
      '完成汇水区划分与参数配置，构建"人—地—网—厂—河"一体化模型并校验边界条件。',
  },
  {
    id: 'u4',
    index: '04',
    icon: 'ri-line-chart-line',
    title: '模拟与结果分析',
    description:
      '运行模拟，输出节点内涝量、管道充满度、淹没水深与水质指标，生成评估与优化建议。',
  },
];

export const softwareCategories = [
  { id: 'all', label: '全部工具' },
  { id: 'assessment', label: '系统评估' },
  { id: 'optimization', label: '优化控制' },
  { id: 'planning', label: '空间规划' },
];

export const softwareTools = [
  {
    id: 'st1',
    name: '基于高精度地理数据的径流路径识别与内涝耦合模拟软件',
    version: 'V1.0',
    category: 'assessment',
    description:
      '结合一维 SWMM 与二维 CADDIES 模型，自动完成汇水区划分与耦合建模，输出节点内涝量、管道充满度与地面淹没水深，为城市内涝风险管理提供支撑。',
    register: '2023SR0280519',
  },
  {
    id: 'st2',
    name: '基于多元物质流模拟的城市水系统模式综合评估软件',
    version: 'V1.0',
    category: 'assessment',
    description:
      '构建环境、资源、技术、社会等多维评价指标，基于多元物质流的时空动态模拟，综合评估城市水系统模式，支撑可持续性规划。',
    register: '2020SR1914127',
  },
  {
    id: 'st3',
    name: '城市排水系统一体化控制软件',
    version: 'V1.0',
    category: 'optimization',
    description:
      '面向水质的城市排水系统一体化实时控制工具，将联调联控理念引入控制全过程，从全局视角优化系统运行。',
    register: '2023SR0695052',
  },
  {
    id: 'st4',
    name: '城市污水处理系统布局规划模型软件',
    version: 'V3.0',
    category: 'planning',
    description:
      '多目标空间优化模型，同步优化污水厂选址与管网空间布局，并支持运行能耗优化与就地处理系统的协同规划。',
    register: '2022SR0517414',
  },
  {
    id: 'st5',
    name: '排水管网动态效能评估软件',
    version: 'V1.0',
    category: 'assessment',
    description:
      '构建系统化的动态评估指标，量化污水管网各方面运行状态，为制定检查修复方案提供科学支撑。',
    register: '2020SR1178461',
  },
  {
    id: 'st6',
    name: '排水泵站调控辅助决策软件',
    version: 'V1.0',
    category: 'optimization',
    description:
      '基于历史监测数据提炼控制规则，接入实时监测值生成泵站调控建议，辅助运行管理人员进行决策。',
    register: '2020SR1174616',
  },
  {
    id: 'st7',
    name: '基于神经网络的排水系统溢流污染控制策略优化软件',
    version: 'V1.0',
    category: 'optimization',
    description:
      '以长短期神经网络为基础，利用遗传算法在控制策略空间中寻优，得到研究区域的最佳控制策略，普遍适用于泵站、调蓄池等可控设施。',
    register: '2021SR1215015',
  },
  {
    id: 'st8',
    name: '城市水污染控制系统结构设计与技术选择软件',
    version: 'V2.0',
    category: 'planning',
    description:
      '以物质流关系为分析基础，结合工程经济学、多目标优化与不确定性分析，实现水污染控制系统结构的集成优化与技术筛选。',
    register: '2019SR0014030',
  },
  {
    id: 'st9',
    name: '基于虚拟城市的城市用地—雨水管网集成模拟软件',
    version: 'V1.0',
    category: 'assessment',
    description:
      '可按需设计典型空间形态的虚拟城市，自动生成雨水管网并模拟内涝表现，研究城市空间结构与雨水管网性能的关系。',
    register: '2020SR0124075',
  },
];