import Reveal from '@/components/base/Reveal';
import { researchDirectionsDetail } from '@/mocks/research';

type Direction = (typeof researchDirectionsDetail)[number];
type Project = Direction['projects'][number];

interface Props {
  direction: Direction;
  project: Project;
  tags: string[];
}

export default function DetailHero({ direction, project, tags }: Props) {
  return (
    <section className="relative w-full bg-background-50 pt-20 md:pt-24 pb-8 md:pb-10 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={120}>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] bg-secondary-100 text-secondary-900"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <i className="ri-focus-3-line"></i>
              {direction.title}
            </span>
            <span
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {direction.index} / {direction.en}
            </span>
          </div>

          <h1
            className="text-2xl md:text-3xl lg:text-4xl leading-[1.15] font-semibold text-foreground-950 tracking-[-0.01em] max-w-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.title}
          </h1>
        </Reveal>

        {tags.length > 0 && (
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[12px] bg-accent-100 text-accent-900"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}