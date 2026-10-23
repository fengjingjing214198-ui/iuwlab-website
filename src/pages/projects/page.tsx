import { useEffect } from 'react';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import SiteCTA from '@/components/feature/SiteCTA';
import ProjectsHero from './components/ProjectsHero';
import ProjectsList from './components/ProjectsList';
import StatsBand from '@/components/feature/StatsBand';
import { projectStats } from '@/mocks/projects';
import { contactInfo } from '@/mocks/lab';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = '科研项目 — 清华大学智能水系统实验室 IUWLab';
    return () => {
      document.title = HOME_TITLE;
    };
  }, []);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <ProjectsHero />
      <StatsBand items={projectStats} />
      <ProjectsList />

      <SiteCTA
        eyebrow="Partnership"
        title="与我们联合开展课题研究"
        description="我们长期与政府部门、科研机构及行业企业联合承担科研课题，欢迎围绕城市水系统的科学评估、空间优化与智能控制开展合作。"
        image="https://readdy.ai/api/search-image?query=Wide%20editorial%20photograph%20of%20a%20modern%20engineering%20project%20site%20with%20water%20infrastructure%20and%20researchers%20reviewing%20plans%20in%20the%20foreground%2C%20soft%20overcast%20daylight%2C%20muted%20grey%20and%20sage%20green%20tones%2C%20clean%20documentary%20composition%2C%20generous%20negative%20space%2C%20high%20detail&width=1800&height=1000&seq=dxiuw-prj-cta-01&orientation=landscape"
        alt="研究人员在城市水系统工程项目现场讨论方案"
        primary={{ label: '联系我们', href: `mailto:${contactInfo.email}` }}
        secondary={{ label: '查看科研成果', to: '/achievements', icon: 'ri-trophy-line' }}
      />

      <Footer />
    </main>
  );
}