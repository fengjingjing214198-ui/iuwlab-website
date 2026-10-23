import Reveal from '@/components/base/Reveal';

export default function ResearchHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research Directions
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            研究方向
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            我们的跨学科研究围绕城市与流域水系统的全生命周期展开，从
            <strong className="font-semibold text-foreground-950">科学评估</strong>到
            <strong className="font-semibold text-foreground-950">空间优化</strong>再到
            <strong className="font-semibold text-foreground-950">智能控制</strong>
            ，构建可量化、可优化、可调控的方法体系，探索数据驱动的城市水系统智能管理新范式。
          </p>
        </Reveal>
      </div>
    </section>
  );
}