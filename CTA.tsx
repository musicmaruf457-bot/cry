'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function CTA() {
  return (
    <section className="relative section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 via-ink-900 to-cyan-500/20 px-8 md:px-16 py-16 md:py-24">
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
          <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/25 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]" />

          <div className="relative grid gap-8 md:grid-cols-[1.4fr_auto] items-center">
            <div>
              <p className="h-eyebrow text-cyan-200">Ready when you are</p>
              <h2 className="h-section mt-3 max-w-xl">
                Release your next track with a platform built for <span className="gradient-text">the long game</span>.
              </h2>
              <p className="mt-5 max-w-xl text-white/70 text-base md:text-lg">
                Join independent artists, labels and creators worldwide distributing with CRY Music Media — keep your rights, get paid faster.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Magnetic href="/signup">
                <span className="btn-primary text-base px-7 py-4 w-full md:w-auto">
                  Create your account <ArrowRight className="h-4 w-4" />
                </span>
              </Magnetic>
              <Link href="/contact" className="btn-secondary text-base px-7 py-4">Talk to us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
