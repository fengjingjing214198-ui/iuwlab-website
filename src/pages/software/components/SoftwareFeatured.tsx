import Reveal from '@/components/base/Reveal';
import { flagshipSoftware as s } from '@/mocks/software';
import SoftwareCapabilities from '@/pages/software/components/SoftwareCapabilities';

export default function SoftwareFeatured() {
  return (
    <section
      id="iudsim"
      className="scroll-mt-28 bg-background-50 px-6 md:px-10 lg:px-14 py-12 md:py-16"
    >
      {/* Product identity */}
      <Reveal>
        <div className="max-w-3xl mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-100 text-accent-900 text-[11px] font-medium tracking-[0.14em] uppercase leading-none"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
              {s.badge}
            </span>
            <span
              className="text-[11px] tracking-[0.16em] uppercase text-foreground-500 leading-none"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {s.fullName}
            </span>
          </div>
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-950 tracking-[-0.01em] leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {s.name}
            <span className="text-foreground-500 font-normal"> · {s.cnName}</span>
          </h2>
        </div>
      </Reveal>

      {/* 产品简介 */}
      <div>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-background-200 bg-gradient-to-br from-secondary-50 via-background-50 to-background-100 px-5 py-7 md:px-8 md:py-9">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 bg-background-200"
            ></span>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-20 w-64 h-64 rounded-full bg-secondary-200/40 blur-3xl"
            ></div>

            <div className="relative">
              <div className="flex items-center gap-2.5 mb-8 md:mb-10">
                <span
                  className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-accent-400 bg-background-50 text-[12px] md:text-[13px] font-semibold text-accent-600 tabular-nums leading-none shrink-0"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  01
                </span>
                <span className="w-7 h-0.5 bg-accent-400"></span>
                <span
                  className="text-lg md:text-xl font-semibold text-foreground-950 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  产品简介
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[19fr_21fr] gap-6 lg:gap-10 items-stretch">
                <div className="flex flex-col justify-center">
                  <p
                    className="text-[15px] md:text-[16px] leading-[2] text-foreground-700"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {s.tagline}
                    <a
                      href={s.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group ml-1.5 inline-flex items-center gap-1 align-baseline text-[13px] font-semibold text-primary-700 hover:text-primary-800 transition-colors cursor-pointer"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <i className="ri-article-line text-base"></i>
                      查看完整产品手册
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                  </p>

                  <div className="mt-8 md:mt-9 flex flex-col sm:flex-row gap-3">
                    <a
                      href={s.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm hover:from-primary-700 hover:to-accent-700 transition-colors cursor-pointer whitespace-nowrap shadow-glow"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <i className="ri-git-repository-line text-base"></i>
                      前往 Gitee 获取源码
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
                    </a>
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-background-300 bg-white text-foreground-800 text-sm hover:border-primary-400 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <i className="ri-hand-heart-line text-base"></i>
                      联系合作
                    </a>
                  </div>
                </div>

                <div>
                  <figure className="relative h-[337px] md:h-[396px] overflow-hidden rounded-2xl border border-background-200">
                    <img
                      src={s.image}
                      alt={`${s.name} ${s.cnName} 城市排水系统模拟器界面示意`}
                      title={`${s.name} 城市排水系统模拟器 清华大学智能水系统实验室`}
                      className="w-full h-full object-cover object-top"
                    />
                    <figcaption
                      className="absolute left-0 bottom-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent text-white text-[12px]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      “人—地—网—厂—河”全过程紧耦合模拟
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* connector 01 → 02 */}
      <div
        aria-hidden="true"
        className="flex justify-start pl-[34px] md:pl-[48px] pt-5 md:pt-6"
      >
        <span className="w-px h-5 md:h-6 bg-gradient-to-b from-accent-300/60 via-accent-400/80 to-accent-500"></span>
      </div>

      {/* 产品亮点 */}
      <div className="mt-5 md:mt-6">
        <div className="relative overflow-hidden rounded-3xl border border-background-200 bg-gradient-to-br from-secondary-50 via-background-50 to-background-100 px-5 py-7 md:px-8 md:py-9">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 bg-background-200"
          ></span>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 w-64 h-64 rounded-full bg-secondary-200/40 blur-3xl"
          ></div>
          <div className="relative">
            <Reveal>
              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-accent-400 bg-background-50 text-[12px] md:text-[13px] font-semibold text-accent-600 tabular-nums leading-none shrink-0"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    02
                  </span>
                  <span className="w-7 h-0.5 bg-accent-400"></span>
                  <span
                    className="text-lg md:text-xl font-semibold text-foreground-950 tracking-[-0.01em]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    产品亮点
                  </span>
                </div>
                <p
                  className="max-w-3xl text-[14px] md:text-[15px] leading-[1.85] text-foreground-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  从建模精度到交互体验，IUDSim 在四个关键维度上做了针对性打磨。
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {s.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 60} className="h-full">
                  <div className="h-full flex items-start gap-3">
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary-100 text-secondary-600 shrink-0">
                      <i className={`${h.icon} text-[18px]`}></i>
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-foreground-950">{h.title}</p>
                      <p className="mt-1 text-[13px] leading-[1.7] text-foreground-600">{h.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* connector 02 → 03 */}
      <div
        aria-hidden="true"
        className="flex justify-start pl-[34px] md:pl-[48px] pt-5 md:pt-6"
      >
        <span className="w-px h-5 md:h-6 bg-gradient-to-b from-accent-300/60 via-accent-400/80 to-accent-500"></span>
      </div>

      {/* 产品功能 */}
      <div className="mt-5 md:mt-6">
        <div className="relative overflow-hidden rounded-3xl border border-background-200 bg-gradient-to-br from-secondary-50 via-background-50 to-background-100 px-5 py-7 md:px-8 md:py-9">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-0.5 bg-background-200"
          ></span>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 w-64 h-64 rounded-full bg-secondary-200/40 blur-3xl"
          ></div>
          <div className="relative">
            <Reveal>
              <div className="mb-8 md:mb-10">
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full border border-accent-400 bg-background-50 text-[12px] md:text-[13px] font-semibold text-accent-600 tabular-nums leading-none shrink-0"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    03
                  </span>
                  <span className="w-7 h-0.5 bg-accent-400"></span>
                  <span
                    className="text-lg md:text-xl font-semibold text-foreground-950 tracking-[-0.01em]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    产品功能
                  </span>
                </div>
                <p
                  className="max-w-3xl text-[14px] md:text-[15px] leading-[1.85] text-foreground-600"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  IUDSim 可对城市排水系统的主要要素与过程进行集成模拟，覆盖从降雨产流到河道响应的完整链条，并刻画人类行为与基础设施之间的动态互动。
                </p>
              </div>
            </Reveal>
            <SoftwareCapabilities embedded />
          </div>
        </div>
      </div>
    </section>
  );
}