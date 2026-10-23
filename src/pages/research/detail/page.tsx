import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import DetailHero from './components/DetailHero';
import DetailBody from './components/DetailBody';
import RelatedProjects from './components/RelatedProjects';
import { researchDirectionsDetail, researchProjectDetails } from '@/mocks/research';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

type DetailMap = Record<string, { tags: string[]; highlights: string[]; content: string[] }>;

export default function ResearchDetail() {
  const { projectId } = useParams();

  const direction = researchDirectionsDetail.find((d) =>
    d.projects.some((p) => p.id === projectId),
  );
  const project = direction?.projects.find((p) => p.id === projectId);
  const detail = projectId
    ? (researchProjectDetails as DetailMap)[projectId]
    : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [projectId]);

  useEffect(() => {
    if (project && direction) {
      document.title = `${project.title} — ${direction.title} | 清华大学智能水系统实验室 IUWLab`;
    }
    return () => {
      document.title = HOME_TITLE;
    };
  }, [project, direction]);

  if (!project || !direction) {
    return (
      <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
        <ScrollProgress />
        <SiteNavbar />
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28">
          <h1
            className="text-2xl md:text-3xl font-semibold text-foreground-950 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            未找到该研究方向内容
          </h1>
          <p className="text-[15px] text-foreground-600 mb-8">
            你访问的内容可能已被移除或链接有误。
          </p>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-primary-600 to-accent-600 cursor-pointer whitespace-nowrap shadow-glow"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <i className="ri-arrow-left-line"></i>
            返回研究方向
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = direction.projects.filter((p) => p.id !== project.id);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <DetailHero direction={direction} project={project} tags={detail?.tags ?? []} />
      <DetailBody project={project} detail={detail} />
      <RelatedProjects direction={direction} projects={related} />

      <Footer />
    </main>
  );
}