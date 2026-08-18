import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        // Brand palette — original to CRY Music Media (NOT copy of reference site)
        ink: {
          50: '#F5F6FA',
          100: '#E7E9F2',
          200: '#C7CCE0',
          300: '#9AA0C2',
          400: '#6B7299',
          500: '#454B73',
          600: '#2A3057',
          700: '#1A1F40',
          800: '#0E1230',
          900: '#070A1F',
          950: '#03050F',
        },
        // Accent — Royal Violet (primary)
        violet: {
          50: '#F3EFFF',
          100: '#E4DDFE',
          200: '#C7B8FB',
          300: '#A48BF6',
          400: '#7C5CFF',
          500: '#5A3BE6',
          600: '#4229C0',
          700: '#311E94',
          800: '#1F1459',
          900: '#100933',
        },
        // Accent — Electric Cyan
        cyan: {
          50: '#E6FCFF',
          100: '#BEF6FB',
          200: '#86EEF6',
          300: '#3DE0EF',
          400: '#22D3EE',
          500: '#0EA5C7',
          600: '#097EA0',
          700: '#055F7B',
          800: '#023E54',
          900: '#01222F',
        },
        // Accent — Aurora Mint
        mint: {
          50: '#E6FCF2',
          100: '#BDF7DF',
          200: '#86EFC0',
          300: '#4DE39C',
          400: '#34D399',
          500: '#15A77A',
          600: '#0E7E5C',
          700: '#095C44',
          800: '#053D2E',
          900: '#02221A',
        },
        // Accent — Rose Gold (warm contrast)
        rose: {
          50: '#FFF1F6',
          100: '#FFD9E5',
          200: '#FFB0C8',
          300: '#FF80A8',
          400: '#F472B6',
          500: '#D84890',
          600: '#A32E6F',
          700: '#741E50',
          800: '#4A1234',
          900: '#26091C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-jakarta)', '"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 30%, transparent)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        'radial-violet':
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,92,255,0.25), transparent 60%)',
        'radial-cyan':
          'radial-gradient(ellipse 50% 40% at 80% 30%, rgba(34,211,238,0.18), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,92,255,0.35), 0 12px 40px -8px rgba(124,92,255,0.45)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.35), 0 12px 40px -8px rgba(34,211,238,0.45)',
        soft: '0 8px 30px -12px rgba(2,4,16,0.6)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        waveBar: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 3.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
        waveBar: 'waveBar 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
