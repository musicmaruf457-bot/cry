'use client';

import { Reveal } from './Reveal';

interface PageShellProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <section className="relative pt-36 md:pt-44 pb-12 px-6 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-500/15 blur-[120px] pointer-events-none" />
      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center">
          {eyebrow && <p className="h-eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.02]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 mx-auto max-w-2xl text-base md:text-lg text-white/65 leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
