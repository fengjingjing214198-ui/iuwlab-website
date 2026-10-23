import Reveal from '@/components/base/Reveal';
import MemberCard from '@/components/feature/MemberCard';
import { teamGroups } from '@/mocks/team';

export default function TeamGroups() {
  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-8 md:py-12">
      <div className="space-y-12 md:space-y-16">
        {teamGroups.map((group) => (
          <div key={group.id}>
            <Reveal>
              <div className="flex items-baseline gap-4 mb-6 md:mb-8 pb-4 border-b border-background-200">
                <h2
                  className="text-2xl md:text-3xl font-semibold text-foreground-950 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {group.label}
                </h2>
                <span
                  className="text-[11px] tracking-[0.2em] uppercase text-foreground-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {group.en}
                </span>
                <span
                  className="ml-auto text-[13px] text-foreground-400 tabular-nums"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {String(group.members.length).padStart(2, '0')}
                </span>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
              {group.members.map((m, i) => (
                <Reveal key={m.id} delay={i * 50} className="h-full">
                  <MemberCard
                    name={m.name}
                    role={m.role}
                    focus={m.focus}
                    photo={m.photo}
                    tone={m.tone}
                    group={group.label}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}