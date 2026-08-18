'use client';

import { faq } from '@/lib/brand';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative section">
      <div className="container max-w-4xl">
        <Reveal className="text-center mb-12">
          <p className="h-eyebrow">Frequently asked</p>
          <h2 className="h-section mt-3">
            Everything you need to know about <span className="gradient-text">CRY Music Media</span>
          </h2>
        </Reveal>
        <div className="space-y-3">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={cn(
                    'rounded-2xl border transition-all duration-300 overflow-hidden',
                    isOpen ? 'border-violet-400/40 bg-white/[0.05]' : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]',
                  )}
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-white">{item.q}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-white/60 transition-transform',
                        isOpen && 'rotate-180 text-violet-300',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-white/70 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
