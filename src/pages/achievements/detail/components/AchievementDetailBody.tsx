import Reveal from '@/components/base/Reveal';

interface Props {
  abstract: string;
  groupLabel: string;
  meta: string;
  year: string;
}

const META_ICONS: Record<string, string> = {
  成果类别: 'ri-bookmark-line',
  研究方向: 'ri-route-line',
  年份: 'ri-calendar-line',
};

export default function AchievementDetailBody({ abstract, groupLabel, meta, year }: Props) {
  const metaTags = [
    { label: '成果类别', value: groupLabel },
    { label: '研究方向', value: meta },
    { label: '年份', value: year },
  ];

  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <div className="max-w-4xl">
        <Reveal>
          <h2
            className="text-xl md:text-2xl font-semibold text-foreground-950 mb-6 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            简介
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {metaTags.map((t) => (
              <span
                key={t.label}
                className="group inline-flex items-center gap-2 rounded-full border border-background-200 bg-background-100 pl-2 pr-4 py-1.5 cursor-pointer transition-all duration-200 ease-out hover:border-primary-300 hover:bg-primary-50/70 hover:-translate-y-0.5"
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-primary-50 text-primary-600 shrink-0 transition-colors duration-200 group-hover:bg-primary-100">
                  <i className={`${META_ICONS[t.label]} text-[13px]`}></i>
                </span>
                <span className="text-[12.5px] text-foreground-500 transition-colors duration-200 group-hover:text-foreground-600" style={{ fontFamily: 'var(--font-body)' }}>
                  {t.label}
                </span>
                <span className="text-[13px] text-foreground-950 transition-colors duration-200" style={{ fontFamily: 'var(--font-body)' }}>
                  {t.value}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[15.5px] leading-[1.95] md:text-[16px] text-foreground-700">{abstract}</p>
        </Reveal>
      </div>
    </section>
  );
}