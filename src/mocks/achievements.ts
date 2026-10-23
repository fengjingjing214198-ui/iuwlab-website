export const achievementStats = [
  { value: 128, suffix: '+', label: '学术论文', sub: 'Peer-reviewed papers' },
  { value: 36, suffix: '', label: '专利与软著', sub: 'Patents & software' },
  { value: 45, suffix: '', label: '学术会议', sub: 'Conference papers' },
  { value: 12, suffix: '', label: '开源项目', sub: 'Open-source' },
];

export const achievementHighlights = [
  {
    id: 'h1',
    category: '论文成果',
    title: '深度强化学习在城市排水系统实时控制中的优势维度',
    summary:
      '面向城市排水系统实时控制，采用多智能体深度强化学习方法构建综合评估框架，较传统方法平均降低 15.1%–43.5% 的漫溢风险。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20a%20calm%20urban%20river%20channel%20flowing%20through%20a%20modern%20city%20with%20subtle%20data%20overlay%20lines%2C%20soft%20overcast%20daylight%2C%20muted%20desaturated%20grey%20and%20sage%20green%20tones%2C%20clean%20documentary%20composition%20with%20generous%20negative%20space%2C%20high%20detail&width=1000&height=640&seq=dxiuw-ach-hl-01&orientation=landscape',
  },
  {
    id: 'h2',
    category: '产学研合作',
    title: '城市水系统智能调控联合研究中心',
    summary:
      '实验室与行业伙伴共建联合研究中心，围绕智慧调度平台、数字孪生管网与低碳运行等方向开展长期产学研合作，推动科研成果快速落地。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20editorial%20photograph%20of%20futuristic%20water%20infrastructure%20with%20stainless%20steel%20pipes%20and%20clear%20flowing%20water%20in%20a%20bright%20facility%2C%20soft%20diffused%20lighting%2C%20muted%20grey%20and%20sage%20green%20tones%2C%20clean%20high%20tech%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=1000&height=640&seq=dxiuw-ach-hl-02&orientation=landscape',
  },
  {
    id: 'h3',
    category: '团队荣誉',
    title: '中国环境科学学会年度十大研究进展',
    summary:
      '团队成果聚焦多源数据融合下的城市水系统风险量化，为韧性水系统规划提供了新的方法支撑，入选中国环境科学学会年度十大研究进展。',
    image:
      'https://readdy.ai/api/search-image?query=Minimal%20abstract%20fluid%20dynamics%20data%20visualization%20with%20thin%20white%20line%20networks%20over%20a%20pale%20warm%20grey%20surface%2C%20soft%20diffused%20light%2C%20monochrome%20neutral%20tones%2C%20scientific%20clean%20aesthetic%2C%20generous%20negative%20space%2C%20high%20detail&width=1000&height=640&seq=dxiuw-ach-hl-03&orientation=landscape',
  },
];

