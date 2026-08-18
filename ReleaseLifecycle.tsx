'use client';

import { CheckCircle2, FileCheck2, Send, BarChart3, Wallet, ShieldAlert } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const stages = [
  {
    icon: FileCheck2,
    title: '1 · Ingestion & QC',
    desc: 'You upload audio, artwork and metadata. We validate ISRC/UPC, credits and format before anything moves forward.',
    detail: 'No broken deliveries, no payout delays from bad metadata.',
  },
  {
    icon: Send,
    title: '2 · Distribution',
    desc: 'Your release is routed to every selected store and platform on your scheduled date — global, simultaneous.',
    detail: '180+ destinations from a single submission.',
  },
  {
    icon: ShieldAlert,
    title: '3 · Rights & Protection',
    desc: 'Content ID and YouTube CMS claims are filed automatically; anti-piracy monitoring watches for unauthorized uploads.',
    detail: 'Your catalog is earning and protected at once.',
  },
  {
    icon: BarChart3,
    title: '4 · Analytics',
    desc: 'Streams, downloads and audience data flow into your dashboard by track, platform and region.',
    detail: 'Know what is working, where, in real time.',
  },
  {
    icon: Wallet,
    title: '5 · Royalty Accounting',
    desc: 'Revenue is attributed transparently and reconciled into auditable monthly statements.',
    detail: 'You always see exactly what you earned and why.',
  },
  {
    icon: CheckCircle2,
    title: '6 · Payout',
    desc: 'Once your balance hits the threshold, withdraw via your preferred method directly from your dashboard.',
    detail: 'Monthly, predictable, no surprises.',
  },
];

export function ReleaseLifecycle() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">The full lifecycle</p>
          <h2 className="h-section mt-3">
            What happens after you <span className="gradient-text">hit submit</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            Distribution is only the start. CRY Music Media carries your release from upload to payout — and protects it the whole way.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s) => {
            const Icon = s.icon;
            return (
              <RevealItem
                key={s.title}
                className="card relative overflow-hidden p-7 group hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                <p className="mt-3 text-xs text-cyan-200/80">{s.detail}</p>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
