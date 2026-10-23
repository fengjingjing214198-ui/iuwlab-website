import { useState } from 'react';
import Reveal from '@/components/base/Reveal';
import { projectFilters, projectsDetail } from '@/mocks/projects';

const CATEGORY_LABEL: Record<string, string> = {
  national: '国家级',
  provincial: '省部级',
  industry: '企业合作',
};

export default function ProjectsList() {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? projectsDetail : projectsDetail.filter((p) => p.category === filter);

  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Portfolio
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            承担项目
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2.5 rounded-full border text-[13px] transition-colors duration-300 cursor-pointer whitespace-nowrap ${
              filter === f.id
                ? 'bg-primary-500 border-primary-500 text-white'
                : 'bg-white border-background-200 text-foreground-600 hover:border-primary-400 hover:text-primary-700'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div key={filter} className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 70} className="h-full">
            <article className="group h-full flex flex-col rounded-2xl border border-background-200 bg-white p-6 md:p-8 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-[12px] tracking-[0.2em] text-foreground-400 tabular-nums"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.id.replace('p', '').padStart(2, '0')}
                  </span>
                  <span
                    className="text-[11px] tracking-[0.14em] uppercase text-primary-700 bg-primary-50 px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {CATEGORY_LABEL[p.category]}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary-900 bg-secondary-50 border border-secondary-200 px-3 py-1 rounded-full">
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-user-line text-[14px] text-accent-600"></i>
                  </span>
                  <span
                    className="text-[12px] font-medium whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {p.role}
                  </span>
                </div>
              </div>

              <h3
                className="text-xl md:text-2xl text-foreground-950 leading-snug group-hover:text-primary-700 group-hover:underline"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {p.name}
              </h3>

              <div
                className="mt-2 text-[13px] text-foreground-500"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {p.source}
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-foreground-600 flex-1">{p.summary}</p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] text-secondary-900 bg-secondary-50 border border-secondary-200 px-3 py-1 rounded-full whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {t}
                  </span>
                ))}
                <span
                  className="ml-auto flex items-center gap-1.5 text-[13px] text-foreground-400 whitespace-nowrap tabular-nums"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-calendar-line text-[13px]"></i>
                  </span>
                  {p.period}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}