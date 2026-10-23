import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';

interface Item {
  id: string;
  title: string;
  meta: string;
  year: string;
}

interface Props {
  groupLabel: string;
  items: Item[];
}

export default function RelatedAchievements({ groupLabel, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="bg-background-100/60 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-t border-background-200">
      <div className="max-w-4xl">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div
                className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                More in {groupLabel}
              </div>
              <h2
                className="text-xl md:text-2xl font-semibold text-foreground-950 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                同类成果
              </h2>
            </div>
            <Link
              to="/achievements"
              className="group hidden sm:inline-flex items-center gap-2 text-[13px] text-foreground-600 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              返回全部成果
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          </div>
        </Reveal>

        <ul className="border-t border-background-200">
          {items.map((it, i) => (
            <li key={it.id} className="border-b border-background-200">
              <Link
                to={`/achievements/${it.id}`}
                className="group py-5 flex items-start gap-4 md:grid md:grid-cols-[2.5rem_minmax(0,1fr)_9rem_4rem] md:items-center md:gap-x-6 cursor-pointer"
              >
                <span
                  className="text-[12px] tracking-[0.2em] text-foreground-400 tabular-nums"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="min-w-0 text-[14.5px] md:text-[15px] text-foreground-950 leading-relaxed group-hover:text-primary-700 group-hover:underline">
                  {it.title}
                </h3>
                <span
                  className="hidden md:block text-[13px] text-foreground-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {it.meta}
                </span>
                <span
                  className="hidden md:block text-[13px] text-foreground-600 tabular-nums md:text-right"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {it.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}