import Reveal from '@/components/base/Reveal';
import { joinSupport } from '@/mocks/join';

export default function JoinSupport() {
  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-t border-background-200">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Support
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            支持与保障
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
        {joinSupport.map((s, i) => (
          <Reveal key={s.id} delay={i * 90} className="h-full">
            <div className="h-full rounded-2xl border border-background-200 bg-white p-6 md:p-8 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1">
              <span className="w-11 h-11 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mb-5">
                <i className={`${s.icon} text-lg`}></i>
              </span>
              <h3
                className="text-lg md:text-xl text-foreground-950"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}