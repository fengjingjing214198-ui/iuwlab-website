import Reveal from '@/components/base/Reveal';

export default function JoinHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join Us
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.02] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            加入我们
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            课题组长期招收热爱科研、勇于探索的
            <strong className="font-semibold text-foreground-950">研究生、博士后</strong>
            与
            <strong className="font-semibold text-foreground-950">青年研究者</strong>
            ，共同探索数据驱动的城市与流域水系统智能管理新范式。无论你来自哪个专业，只要对水系统的未来充满好奇，我们都期待与你相遇。
          </p>
        </Reveal>
      </div>
    </section>
  );
}