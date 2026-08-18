'use client';

import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <button
      onClick={async () => {
        setLoading(true);
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
        router.refresh();
      }}
      aria-label="Sign out"
      className="h-9 w-9 rounded-lg border border-white/10 hover:bg-white/[0.05] flex items-center justify-center text-white/70 hover:text-white"
    >
      <LogOut className="h-4 w-4" />
    </button>
  );
}
