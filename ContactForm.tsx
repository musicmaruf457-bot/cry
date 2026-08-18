'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: String(fd.get('name') || ''),
          email: String(fd.get('email') || ''),
          subject: String(fd.get('subject') || ''),
          message: String(fd.get('message') || ''),
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to send');
      setState('sent');
    } catch (err) {
      setError('Something went wrong. Please email us directly.');
      setState('error');
    }
  }

  if (state === 'sent') {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-mint-300" />
        <h3 className="mt-4 font-bold text-xl">Message received</h3>
        <p className="mt-2 text-white/65">Our team will be in touch shortly.</p>
        <button onClick={() => setState('idle')} className="btn-secondary mt-6">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-7 space-y-4">
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Name</label>
        <input name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Subject</label>
        <input name="subject" className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-white/55">Message</label>
        <textarea name="message" required rows={6} className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none focus:border-violet-400" />
      </div>
      {error && <p className="text-sm text-rose-300">{error}</p>}
      <button type="submit" disabled={state === 'sending'} className={cn('btn-primary w-full')}>
        {state === 'sending' ? 'Sending…' : (<>Send message <Send className="h-4 w-4" /></>)}
      </button>
    </form>
  );
}
