import Reveal from '@/components/base/Reveal';
import AnimatedNumber from '@/components/base/AnimatedNumber';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

interface Props {
  items: StatItem[];
}

export default function StatsBand({ items }: Props) {
  return (
    <section className="bg-background-50 px-6 md:px-10 lg:px-14 py-8 md:py-10 border-b border-background-200">
      <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((a) => (
            <div
              key={a.label}
              className="rounded-2xl border border-background-200 bg-white p-5 md:p-6 transition-all duration-300 shadow-soft hover:shadow-card hover:-translate-y-1"
            >
              <div
                className="text-3xl md:text-4xl font-semibold text-foreground-950 tracking-[-0.02em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedNumber value={a.value} duration={1600} suffix={a.suffix} />
              </div>
              <div className="mt-2 text-sm text-foreground-800">{a.label}</div>
              <div className="text-[12px] text-foreground-500" style={{ fontFamily: 'var(--font-body)' }}>
                {a.sub}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}