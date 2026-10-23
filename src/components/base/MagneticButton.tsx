import { useRef, type MouseEvent, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  as = 'button',
  href,
  strength = 0.25,
}: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  const handleMove = (e: MouseEvent) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    node.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = 'translate(0, 0)';
  };

  const base = `inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`;

  if (as === 'a') {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={base}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      className={base}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}