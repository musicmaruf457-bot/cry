'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Magnetic } from './Magnetic';

export function PartnerCTA() {
  return (
    <section className="relative section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 via-ink-900 to-cyan-500/20 px-8 md:px-16 py-16 md:py-24">
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
          <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-cyan-400/25 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]" />

          <div className="relative grid gap-8 md:grid-cols-[1.5fr_auto] items-center">
            <div>
              <p className="h-eyebrow text-cyan-200">Partner with us</p>
              <h2 className="h-section mt-3 max-w-2xl">
                Let&rsquo;s bring CRY Music Media to <span className="gradient-text">your network.</span>
              </h2>
              <p className="mt-5 max-w-xl text-white/70 text-base md:text-lg">
                Whether you are a streaming service, a regional platform or a rights organization — our team will scope an
                integration that fits your pipeline. Start the conversation and we&rsquo;ll send a tailored proposal.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Magnetic href="/contact">
                <span className="btn-primary text-base px-7 py-4 w-full md:w-auto">
                  Request a proposal <ArrowRight className="h-4 w-4" />
                </span>
              </Magnetic>
              <Link href="mailto:partners@crydigitalmusic.com" className="btn-secondary text-base px-7 py-4">
                <Mail className="h-4 w-4" /> partners@crydigitalmusic.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
