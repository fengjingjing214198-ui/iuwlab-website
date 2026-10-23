import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import MemberCard from '@/components/feature/MemberCard';
import { principalInvestigator, teamGroups } from '@/mocks/team';

const homeTeam = [
  {
    id: principalInvestigator.id,
    name: principalInvestigator.name,
    role: principalInvestigator.role,
    focus: principalInvestigator.focus,
    photo: principalInvestigator.photo,
    tone: 'ink',
    group: '课题组负责人',
  },
  ...teamGroups.flatMap((g) =>
    g.members.map((m) => ({
      id: m.id,
      name: m.name,
      role: m.role,
      focus: m.focus,
      photo: m.photo,
      tone: m.tone,
      group: g.label,
    })),
  ),
].slice(0, 5);

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-20 md:py-28">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
          <div>
            <div
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Our Team
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              团队介绍
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-foreground-600">
            课题组由清华大学环境学院董欣副教授领导，成员涵盖博士后、博士及硕士研究生，来自环境工程、计算科学、人工智能与城市规划等背景。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
        {homeTeam.map((m, i) => (
          <Reveal key={m.id} delay={i * 60} className="h-full">
            <MemberCard
              name={m.name}
              role={m.role}
              focus={m.focus}
              photo={m.photo}
              tone={m.tone}
              group={m.group}
            />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 md:mt-12 flex justify-center">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 rounded-md border border-background-200 bg-white px-5 py-2.5 text-sm text-foreground-700 transition-all duration-300 hover:border-primary-200 hover:text-primary-600 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            查看全部团队
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}