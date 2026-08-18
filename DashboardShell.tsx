import Link from 'next/link';
import { redirect } from 'next/navigation';
import { LayoutDashboard, Music4, BarChart3, Wallet, Headphones, Settings, FileText, LogOut, Megaphone } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { brand } from '@/lib/brand';
import { getCurrentSession } from '@/lib/auth';
import { LogoutButton } from './LogoutButton';

interface SidebarItem { href: string; label: string; icon: React.ComponentType<{ className?: string }>; }

export async function DashboardShell({ children }: { children: React.ReactNode }) {
  const session = await getCurrentSession();
  if (!session) redirect('/login');

  const nav: SidebarItem[] = [
    { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/releases', label: 'Releases', icon: Music4 },
    { href: '/dashboard/releases/new', label: 'New release', icon: Megaphone },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/dashboard/channels', label: 'Channels', icon: Headphones },
    { href: '/dashboard/wallet', label: 'Wallet', icon: Wallet },
    { href: '/dashboard/support', label: 'Support', icon: FileText },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/[0.06] bg-ink-950/60 backdrop-blur-xl">
        <div className="px-6 py-6 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div>
              <div className="font-display font-extrabold text-base">{brand.shortName}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/55">Artist</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {nav.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.05]"
            >
              <it.icon className="h-4 w-4 text-violet-300/80 group-hover:text-violet-200" />
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/[0.06]">
          <div className="card p-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center text-ink-950 font-bold">
              {session.name.split(' ').map(n => n[0]).join('').slice(0,2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{session.name}</div>
              <div className="text-[11px] text-white/55 truncate">{session.email}</div>
            </div>
            <LogoutButton />
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="lg:hidden sticky top-0 z-40 backdrop-blur-xl bg-ink-950/80 border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-display font-bold">{brand.shortName}</span>
          </Link>
          <LogoutButton />
        </div>

        <div className="px-5 md:px-8 py-8 max-w-[1400px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
