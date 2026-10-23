import { useEffect, useRef, type CSSProperties } from 'react';
import './DepthText.css';

interface DepthTextProps {
  text: string;
  layers?: number;
  depth?: number;
  faceColor?: string;
  depthColor?: string;
  depthColorEnd?: string;
  tilt?: number;
  pointerTracking?: boolean;
  smoothing?: number;
  perspective?: number;
  autoOrbit?: boolean;
  orbitSpeed?: number;
  breathe?: boolean;
  breatheAmplitude?: number;
  breatheSpeed?: number;
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  fontFamily?: string;
  shadow?: boolean;
  interactiveRange?: number;
  className?: string;
}

const resolveSize = (value: number | string | undefined): string | undefined => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

const clampBy = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const parseColor = (value: string): [number, number, number] | null => {
  const hex = value.trim().replace('#', '');
  if (hex.length === 3) {
    return [
      parseInt(hex[0] + hex[0], 16),
      parseInt(hex[1] + hex[1], 16),
      parseInt(hex[2] + hex[2], 16),
    ];
  }
  if (hex.length === 6) {
    return [
      parseInt(hex.slice(0, 2), 16),
      parseInt(hex.slice(2, 4), 16),
      parseInt(hex.slice(4, 6), 16),
    ];
  }
  return null;
};

const mixColor = (from: string, to: string, t: number): string => {
  const a = parseColor(from);
  const b = parseColor(to);
  if (!a || !b) return from;
  const ratio = clampBy(t, 0, 1);
  const r = Math.round(a[0] + (b[0] - a[0]) * ratio);
  const g = Math.round(a[1] + (b[1] - a[1]) * ratio);
  const bl = Math.round(a[2] + (b[2] - a[2]) * ratio);
  return `rgb(${r}, ${g}, ${bl})`;
};

export default function DepthText({
  text,
  layers = 34,
  depth = 2.4,
  faceColor = '#f8fafc',
  depthColor = '#7c3aed',
  depthColorEnd,
  tilt = 7.5,
  pointerTracking = false,
  smoothing = 0.14,
  perspective = 900,
  autoOrbit = false,
  orbitSpeed = 0.35,
  breathe = false,
  breatheAmplitude = 8,
  breatheSpeed = 0.55,
  fontSize,
  fontWeight = 900,
  letterSpacing,
  fontFamily,
  shadow = false,
  interactiveRange = 26,
  className = '',
}: DepthTextProps) {
  const stageRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const inner = innerRef.current;
    if (!stage || !inner) return;

    const lerp = Math.min(1, Math.max(0.01, smoothing));
    let curX = tilt;
    let curY = 0;
    let targetX = tilt;
    let targetY = 0;
    let orbit = 0;
    let t = 0;
    let raf = 0;

    const handleMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetY = nx * interactiveRange * 2;
      targetX = tilt - ny * interactiveRange * 1.2;
    };

    const reset = () => {
      targetX = tilt;
      targetY = 0;
    };

    if (pointerTracking) {
      window.addEventListener('pointermove', handleMove);
      window.addEventListener('pointerleave', reset);
    }

    const tick = () => {
      if (autoOrbit) orbit = (orbit + orbitSpeed) % 360;
      curX += (targetX - curX) * lerp;
      curY += (targetY - curY) * lerp;
      t += breatheSpeed * 0.012;
      const breathY = breathe ? Math.sin(t) * breatheAmplitude : 0;
      const breathX = breathe ? Math.cos(t * 0.5) * breatheAmplitude * 0.16 : 0;
      inner.style.transform = `translate3d(${breathX.toFixed(3)}px, ${breathY.toFixed(
        3,
      )}px, 0) rotateX(${curX.toFixed(3)}deg) rotateY(${(curY + orbit).toFixed(3)}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (pointerTracking) {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerleave', reset);
      }
    };
  }, [
    pointerTracking,
    smoothing,
    tilt,
    autoOrbit,
    orbitSpeed,
    breathe,
    breatheAmplitude,
    breatheSpeed,
    interactiveRange,
  ]);

  const lines = text.split('\n');
  const step = depth;
  const endColor = depthColorEnd ?? depthColor;
  const layerNodes = [];
  for (let k = 0; k < layers; k += 1) {
    const i = layers - 1 - k;
    const isFace = i === 0;
    const progress = layers > 1 ? i / (layers - 1) : 0;
    const sideColor = mixColor(depthColor, endColor, progress);
    layerNodes.push(
      <span
        key={i}
        className={`depth-text__layer ${isFace ? 'depth-text__layer--face' : ''}`}
        style={{
          transform: `translateZ(${-i * step}px)`,
          color: isFace ? faceColor : sideColor,
          zIndex: layers - i,
        }}
      >
        {lines.map((line, li) => (
          <span className="depth-text__line" key={li}>
            {line}
          </span>
        ))}
      </span>,
    );
  }

  const innerStyle: CSSProperties = {
    fontSize: resolveSize(fontSize),
    fontWeight,
    fontFamily,
    letterSpacing: typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing,
    transform: `rotateX(${tilt}deg)`,
    filter: shadow ? 'drop-shadow(0 22px 30px rgba(2, 6, 23, 0.28))' : undefined,
  };

  return (
    <span
      ref={stageRef}
      className={`depth-text ${className}`}
      style={{ perspective: `${perspective}px` }}
      aria-label={text.replace(/\n/g, ' ')}
    >
      <span ref={innerRef} className="depth-text__inner" style={innerStyle} aria-hidden="true">
        {layerNodes}
      </span>
    </span>
  );
}