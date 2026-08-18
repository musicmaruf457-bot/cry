'use client';

import { Handshake, Repeat, ShieldCheck, Zap, BarChart3, Globe2, type LucideIcon } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Globe2,
    title: 'Reach more repertoire',
    desc: 'Tap into a steady pipeline of independent artists and labels actively looking for new outlets and territories.',
  },
  {
    icon: Zap,
    title: 'Fast, standardized ingestion',
    desc: 'Clean metadata, assigned ISRC/UPC and pre-validated assets — delivered through a single, predictable feed.',
  },
  {
    icon: ShieldCheck,
    title: 'Rights-cleared by default',
    desc: 'Every submission arrives with verified ownership and licensing, reducing takedown risk on your side.',
  },
  {
    icon: Repeat,
    title: 'Recurring revenue share',
    desc: 'Transparent commercial terms and monthly reconciliation — built for long-term, compounding partnerships.',
  },
  {
    icon: BarChart3,
    title: 'Shared analytics',
    desc: 'Performance data flows both ways so we can optimize placement, playlists and regional strategy together.',
  },
  {
    icon: Handshake,
    title: 'A named partner manager',
    desc: 'One point of contact for onboarding, SLAs and quarterly business reviews — no ticket queues.',
  },
];

export function PartnerValue() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">Why partner with CRY</p>
          <h2 className="h-section mt-3">
            A distribution partner built for <span className="gradient-text">network scale</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            We connect independent catalog to the platforms that move audiences — and we make it effortless for new networks to come on board.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <RevealItem
                key={b.title}
                className="card relative overflow-hidden p-7 group hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{b.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{b.desc}</p>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
