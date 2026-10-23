import Reveal from '@/components/base/Reveal';
import { researchDirectionsDetail } from '@/mocks/research';

type Direction = (typeof researchDirectionsDetail)[number];
type Project = Direction['projects'][number];

interface Detail {
  tags: string[];
  highlights: string[];
  content: string[];
}

interface Props {
  project: Project;
  detail?: Detail;
}

export default function DetailBody({ project, detail }: Props) {
  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 pt-6 md:pt-8 pb-10 md:pb-14">
      <div className="max-w-5xl">
        <Reveal>
          <div className="w-full h-56 md:h-80 lg:h-[420px] rounded-xl overflow-hidden border border-background-200">
            <img
              src={project.image}
              alt={project.title}
              title={`${project.title} 清华大学智能水系统实验室`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="mt-8 md:mt-10">
          <Reveal>
            <h2
              className="text-xl md:text-2xl font-semibold text-foreground-950 mb-6 tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              项目简介
            </h2>
          </Reveal>
          <div className="space-y-5">
            {detail?.content.map((para, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-[15.5px] leading-[1.9] md:text-[16px] md:leading-[1.95] text-foreground-700">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {detail && detail.highlights.length > 0 && (
          <div className="mt-10 md:mt-12">
            <Reveal>
              <h2
                className="text-xl md:text-2xl font-semibold text-foreground-950 mb-6 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                研究要点
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {detail.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 80} className="h-full">
                  <div className="group h-full flex items-start gap-4 rounded-xl border border-background-200 bg-white p-5 md:p-6 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-0.5">
                    <span
                      className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-accent-100 text-accent-700 text-[13px] font-medium"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[14.5px] leading-relaxed text-foreground-700 pt-1">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}