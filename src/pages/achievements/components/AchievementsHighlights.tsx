import Reveal from '@/components/base/Reveal';
import { achievementHighlights } from '@/mocks/achievements';

export default function AchievementsHighlights() {
  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-10 md:mb-14">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Highlights
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            亮点成果
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-foreground-600">
            从封面论文到产学研平台，从行业荣誉到开放工具，代表性成果持续获得学术与产业界的双重认可。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {achievementHighlights.map((h, i) => (
          <Reveal key={h.id} delay={i * 100} className="h-full">
            <article className="group h-full flex flex-col rounded-2xl overflow-hidden border border-background-200 bg-white transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-48 md:h-52 overflow-hidden">
                <img
                  src={h.image}
                  alt={h.title}
                  title={`${h.title} 清华大学智能水系统实验室`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <span
                  className="inline-flex w-fit text-[11px] tracking-[0.14em] uppercase text-accent-700 bg-accent-50 px-3 py-1 rounded-full mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {h.category}
                </span>
                <h3
                  className="text-xl md:text-2xl text-foreground-950 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {h.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground-600 flex-1">{h.summary}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}