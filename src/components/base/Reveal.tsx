import { type CSSProperties, type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface Props {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 800,
  className = '',
  as: Tag = 'div',
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  const style: CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
    willChange: 'opacity, transform',
  };

  const Component = Tag as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error generic intrinsic element
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}