import Reveal from '@/components/base/Reveal';
import { joinCategories } from '@/mocks/join';

export default function JoinCategories() {
  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-10 md:mb-12">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Openings
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            招收对象
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-foreground-600">
            从希望深入课题的研究生，到蓄势待发的博士后与青年研究者，你都可以在这里找到适合自己的位置。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {joinCategories.map((c, i) => {
          const open = c.status === 'open';
          return (
            <Reveal key={c.id} delay={i * 90} className="h-full">
              <article
                className={`group h-full flex flex-col rounded-2xl border bg-white p-6 md:p-8 transition-all duration-300 ${
                  open ? 'border-background-200 shadow-soft hover:shadow-card hover:-translate-y-1' : 'border-background-200'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span
                    className="text-[12px] tracking-[0.2em] text-foreground-400 tabular-nums"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.index}
                  </span>
                  <span
                    className={`text-[11px] tracking-[0.14em] uppercase px-3 py-1 rounded-full whitespace-nowrap ${
                      open ? 'bg-gradient-to-r from-primary-500 to-accent-600 text-white' : 'bg-background-100 text-foreground-500'
                    }`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.statusLabel}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3
                    className="text-2xl md:text-3xl text-foreground-950 leading-snug"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {c.title}
                  </h3>
                  <span
                    className="text-[11px] tracking-[0.16em] uppercase text-accent-600"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {c.en}
                  </span>
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-foreground-600 flex-1">
                  {c.description}
                </p>

                <ul className="mt-6 pt-5 border-t border-background-200 flex flex-wrap gap-x-5 gap-y-2">
                  {c.highlights.map((h) => (
                    <li
                      key={h}
                      className="inline-flex items-center gap-1.5 text-[13px] text-foreground-700"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <i className="ri-check-line text-primary-500"></i>
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}