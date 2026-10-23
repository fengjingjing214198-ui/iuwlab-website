import { useEffect } from 'react';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import SoftwareHero from './components/SoftwareHero';
import SoftwareFeatured from './components/SoftwareFeatured';
import SoftwareTools from './components/SoftwareTools';
import SoftwareContact from './components/SoftwareContact';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function Software() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '软件工具 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <SoftwareHero />
      <SoftwareFeatured />
      <SoftwareTools />
      <SoftwareContact />

      <Footer />
    </main>
  );
}