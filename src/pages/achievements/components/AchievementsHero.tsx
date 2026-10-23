import Reveal from '@/components/base/Reveal';

export default function AchievementsHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research Achievements
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            科研成果
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            课题组持续在国内外权威期刊与会议发表研究论文，申请发明专利与软件著作权，并开放源代码工具。研究成果覆盖
            <strong className="font-semibold text-foreground-950">科学评估</strong>、
            <strong className="font-semibold text-foreground-950">空间优化</strong>与
            <strong className="font-semibold text-foreground-950">智能控制</strong>
            三大方向，推动前沿方法从实验室走向真实水系统。
          </p>
        </Reveal>
      </div>
    </section>
  );
}