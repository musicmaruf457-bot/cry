'use client';

import { Globe2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { reachRegions } from '@/lib/brand';

const maxStores = Math.max(...reachRegions.map((r) => r.stores));

export function GlobalReach() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">Global footprint</p>
          <h2 className="h-section mt-3">
            Coverage across <span className="gradient-text">10 regions</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            From flagship Western markets to the fastest-growing streaming regions — your music reaches listeners wherever they are.
          </p>
        </Reveal>

        <Reveal className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {reachRegions.map((r) => {
            const pct = Math.round((r.stores / maxStores) * 100);
            return (
              <div key={r.name} className="card p-5 hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <Globe2 className="h-4 w-4 text-cyan-300" />
                  <span className="text-sm font-semibold">{r.name}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <div className="mt-2 text-xs text-white/55">{r.stores} connected stores</div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
