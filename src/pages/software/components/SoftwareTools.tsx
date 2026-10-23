import { useState } from 'react';
import Reveal from '@/components/base/Reveal';
import { softwareTools, softwareCategories } from '@/mocks/software';

const CATEGORY_META: Record<string, { label: string; icon: string; cls: string }> = {
  assessment: { label: '系统评估', icon: 'ri-radar-line', cls: 'bg-secondary-100 text-secondary-900' },
  optimization: { label: '优化控制', icon: 'ri-cpu-line', cls: 'bg-primary-100 text-primary-800' },
  planning: { label: '空间规划', icon: 'ri-layout-grid-line', cls: 'bg-accent-100 text-accent-900' },
};

export default function SoftwareTools() {
  const [filter, setFilter] = useState('all');
  const list =
    filter === 'all' ? softwareTools : softwareTools.filter((t) => t.category === filter);

  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-10 md:py-14">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent-700 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="w-6 h-px bg-accent-400"></span>
            Toolbox
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            更多自研软件
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600">
            除开源的 IUDSim 外，课题组在评估、控制与规划方向形成了系列软件工具，均已完成软件著作权登记，可面向科研与工程场景合作应用。
          </p>
        </div>
      </Reveal>

      <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
        {softwareCategories.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2.5 rounded-full border text-[13px] transition-colors duration-300 cursor-pointer whitespace-nowrap ${
              filter === f.id
                ? 'bg-primary-500 border-primary-500 text-white'
                : 'bg-white border-background-200 text-foreground-600 hover:border-primary-400 hover:text-primary-700'
            }`}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
      >
        {list.map((t, i) => {
          const meta = CATEGORY_META[t.category];
          return (
            <Reveal key={t.id} delay={i * 50} className="h-full">
              <article className="group h-full flex flex-col rounded-2xl border border-background-200 bg-white p-6 md:p-7 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 text-white flex items-center justify-center shrink-0">
                    <i className={`${meta.icon} text-lg`}></i>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] tracking-[0.14em] px-3 py-1 rounded-full whitespace-nowrap ${meta.cls}`}
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <i className={`${meta.icon} text-xs`}></i>
                    {meta.label}
                  </span>
                </div>

                <h3
                  className="text-lg md:text-xl text-foreground-950 leading-snug"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t.name}
                </h3>
                <div
                  className="mt-1.5 text-[12px] tracking-[0.08em] text-accent-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {t.version}
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-foreground-600 flex-1">
                  {t.description}
                </p>

                <div className="mt-6 pt-5 border-t border-background-200 flex items-center justify-between gap-4">
                  <span
                    className="inline-flex items-center gap-1.5 text-[12px] text-foreground-500 whitespace-nowrap tabular-nums"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <i className="ri-file-text-line text-background-400"></i>
                    软著 {t.register}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-[13px] text-primary-700 hover:text-primary-800 cursor-pointer whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    咨询合作
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}