import Reveal from '@/components/base/Reveal';
import { softwareCapabilities } from '@/mocks/software';

interface Props {
  embedded?: boolean;
}

export default function SoftwareCapabilities({ embedded = false }: Props) {
  const grid = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      {softwareCapabilities.map((c, i) => (
        <Reveal key={c.id} delay={i * 80} className="h-full">
          <article className="relative h-full rounded-lg border border-background-200 bg-white p-4 md:p-5 transition-all duration-300 hover:border-accent-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-accent-50 border border-accent-200 text-accent-600 flex items-center justify-center shrink-0">
                <i className={`${c.icon} text-[15px]`}></i>
              </span>
              <h3
                className="text-base md:text-[15px] text-foreground-950 leading-snug"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {c.title}
              </h3>
            </div>
            <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
              {c.description}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );

  if (embedded) {
    return grid;
  }

  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-6 md:py-8">
      <Reveal>
        <div className="max-w-3xl mb-6 md:mb-8">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-3"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Capabilities
          </div>
          <h2
            className="text-2xl md:text-3xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            产品功能
          </h2>
          <p className="mt-4 text-[14px] leading-[1.8] text-foreground-600">
            IUDSim 可对城市排水系统的主要要素与过程进行集成模拟，覆盖从降雨产流到河道响应的完整链条，并刻画人类行为与基础设施之间的动态互动。
          </p>
        </div>
      </Reveal>
      {grid}
    </section>
  );
}