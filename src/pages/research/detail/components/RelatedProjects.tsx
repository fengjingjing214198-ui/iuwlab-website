import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { researchDirectionsDetail } from '@/mocks/research';

type Direction = (typeof researchDirectionsDetail)[number];
type Project = Direction['projects'][number];

interface Props {
  direction: Direction;
  projects: Project[];
}

export default function RelatedProjects({ direction, projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-background-100/60 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-t border-background-200">
      <div className="max-w-5xl">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <div
                className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                More in {direction.en}
              </div>
              <h2
                className="text-xl md:text-2xl font-semibold text-foreground-950 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                同方向其他项目
              </h2>
            </div>
            <Link
              to="/research"
              className="group hidden sm:inline-flex items-center gap-2 text-[13px] text-foreground-600 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              返回全部方向
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <Link to={`/research/${p.id}`} className="block h-full cursor-pointer">
                <article className="group h-full flex items-center gap-4 rounded-xl border border-background-200 bg-white p-4 md:p-5 transition-all duration-300 hover:border-primary-300 hover:-translate-y-0.5 hover:shadow-soft">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      title={`${p.title} 清华大学智能水系统实验室`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[10.5px] tracking-[0.18em] uppercase text-foreground-400 mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Research Project
                    </div>
                    <h3
                      className="text-[15px] md:text-base font-medium text-foreground-950 leading-snug line-clamp-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <i className="ri-arrow-right-line text-lg text-foreground-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all duration-300 shrink-0"></i>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}