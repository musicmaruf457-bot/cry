'use client';

import { Reveal } from './Reveal';
import { TrendingUp, Music4, Wallet } from 'lucide-react';

export function ConsolePreview() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-12">
          <p className="h-eyebrow">Artist console</p>
          <h2 className="h-section mt-3">
            Your catalogue, <span className="gradient-text">at a glance.</span>
          </h2>
          <p className="mt-5 text-white/65">A clean, fast dashboard built for artists — not accountants.</p>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/15 via-ink-900 to-cyan-500/10 p-3 md:p-4 shadow-glow">
            <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay rounded-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-ink-950/70 backdrop-blur p-5 md:p-7">
              <div className="flex flex-wrap gap-3">
                <Card icon={<TrendingUp className="h-5 w-5" />} label="Total streams" value="1.84M" />
                <Card icon={<Music4 className="h-5 w-5" />} label="Releases live" value="12" />
                <Card icon={<Wallet className="h-5 w-5" />} label="Earned (30d)" value="$5,240" />
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.06] p-4">
                <div className="flex items-center justify-between text-xs text-white/55">
                  <span>Streams — last 12 weeks</span>
                  <span>CRY Analytics</span>
                </div>
                <div className="mt-3 flex items-end gap-1.5 h-28">
                  {[22, 30, 26, 38, 34, 48, 42, 56, 64, 58, 72, 80].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-violet-500/30 to-cyan-400/70"
                      style={{ height: `${v * 1.1}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/[0.06] p-3 flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">Midnight Reverie</span>
                  <span className="text-xs text-mint-300">Live</span>
                </div>
                <div className="rounded-xl border border-white/[0.06] p-3 flex items-center justify-between">
                  <span className="text-sm font-semibold truncate">Echoes of the Atlas</span>
                  <span className="text-xs text-mint-300">Live</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex-1 min-w-[150px] rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <div className="text-violet-200">{icon}</div>
      <div className="mt-3 text-2xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{label}</div>
    </div>
  );
}
