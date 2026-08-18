'use client';

import {
  Globe2,
  ShieldCheck,
  Youtube,
  Coins,
  Megaphone,
  Headphones,
  type LucideIcon,
} from 'lucide-react';
import { pillars } from '@/lib/brand';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const iconMap: Record<string, LucideIcon> = {
  globe: Globe2,
  shield: ShieldCheck,
  youtube: Youtube,
  coin: Coins,
  megaphone: Megaphone,
  headset: Headphones,
};

export function Pillars() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">What we do</p>
          <h2 className="h-section mt-3">
            A complete music infrastructure — <span className="gradient-text">distribution, rights, royalties.</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            From your first single to your label's full catalog — every release is backed by industry-grade tooling.
          </p>
        </Reveal>
        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => {
            const Icon = iconMap[p.icon] ?? Globe2;
            return (
              <RevealItem
                key={p.title}
                className="card relative overflow-hidden p-7 group hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</p>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
