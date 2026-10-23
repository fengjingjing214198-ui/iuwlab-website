import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';

interface Props {
  groupLabel: string;
  groupEn: string;
  title: string;
  meta: string;
  year: string;
}

export default function AchievementDetailHero({ groupLabel, groupEn, title, meta, year }: Props) {
  return (
    <section className="relative w-full bg-background-50 pt-20 md:pt-24 pb-8 md:pb-10 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-4xl">
        <Reveal delay={100}>
          <Link
            to="/achievements"
            className="group inline-flex items-center gap-2 text-[13px] text-foreground-500 hover:text-primary-700 transition-colors cursor-pointer mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <i className="ri-arrow-left-line transition-transform duration-300 group-hover:-translate-x-1"></i>
            返回科研成果
          </Link>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] bg-primary-100 text-primary-900 cursor-pointer transition-all duration-200 ease-out hover:bg-primary-200/80 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <i className="ri-bookmark-3-line"></i>
              {groupLabel}
            </span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {groupEn}
            </span>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1
            className="text-xl md:text-2xl lg:text-[30px] leading-[1.3] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] bg-accent-100 text-accent-900 cursor-pointer transition-all duration-200 ease-out hover:bg-accent-200/80 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <i className="ri-focus-3-line"></i>
              {meta}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13px] text-foreground-600 cursor-pointer transition-all duration-200 ease-out hover:bg-background-100 hover:text-foreground-800 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <i className="ri-calendar-line"></i>
              {year}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}