import Reveal from '@/components/base/Reveal';
import { teamGroups } from '@/mocks/team';

export default function TeamHero() {
  const total = teamGroups
    .filter((g) => g.id !== 'staff')
    .reduce((sum, g) => sum + g.members.length, 0);

  return (
    <section className="relative w-full bg-background-50 pt-24 md:pt-28 pb-10 md:pb-12 px-6 md:px-10 lg:px-14 border-b border-background-200">
      <div className="max-w-5xl">
        <Reveal delay={100}>
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Our Team
          </div>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl leading-[1.05] font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            团队介绍
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-3xl text-[15px] md:text-base leading-[1.9] text-foreground-600">
            课题组由清华大学环境学院董欣副教授领导，现有博士后、博士及硕士研究生
            <strong className="font-semibold text-foreground-950">{total} 人</strong>
            ，成员来自环境工程、计算科学、人工智能与城市规划等多元背景。我们倡导
            <strong className="font-semibold text-foreground-950">开放、协作、严谨、创新</strong>
            的科研文化，共同探索水系统的智能未来。
          </p>
        </Reveal>
      </div>
    </section>
  );
}