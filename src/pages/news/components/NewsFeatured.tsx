import Reveal from '@/components/base/Reveal';
import { newsFeed } from '@/mocks/news';

export default function NewsFeatured() {
  const stories = newsFeed.slice(0, 3);

  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-b border-background-200">
      <Reveal>
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary-500 inline-block"></span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Latest Stories
            </span>
          </div>
          <h2
            className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            最新动态
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {stories.map((n, i) => (
          <Reveal key={n.id} delay={i * 100}>
            <a
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col sm:flex-row gap-5 sm:items-center py-5 md:py-6 ${
                i !== 0 ? 'border-t border-background-200' : ''
              }`}
            >
              <div className="w-full sm:w-44 md:w-52 h-36 sm:h-24 md:h-28 shrink-0 overflow-hidden rounded-xl border border-background-200">
                <img
                  src={n.image}
                  alt={n.title}
                  title={`${n.title} 清华大学智能水系统实验室`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span
                    className="text-[10.5px] tracking-[0.08em] uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {n.categoryLabel}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground-700 whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <i className="ri-calendar-line text-[14px] text-primary-500"></i>
                    {n.date}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[10.5px] tracking-[0.04em] text-foreground-500 bg-background-100 border border-background-200 px-2.5 py-1 rounded-full whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <i className="ri-external-link-line text-[12px]"></i>
                    来自IUWLab公众号
                  </span>
                </div>
                <h3 className="text-[15px] md:text-lg leading-snug text-foreground-950 font-medium group-hover:text-primary-700 group-hover:underline">
                  {n.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-foreground-600 line-clamp-2">
                  {n.excerpt}
                </p>
              </div>

              <i className="hidden md:flex ri-arrow-right-line text-background-300 text-lg group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300 shrink-0"></i>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}