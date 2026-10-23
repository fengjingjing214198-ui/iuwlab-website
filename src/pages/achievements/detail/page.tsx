import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SiteNavbar from '@/components/feature/SiteNavbar';
import Footer from '@/components/feature/Footer';
import ScrollProgress from '@/components/feature/ScrollProgress';
import BackToTop from '@/components/feature/BackToTop';
import AchievementDetailHero from './components/AchievementDetailHero';
import AchievementDetailBody from './components/AchievementDetailBody';
import RelatedAchievements from './components/RelatedAchievements';
import { achievementGroups } from '@/mocks/achievements';

const HOME_TITLE = '清华大学智能水系统实验室 IUWLab — 城市与流域水系统智能管理';

export default function AchievementDetail() {
  const { itemId } = useParams();

  const group = achievementGroups.find((g) => g.items.some((it) => it.id === itemId));
  const item = group?.items.find((it) => it.id === itemId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [itemId]);

  useEffect(() => {
    if (group) {
      document.title = `科研成果 · ${group.label} — 清华大学智能水系统实验室 IUWLab`;
    }
    return () => {
      document.title = HOME_TITLE;
    };
  }, [group]);

  if (!group || !item) {
    return (
      <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
        <ScrollProgress />
        <SiteNavbar />
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-28">
          <h1
            className="text-2xl md:text-3xl font-semibold text-foreground-950 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            未找到该成果内容
          </h1>
          <p className="text-[15px] text-foreground-600 mb-8">你访问的内容可能已被移除或链接有误。</p>
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-primary-600 to-accent-600 cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <i className="ri-arrow-left-line"></i>
            返回科研成果
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = group.items.filter((it) => it.id !== item.id);

  return (
    <main className="relative w-full bg-background-50" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollProgress />
      <SiteNavbar />
      <BackToTop />

      <AchievementDetailHero
        groupLabel={group.label}
        groupEn={group.en}
        title={item.title}
        meta={item.meta}
        year={item.year}
      />
      <AchievementDetailBody
        abstract={item.abstract}
        groupLabel={group.label}
        meta={item.meta}
        year={item.year}
      />
      <RelatedAchievements groupLabel={group.label} items={related} />

      <Footer />
    </main>
  );
}