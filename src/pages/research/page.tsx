import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import ResearchHero from './components/ResearchHero';
import ResearchTabs from './components/ResearchTabs';
import ResearchCTA from './components/ResearchCTA';
import { researchDirectionsDetail } from '@/mocks/research';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function Research() {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState(() => {
    const dirId = searchParams.get('direction');
    const idx = researchDirectionsDetail.findIndex((d) => d.id === dirId);
    return idx >= 0 ? idx : 0;
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '研究方向 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <ResearchHero />

      <ResearchTabs active={active} onChange={setActive} />

      <ResearchCTA />
      <Footer />
    </main>
  );
}