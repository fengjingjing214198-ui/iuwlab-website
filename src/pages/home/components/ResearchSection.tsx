import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { researchDirections } from '@/mocks/lab';

export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-10">
      <Reveal>
        <div className="max-w-3xl mb-5 md:mb-7">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Research Directions
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em] leading-[1.1]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            三个方向，一条贯通的研究链路
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground-600">
            从科学评估到空间优化再到智能控制，我们围绕城市与流域水系统的全生命周期，构建可量化、可优化、可调控的方法体系。
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
        {researchDirections.map((d, i) => (
          <Reveal key={d.id} delay={i * 120} className="h-full">
            <Link to={`/research?direction=${d.detailId}`} className="block h-full cursor-pointer">
            <article className="group bg-white rounded-2xl overflow-hidden border border-background-200 h-full flex flex-col transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1 cursor-pointer">
              <div className="w-full h-56 overflow-hidden relative">
                <img
                  src={d.image}
                  alt={d.title}
                  title={`${d.title} ${d.en} 清华大学智能水系统实验室`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent"></div>
                <span
                  className="absolute top-4 left-5 text-[12px] tracking-[0.2em] text-white"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {d.index}
                </span>
              </div>
              <div className="p-5 md:p-7 flex flex-col flex-1">
                <h3
                  className="text-2xl text-foreground-950 mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {d.title}
                </h3>
                <div
                  className="text-[11px] tracking-[0.16em] uppercase text-accent-600 mb-4"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {d.en}
                </div>
                <p className="text-[14px] leading-relaxed text-foreground-600 flex-1">{d.body}</p>
                <span
                  className="mt-6 inline-flex items-center gap-2 text-[13px] text-primary-700 group-hover:text-primary-800"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  了解更多
                  <i className="ri-arrow-right-up-line transition-transform duration-300 group-hover:translate-x-1"></i>
                </span>
              </div>
            </article>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}