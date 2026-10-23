import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { researchDirectionsDetail } from '@/mocks/research';

interface Props {
  active: number;
  onChange: (index: number) => void;
}

export default function ResearchTabs({ active, onChange }: Props) {
  const dir = researchDirectionsDetail[active];

  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <div className="flex justify-center mb-8 md:mb-10">
        <div
          role="tablist"
          aria-label="研究方向切换"
          className="inline-flex items-center gap-1 p-1 rounded-full bg-background-100"
        >
          {researchDirectionsDetail.map((d, i) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => onChange(i)}
              className={`px-5 md:px-7 py-2.5 rounded-full text-[13.5px] transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                active === i
                  ? 'bg-gradient-to-r from-primary-500 to-accent-600 text-white shadow-glow'
                  : 'text-foreground-600 hover:text-primary-700'
              }`}
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {d.title}
            </button>
          ))}
        </div>
      </div>

      <div key={dir.id} className="animate-fade-in">
        <Reveal>
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="flex items-baseline gap-4 mb-4">
              <span
                className="text-5xl md:text-6xl font-normal text-background-300 leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {dir.index}
              </span>
              <span
                className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {dir.en}
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {dir.title}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.9] text-foreground-600">{dir.intro}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {dir.projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <Link to={`/research/${p.id}`} className="block h-full cursor-pointer">
                <article className="group h-full flex flex-col rounded-xl overflow-hidden border border-background-200 bg-white transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-0.5">
                  <div className="w-full h-40 md:h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      title={`${p.title} 清华大学智能水系统实验室`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3
                      className="text-lg md:text-xl text-foreground-950 leading-snug"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-600 flex-1">
                      {p.summary}
                    </p>
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 self-end text-[13px] font-medium text-primary-700 group-hover:text-primary-600 transition-colors whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      了解更多
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}