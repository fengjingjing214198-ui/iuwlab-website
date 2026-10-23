import { useEffect, useRef } from 'react';

interface MouseParallaxOptions {
  /** Maximum pixel offset from the center position. */
  strength?: number;
  /** Follow easing, 0-1. Lower is smoother/slower. */
  ease?: number;
}

/**
 * Returns a ref. Attach it to any element to make it drift subtly in
 * response to the pointer position, creating a layered parallax feel.
 */
export function useMouseParallax<T extends HTMLElement>({
  strength = 20,
  ease = 0.08,
}: MouseParallaxOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      target.x = -nx * strength;
      target.y = -ny * strength;
    };
    const onReset = () => {
      target.x = 0;
      target.y = 0;
    };

    const loop = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      el.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onReset);
    window.addEventListener('blur', onReset);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onReset);
      window.removeEventListener('blur', onReset);
      el.style.transform = '';
    };
  }, [strength, ease]);

  return ref;
}