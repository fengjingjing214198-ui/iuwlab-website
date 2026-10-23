import './MemberCard.css';

export type MemberTone = 'primary' | 'accent' | 'secondary' | 'ink';

interface MemberCardProps {
  name: string;
  role: string;
  focus: string;
  photo: string;
  tone?: string;
  group?: string;
}

const toneHalo: Record<MemberTone, string> = {
  primary: 'member-photo-halo--primary',
  accent: 'member-photo-halo--accent',
  secondary: 'member-photo-halo--secondary',
  ink: 'member-photo-halo--ink',
};

function resolveTone(tone?: string): MemberTone {
  if (tone === 'primary' || tone === 'accent' || tone === 'secondary' || tone === 'ink') {
    return tone;
  }
  return 'secondary';
}

export default function MemberCard({ name, role, focus, photo, tone, group }: MemberCardProps) {
  const halo = toneHalo[resolveTone(tone)];

  return (
    <article className="group h-full flex flex-col rounded-2xl border border-background-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-background-100">
        <div className={`member-photo-halo ${halo}`}></div>
        <img
          src={photo}
          alt={`${name} — 清华大学智能水系统实验室${group ?? ''}`}
          title={`${name} · ${role}`}
          className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_12px_20px_rgba(15,23,42,0.16)] transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span
          className="absolute left-4 top-3.5 text-[10.5px] tracking-[0.22em] uppercase text-foreground-700/40"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          IUWLab
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3
          className="text-[15px] md:text-base font-semibold text-foreground-950 leading-snug"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </h3>
        <p
          className="mt-1 text-[11.5px] text-foreground-500"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {role}
        </p>
        <div className="mt-3 pt-3 border-t border-dashed border-background-300">
          <p className="text-[12px] leading-relaxed text-foreground-600">{focus}</p>
        </div>
      </div>
    </article>
  );
}