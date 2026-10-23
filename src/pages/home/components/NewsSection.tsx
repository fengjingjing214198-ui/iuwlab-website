import Reveal from '@/components/base/Reveal';
import { newsItems } from '@/mocks/lab';

export default function NewsSection() {
  return (
    <section id="news" className="scroll-mt-28 bg-background-100 px-6 md:px-10 lg:px-14 py-20 md:py-28">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <div
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              News &amp; Events
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              新闻动态
            </h2>
          </div>
          <a
            href="#news"
            className="group text-sm text-primary-700 hover:text-primary-800 transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            查看全部动态
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
          </a>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {newsItems.map((n, i) => (
          <Reveal key={n.id} delay={i * 100} className="h-full">
            <article className="group bg-white rounded-2xl overflow-hidden border border-background-200 h-full flex flex-col transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  title={`${n.title} 清华大学智能水系统实验室`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[11px] tracking-[0.08em] uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {n.category}
                  </span>
                  <span
                    className="text-[12px] text-foreground-500"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {n.date}
                  </span>
                </div>
                <h3 className="text-[15px] leading-snug text-foreground-950 font-medium group-hover:text-primary-700 group-hover:underline mb-3">
                  {n.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-foreground-600 flex-1">{n.excerpt}</p>
                <span
                  className="mt-5 inline-flex items-center gap-2 text-[13px] text-primary-700 group-hover:text-primary-800"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  查看详情
                  <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}