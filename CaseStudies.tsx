'use client';

import { TrendingUp, MapPin, Mic2 } from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';
import { caseStudies } from '@/lib/brand';

export function CaseStudies() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">Proof, not promises</p>
          <h2 className="h-section mt-3">
            Catalogs that <span className="gradient-text">grew on CRY</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            Independent artists and labels scale faster when distribution, rights and royalties live in one place.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <RevealItem
              key={c.artist}
              className="card relative overflow-hidden p-7 hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-white/55 mb-5">
                <Mic2 className="h-3.5 w-3.5 text-violet-300" />
                <span>{c.type}</span>
                <span className="text-white/30">·</span>
                <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                <span>{c.region}</span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl font-black gradient-text">{c.stat}</span>
                <span className="text-sm text-white/55">{c.statLabel}</span>
              </div>

              <p className="text-white/80 leading-relaxed text-[15px] flex-1">&ldquo;{c.quote}&rdquo;</p>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white font-bold text-sm">
                  {c.person.charAt(0)}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">{c.artist}</div>
                  <div className="text-white/55">{c.person}</div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-10 flex items-center justify-center gap-2 text-sm text-white/50">
          <TrendingUp className="h-4 w-4 text-mint-300" />
          Representative outcomes from artists and labels on the CRY Music Media platform.
        </Reveal>
      </div>
    </section>
  );
}
