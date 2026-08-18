'use client';

interface StatusPillProps {
  status: string;
  className?: string;
}

const map: Record<string, string> = {
  live: 'bg-mint-500/20 text-mint-200 border-mint-400/30',
  distributed: 'bg-cyan-500/20 text-cyan-200 border-cyan-300/30',
  processing: 'bg-cyan-500/20 text-cyan-200 border-cyan-300/30',
  approved: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  review: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  submitted: 'bg-violet-500/20 text-violet-200 border-violet-400/30',
  draft: 'bg-white/10 text-white/75 border-white/15',
  rejected: 'bg-rose-500/20 text-rose-200 border-rose-300/30',
  paid: 'bg-mint-500/20 text-mint-200 border-mint-400/30',
  pending: 'bg-amber-500/20 text-amber-200 border-amber-300/40',
  open: 'bg-amber-500/20 text-amber-200 border-amber-300/40',
  resolved: 'bg-mint-500/20 text-mint-200 border-mint-400/30',
  active: 'bg-mint-500/20 text-mint-200 border-mint-400/30',
  failed: 'bg-rose-500/20 text-rose-200 border-rose-300/30',
};

export function StatusPill({ status, className = '' }: StatusPillProps) {
  const cls = map[status] ?? 'border-white/15 text-white/70 bg-white/[0.04]';
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${cls} ${className}`}>
      {status}
    </span>
  );
}
