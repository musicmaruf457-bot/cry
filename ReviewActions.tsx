'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X, Loader2 } from 'lucide-react';

export function ReviewActions({ releaseId }: { releaseId: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState<'approve' | 'reject' | null>(null);

  async function act(action: 'approve' | 'reject') {
    setBusy(action);
    await fetch(`/api/admin/releases/${releaseId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
    setBusy(null);
    router.refresh();
  }

  return (
    <div className="inline-flex gap-2">
      <button
        onClick={() => act('approve')}
        disabled={busy !== null}
        aria-label="Approve"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-mint-400/30 bg-mint-500/15 text-mint-200 hover:bg-mint-500/25"
      >
        {busy === 'approve' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
      </button>
      <button
        onClick={() => act('reject')}
        disabled={busy !== null}
        aria-label="Reject"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rose-300/30 bg-rose-500/15 text-rose-200 hover:bg-rose-500/25"
      >
        {busy === 'reject' ? <Loader2 className="h-4 w-4 animate-spin" /> : <X className="h-4 w-4" />}
      </button>
    </div>
  );
}
