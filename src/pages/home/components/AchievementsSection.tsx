import Reveal from '@/components/base/Reveal';
import AnimatedNumber from '@/components/base/AnimatedNumber';
import { achievements, featuredPapers } from '@/mocks/lab';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-28 bg-background-100 px-6 md:px-10 lg:px-14 py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Achievements
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em] leading-[1.08]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            科研成果
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground-600 max-w-sm">
            课题组持续在国内外期刊与会议发表研究论文，申请发明专利与软件著作权，并开放源代码工具，推动研究成果的共享与转化。
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 80} className="h-full">
                <div className="bg-white rounded-2xl border border-background-200 p-5 md:p-6 h-full transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1">
                  <div
                    className="text-3xl md:text-4xl font-semibold text-foreground-950 tracking-[-0.02em]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    <AnimatedNumber value={a.value} duration={1600} />
                  </div>
                  <div className="mt-2 text-sm text-foreground-800">{a.label}</div>
                  <div
                    className="text-[12px] text-foreground-500"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {a.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <div
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              代表性成果
            </div>
            <ul className="border-t border-background-200">
              {featuredPapers.map((p) => (
                <li
                  key={p}
                  className="border-b border-background-200 py-4 flex items-start gap-3 text-[14px] leading-relaxed text-foreground-700"
                >
                  <i className="ri-file-text-line text-primary-500 mt-0.5 text-base"></i>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}