export const achievementGroups = [
  {
    id: 'journal',
    label: '期刊论文',
    en: 'Journal Papers',
    items: [
      {
        id: 'j1',
        title:
          'Huang Z, Wang Y, Dong X. Dimensions of Superiority: How Deep Reinforcement Learning Excels in Urban Drainage System Real-time Control[J]. Water Research X, 2025: 100313.',
        meta: '优化控制',
        year: '2025',
        abstract:
          '减少合流制溢流和内涝风险对于城市排水系统的高效运行至关重要。传统的实时控制（RTC）方法在效率和性能上往往存在不足，这促使了对创新方法的探索。本研究采用基于多智能体的深度强化学习（DRL）方法，构建了涵盖控制目标、决策时间、鲁棒性和适应性等多个定量指标的综合评估框架。以中国苏州的城市排水系统为案例，分析了 31 次历史降雨事件。结果表明，与传统 RTC 方法相比，DRL 平均可降低 15.1% 至 43.5% 的漫溢风险，同时在效率、鲁棒性和适应性方面表现更为优异，为提升城市基础设施系统的韧性提供了新的思路。',
      },
      {
        id: 'j2',
        title:
          'YANG M, ZHANG X, QIN C, et al. Enhancing water quality in urban areas: A spatiotemporal optimization framework for green-gray infrastructure[J/OL]. Water Research, 2025, 272: 122921.',
        meta: '系统评估',
        year: '2025',
        abstract:
          '绿色-灰色基础设施在控制城市径流和污染方面具有广阔前景。本研究提出了一种新颖的时空优化框架，用于规划绿色-灰色设施的布局与建设。该框架将建设时序作为优化变量，并建立综合水质模型作为主要决策标准，而非传统的径流量或污染物负荷削减。基于数值模型开发的机器学习模拟器作为湖泊模块，确保优化框架在可接受的计算时间内运行。与传统方法相比，该框架能够同步优化设施的建设时序、位置、类型和规模，从而在整个规划期内实现成本效益最大化。方法应用于中国草海流域，提供了绿色-灰色设施的帕累托最优建设方案。',
      },
      {
        id: 'j3',
        title:
          "ZHANG M, XU Z, WANG Y, et al. Evaluation of uncertain signals' impact on deep reinforcement learning-based real-time control strategy of urban drainage systems[J/OL]. Journal of Environmental Management, 2022, 324: 116448.",
        meta: '优化控制',
        year: '2022',
        abstract:
          '实时控制（RTC）是提高城市排水系统（UDS）效率的公认技术，深度强化学习（DRL）为其提供了新的解决方案。然而，基于 DRL 的 RTC 在实际应用中受到多种不确定性来源的阻碍。本研究通过大规模模拟实验评估了水位信号测量中的不确定性影响，并使用控制性能分布的统计离散度以及与无不确定性基准情景相比控制性能的相对变化进行量化。结果表明，与传统的基于规则的控制（RBC）策略相比，基于 DRL 的 RTC 在随机和系统不确定性方面的统计离散度减少了 15.48% 至 81.93%，说明其具有鲁棒性，可可靠地应用于安全关键的实际城市排水系统中。',
      },
      {
        id: 'j4',
        title:
          'ZHANG D, DONG X, ZENG S, et al. Wastewater reuse and energy saving require a more decentralized urban wastewater system? Evidence from multi-objective optimal design at the city scale[J/OL]. Water Research, 2023, 235: 119923.',
        meta: '未来规划',
        year: '2023',
        abstract:
          '分散化被认为是未来实现更可持续城市废水系统（UWS）的新兴解决方案。本文提出了一种工具——可持续城市废水系统生成器（SUWStor），结合系统结构的图表示与蚁群算法，能够在三个目标下生成系统设计的帕累托最优解：最小化资本成本、最小化运行能耗以及最大化水资源回用能力。模型应用于中国雄安新区一个 100 平方公里的新城区，相比基于人类经验的解决方案，可将系统资本成本降低 7%、管网运行能耗降低 26%，同时保持水资源回用能力达到 100%。',
      },
      {
        id: 'j5',
        title:
          'WANG Y, ZHANG X, ZHANG D, et al. The structure design of integrated urban drainage systems: A view of robust optimization[J/OL]. Journal of Environmental Management, 2022, 322: 116050.',
        meta: '未来规划',
        year: '2022',
        abstract:
          '快速城市化给城市水污染带来巨大压力，点源和非点源污染问题日益突出，亟需对城市排水系统（UDS）进行综合管理。本研究开发了一种多目标鲁棒优化模型，以探索考虑系统不确定性的 UDS 最优结构，并应用于中国北方的 B 市验证模型有效性。结果表明，当不确定性程度从 5% 增加到 20% 时，需要额外成本（增加 1.10 至 2.68 倍）来提高 UDS 的鲁棒性；随着结构不确定性的增加，雨水子系统投资成本占比从 10.2% 上升至 27.2%，凸显了雨水管理在应对系统不确定性方面的高效性。',
      },
      {
        id: 'j6',
        title:
          'ZHANG D, DONG X, ZENG S. Exploring the structural factors of resilience in urban drainage systems: a large-scale stochastic computational experiment[J/OL]. Water Research, 2021, 188: 116475.',
        meta: '未来规划',
        year: '2021',
        abstract:
          '基础设施设计和管理的重点已从基于可靠性的方法转向基于韧性的方法。本研究通过大规模计算实验，探讨了合流制排水系统中系统结构对韧性的影响。研究建立随机生成模型，通过随机采样设施位置和基于图的随机游走采样算法生成多种管道布局方案，并在暴雨管理模型（SWMM）中评估其性能。结果表明，与污水处理厂（WWTP）数量相比，合流制溢流口（CSO）的数量对系统韧性的影响更为显著，某些位置更适合布置污水处理厂或溢流口，而在其他位置增加这些设施甚至可能降低系统的韧性。',
      },
      {
        id: 'j7',
        title:
          'WANG L, HUANG Z, GAN B, et al. Climate change impacts on magnitude and frequency of urban floods under scenario and model uncertainties[J/OL]. Journal of Environmental Management, 2024, 366: 121679.',
        meta: '系统评估',
        year: '2024',
        abstract:
          '许多研究已证实，气候变化导致城市洪水频发，可能引发显著的社会经济影响。本研究采用统计降尺度方法，计算了中国各地级市在 2040 年代、2060 年代和 2080 年代四个气候模型和三种气候变化情景（RCP2.6、RCP4.5 和 RCP8.5）下十个降雨重现期的设计降雨量。在此基础上结合地理信息等数据生成的排水系统，将事件尺度和年度尺度的降水数据结合，计算各地级市未来各年度洪水体积期望值相对当前的变化比例，并综合洪水风险及其不确定性，为城市排水系统管理提供了建议。',
      },
      {
        id: 'j8',
        title:
          'WANG L, LI R, DONG X. Integrated modeling of urban mobility, flood inundation, and sewer hydrodynamics processes to support resilience assessment of urban drainage systems[J/OL]. Water Science and Technology, 2024, 90(1): 124-141.',
        meta: '系统评估',
        year: '2024',
        abstract:
          '随着极端天气事件频发和灾害认知的深化，韧性在城市排水系统中受到广泛关注。本研究开发了一个动态模型，整合城市交通、洪水淹没和排水管网水动力过程，能够模拟降雨对人类出行行为的影响以及径流产生、径流入管、节点溢流、洪水迁移、城市交通和居民用水等全过程。研究从财产损失和城市交通两个角度评估了城市排水系统在不同重现期降雨事件下的韧性，发现不同重现期降雨下通勤时间的平均增幅为 6.4% 至 203.9%；若降雨接近早高峰时段，城市交通的年度期望损失为财产损失年度期望值的 9.1%。',
      },
    ],
  },
  {
    id: 'patent',
    label: '专利与软著',
    en: 'Patents & Software',
    items: [
      {
        id: 'pt1',
        title:
          '董欣, 张大臻, 曾思育. 一种城市污水系统厂网协同优化方法、装置及电子设备[P]. 北京市: CN202211341645.2, 2023-05-16.',
        meta: '未来规划',
        year: '2023',
        abstract:
          '本公开提供了一种城市污水系统厂网协同优化方法、装置及电子设备。该方法通过构建有向无权图与约束子图，基于信息素数组搜索可行方案，并利用优化目标函数迭代更新方案集与信息素值，直至目标函数改进幅度小于阈值，从而完成城市污水系统厂网的协同优化过程。',
      },
      {
        id: 'pt2',
        title:
          '曾思育, 杨萌祺, 鄂倩倩, 等. 基于 PySWMM 的排水系统多来源入流入渗和出渗量动态估算方法[P]. 北京市: CN202111044284.0, 2022-08-05.',
        meta: '系统评估',
        year: '2022',
        abstract:
          '本发明公开了一种基于 PySWMM 的排水系统多来源入流入渗和出渗量动态估算方法及装置。通过构建地下水—河水—排水系统关键节点监测体系，识别入渗出渗主要过程并构建控制方程，以 PySWMM 为接口耦合排水系统机理模型，构建入渗出渗动力学模型，并采用全局灵敏度分析与组合最优化方法进行参数识别，实现入渗出渗过程的动态模拟与评估。',
      },
      {
        id: 'pt3',
        title:
          '董欣, 王一茗, 徐智伟. 基于多智能体强化学习的城市排水系统控制方法和装置[P]. 北京市: CN202211106987.6, 2023-06-20.',
        meta: '优化控制',
        year: '2023',
        abstract:
          '本发明提供了一种基于多智能体强化学习的城市排水系统控制方法和装置。该方法对城市排水系统进行概化处理并创建虚拟模型，以水量水质变化、关键节点流量和液位为控制目标构建代理模型，采用价值分解方法识别智能体间的联动关系并构建多智能体，经过训练后对控制策略进行评估和验证，实现排水系统控制效率与控制效果的同时提升。',
      },
      {
        id: 'pt4',
        title:
          '董欣, 王一茗, 徐智伟, 等. 城市排水系统的控制方法和控制装置[P]. 北京市: CN202110342744.1, 2022-08-05.',
        meta: '优化控制',
        year: '2022',
        abstract:
          '本申请涉及一种城市排水系统控制方法及控制装置。通过获取并简化城市排水系统仿真模型，结合入流点历史流量与区域当前及预测降雨量确定未来流量值，模拟不同控制策略下的溢流量并优选控制策略，使排水系统溢流量保持在目标值以下，能够迅速找到合适的控制策略，改善城市内涝淹积情况。',
      },
      {
        id: 'pt5',
        title:
          '董欣, 杨萌祺, 秦成新. 城市流域灰绿设施系统协同优化设计的方法[P]. 北京市: CN202411279469.3, 2024-10-29.',
        meta: '系统规划',
        year: '2024',
        abstract:
          '本申请涉及雨水与生活污水处理技术领域，特别涉及一种城市流域灰绿设施系统协同优化设计的方法。方法基于基础信息构建多种气候变化情景和社会发展不确定性情景，构建可考虑各类灰绿设施系统污控效应、气候变化效应与社会发展不确定性的水环境状态转移方程，并以水质指标和成本指标为优化目标，求解多阶段、空间异质的建设策略。',
      },
      {
        id: 'pt6',
        title:
          '董欣, 王璐瑶, 徐备, 李景诚, 董润敏, 付昊桓. 基于高精度地理数据的径流路径识别与内涝耦合模拟软件 V1.0[CP/CD]. 软著: 2023SR0280519, 2023.',
        meta: '系统规划',
        year: '2023',
        abstract:
          '软件基于节点、管道等勘测数据与建筑、地铁站等地理实体数据，结合排水系统一维模型 SWMM 与二维模型 CADDIES，实现汇水区的自动划分与匹配，并在此基础上进行一维、二维与耦合模型的自动构建与模拟，输出节点内涝量、管道充满度、地面淹没水深等信息，为城市内涝风险管理提供技术支撑。',
      },
      {
        id: 'pt7',
        title:
          '张大臻, 曾思育, 董欣. 基于多元物质流模拟的城市水系统模式综合评估软件 V1.0[CP/CD]. 软著: 2020SR1914127, 2020.',
        meta: '系统评估',
        year: '2020',
        abstract:
          '软件面向城市水系统可持续性评估需求，建立基于多元物质流分析的城市水系统模式综合评估框架，包含环境、资源、技术、社会等多维度评价指标体系。其中环境、资源相关指标基于多元物质流的时空动态模拟计算，并结合基于连续采样与智能优化的规划算法生成待评价方案，增强规划的合理性与科学性。',
      },
      {
        id: 'pt8',
        title:
          '杨萌祺, 徐智伟, 秦成新, 董欣, 杜鹏飞. 基于神经网络的排水系统溢流污染控制策略优化软件 V1.0[CP/CD]. 软著: 2021SR1215015, 2021.',
        meta: '优化控制',
        year: '2021',
        abstract:
          '软件普遍适用于泵站、调蓄池等多种排水系统中的可控设施。以长短期神经网络为基础，利用遗传算法在控制策略空间中寻优，得到研究区域的最佳控制策略。',
      },
      {
        id: 'pt9',
        title:
          '董欣, 张大臻, 曾思育. 城市污水处理系统布局规划模型软件 V3.0[CP/CD]. 软著: 2022SR0517414, 2022.',
        meta: '未来规划',
        year: '2022',
        abstract:
          '基于多目标空间优化的城市污水处理系统规划模型，能够为规划区域提供满足水量和空间特征约束的可持续性布局非支配方案集。软件实现污水厂选址与污水管网空间布局的同时优化，并增加系统运行能耗优化目标，支持就地处理系统与市政系统的布局协同规划。',
      },
      {
        id: 'pt10',
        title:
          '董欣, 王一茗, 王璐瑶, 黄振宇. 城市排水系统模拟器软件 V1.0[CP/CD]. 软著: 2023SR0679716, 2023.',
        meta: '系统评估',
        year: '2023',
        abstract:
          '软件提出可实现紧密集成的一体化水量水质模型构建方法，利用机器学习技术从监测数据中挖掘案例系统特有知识，结合水力学、生物化学等通用机理知识，刻画汇水区、雨污水管网、污水处理厂以及河道中发生的动态过程，实现网厂河的集成模拟，支撑城市排水系统规划设计、运行优化和评估分析。',
      },
      {
        id: 'pt11',
        title:
          '董欣, 王一茗. 城市排水系统一体化控制软件 V1.0[CP/CD]. 软著: 2023SR0695052, 2023.',
        meta: '优化控制',
        year: '2023',
        abstract:
          '城市排水系统一体化控制软件提供一种面向水质的城市排水系统一体化实时控制工具，将联调联控的理念引入控制的全过程，从全局视角优化系统运行。',
      },
      {
        id: 'pt12',
        title:
          '董欣, 王璐瑶, 王一茗, 李如意, 黄振宇. 城市排水系统模拟器软件 V2.0[CP/CD]. 软著: 2023SR1206280, 2023.',
        meta: '系统评估',
        year: '2023',
        abstract:
          '模拟器 V2.0 构建了“人—地—网—厂—河”一体的交互模型，包含人流轨迹模块、地表水力水质模块、管网 SWMM 模块、污水厂 ASM 模块与河流箱式模块，为系统状态的动态更新提供了模拟工具。',
      },
      {
        id: 'pt13',
        title:
          '曾思育, 徐智伟, 姚越, 董欣, 杜鹏飞, 黄森辰, 刘雨桐. 排水管网动态效能评估软件 V1.0[CP/CD]. 软著: 2020SR1178461, 2020.',
        meta: '系统评估',
        year: '2020',
        abstract:
          '软件提出一套系统化动态评估排水管网效能的指标并构建评估软件。通过对排水管网运行效能的动态评价，能够完整量化污水管网各方面运行状态，为制定合理的污水管网检查修复方案提供支撑，从而更科学、高效地提升系统运行效能与管网管理水平。',
      },
      {
        id: 'pt14',
        title:
          '刘毅, 贾宁, 董欣, 曾思育, 白桦. 基于虚拟城市的城市用地—雨水管网集成模拟软件 V1.0[CP/CD]. 软著: 2020SR0124075, 2020.',
        meta: '系统评估',
        year: '2020',
        abstract:
          '软件针对实际城市空间结构固定、难以灵活调整研究变量、数据需求大、计算速度慢等不足，建立基于虚拟城市的城市用地与雨水管网耦合模拟方法体系，可根据需要设计典型空间形态的虚拟城市，自动生成具有典型结构的雨水管网系统并模拟内涝表现，为研究城市空间特征与雨水管网性能的关系提供工具。',
      },
      {
        id: 'pt15',
        title:
          '曾思育, 徐智伟, 董欣, 杜鹏飞, 黄森辰, 刘雨桐. 排水泵站调控辅助决策软件 V1.0[CP/CD]. 软著: 2020SR1174616, 2020.',
        meta: '优化控制',
        year: '2020',
        abstract:
          '软件基于现有泵站人工调控经验与历史监测数据分析，提取并优化若干控制规则，形成一套自动化的排水泵站调控辅助决策系统。通过接入管网系统实时监测值，按设定的自动控制策略生成建议控制操作并在界面显示，辅助泵站运行管理人员进行决策。',
      },
      {
        id: 'pt16',
        title:
          '董欣, 王一茗, 曾思育, 张旭东. 城市水污染控制系统结构设计与技术选择软件 V2.0[CP/CD]. 软著: 2019SR0014030, 2019.',
        meta: '未来规划',
        year: '2019',
        abstract:
          '软件以物质流流动关系为分析基础，以溢流处理、雨水径流处理和污水与再生水处理技术数据库为支撑，结合工程经济学、多目标优化算法与不确定性分析工具，对给定目标城市进行水污染控制系统结构的集成优化与技术筛选。V2.0 版本优化了多目标优化部分，改进初始种群生成方式并丰富搜索方式，提升了计算性能与优化方案质量。',
      },
    ],
  },
  {
    id: 'conference',
    label: '学术会议',
    en: 'Conferences',
    items: [
      {
        id: 'c1',
        title:
          'Dazhen Zhang, Xin Dong. (2023). Adaptation Pathways Modelling of Urban Wastewater Systems under Deep Uncertainty and Urban Expansion. 11th IWA Symposium on Modelling and Integrated Assessment, Quebec City, Canada. (Oral presentation)',
        meta: '建模仿真',
        year: '2023',
        abstract: '城市污水系统在深度不确定性和城市扩张下的适应路径建模。',
      },
      {
        id: 'c2',
        title:
          'Chen Shen, Xin Dong. (2023). Operation Strategy of a Sewer System and Green Infrastructure Layout Based on Vulnerable Facilities. 11th IWA Symposium on Modelling and Integrated Assessment, Quebec City, Canada. (Oral presentation)',
        meta: '未来规划',
        year: '2023',
        abstract: '基于脆弱设施的排水系统运行策略与绿色基础设施布局。',
      },
      {
        id: 'c3',
        title:
          'Luyao Wang, Xin Dong. (2023). Integrated Modeling of Urban Mobility, Flood Inundation, and Sewer Hydrodynamic Processes for Resilience Assessment of Urban Drainage Systems. 11th IWA Symposium on Modelling and Integrated Assessment, Quebec City, Canada. (Oral presentation)',
        meta: '系统评估',
        year: '2023',
        abstract: '城市交通流动性、洪水淹没与排水管网水力过程的集成建模用于城市排水系统韧性评估。',
      },
      {
        id: 'c4',
        title:
          'Yiming Wang, Xin Dong. (2023). Integrated Real-time Control of Urban Drainage Systems Based on Reinforcement-learning Method. 11th IWA Symposium on Modelling and Integrated Assessment, Quebec City, Canada. (Oral presentation)',
        meta: '优化控制',
        year: '2023',
        abstract: '基于强化学习方法的城市排水系统的集成实时控制。',
      },
      {
        id: 'c5',
        title:
          'Yiming Wang, Xin Dong. (2022). An Explainable Real-time Controller for Urban Drainage Systems Based on a Fuzzy Inference System. 13th IWA Conference on Instrumentation, Control and Automation, Beijing, China. (Oral presentation)',
        meta: '优化控制',
        year: '2022',
        abstract: '基于模糊推理系统的城市排水系统可解释实时控制器。',
      },
      {
        id: 'c6',
        title:
          'Zhenyu Huang, Xin Dong. (2024). A Hybrid Modelling Approach for Urban Drainage Systems: Combining Data-driven and Mechanism-driven Methods. 16th International Conference on Urban Drainage, Delft, June 2024. (Oral presentation)',
        meta: '建模仿真',
        year: '2024',
        abstract: '城市排水系统的混合建模方法：结合数据驱动与机理驱动方法。',
      },
      {
        id: 'c7',
        title:
          "Yuchen Zhou, Xin Dong. (2024). Assessment of the Impact of Climate Change on China's Water Cycle Based on Dynamic Downscaling. 16th International Conference on Urban Drainage, Delft, June 2024. (Oral presentation & Poster)",
        meta: '系统评估',
        year: '2024',
        abstract: '基于动态降尺度的气候变化对中国水循环影响评估。',
      },
    ],
  },
  {
    id: 'thesis',
    label: '学位论文',
    en: 'Theses',
    items: [
      {
        id: 'th1',
        title: '基于河道水质的排水系统厂网一体化实时控制策略研究',
        meta: '王一茗 · 博士学位论文',
        year: '2023',
        abstract:
          '面向河道水质目标，研究排水系统厂网一体化实时控制策略，探索水质导向的厂网协同调度方法，为城市排水系统的精细化运行提供支撑。',
      },
      {
        id: 'th2',
        title: '城市污水系统适应性路径规划方法研究与工具开发',
        meta: '张大臻 · 博士学位论文',
        year: '2023',
        abstract:
          '面向深度不确定性与城市扩张，研究城市污水系统的适应性路径规划方法，并开发相应的规划工具，支撑系统的长期稳健决策。',
      },
      {
        id: 'th3',
        title: '中国典型排水管网系统甲烷排放实地监测与模型模拟研究',
        meta: '刘武双 · 硕士学位论文',
        year: '2024',
        abstract:
          '对中国典型排水管网系统开展甲烷排放的实地监测，并构建模型模拟方法，为管网温室气体排放核算提供依据。',
      },
      {
        id: 'th4',
        title: '城市排水系统韧性评估与提升措施优选研究',
        meta: '王璐瑶 · 博士学位论文',
        year: '2024',
        abstract:
          '构建城市排水系统韧性评估方法，并在此基础上研究提升措施的优选策略，为韧性城市排水系统规划提供方法支撑。',
      },
      {
        id: 'th5',
        title: '城市水环境系统重大疫情环境风险模拟器开发',
        meta: '李景诚 · 硕士学位论文',
        year: '2025',
        abstract:
          '开发城市水环境系统重大疫情环境风险模拟器，支撑疫情情景下城市水环境风险的模拟与评估。',
      },
      {
        id: 'th6',
        title: '流域社会经济—水环境系统模拟与可持续发展调控',
        meta: '杨萌祺 · 博士学位论文',
        year: '2025',
        abstract:
          '构建流域社会经济与水环境系统的耦合模拟方法，研究流域可持续发展的调控路径与策略。',
      },
      {
        id: 'th7',
        title: '基于物理信息引导时空图神经网络的排水系统液位推断',
        meta: '邓梓钰 · 硕士学位论文',
        year: '2025',
        abstract: '提出物理信息引导的时空图神经网络方法，用于排水系统液位推断，提升监测数据缺失下的状态感知能力。',
      },
      {
        id: 'th8',
        title: '面向状态重构的污水管网监测布点方法研究与工具开发',
        meta: '周宇辰 · 硕士学位论文',
        year: '2026',
        abstract: '面向污水管网状态重构需求，研究监测布点方法并开发配套工具，提升管网状态感知的可靠性与经济性。',
      },
    ],
  },
];