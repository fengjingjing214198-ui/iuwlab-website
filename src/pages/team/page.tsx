import { useEffect } from 'react';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import SiteCTA from '@/components/feature/SiteCTA';
import TeamHero from './components/TeamHero';
import TeamLead from './components/TeamLead';
import TeamGroups from './components/TeamGroups';
import TeamAlumni from './components/TeamAlumni';
import { contactInfo } from '@/mocks/lab';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function Team() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '团队介绍 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <TeamHero />
      <TeamLead />
      <TeamGroups />
      <TeamAlumni />

      <SiteCTA
        eyebrow="Join Us"
        title="加入我们的研究团队"
        description="我们长期招收博士后、博士与硕士研究生，欢迎环境工程、计算科学、人工智能与城市规划等背景的同学加入，一起探索水系统的智能未来。"
        image="https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20diverse%20group%20of%20young%20researchers%20collaborating%20around%20a%20table%20with%20laptops%20and%20water%20system%20diagrams%20in%20a%20bright%20modern%20studio%2C%20soft%20natural%20daylight%2C%20muted%20neutral%20grey%20and%20sage%20green%20tones%2C%20clean%20academic%20atmosphere%2C%20generous%20negative%20space%2C%20high%20detail&width=1800&height=1000&seq=dxiuw-team-cta-01&orientation=landscape"
        alt="课题组年轻研究人员围绕水系统方案协作讨论"
        primary={{ label: '联系我们', href: `mailto:${contactInfo.email}` }}
        secondary={{ label: '查看科研项目', to: '/projects', icon: 'ri-stack-line' }}
      />

      <Footer />
    </main>
  );
}