import Reveal from '@/components/base/Reveal';
import { alumniMembers } from '@/mocks/team';

export default function TeamAlumni() {
  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-12">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Alumni
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            毕业成员
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] text-foreground-600">
            课题组的毕业生广泛就职于高校、科研院所、市政设计与水务企业，成为城市水系统领域的中坚力量。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
        {alumniMembers.map((a, i) => (
          <Reveal key={a.id} delay={i * 50}>
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-background-200 bg-white px-4 py-3.5 transition-colors duration-300 hover:border-primary-300">
              <div className="min-w-0">
                <div className="text-[14px] text-foreground-950">{a.name}</div>
                <div className="mt-0.5 text-[12px] text-foreground-500" style={{ fontFamily: 'var(--font-body)' }}>
                  {a.now}
                </div>
              </div>
              <span
                className="text-[12px] text-foreground-500 whitespace-nowrap tabular-nums"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {a.year}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}