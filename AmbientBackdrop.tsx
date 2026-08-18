'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient backdrop — subtle moving aurora behind the whole site.
 * Respects prefers-reduced-motion via global CSS rule.
 */
export function AmbientBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let t = 0;
    const render = () => {
      t += 0.0035;
      const x1 = 50 + Math.sin(t) * 8;
      const y1 = 30 + Math.cos(t * 1.3) * 6;
      const x2 = 80 + Math.cos(t * 0.8) * 6;
      const y2 = 70 + Math.sin(t * 1.1) * 5;
      const x3 = 15 + Math.sin(t * 0.7) * 5;
      const y3 = 85 + Math.cos(t * 1.4) * 4;
      el.style.setProperty('--ax', `${x1}%`);
      el.style.setProperty('--ay', `${y1}%`);
      el.style.setProperty('--bx', `${x2}%`);
      el.style.setProperty('--by', `${y2}%`);
      el.style.setProperty('--cx', `${x3}%`);
      el.style.setProperty('--cy', `${y3}%`);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'radial-gradient(60rem 40rem at var(--ax,50%) var(--ay,30%), rgba(124,92,255,0.20), transparent 60%),' +
          'radial-gradient(50rem 36rem at var(--bx,80%) var(--by,70%), rgba(34,211,238,0.16), transparent 65%),' +
          'radial-gradient(40rem 28rem at var(--cx,15%) var(--cy,85%), rgba(244,114,182,0.12), transparent 65%)',
      }}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
    </div>
  );
}
