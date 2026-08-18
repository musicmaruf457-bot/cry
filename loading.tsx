import Link from 'next/link';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-24">
      <div className="text-center">
        <div className="relative h-14 w-14 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-white/10" />
          <div className="absolute inset-0 rounded-full border-t-2 border-violet-400 animate-spin" />
        </div>
        <p className="mt-6 text-sm text-white/60">Loading…</p>
      </div>
    </div>
  );
}
