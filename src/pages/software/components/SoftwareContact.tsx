import Reveal from '@/components/base/Reveal';

const paths = [
  {
    id: 'p1',
    icon: 'ri-download-2-line',
    title: '开放下载',
    description:
      'IUDSim 面向科研与工程应用开源免费，前往 Gitee 仓库即可获取源码、文档与示例数据。',
  },
  {
    id: 'p2',
    icon: 'ri-award-line',
    title: '授权与应用',
    description:
      '系列自研软件工具均已完成软件著作权登记，可面向评估、控制与规划场景提供授权与合作应用。',
  },
  {
    id: 'p3',
    icon: 'ri-team-line',
    title: '联合开发',
    description:
      '面向具体流域或城市的实际需求，我们乐于联合定制模型与决策支持系统，共同申报与共建平台。',
  },
];

export default function SoftwareContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-t border-background-200"
    >
      <Reveal>
        <div className="max-w-3xl mb-10 md:mb-12">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Work With Us
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            下载使用
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-foreground-600">
            无论是直接使用开源工具、获取软件授权，还是针对特定场景联合开发，都欢迎与我们取得联系。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">
        {paths.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} className="h-full">
            <article className="h-full rounded-2xl border border-background-200 bg-white p-6 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1">
              <span className="w-12 h-12 rounded-full bg-secondary-100 text-secondary-900 flex items-center justify-center">
                <i className={`${p.icon} text-xl`}></i>
              </span>
              <h3
                className="mt-5 text-lg text-foreground-950"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">
                {p.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}