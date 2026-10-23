import Reveal from '@/components/base/Reveal';

export default function ProjectsHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research Projects
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            科研项目
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            课题组承担国家自然科学基金、国家重点研发计划、中国工程院咨询项目等纵向课题，并与行业企业开展产学研合作，构建
            <strong className="font-semibold text-foreground-950">从基础研究到工程示范</strong>
            的完整链条，推动技术落地与规模化应用。
          </p>
        </Reveal>
      </div>
    </section>
  );
}