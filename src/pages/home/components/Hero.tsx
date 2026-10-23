import DepthText from '@/components/base/DepthText';

export default function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-20 flex items-center px-6 md:px-10 lg:px-14 pt-20 pb-20 md:pt-24 md:pb-32 pointer-events-none">
      <div className="w-full max-w-3xl pointer-events-auto">
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-neutral-900 inline-block"></span>
          <span
            className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-neutral-700"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            清华大学环境学院
          </span>
        </div>

        <h1 className="font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
          <DepthText
            text={'清华大学\n智能水系统实验室'}
            layers={1}
            depth={0}
            faceColor="#0A0A0A"
            tilt={5}
            smoothing={0.14}
            perspective={900}
            breathe
            breatheAmplitude={5}
            breatheSpeed={0.6}
            fontSize="clamp(1.9rem, 6vw, 4rem)"
            fontWeight={900}
          />
        </h1>

        <div
          className="mt-4 text-sm md:text-base tracking-[0.11em] uppercase text-neutral-700"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Intelligent Urban Water Laboratory · IUWLab
        </div>

        <p
          className="mt-6 max-w-xl text-[14px] md:text-[15px] leading-relaxed text-neutral-700"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          以数据驱动的算法与理论框架，优化水资源的配置与调度，探索城市与流域水系统的智能管理新范式。
        </p>

        <div className="mt-8 md:mt-10 flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-6">
          <a
            href="#research"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-neutral-950 text-white text-sm hover:bg-neutral-800 transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            了解研究方向
            <i className="ri-arrow-right-line text-base"></i>
          </a>

          <a
            href="#join"
            className="inline-flex items-center gap-3 px-1 py-1 text-sm text-neutral-800 hover:text-neutral-950 transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="w-9 h-9 rounded-full border border-neutral-400 flex items-center justify-center">
              <i className="ri-user-add-line text-sm"></i>
            </span>
            加入我们
          </a>
        </div>
      </div>
    </div>
  );
}