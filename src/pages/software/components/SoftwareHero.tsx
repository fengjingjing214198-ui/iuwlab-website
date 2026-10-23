import Reveal from '@/components/base/Reveal';

export default function SoftwareHero() {
  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-4 md:pb-6 px-6 md:px-10 lg:px-14">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Software Tools
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            软件工具
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-5 max-w-3xl text-[15px] md:text-base leading-[1.8] text-foreground-600">
            课题组自主研发了一系列水系统模型与决策支持软件，其中城市排水系统模拟器
            <strong className="font-semibold text-foreground-950"> IUDSim </strong>
            已正式开源，欢迎下载使用或与我们合作。
          </p>
        </Reveal>
      </div>
    </section>
  );
}