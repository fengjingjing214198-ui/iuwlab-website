import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { flagshipSoftware, softwareTools } from '@/mocks/software';

export default function SoftwareSpotlight() {
  return (
    <section id="software" className="scroll-mt-28 bg-background-100 px-6 md:px-10 lg:px-14 py-8 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
        <Reveal>
          <div className="flex flex-col justify-center">
            <div
              className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Software &amp; Tools
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em] leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              软件工具
            </h2>

            <p className="mt-5 text-[15px] leading-relaxed text-foreground-600 max-w-md">
              以开源的城市排水系统模拟器{' '}
              <strong className="font-semibold text-foreground-950">{flagshipSoftware.name}</strong>{' '}
              为核心，课题组在评估、控制与规划方向形成 {softwareTools.length} 项软件工具，均已完成软件著作权登记。
            </p>

            <div
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-foreground-700"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-open-source-line text-accent-500"></i>
                </span>
                <span>开源免费</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-links-line text-accent-500"></i>
                </span>
                <span>全过程紧耦合模拟</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-bar-chart-box-line text-accent-500"></i>
                </span>
                <span>输出内涝与水质等决策指标</span>
              </span>
            </div>

            <div className="mt-6">
              <Link
                to="/software"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm hover:from-primary-600 hover:to-accent-700 transition-colors cursor-pointer whitespace-nowrap overflow-hidden shadow-glow"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="relative">查看全部软件工具</span>
                <i className="ri-arrow-right-line relative transition-transform duration-300 group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-2xl overflow-hidden border border-background-200 min-h-[240px] md:min-h-[300px] lg:min-h-[360px]">
            <img
              src={flagshipSoftware.image}
              alt="IUDSim 城市排水系统模拟器界面预览"
              title="IUDSim 城市排水系统模拟器"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}