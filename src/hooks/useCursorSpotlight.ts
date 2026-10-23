import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

interface CursorSpotlightOptions {
  /** Follow easing, 0-1. Lower is smoother/slower. */
  ease?: number;
}

/**
 * Tracks the pointer inside a container and drives a spotlight element so it
 * glides toward the cursor. Returns a ref to attach to the spotlight node.
 * The spotlight node should be absolutely positioned at the container origin.
 */
export function useCursorSpotlight<T extends HTMLElement>(
  containerRef: RefObject<HTMLElement | null>,
  { ease = 0.12 }: CursorSpotlightOptions = {},
) {
  const spotRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;
    if (!container || !spot) return;
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      spot.style.opacity = '0';
      return;
    }

    const target = { x: 0, y: 0, a: 0 };
    const current = { x: 0, y: 0, a: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      target.a = 1;
    };
    const onLeave = () => {
      target.a = 0;
    };

    const loop = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      current.a += (target.a - current.a) * ease;
      spot.style.transform = `translate3d(${current.x.toFixed(2)}px, ${current.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
      spot.style.opacity = current.a.toFixed(3);
      raf = requestAnimationFrame(loop);
    };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    window.addEventListener('blur', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', onLeave);
      spot.style.opacity = '';
      spot.style.transform = '';
    };
  }, [containerRef, ease]);

  return spotRef;
}