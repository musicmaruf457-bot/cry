'use client';

import { useState } from 'react';
import { CheckCircle2, Save } from 'lucide-react';

interface Initial {
  fullName: string;
  artistName: string;
  email: string;
  country: string;
  phone: string;
  payoutEmail: string;
  plan: 'starter' | 'pro' | 'label';
}

export function SettingsForm({ initial }: { initial: Initial }) {
  const [saved, setSaved] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: fd.get('fullName'),
        artistName: fd.get('artistName'),
        country: fd.get('country'),
        phone: fd.get('phone'),
        payoutEmail: fd.get('payoutEmail'),
      }),
    });
    setSending(false);
    if (res.ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2200);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <section className="card p-6 space-y-4">
        <h3 className="font-bold tracking-tight">Profile</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Row label="Full name" name="fullName" defaultValue={initial.fullName} required />
          <Row label="Artist / stage name" name="artistName" defaultValue={initial.artistName} />
          <Row label="Email" name="email" defaultValue={initial.email} disabled />
          <Row label="Country" name="country" defaultValue={initial.country} />
          <Row label="Phone" name="phone" defaultValue={initial.phone} />
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h3 className="font-bold tracking-tight">Payment</h3>
        <Row label="Payout email" name="payoutEmail" defaultValue={initial.payoutEmail} type="email" />
        <div>
          <label className="text-xs uppercase tracking-wider text-white/55">Plan</label>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-violet-500/15 border border-violet-400/30 px-3 py-1 text-sm font-semibold capitalize text-violet-100">{initial.plan}</div>
        </div>
      </section>

      <section className="card p-6 space-y-4">
        <h3 className="font-bold tracking-tight">Security</h3>
        <p className="text-sm text-white/55">Change your password to keep your account secure.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <Row label="Current password" name="currentPassword" type="password" />
          <Row label="New password" name="newPassword" type="password" />
        </div>
      </section>

      <div className="flex justify-end">
        <button type="submit" disabled={sending} className="btn-primary">
          {sending ? 'Saving…' : saved ? (<><CheckCircle2 className="h-4 w-4" /> Saved</>) : (<>Save changes <Save className="h-4 w-4" /></>)}
        </button>
      </div>
    </form>
  );
}

function Row({ label, name, type = 'text', defaultValue = '', required = false, disabled = false }: { label: string; name: string; type?: string; defaultValue?: string; required?: boolean; disabled?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-white/55">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400 disabled:opacity-60"
      />
    </div>
  );
}
