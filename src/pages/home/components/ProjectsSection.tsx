import Reveal from '@/components/base/Reveal';
import { projects } from '@/mocks/lab';

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-10">
      <Reveal>
        <div className="max-w-3xl mb-5 md:mb-7">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research Projects
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            科研项目
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground-600">
            承担国家自然科学基金、国家重点研发计划等纵向课题，并与行业企业开展产学研合作，推动技术落地。
          </p>
        </div>
      </Reveal>

      <ul className="border-t border-background-200">
        {projects.map((p, i) => (
          <li key={p.id} className="border-b border-background-200">
            <div className="group py-5 md:py-6 flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-[2.5rem_minmax(0,1fr)_9rem_7rem_1.5rem] md:items-center md:gap-x-8 cursor-pointer">
              <span
                className="text-[12px] tracking-[0.2em] text-foreground-400"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                0{i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl text-foreground-950 font-medium group-hover:text-primary-700 group-hover:underline">
                  {p.name}
                </h3>
                <div
                  className="mt-1 text-[13px] text-foreground-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {p.source}
                </div>
              </div>
              <span
                className="text-[13px] text-foreground-600 whitespace-nowrap tabular-nums md:text-right"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {p.period}
              </span>
              <span
                className="justify-self-start text-[12px] text-primary-700 bg-primary-50 px-3 py-1 rounded-full whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {p.role}
              </span>
              <i className="ri-arrow-right-up-line text-background-400 group-hover:text-primary-600 transition-colors hidden md:flex items-center justify-center"></i>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}