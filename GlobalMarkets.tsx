'use client';

import { motion } from 'framer-motion';
import { Reveal, RevealStagger, RevealItem } from './Reveal';
import { Globe2, Radio, Languages, MapPin } from 'lucide-react';

const marketStats = [
  { icon: Globe2, value: '210+', label: 'Countries & territories' },
  { icon: Radio, value: '180+', label: 'Stores & platforms' },
  { icon: Languages, value: '40+', label: 'Languages supported' },
  { icon: MapPin, value: '24/7', label: 'Global release pipeline' },
];

export function GlobalMarkets() {
  return (
    <section className="relative py-24 md:py-28 px-6 overflow-hidden" id="global-markets">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="h-eyebrow">Global reach</p>
            <h2 className="h-section mt-3">
              A global music engine, <span className="gradient-text">in real time.</span>
            </h2>
            <p className="mt-5 text-white/65 leading-relaxed">
              Your music reaches listeners the moment it goes live — no matter where they are.
              {` `}We deliver to every major market with localized metadata, currency and compliance.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {marketStats.map((s) => (
                <div key={s.label} className="card p-5 flex items-center gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-tight">{s.value}</div>
                    <div className="text-xs text-white/55 uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <RevealStagger className="relative">
            <div className="relative aspect-square rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-white/[0.06]"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-white/[0.06]"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/20 blur-xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-display text-5xl md:text-6xl font-black gradient-text">210+</div>
                <div className="text-xs uppercase tracking-wider text-white/55 mt-1">countries</div>
              </div>
            </div>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
