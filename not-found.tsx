import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

export const metadata = { title: '404 — Page not found' };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/15 blur-[140px] pointer-events-none" />
      <div className="text-center max-w-lg">
        <Logo className="h-14 w-14 mx-auto opacity-80" />
        <p className="mt-8 text-7xl md:text-8xl font-black tracking-[-0.04em] gradient-text">404</p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl font-black tracking-tight">Lost in the mix</h1>
        <p className="mt-4 text-white/65">We couldn't find the page you're looking for. Let's get you back to the music.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/contact" className="btn-secondary">Contact support</Link>
        </div>
      </div>
    </div>
  );
}
