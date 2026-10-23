import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';
import { contactInfo } from '@/mocks/lab';

export default function JoinContact() {
  return (
    <section className="bg-background-100 px-6 md:px-10 lg:px-14 py-10 md:py-14 border-t border-background-200">
      <Reveal>
        <div className="max-w-3xl mb-8 md:mb-10">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-foreground-500 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Contact
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground-950 tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            投递方式
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-background-200 bg-white p-6 md:p-8 shadow-soft">
            <span className="w-11 h-11 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
              <i className="ri-mail-send-line text-lg"></i>
            </span>
            <h3
              className="text-lg md:text-xl text-foreground-950"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              邮箱投递
            </h3>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-3 inline-block text-[15px] text-primary-700 underline decoration-primary-300 hover:decoration-primary-600 transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {contactInfo.email}
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground-600">
              邮件标题建议「姓名 - 学校 - 意向方向」，并附上个人简历与成绩单，我们会尽快与你联系。
            </p>
          </div>
        </Reveal>

        <Reveal delay={90} className="h-full">
          <div className="h-full rounded-2xl border border-background-200 bg-white p-6 md:p-8 shadow-soft">
            <span className="w-11 h-11 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center mb-5">
              <i className="ri-compass-3-line text-lg"></i>
            </span>
            <h3
              className="text-lg md:text-xl text-foreground-950"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              了解更多
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">
              欢迎先浏览课题组的研究方向与科研成果，找到与你兴趣契合的课题方向。
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background-300 text-[13px] text-foreground-700 hover:border-primary-400 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                研究方向
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-background-300 text-[13px] text-foreground-700 hover:border-primary-400 hover:text-primary-700 transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                科研成果
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}