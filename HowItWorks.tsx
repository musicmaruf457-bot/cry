'use client';

import Link from 'next/link';
import { Upload, Rocket, BarChart3, Banknote } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from './Reveal';

const steps = [
  {
    n: '01',
    icon: Upload,
    title: 'Upload your release',
    desc: 'Singles, EPs, albums. Add audio, cover artwork, and rich metadata — ISRC, UPC, contributors, credits, label and copyright.',
  },
  {
    n: '02',
    icon: Rocket,
    title: 'Pick stores & schedule',
    desc: 'Choose from 180+ stores worldwide. Schedule your release, set pre-save campaigns and let our team review every detail.',
  },
  {
    n: '03',
    icon: BarChart3,
    title: 'Track performance',
    desc: 'Watch streams, downloads and audience insights roll in — by track, country and platform — straight from your dashboard.',
  },
  {
    n: '04',
    icon: Banknote,
    title: 'Get paid monthly',
    desc: 'Transparent royalty reports and monthly payouts via PayPal, Wise or bank transfer once you reach the threshold.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">From upload to payout</p>
          <h2 className="h-section mt-3">
            How <span className="gradient-text">CRY Music Media</span> works
          </h2>
          <p className="mt-5 text-white/65">A simple, transparent pipeline — designed so you can focus on the music.</p>
        </Reveal>
        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <RevealItem key={s.n} className="card p-6 relative overflow-hidden">
              <div className="text-5xl font-black text-white/10 absolute -top-2 right-3 select-none">{s.n}</div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Link href="/how-it-works" className="btn-secondary inline-flex">
            Read the full guide →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
