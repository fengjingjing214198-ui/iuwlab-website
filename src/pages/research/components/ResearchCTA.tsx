import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { contactInfo } from '@/mocks/lab';

export default function ResearchCTA() {
  return (
    <section className="relative w-full min-h-[340px] md:min-h-0 md:h-[340px] overflow-hidden flex items-center py-14 md:py-0">
      <img
        src="https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20bright%20modern%20water%20research%20facility%20interior%20with%20researchers%20gathered%20around%20a%20large%20screen%20showing%20water%20system%20maps%2C%20soft%20natural%20daylight%2C%20muted%20neutral%20grey%20and%20sage%20green%20tones%2C%20clean%20academic%20atmosphere%2C%20cinematic%20composition%2C%20generous%20negative%20space%2C%20high%20detail&width=1800&height=1000&seq=dxiuw-rd-cta-01&orientation=landscape"
        alt="科研人员在城市水系统调度大屏前讨论"
        title="与清华大学智能水系统实验室开展合作研究"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55"></div>
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        <Reveal className="max-w-2xl text-white">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-white/70 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Collaboration
          </div>
          <h2
            className="text-2xl md:text-4xl font-semibold tracking-[-0.01em] leading-[1.05]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            与我们开展合作研究
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85 max-w-xl">
            我们欢迎与科研机构、行业伙伴及学术团体围绕城市与流域水系统开展协同合作，共同推进数据驱动的智能管理新范式。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm hover:from-primary-600 hover:to-accent-700 transition-colors cursor-pointer whitespace-nowrap shadow-glow"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              联系我们
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
            <Link
              to="/team"
              className="group inline-flex items-center gap-3 text-sm text-white/90 hover:text-white cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-primary-700 transition-colors">
                <i className="ri-team-line text-sm"></i>
              </span>
              了解团队
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}