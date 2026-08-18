'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { platforms } from '@/lib/brand';

const RING_A = 330; // px radius (md)
const RING_B = 230;

export function MusicUniverse() {
  const ringA = platforms.slice(0, 8);
  const ringB = platforms.slice(8, 14);

  return (
    <section
      id="music-universe"
      className="relative py-24 md:py-32 overflow-hidden"
      data-no-scroll-3d
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#120A2E_0%,#05060f_55%,#020205_100%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

      {/* Living globe + orbiting platform chips */}
      <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        {/* outer ring */}
        <motion.div
          className="relative h-[660px] w-[660px] rounded-full border border-white/[0.08]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        >
          {ringA.map((p, i) => (
            <span
              key={p.name}
              className="absolute left-1/2 top-1/2 flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-3 text-[11px] font-medium text-white/80 shadow-[0_0_18px_-6px_rgba(34,211,238,0.6)] backdrop-blur"
              style={{
                transform: `rotate(${(360 / ringA.length) * i}deg) translateX(${RING_A}px) translateY(-50%) rotate(${-(360 / ringA.length) * i}deg)`,
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
          ))}
        </motion.div>

        {/* inner ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[460px] w-[460px] rounded-full border border-white/[0.06]"
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        >
          {ringB.map((p, i) => (
            <span
              key={p.name}
              className="absolute left-1/2 top-1/2 flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/70 px-2.5 text-[10px] font-medium text-white/75 shadow-[0_0_14px_-6px_rgba(52,211,153,0.6)] backdrop-blur"
              style={{
                transform: `rotate(${(360 / ringB.length) * i}deg) translateX(${RING_B}px) translateY(-50%) rotate(${-(360 / ringB.length) * i}deg)`,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
              {p.name}
            </span>
          ))}
        </motion.div>

        {/* globe core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/40 via-cyan-400/20 to-mint-400/30 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full border border-white/20 bg-ink-950/80 grid place-items-center text-3xl font-black gradient-text">
          ♪
        </div>
      </div>

      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="h-eyebrow">The CRY Sound Universe</p>
          <h2 className="h-section mt-3">
            Every release lives in one <span className="gradient-text">connected ecosystem.</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            From your first upload to charts in 210+ countries — CRY Music Media connects your catalogue,
            your audience and your royalties in a single, living network.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { t: 'Your catalogue', d: 'Singles, EPs, albums — organized, searchable, always available.' },
            { t: 'Your audience', d: 'Listeners across every store, every territory, every device.' },
            { t: 'Your royalties', d: 'Transparent earnings tracked to the stream, reconciled monthly.' },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="card p-6 h-full">
                <div className="text-lg font-bold">{c.t}</div>
                <p className="mt-2 text-sm text-white/65">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
