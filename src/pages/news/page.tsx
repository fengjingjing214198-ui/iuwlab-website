import { useEffect } from 'react';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import SiteCTA from '@/components/feature/SiteCTA';
import NewsHero from './components/NewsHero';
import NewsFeatured from './components/NewsFeatured';
import NewsList from './components/NewsList';
import { contactInfo } from '@/mocks/lab';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function News() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '新闻动态 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <NewsHero />
      <NewsFeatured />
      <NewsList />

      <SiteCTA
        eyebrow="Stay Connected"
        title="关注我们的最新研究动态"
        description="想第一时间了解课题组的研究进展、合作机会与学术活动？欢迎与我们联系，或浏览我们的科研成果与科研项目。"
        image="https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20bright%20modern%20research%20studio%20with%20large%20windows%20and%20researchers%20reviewing%20water%20system%20data%20on%20screens%2C%20soft%20natural%20daylight%2C%20muted%20neutral%20grey%20and%20sage%20green%20tones%2C%20clean%20academic%20atmosphere%2C%20generous%20negative%20space%2C%20high%20detail&width=1800&height=1000&seq=dxiuw-news-cta-01&orientation=landscape"
        alt="研究人员在现代研究室查看城市水系统数据"
        primary={{ label: '联系我们', href: `mailto:${contactInfo.email}` }}
        secondary={{ label: '查看科研成果', to: '/achievements', icon: 'ri-trophy-line' }}
      />

      <Footer />
    </main>
  );
}