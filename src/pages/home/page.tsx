import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SiteNavbar from '@/components/feature/SiteNavbar';
import HeroOverlay from './components/Hero';
import StatsSection from './components/StatsSection';
import ResearchSection from './components/ResearchSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectsSection from './components/ProjectsSection';
import SoftwareSpotlight from './components/SoftwareSpotlight';
import PartnersSection from './components/PartnersSection';
import JoinSection from './components/JoinSection';
import Footer from '@/components/feature/Footer';
import Reveal from '@/components/base/Reveal';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import Topography from '@/components/base/Topography';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { useCursorSpotlight } from '@/hooks/useCursorSpotlight';

export default function Home() {
  const location = useLocation();
  const terrainRef = useMouseParallax<HTMLDivElement>({ strength: 52, ease: 0.08 });
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useCursorSpotlight<HTMLDivElement>(heroRef, { ease: 0.14 });

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      {/* 3D animated topography hero */}
      <section
        id="home"
        ref={heroRef}
        className="relative w-full h-screen min-h-[600px] overflow-hidden bg-white"
      >
        <div ref={terrainRef} className="absolute -inset-24 will-change-transform">
          <Topography
            className="absolute inset-0"
            lowColor="#5227FF"
            midColor="#FF9FFC"
            highColor="#FFFFFF"
            speed={0.35}
            morphAmount={3}
            morphSpeed={0.05}
            bands={2}
            thickness={0.01}
            scale={2}
            pixelSize={1}
            glow={0.5}
            colorMode="elevation"
            contrast={3}
            brightness={1}
            fillBands={false}
            opacity={1}
            grain
            grainIntensity={0.05}
            mouseInteraction
            mouseRadius={0.4}
            mouseStrength={0.6}
          />
        </div>

        {/* Soft light scrim to keep the headline text legible over the lines */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>

        {/* Cursor-following light pool: tighter pool that "breathes" so the water stays alive at rest */}
        <div
          ref={spotlightRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-[15] h-[400px] w-[400px] opacity-0"
          style={{ willChange: 'transform, opacity' }}
        >
          <div
            className="spotlight-breath h-full w-full rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,159,252,0.15) 0%, rgba(82,39,255,0.08) 30%, rgba(82,39,255,0) 62%)',
              filter: 'blur(30px)',
              willChange: 'transform, opacity',
            }}
          ></div>
        </div>

        <HeroOverlay />

        <div className="absolute left-1/2 bottom-8 md:bottom-10 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-neutral-700 pointer-events-none">
          <span className="text-[10px] tracking-[0.26em] uppercase">Scroll</span>
          <span className="w-px h-10 bg-neutral-700 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-4 bg-white scroll-hint-line"></span>
          </span>
        </div>
      </section>

      {/* Intro statement */}
      <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <div className="max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 inline-block"></span>
              <span className="text-[11px] tracking-[0.2em] uppercase text-foreground-500">
                Intelligent Urban Water Laboratory
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p
              className="text-base md:text-lg lg:text-xl leading-[1.9] text-foreground-600"
              style={{ fontFamily: 'var(--font-heading)', textIndent: '2em' }}
            >
              <strong className="font-semibold text-foreground-950">
                水资源管理的复杂性、城市化的加速进程、气候变化的不确定性
              </strong>
              ，以及多学科数据的海量生成，正共同挑战着城市与流域水系统的管理能力。
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p
              className="mt-5 md:mt-6 text-base md:text-lg lg:text-xl leading-[1.9] text-foreground-600"
              style={{ fontFamily: 'var(--font-heading)', textIndent: '2em' }}
            >
              我们的跨学科研究聚焦于理解这些因素对水系统全生命周期的影响，以及
              <strong className="font-semibold text-foreground-950">人类与水系统之间的复杂动态</strong>
              ，探索
              <strong className="font-semibold text-foreground-950">数据驱动的智能管理新范式</strong>
              。
            </p>
          </Reveal>
        </div>
      </section>

      <StatsSection />
      <ResearchSection />
      <AchievementsSection />
      <ProjectsSection />
      <SoftwareSpotlight />
      <PartnersSection />
      <JoinSection />

      <Footer />
    </main>
  );
}