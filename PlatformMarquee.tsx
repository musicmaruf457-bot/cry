'use client';

import { platforms } from '@/lib/brand';

export function PlatformMarquee() {
  // Triple the items for seamless loop
  const items = [...platforms, ...platforms, ...platforms];
  return (
    <section aria-label="Distribution platforms" className="relative border-y border-white/[0.06] bg-white/[0.02] py-10 overflow-hidden">
      <div className="container mb-4 text-center">
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-pulseGlow" />
          Live on 180+ platforms worldwide
        </span>
      </div>
      <div className="relative">
        <div className="flex w-max gap-12 animate-marquee py-2 will-change-transform">
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 px-4 text-base md:text-lg font-semibold text-white/85 whitespace-nowrap hover:text-white transition"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: p.color, boxShadow: `0 0 18px ${p.color}` }}
                aria-hidden
              />
              <span>{p.name}</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}
