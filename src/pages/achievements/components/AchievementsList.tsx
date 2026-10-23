import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { achievementGroups } from '@/mocks/achievements';

const GROUP_ICONS: Record<string, string> = {
  journal: 'ri-article-line',
  patent: 'ri-award-line',
  conference: 'ri-presentation-line',
  thesis: 'ri-book-open-line',
};

export default function AchievementsList() {
  const [active, setActive] = useState(0);
  const group = achievementGroups[active];

  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-10 md:mb-14">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Gallery
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            成果分类
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
        {achievementGroups.map((g, i) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(i)}
            className={`group inline-flex items-center gap-2.5 rounded-full border pl-2 pr-5 py-2 transition-colors cursor-pointer whitespace-nowrap ${
              active === i
                ? 'bg-primary-500 border-primary-500 text-white'
                : 'bg-white border-background-200 text-foreground-700 hover:border-primary-400'
            }`}
          >
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                active === i ? 'bg-white/15 text-white' : 'bg-primary-50 text-primary-600'
              }`}
            >
              <i className={`${GROUP_ICONS[g.id]} text-[15px]`}></i>
            </span>
            <span className="text-[13.5px]" style={{ fontFamily: 'var(--font-body)' }}>
              {g.label}
            </span>
          </button>
        ))}
      </div>

      <div key={group.id} className="animate-fade-in">
        <div className="flex items-baseline gap-4 mb-6">
          <span
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {group.en}
          </span>
          <span className="text-[13px] text-foreground-400" style={{ fontFamily: 'var(--font-body)' }}>
            共 {group.items.length} 项
          </span>
        </div>

        <ul className="border-t border-background-200">
          {group.items.map((item, i) => (
            <li key={item.id} className="border-b border-background-200">
              <Link
                to={`/achievements/${item.id}`}
                className="group py-5 md:py-6 flex items-start gap-4 md:grid md:grid-cols-[3rem_minmax(0,1fr)_9rem_5rem] md:items-center md:gap-x-8 cursor-pointer"
              >
                <span
                  className="text-[12px] tracking-[0.2em] text-foreground-400 tabular-nums"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="min-w-0 text-[15px] md:text-base text-foreground-950 leading-relaxed group-hover:text-primary-700 group-hover:underline">
                  {item.title}
                </h3>
                <span
                  className="hidden md:block text-[13px] text-foreground-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.meta}
                </span>
                <span
                  className="hidden md:block text-[13px] text-foreground-600 tabular-nums md:text-right"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.year}
                </span>
                <div className="md:hidden ml-auto text-right">
                  <div className="text-[12px] text-foreground-500" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.meta}
                  </div>
                  <div className="text-[12px] text-foreground-400 tabular-nums mt-0.5">{item.year}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}