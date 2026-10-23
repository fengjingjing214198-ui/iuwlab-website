import { useEffect } from 'react';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import SiteCTA from '@/components/feature/SiteCTA';
import AchievementsHero from './components/AchievementsHero';
import AchievementsHighlights from './components/AchievementsHighlights';
import AchievementsList from './components/AchievementsList';
import StatsBand from '@/components/feature/StatsBand';
import { achievementStats } from '@/mocks/achievements';
import { contactInfo } from '@/mocks/lab';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function Achievements() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '科研成果 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <AchievementsHero />
      <StatsBand items={achievementStats} />
      <AchievementsHighlights />
      <AchievementsList />

      <SiteCTA
        eyebrow="Collaboration"
        title="与我们共同推进成果转化"
        description="我们欢迎科研机构、行业伙伴与学术团体围绕城市与流域水系统开展协同合作，让研究成果更快地服务于真实场景。"
        image="https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20bright%20modern%20academic%20library%20interior%20with%20researchers%20discussing%20over%20charts%20and%20publications%2C%20soft%20natural%20daylight%2C%20muted%20neutral%20grey%20and%20warm%20beige%20tones%2C%20clean%20scholarly%20atmosphere%2C%20cinematic%20composition%2C%20generous%20negative%20space%2C%20high%20detail&width=1800&height=1000&seq=dxiuw-ach-cta-01&orientation=landscape"
        alt="科研人员在现代图书馆内围绕研究成果交流讨论"
        primary={{ label: '联系我们', href: `mailto:${contactInfo.email}` }}
        secondary={{ label: '查看科研项目', to: '/projects', icon: 'ri-stack-line' }}
      />

      <Footer />
    </main>
  );
}