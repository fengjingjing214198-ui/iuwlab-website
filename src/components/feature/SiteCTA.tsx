import { Link } from 'react-router-dom';
import Reveal from '@/components/base/Reveal';

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  primary: { label: string; href: string };
  secondary?: { label: string; to: string; icon: string };
}

export default function SiteCTA({
  eyebrow,
  title,
  description,
  image,
  alt,
  primary,
  secondary,
}: Props) {
  return (
    <section className="relative w-full min-h-[340px] md:min-h-0 md:h-[340px] overflow-hidden flex items-center py-14 md:py-0">
      <img
        src={image}
        alt={alt}
        title={alt}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55"></div>
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        <Reveal className="max-w-2xl text-white">
          <div
            className="text-[11px] tracking-[0.2em] uppercase text-white/70 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {eyebrow}
          </div>
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-[-0.01em] leading-[1.05]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85 max-w-xl">{description}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-600 text-white text-sm hover:from-primary-600 hover:to-accent-700 transition-colors cursor-pointer whitespace-nowrap shadow-glow"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {primary.label}
              <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1"></i>
            </a>
            {secondary && (
              <Link
                to={secondary.to}
                className="group inline-flex items-center gap-3 text-sm text-white/90 hover:text-white cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-primary-700 transition-colors">
                  <i className={`${secondary.icon} text-sm`}></i>
                </span>
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}