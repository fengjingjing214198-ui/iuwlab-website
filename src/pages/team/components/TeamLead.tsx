import { type CSSProperties } from 'react';
import Reveal from '@/components/base/Reveal';
import BorderGlow from '@/components/base/BorderGlow';
import { principalInvestigator } from '@/mocks/team';
import './TeamLead.css';

export default function TeamLead() {
  const pi = principalInvestigator;

  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-4 md:py-6">
      <Reveal>
        <BorderGlow
          className="border border-background-200 bg-gradient-to-br from-background-50 via-background-100 to-primary-50"
          edgeSensitivity={30}
          glowColor="270 92 72"
          backgroundColor="transparent"
          borderRadius={16}
          glowRadius={44}
          glowIntensity={1}
          coneSpread={30}
          animated
          colors={['#c084fc', '#f472b6', '#38bdf8']}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 order-2 lg:order-1 p-6 md:p-12 flex flex-col justify-between gap-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                  <div
                    className="text-[11px] tracking-[0.24em] uppercase text-primary-600"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Principal Investigator
                  </div>
                </div>
                <h2
                  className="text-3xl md:text-[2.6rem] font-semibold text-foreground-950 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {pi.name}
                </h2>
                <div
                  className="mt-3 text-[13px] text-foreground-500"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {pi.role}
                </div>
                <p className="mt-6 text-base md:text-[1.05rem] leading-[1.95] text-foreground-700 max-w-2xl">
                  {pi.bio}
                </p>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {pi.tags.map((t, i) => (
                    <span
                      key={t}
                      className="pi-tag-sheen text-[12.5px] text-primary-700 bg-primary-50 border border-primary-100 px-3.5 py-1.5 rounded-full whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-body)', '--pi-tag-delay': `${i * 0.7}s` } as CSSProperties}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`mailto:${pi.email}`}
                className="group inline-flex items-center gap-3 text-sm text-foreground-700 hover:text-primary-700 cursor-pointer whitespace-nowrap transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="w-9 h-9 rounded-full border border-primary-200 bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-colors">
                  <i className="ri-mail-line text-sm"></i>
                </span>
                {pi.email}
              </a>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative p-5 md:p-6 flex flex-col justify-end">
              <div className="relative w-full pi-photo-backdrop">
                <img
                  src={pi.photo}
                  alt={`${pi.name} — 清华大学智能水系统实验室课题组负责人`}
                  title={`${pi.name} · 课题组负责人`}
                  className="block w-full h-[270px] lg:h-[440px] object-contain object-bottom drop-shadow-[0_18px_28px_rgba(15,23,42,0.20)]"
                />

                <div
                  className="absolute left-5 top-5 z-10 flex items-center gap-1.5 rounded-full border border-primary-200/80 bg-background-50/75 backdrop-blur-sm px-3 py-1.5 text-[10.5px] tracking-[0.22em] uppercase text-primary-700"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <i className="ri-focus-2-line text-sm"></i>
                  <span>Lead</span>
                </div>
              </div>
            </div>
          </div>
        </BorderGlow>
      </Reveal>

      <div
        aria-hidden
        className="mt-6 md:mt-8 mx-auto h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-background-300/90 to-transparent"
      ></div>
    </section>
  );
}