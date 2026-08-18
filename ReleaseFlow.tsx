'use client';

import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { Upload, SlidersHorizontal, Send, BarChart3, Wallet } from 'lucide-react';

const steps = [
  { Icon: Upload, t: 'You upload', d: 'Audio, artwork & metadata in one place.' },
  { Icon: SlidersHorizontal, t: 'We optimize', d: 'Format, ISRC/UPC, compliance & quality checks.' },
  { Icon: Send, t: 'We deliver', d: 'To 180+ stores in 210+ countries, worldwide.' },
  { Icon: BarChart3, t: 'You track', d: 'Live streams, audience & platform analytics.' },
  { Icon: Wallet, t: 'You earn', d: 'Transparent royalties, paid monthly.' },
];

export function ReleaseFlow() {
  return (
    <section className="relative py-24 px-6 overflow-hidden" data-no-scroll-3d>
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">From you to the world</p>
          <h2 className="h-section mt-3">
            A release pipeline built for <span className="gradient-text">speed & clarity.</span>
          </h2>
          <p className="mt-5 text-white/65">Every step, visible. Every stream, accounted for.</p>
        </Reveal>

        <RevealStagger className="relative grid gap-4 md:grid-cols-5">
          {steps.map((s, i) => (
            <RevealItem
              key={s.t}
              className="relative card p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200">
                <s.Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-wider text-violet-200">Step {i + 1}</div>
              <div className="mt-1 font-bold">{s.t}</div>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-violet-300/60 text-2xl">→</div>
              )}
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
