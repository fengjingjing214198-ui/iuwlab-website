import Reveal from '@/components/base/Reveal';
import { partnerUnits } from '@/mocks/lab';

export default function PartnersSection() {
  const row = [...partnerUnits, ...partnerUnits];

  return (
    <section id="partners" className="scroll-mt-28 bg-background-50 py-8 md:py-10 overflow-hidden">
      <div className="px-6 md:px-10 lg:px-14 max-w-3xl mb-5 md:mb-7">
        <Reveal>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Collaboration
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            合作关系
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground-600">
            我们与高校、科研院所、行业企业保持长期协同合作，共同推动城市与流域水系统研究与实践。
          </p>
        </Reveal>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-50 to-transparent z-10 pointer-events-none"></div>
        <div className="flex gap-4 marquee-track whitespace-nowrap w-max">
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="inline-flex items-center text-[14px] text-foreground-700 bg-white border border-background-200 px-6 py-3 rounded-full transition-colors hover:border-primary-300 cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}