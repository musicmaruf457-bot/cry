'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export function SupportForm() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: fd.get('subject'),
        message: fd.get('message'),
      }),
    });
    setSending(false);
    setDone(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setDone(false), 2500);
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4">
      <h3 className="font-bold tracking-tight">New ticket</h3>
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Subject</label>
        <input name="subject" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Message</label>
        <textarea name="message" required rows={6} className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      <button type="submit" disabled={sending} className="btn-primary w-full">
        {sending ? 'Sending…' : done ? <><CheckCircle2 className="h-4 w-4" /> Sent</> : <>Send <Send className="h-4 w-4" /></>}
      </button>
    </form>
  );
}
