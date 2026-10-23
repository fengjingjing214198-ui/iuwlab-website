import Reveal from '@/components/base/Reveal';

export default function NewsHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            News &amp; Events
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            新闻动态
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            这里记录课题组的
            <strong className="font-semibold text-foreground-950">研究成果、合作进展与学术活动</strong>
            。从论文发表、平台共建到会议交流与团队荣誉，与您分享我们在城市与流域水系统研究道路上的每一步。
          </p>
        </Reveal>
      </div>
    </section>
  );
}