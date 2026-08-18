'use client';

import { useState } from 'react';
import { Save, CheckCircle2 } from 'lucide-react';

interface Initial {
  siteName: string;
  siteTagline: string;
  defaultTitle: string;
  defaultDescription: string;
  twitter: string;
  robots: string;
}

export function SeoForm({ initial, counts }: { initial: Initial; counts: { pages: number; releases: number; users: number } }) {
  const [saved, setSaved] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 2200);
      }}
      className="grid gap-6"
    >
      <section className="card p-6 space-y-4">
        <h3 className="font-bold tracking-tight">Site metadata</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Row label="Site name" name="siteName" defaultValue={initial.siteName} />
          <Row label="Site tagline" name="siteTagline" defaultValue={initial.siteTagline} />
          <Row label="Default title" name="defaultTitle" defaultValue={initial.defaultTitle} />
          <Row label="Default description" name="defaultDescription" defaultValue={initial.defaultDescription} />
          <Row label="Twitter handle" name="twitter" defaultValue={initial.twitter} />
          <Row label="Robots" name="robots" defaultValue={initial.robots} />
        </div>
      </section>

      <section className="card p-6">
        <h3 className="font-bold tracking-tight">Generated files</h3>
        <p className="text-sm text-white/55 mt-1">Available at the website root and managed automatically.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'robots.txt', path: '/robots.txt' },
            { name: 'sitemap.xml', path: '/sitemap.xml' },
            { name: 'sitemap-index', path: '/sitemap-index.xml' },
            { name: 'manifest', path: '/site.webmanifest' },
          ].map((f) => (
            <a key={f.name} href={f.path} target="_blank" className="card p-4 hover:bg-white/[0.05] transition">
              <div className="text-xs uppercase tracking-wider text-violet-200">{f.path}</div>
              <div className="mt-1 font-semibold">{f.name}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="card p-6">
        <h3 className="font-bold tracking-tight">Index summary</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Stat label="Indexed pages" value={counts.pages} />
          <Stat label="Releases" value={counts.releases} />
          <Stat label="Users" value={counts.users} />
        </div>
      </section>

      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          {saved ? (<><CheckCircle2 className="h-4 w-4" /> Saved</>) : (<>Save <Save className="h-4 w-4" /></>)}
        </button>
      </div>
    </form>
  );
}

function Row({ label, name, defaultValue }: { label: string; name: string; defaultValue: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/55">{label}</label>
      <input name={name} defaultValue={defaultValue} className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-2xl font-black tracking-tight">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{label}</div>
    </div>
  );
}
