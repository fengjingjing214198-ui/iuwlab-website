import { useState } from 'react';
import Reveal from '@/components/base/Reveal';
import { newsFeed, newsCategories } from '@/mocks/news';

const FEATURED_ID = 'n1';

export default function NewsList() {
  const [category, setCategory] = useState('all');

  const pool = newsFeed.filter((n) => n.id !== FEATURED_ID);
  const list = category === 'all' ? pool : pool.filter((n) => n.category === category);

  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            All Updates
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            全部动态
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
        {newsCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={`px-5 py-2.5 rounded-full border text-[13px] transition-colors duration-300 cursor-pointer whitespace-nowrap ${
              category === c.id
                ? 'bg-primary-500 border-primary-500 text-white'
                : 'bg-white border-background-200 text-foreground-600 hover:border-primary-400 hover:text-primary-700'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div
          className="py-16 text-center text-[15px] text-foreground-500"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          该分类暂无动态，敬请期待。
        </div>
      ) : (
        <div key={category} className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {list.map((n, i) => (
            <Reveal key={n.id} delay={i * 60} className="h-full">
              <a
                href={n.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl overflow-hidden border border-background-200 h-full flex flex-col transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={n.image}
                    alt={n.title}
                    title={`${n.title} 清华大学智能水系统实验室`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-3 flex-wrap">
                    <span
                      className="text-[11px] tracking-[0.08em] uppercase text-primary-700 bg-primary-50 px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {n.categoryLabel}
                    </span>
                    <span className="text-[12px] text-foreground-500" style={{ fontFamily: 'var(--font-body)' }}>
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
                  <h3 className="text-[15px] leading-snug text-foreground-950 font-medium group-hover:text-primary-700 group-hover:underline mb-3">
                    {n.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-foreground-600 flex-1">{n.excerpt}</p>
                  <span
                    className="mt-5 inline-flex items-center gap-2 text-[13px] text-primary-700 group-hover:text-primary-800"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    查看原文
                    <i className="ri-external-link-line transition-transform duration-300 group-hover:translate-x-1"></i>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}