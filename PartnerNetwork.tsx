'use client';

import { Network, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';
import { partnerTiers, channelPipeline } from '@/lib/brand';

export function PartnerNetwork() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">Partner network</p>
          <h2 className="h-section mt-3">
            One pipeline to <span className="gradient-text">every major channel</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            We already connect artists to the platforms that matter — and our ingestion pipeline is built to onboard new network partners quickly and securely.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-3">
          {partnerTiers.map((t) => (
            <RevealItem
              key={t.tier}
              className="card relative overflow-hidden p-7 hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200 mb-5">
                <Network className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t.tier}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed mb-5">{t.desc}</p>
              <div className="flex flex-wrap gap-2">
                {t.logos.map((l) => (
                  <span key={l} className="chip">{l}</span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/45 mb-8">
            How a new channel comes online
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            {channelPipeline.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="card p-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-2xl font-black text-violet-300/80">{s.step}</span>
                    {i < channelPipeline.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-white/30 hidden md:block" />
                    )}
                  </div>
                  <h4 className="font-bold text-white">{s.title}</h4>
                  <p className="mt-1.5 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <span className="chip border-mint-400/30 text-mint-200">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Ready to onboard new network partners on request
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
