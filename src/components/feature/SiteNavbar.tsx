import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

type NavItem = { label: string; to: string; hash: string };

const navLinks: NavItem[] = [
  { label: '首页', to: '/', hash: '' },
  { label: '新闻动态', to: '/news', hash: '' },
  { label: '研究方向', to: '/research', hash: '' },
  { label: '科研成果', to: '/achievements', hash: '' },
  { label: '科研项目', to: '/projects', hash: '' },
  { label: '软件工具', to: '/software', hash: '' },
  { label: '团队介绍', to: '/team', hash: '' },
];

const joinLink: NavItem = { label: '加入我们', to: '/join', hash: '' };

export default function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 200 && y > lastY + 4) setHidden(true);
      else if (y < lastY - 4) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (item: NavItem) => {
    if (item.to === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.to);
  };

  const go = (event: React.MouseEvent, item: NavItem) => {
    event.preventDefault();
    setOpen(false);
    const targetHash = item.hash || '';
    if (location.pathname === item.to && location.hash === targetHash) {
      if (targetHash) {
        document.querySelector(targetHash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    navigate(item.to + targetHash);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || open ? 'bg-white/95 backdrop-blur border-b border-background-200' : 'bg-transparent'
      } ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4 md:py-5">
        <NavLink
          to="/"
          className="group flex items-center gap-3 cursor-pointer whitespace-nowrap"
          aria-label="返回首页"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 text-white flex items-center justify-center shrink-0 shadow-soft">
            <i className="ri-water-flash-line text-lg"></i>
          </span>
          <span className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-body)' }}>
            <span className="text-[15px] font-medium tracking-[0.1em] text-foreground-950">
              IUW<span className="font-normal">Lab</span>
            </span>
            <span className="text-[10px] tracking-[0.1em] text-foreground-500 mt-0.5">
              智能水系统实验室
            </span>
          </span>
        </NavLink>

        <ul className="hidden md:flex flex-1 items-center justify-center gap-4 px-4 lg:gap-6 xl:gap-9">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                <a
                  href={link.to + link.hash}
                  onClick={(e) => go(e, link)}
                  className={`group relative inline-block text-[16px] tracking-wide transition-colors cursor-pointer whitespace-nowrap py-1 ${
                    active ? 'text-primary-700' : 'text-foreground-700 hover:text-primary-700'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-px bg-primary-500 origin-left transition-transform duration-500 ease-out ${
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={joinLink.to + joinLink.hash}
            onClick={(e) => go(e, joinLink)}
            className="group relative overflow-hidden text-[13.5px] tracking-wide text-white bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap inline-flex items-center gap-2 shadow-glow"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="absolute inset-0 bg-white scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left transition-transform duration-500 ease-out"></span>
            <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-primary-700">
              加入我们
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground-950 cursor-pointer"
        >
          <i className={open ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'}></i>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-white/98 backdrop-blur border-t border-background-200 transition-[max-height,opacity] duration-500 ${
          open ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <li key={link.label}>
                <a
                  href={link.to + link.hash}
                  onClick={(e) => go(e, link)}
                  className={`block text-sm py-2.5 border-b border-background-100 cursor-pointer ${
                    active ? 'text-primary-700 font-medium' : 'text-foreground-800'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-3">
            <a
              href={joinLink.to + joinLink.hash}
              onClick={(e) => go(e, joinLink)}
              className="inline-block text-sm text-white bg-gradient-to-r from-primary-600 to-accent-600 px-5 py-2.5 rounded-full cursor-pointer whitespace-nowrap shadow-glow"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              加入我们
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}