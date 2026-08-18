'use client';

import { pricingPlans } from '@/lib/brand';
import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Reveal, RevealStagger, RevealItem } from './Reveal';

const accentMap = {
  violet: {
    ring: 'border-violet-400/40',
    glow: 'shadow-glow',
    text: 'text-violet-200',
    badge: 'bg-violet-500/20 text-violet-100 border-violet-400/40',
  },
  cyan: {
    ring: 'border-cyan-300/30',
    glow: 'shadow-glow-cyan',
    text: 'text-cyan-200',
    badge: 'bg-cyan-500/20 text-cyan-100 border-cyan-300/40',
  },
  mint: {
    ring: 'border-mint-300/30',
    glow: '',
    text: 'text-mint-200',
    badge: 'bg-mint-500/20 text-mint-100 border-mint-300/40',
  },
} as const;

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-12">
          <p className="h-eyebrow">Pricing</p>
          <h2 className="h-section mt-3">
            Simple plans for <span className="gradient-text">every stage of your career</span>
          </h2>
          <p className="mt-5 text-white/65">
            Transparent plans for every stage — from your first single to a full label roster. Every plan keeps 100% of your rights.
          </p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] p-1">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                !yearly ? 'bg-white text-ink-950' : 'text-white/70',
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition flex items-center gap-2',
                yearly ? 'bg-white text-ink-950' : 'text-white/70',
              )}
            >
              Yearly <span className="rounded-full bg-mint-400/30 text-mint-200 text-[10px] font-bold px-1.5 py-0.5">−15%</span>
            </button>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((p) => {
            const accent = accentMap[p.accent as keyof typeof accentMap];
            const price = yearly ? p.yearly : p.monthly;
            return (
              <RevealItem
                key={p.id}
                className={cn(
                  'relative rounded-3xl border bg-white/[0.03] backdrop-blur p-7 transition-all duration-300 hover:-translate-y-1',
                  p.highlight ? `${accent.ring} ${accent.glow}` : 'border-white/10',
                )}
              >
                {p.highlight && (
                  <div className={cn('absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider', accent.badge)}>
                    <Sparkles className="h-3 w-3" /> Most popular
                  </div>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight">${price}</span>
                  <span className="text-white/55 text-sm">/{yearly ? 'year' : 'month'}</span>
                </div>
                <Link
                  href="/signup"
                  className={cn(
                    'mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition',
                    p.highlight
                      ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-glow'
                      : 'border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]',
                  )}
                >
                  {p.cta}
                </Link>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-white/75">
                      <Check className="h-4 w-4 text-mint-300 mt-0.5 shrink-0" /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
