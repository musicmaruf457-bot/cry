'use client';

import { motion } from 'framer-motion';

type LogoProps = {
  className?: string;
  /** Play the intro draw-on animation once on mount */
  animate?: boolean;
  /** Show the small CRY wordmark next to the mark (used in the nav) */
  withWord?: boolean;
};

/**
 * CRY Music Media — original animated brand mark.
 * A living "sound orbit": an orbiting ring draws on, a pulse-core breathes,
 * and five equalizer bars rise on a beat. Deliberately distinct from any
 * reference artwork while keeping the premium, cosmic-music personality.
 */
export function Logo({ className, animate = true, withWord = false }: LogoProps) {
  const beat = [0, 1, 2, 1, 0]; // relative bar heights
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
        role="img"
        aria-label="CRY Music Media"
      >
        <defs>
          <linearGradient id="cryOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          <linearGradient id="cryBars" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7C5CFF" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          <radialGradient id="cryCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#C4B5FD" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </radialGradient>
        </defs>

        {/* backdrop disc */}
        <circle cx="32" cy="32" r="30" fill="#070A18" />
        <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(124,92,255,0.18)" strokeWidth="1" />

        {/* orbiting ring — draws on */}
        <motion.circle
          cx="32"
          cy="32"
          r="22"
          fill="none"
          stroke="url(#cryOrbit)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="138"
          initial={animate ? { strokeDashoffset: 138, opacity: 0 } : false}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* breathing pulse-core */}
        <motion.circle
          cx="32"
          cy="32"
          r="4"
          fill="url(#cryCore)"
          initial={animate ? { scale: 0 } : false}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{
            scale: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
            ...(animate ? { default: { delay: 0.5, duration: 0.6 } } : {}),
          }}
          style={{ transformOrigin: '32px 32px' }}
        />

        {/* equalizer bars rising on a beat */}
        <g>
          {beat.map((h, i) => (
            <motion.rect
              key={i}
              x={20 + i * 6}
              width="3.4"
              rx="1.7"
              fill="url(#cryBars)"
              initial={animate ? { height: 0, y: 32 } : false}
              animate={{ height: [6 + h * 14, 10 + h * 18, 6 + h * 14], y: [35 - h * 7, 33 - h * 9, 35 - h * 7] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.12,
                ...(animate ? { duration: 1.6 } : {}),
              }}
            />
          ))}
        </g>
      </svg>

      {withWord && (
        <span className="font-display text-[15px] font-bold tracking-[0.22em] text-white">
          CRY&nbsp;MUSIC
        </span>
      )}
    </span>
  );
}
