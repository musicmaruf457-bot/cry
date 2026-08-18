'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';

export function NewReleaseForm({ platforms }: { platforms: string[] }) {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(platforms.slice(0, 6));
  const [releaseType, setReleaseType] = useState<'single' | 'ep' | 'album'>('single');

  function togglePlatform(p: string) {
    setSelectedPlatforms((cur) => (cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      title: String(fd.get('title') || ''),
      primaryArtist: String(fd.get('primaryArtist') || ''),
      featuring: String(fd.get('featuring') || '') || undefined,
      genre: String(fd.get('genre') || '') || undefined,
      language: String(fd.get('language') || '') || undefined,
      releaseType,
      releaseDate: String(fd.get('releaseDate') || '') || undefined,
      isrc: String(fd.get('isrc') || '') || undefined,
      upc: String(fd.get('upc') || '') || undefined,
      labelName: String(fd.get('labelName') || '') || undefined,
      copyright: String(fd.get('copyright') || '') || undefined,
      explicit: fd.get('explicit') === 'on',
      notes: String(fd.get('notes') || '') || undefined,
      platforms: selectedPlatforms,
    };
    const res = await fetch('/api/releases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    setSending(false);
    if (res.ok) {
      setDone(true);
      setTimeout(() => router.push('/dashboard/releases'), 1200);
    }
  }

  if (done) {
    return (
      <div className="card p-12 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-mint-300" />
        <h2 className="mt-4 font-display text-2xl font-bold">Release submitted</h2>
        <p className="mt-2 text-white/65 text-sm">Our team will review your release and notify you when it goes live.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <section className="card p-6 space-y-4">
        <h2 className="font-bold tracking-tight text-lg">Release details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Title" name="title" required />
          <Field label="Primary artist" name="primaryArtist" required />
          <Field label="Featuring (optional)" name="featuring" />
          <Field label="Genre" name="genre" />
          <Field label="Language" name="language" />
          <Field label="Release date" name="releaseDate" type="date" />
        </div>
        <div>
          <label className="text-xs uppercase tracking-wider text-white/55">Release type</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['single', 'ep', 'album'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setReleaseType(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium border transition ${releaseType === t ? 'border-violet-400 bg-violet-500/10 text-white' : 'border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.05]'}`}
              >
                {t === 'single' ? 'Single' : t === 'ep' ? 'EP' : 'Album'}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="font-bold tracking-tight text-lg">Metadata</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="ISRC (optional)" name="isrc" placeholder="Auto-generated if blank" />
          <Field label="UPC / EAN (optional)" name="upc" placeholder="Auto-generated if blank" />
          <Field label="Label name" name="labelName" />
          <Field label="Copyright" name="copyright" placeholder="© 2025 Your Label" />
        </div>
        <label className="flex items-center gap-2 text-sm text-white/80">
          <input type="checkbox" name="explicit" className="accent-violet-500" /> Contains explicit content
        </label>
        <div>
          <label className="text-xs uppercase tracking-wider text-white/55">Internal notes</label>
          <textarea name="notes" rows={3} className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="font-bold tracking-tight text-lg">Stores</h2>
        <p className="text-sm text-white/55">Choose where this release will be delivered.</p>
        <div className="flex flex-wrap gap-2">
          {platforms.map((p) => (
            <button
              type="button"
              key={p}
              onClick={() => togglePlatform(p)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium border transition ${selectedPlatforms.includes(p) ? 'border-violet-400 bg-violet-500/15 text-white' : 'border-white/10 bg-white/[0.03] text-white/65 hover:bg-white/[0.06]'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h2 className="font-bold tracking-tight text-lg">Audio & artwork</h2>
        <p className="text-sm text-white/55">For demo: we accept placeholder file references. Real uploads are wired through the storage layer in production.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-wider text-white/55">Audio file</label>
            <input type="file" accept="audio/*" className="mt-1 block w-full text-sm text-white/65 file:mr-3 file:rounded-lg file:border-0 file:bg-violet-500/20 file:px-3 file:py-2 file:text-violet-100" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-white/55">Cover artwork</label>
            <input type="file" accept="image/*" className="mt-1 block w-full text-sm text-white/65 file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-500/20 file:px-3 file:py-2 file:text-cyan-100" />
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <button type="button" onClick={() => history.back()} className="btn-secondary">Cancel</button>
        <button type="submit" disabled={sending} className="btn-primary">
          {sending ? 'Submitting…' : 'Submit for review'}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = 'text', required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/55">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400"
      />
    </div>
  );
}
