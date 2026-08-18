'use client';

interface LegalProps {
  title: string;
  effective: string;
  intro: React.ReactNode;
  sections: { heading: string; body: React.ReactNode }[];
}

export function LegalLayout({ title, effective, intro, sections }: LegalProps) {
  return (
    <section className="relative pt-36 md:pt-44 pb-20 px-6">
      <div className="container max-w-4xl">
        <p className="h-eyebrow">{title}</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl font-black tracking-[-0.03em] leading-[1.05]">
          {title}
        </h1>
        <p className="mt-4 text-sm text-white/55">Effective: {effective}</p>
        <div className="mt-8 text-white/75 leading-relaxed text-base">{intro}</div>
        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-bold text-xl tracking-tight text-white">{s.heading}</h2>
              <div className="mt-3 text-white/70 leading-relaxed text-sm md:text-base">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
