import { Link, NavLink } from 'react-router-dom';
import { contactInfo } from '@/mocks/lab';

const navCol = [
  { label: '首页', to: '/' },
  { label: '新闻动态', to: '/news' },
  { label: '研究方向', to: '/research' },
  { label: '科研成果', to: '/achievements' },
];

const navCol2 = [
  { label: '科研项目', to: '/projects' },
  { label: '软件工具', to: '/software' },
  { label: '团队介绍', to: '/team' },
  { label: '加入我们', to: '/#join' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-background-100">
      <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-white/10 border border-white/15 text-background-50 flex items-center justify-center shrink-0">
              <i className="ri-water-flash-line text-lg"></i>
            </span>
            <div className="leading-none" style={{ fontFamily: 'var(--font-body)' }}>
              <div className="text-[16px] font-medium tracking-[0.1em] text-background-100">
                IUW<span className="font-normal">Lab</span>
              </div>
              <div className="text-[11px] tracking-[0.2em] text-primary-300 mt-1">
                智能水系统实验室
              </div>
            </div>
          </div>
          <p
            className="mt-5 max-w-sm text-sm leading-relaxed text-primary-200/80"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            开放 · 邀请 · 合作 —— 期待与你携手，共同探索水系统的智能未来。
          </p>

          <div className="mt-7 flex items-center gap-3">
            {['ri-wechat-line', 'ri-mail-line', 'ri-github-fill', 'ri-youtube-line'].map((icon) => (
              <a
                key={icon}
                href="#"
                rel="nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-primary-200 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                aria-label="Social link"
              >
                <i className={`${icon} text-base`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-primary-300 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            快捷导航
          </div>
          <ul className="space-y-2.5">
            {navCol.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-primary-200 hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <div
            className="hidden md:block text-[11px] tracking-[0.2em] uppercase text-primary-300 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            &nbsp;
          </div>
          <ul className="space-y-2.5">
            {navCol2.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-primary-200 hover:text-white transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-primary-300 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            联系我们
          </div>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5 text-sm text-primary-200">
              <i className="ri-map-pin-line mt-0.5 text-base text-accent-300"></i>
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-primary-200">
              <i className="ri-mail-line mt-0.5 text-base text-accent-300"></i>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-white cursor-pointer whitespace-nowrap"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-primary-200">
              <i className="ri-global-line mt-0.5 text-base text-accent-300"></i>
              <span className="whitespace-nowrap">{contactInfo.website}</span>
            </li>
          </ul>

          <NavLink
            to="/"
            className="group mt-6 inline-flex items-center gap-2 text-sm text-primary-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            返回首页
            <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-10 lg:px-14 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-primary-300" style={{ fontFamily: 'var(--font-body)' }}>
          © {new Date().getFullYear()} 清华大学智能水系统实验室 IUWLab · 版权所有
        </p>
        <div className="flex items-center gap-5 text-xs text-primary-300">
          <a href="#" className="hover:text-white cursor-pointer">隐私政策</a>
          <a href="#" className="hover:text-white cursor-pointer">使用条款</a>
          <a href="#" className="hover:text-white cursor-pointer">网站地图</a>
        </div>
      </div>
    </footer>
  );
}