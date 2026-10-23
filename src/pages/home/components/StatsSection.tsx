import Reveal from '@/components/base/Reveal';
import AnimatedNumber from '@/components/base/AnimatedNumber';
import { useInView } from '@/hooks/useInView';
import { labStats } from '@/mocks/lab';

export default function StatsSection() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="stats" className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-10 border-t border-background-100">
      <Reveal>
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-primary-500 inline-block"></span>
          <span
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research at a glance · 研究数据一览
          </span>
        </div>
      </Reveal>

      <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {labStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="group">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground-950 tracking-[-0.02em] flex items-baseline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedNumber value={s.value} duration={1800} />
                <span>{s.suffix}</span>
              </div>
              <div className="mt-3 text-sm text-foreground-800">{s.label}</div>
              <div
                className="mt-1 text-[12px] text-foreground-500"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {s.sub}
              </div>
              <div className="mt-4 h-px bg-background-200 relative overflow-hidden">
                <span
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-500 to-accent-500 ease-out"
                  style={{
                    width: inView ? '100%' : '0%',
                    transition: 'width 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
                    transitionDelay: `${i * 120}ms`,
                  }}
                ></span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}