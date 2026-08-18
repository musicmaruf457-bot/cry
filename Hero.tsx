'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Waveform } from './Waveform';
import { ParticleField } from './ParticleField';
import { Magnetic } from './Magnetic';
import { Logo } from '@/components/brand/Logo';

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-16 md:pb-28 px-6 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[280px] h-[280px] rounded-full bg-cyan-400/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-60 right-0 w-[260px] h-[260px] rounded-full bg-mint-400/10 blur-[100px] pointer-events-none" />

      <ParticleField className="absolute inset-0 w-full h-full opacity-70" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            <span>Distribute. Protect. Earn — worldwide.</span>
            <span className="ml-1 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 px-1.5 py-0.5 text-[10px] font-bold text-ink-950">NEW</span>
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-[-0.04em] leading-[0.95]">
            <span className="block">Your music.</span>
            <span className="block gradient-text">Every screen. Every continent.</span>
          </h1>

          <p className="mt-7 mx-auto max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            CRY Music Media is the global distribution and rights platform built for independent artists, labels and creators.
            Release to <span className="text-white">180+ stores</span> in <span className="text-white">210+ countries</span>,
            keep <span className="text-white">100% of your rights</span>, and get paid transparently.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic href="/signup" strength={0.2}>
              <span className="btn-primary text-base px-7 py-3.5">
                Start distributing <ArrowRight className="h-4 w-4" />
              </span>
            </Magnetic>
            <Magnetic href="/features" strength={0.15}>
              <span className="btn-secondary text-base px-6 py-3.5">
                <Play className="h-4 w-4" /> See how it works
              </span>
            </Magnetic>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5">
            <Waveform className="h-20 w-full max-w-xl" bars={48} />
            <div className="flex items-center gap-3 text-xs text-white/55">
              <span>Trusted by artists across</span>
              <span className="font-semibold text-white">210+ countries</span>
              <span aria-hidden>·</span>
              <span>Catalog on</span>
              <span className="font-semibold text-white">180+ platforms</span>
            </div>
          </div>
        </motion.div>

        {/* Floating brand mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ duration: 1.2, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          className="hidden md:block absolute left-10 top-32 -rotate-12 opacity-30"
        >
          <Logo className="h-28 w-28" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1, y: [0, 14, 0] }}
          transition={{ duration: 1.2, delay: 0.2, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          className="hidden md:block absolute right-14 top-44 rotate-12 opacity-25"
        >
          <Logo className="h-20 w-20" />
        </motion.div>
      </div>
    </section>
  );
}
