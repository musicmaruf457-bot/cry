'use client';

import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex items-center justify-center px-6 py-24 bg-ink-950 text-white">
        <div className="text-center max-w-lg">
          <Logo className="h-12 w-12 mx-auto" />
          <h1 className="mt-6 font-display text-3xl md:text-4xl font-black tracking-tight">Something went wrong</h1>
          <p className="mt-3 text-white/65">An unexpected error occurred. Please try again.</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button onClick={reset} className="btn-primary">Try again</button>
            <Link href="/" className="btn-secondary">Back to home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
