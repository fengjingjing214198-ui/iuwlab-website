import {
  useRef,
  useCallback,
  type MouseEvent,
  type ReactNode,
  type CSSProperties,
} from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children: ReactNode;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  className?: string;
}

const toHsl = (value: string): string => {
  const parts = value.trim().split(/\s+/);
  if (parts.length === 3 && parts.every((p) => /^-?\d*\.?\d+$/.test(p))) {
    return `hsl(${parts[0]} ${parts[1]}% ${parts[2]}%)`;
  }
  return value;
};

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
  className = '',
}: BorderGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width: w, height: h } = rect;

      const dLeft = x;
      const dRight = w - x;
      const dTop = y;
      const dBottom = h - y;
      const near = Math.min(dLeft, dRight, dTop, dBottom);

      const prox = Math.max(0, Math.min(1, 1 - near / Math.max(1, edgeSensitivity)));

      let px = x;
      let py = y;
      let perp = 0;
      if (near === dLeft) {
        px = 0;
        py = y;
        perp = 0;
      } else if (near === dRight) {
        px = w;
        py = y;
        perp = 180;
      } else if (near === dTop) {
        px = x;
        py = 0;
        perp = 90;
      } else {
        px = x;
        py = h;
        perp = 270;
      }

      el.style.setProperty('--bg-x', `${px}px`);
      el.style.setProperty('--bg-y', `${py}px`);
      el.style.setProperty('--bg-perp', `${perp}deg`);
      el.style.setProperty('--bg-prox', `${prox}`);
    },
    [edgeSensitivity],
  );

  const handleMouseLeave = useCallback(() => {
    ref.current?.style.setProperty('--bg-prox', '0');
  }, []);

  const styleVars = {
    '--bg-glow-color': toHsl(glowColor),
    '--bg-glow-blur': `${glowRadius}px`,
    '--bg-spread': `${coneSpread}deg`,
    '--bg-intensity': `${glowIntensity}`,
    borderRadius: `${borderRadius}px`,
    backgroundColor,
  } as CSSProperties;

  const ringGradient = `conic-gradient(from var(--bg-rotate, 0deg), ${[...colors, colors[0]].join(', ')})`;

  return (
    <div
      ref={ref}
      className={`border-glow ${animated ? 'border-glow--animated' : ''} ${className}`}
      style={styleVars}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="border-glow__ring" style={{ background: ringGradient }} />
      <span className="border-glow__spot" />
      <div className="border-glow__content">{children}</div>
    </div>
  );
}