'use client';

import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Quote, BadgeCheck, Sparkles } from 'lucide-react';
import { brand } from '@/lib/brand';

export function CeoSpotlight() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" id="leadership">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(244,114,182,0.12),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.12),transparent_55%)]" />

      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="h-eyebrow inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-rose-300" />
            Led by vision
          </p>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Portrait mark */}
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-rose-400/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950">
                <div className="absolute inset-0 grid-pattern opacity-[0.08]" />
                {/* Monogram portrait placeholder (no external photo needed) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] font-display text-5xl font-black gradient-text">
                    MH
                  </div>
                  <div className="text-center px-6">
                    <div className="text-lg font-bold text-white">{brand.ceo}</div>
                    <div className="text-xs uppercase tracking-widest text-white/50">{brand.ceoTitle}</div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80">
                  <BadgeCheck className="h-3.5 w-3.5 text-mint-300" />
                  CRY Verified Leader
                </div>
              </div>
            </div>
          </Reveal>

          {/* Statement */}
          <Reveal delay={0.1}>
            <div className="relative">
              <Quote className="absolute -left-2 -top-6 h-12 w-12 text-white/10" />
              <blockquote className="relative text-2xl md:text-[2rem] font-semibold leading-snug text-white/90">
                “We built CRY Music Media so that every independent artist and label can stand shoulder to
                shoulder with the majors — keeping 100% of their rights, reaching the world, and getting paid
                with total transparency.”
              </blockquote>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div>
                  <div className="text-base font-bold text-white">{brand.ceo}</div>
                  <div className="text-sm text-white/50">{brand.ceoTitle}, {brand.legalName}</div>
                </div>
                <div className="ml-auto flex flex-wrap gap-2">
                  {['Rights-first', 'Artist-owned', 'Global by design'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
