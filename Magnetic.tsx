'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, href, className, strength = 0.25 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const onMouseMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setTransform(`translate(${x}px, ${y}px)`);
  };
  const onLeave = () => setTransform('');

  const content = (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)' }}
      className={cn('inline-block', className)}
    >
      {children}
    </div>
  );

  if (href) return <Link href={href}>{content}</Link>;
  return content;
}
