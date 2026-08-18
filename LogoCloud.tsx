'use client';

import { Reveal, RevealStagger, RevealItem } from './Reveal';

const partners = [
  'BMI', 'ASCAP', 'PRS', 'GEMA', 'SACEM', 'SIAE', 'JASRAC', 'PPL', 'SoundExchange', 'A2IM',
];

export function LogoCloud() {
  return (
    <section className="relative py-12">
      <div className="container">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/45">Integrated with the world's music infrastructure</p>
        </Reveal>
        <RevealStagger className="mt-6 flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <RevealItem key={p} className="text-white/40 hover:text-white/80 transition font-display text-lg md:text-xl font-bold tracking-tight">
              {p}
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
