# CRY Music Media

> Global music distribution, rights & royalty infrastructure for the modern independent era.

A complete, production-ready website for **CRY Music Media Ltd.** featuring:

- Premium, original brand identity (logo, wordmark, OG image)
- Marketing site (Home, About, Distribution, Features, How-it-works, Pricing, Artists, Platforms, Analytics, Royalties, FAQ, Contact)
- Authentication (email + password, JWT cookies, role-based access)
- Artist dashboard (overview, releases, new release, analytics, channels, wallet, support, settings)
- Admin dashboard (overview, users, release approval, payouts, support, SEO)
- Legal pages (Privacy, Terms, Cookie Policy, Anti-Piracy, Royalty Policy, Refund Policy)
- Premium animation system (hero, counters, marquee, scroll-reveal, magnetic CTAs, waveform, particle field, page transitions)
- Technical SEO (metadata, OG, Twitter cards, JSON-LD schemas, sitemap.xml, robots.txt, manifest)
- Responsive, accessible, reduced-motion friendly
- Security headers, rate-limited auth routes, input validation

---

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** with a custom original brand palette (violet / cyan / mint / rose gold on a deep ink)
- **Framer Motion** for premium motion
- **jose** + **bcryptjs** for secure auth (JWT in HTTP-only cookies)
- **zod** for input validation
- **lucide-react** icons
- In-memory mock data store (swap for PostgreSQL via Prisma in production)

---

## Quick start

```bash
cp .env.example .env.local       # rotate AUTH_SECRET before production
pnpm install                      # or npm install / yarn / bun install
pnpm dev                          # http://localhost:3000
```

### Demo accounts

| Role   | Email                     | Password     |
|--------|---------------------------|--------------|
| Artist | `artist@demo.com`         | `artist1234` |
| Artist | `aiden@demo.com`          | `artist1234` |
| Admin  | `admin@crymusic.com`      | `admin1234`  |

---

## Project structure

```
src/
├── app/                # Next.js App Router
│   ├── (public pages)
│   ├── dashboard/      # Artist area (auth required)
│   ├── admin/          # Admin area (admin role required)
│   ├── api/            # REST endpoints
│   ├── login/ signup/
│   ├── layout.tsx      # Root layout (header, footer, backdrop)
│   └── globals.css
├── components/
│   ├── brand/          # Logo, wordmark
│   ├── site/           # Header, footer, hero, FAQ, pricing, marquee, reveal, counter…
│   └── dashboard/      # Dashboard shell, forms, status pills, etc.
└── lib/
    ├── brand.ts        # Company info, FAQ, platforms, pricing, pillars, nav
    ├── auth.ts         # JWT session, sign / verify, cookies
    ├── store.ts        # In-memory data store (users, releases, payouts, channels, tickets)
    └── utils.ts        # cn, formatNumber, formatCurrency
```

---

## Brand identity

All logo assets are **original to CRY Music Media** and located in `public/brand/`:

| File | Use |
|------|-----|
| `logo-primary.svg` | Full wordmark + icon, primary |
| `logo-icon.svg`    | Icon only |
| `logo-white.svg`   | Light-background variant |
| `favicon.svg`      | Browser favicon |
| `og-image.svg`     | Open Graph / social share preview |

The colour system is defined in `tailwind.config.ts`:

- Primary: Royal Violet `#7C5CFF`
- Accent: Electric Cyan `#22D3EE`, Aurora Mint `#34D399`
- Warm contrast: Rose Gold `#F472B6`
- Surface: Ink 950 `#03050F` → Ink 700 `#1A1F40`

Typography: **Inter** for body, **Plus Jakarta Sans** for display.

---

## Animation system

Implemented with Framer Motion + custom hooks, all respecting `prefers-reduced-motion`:

- `<Reveal>` — fade/blur/slide on scroll
- `<Counter>` — eased number animation triggered by scroll
- `<Magnetic>` — CTA cursor-follow
- `<Waveform>` — looping soundwave bars
- `<ParticleField>` — performant canvas particles
- `<AmbientBackdrop>` — drifting aurora gradient
- `<PlatformMarquee>` — infinite logo marquee
- Hover transitions, focus states, page transitions

---

## SEO

- Per-page `metadata` with `title` template and canonical
- Open Graph + Twitter cards
- JSON-LD: Organization, WebSite, FAQPage
- `robots.txt` (disallows dashboard/admin)
- `sitemap.xml`
- `site.webmanifest`
- Image alt text, semantic HTML, H1/H2/H3 structure

---

## Security

- HTTP-only session cookies, `Secure` in production
- Bcrypt password hashing (10 rounds)
- Role-based redirects (artist vs admin)
- Strict CORS-friendly security headers (CSP ready)
- File-upload validation placeholder ready
- Server-side input validation with zod
- Password minimum length enforced

---

## Deployment

The project is ready for Vercel:

```bash
vercel
```

For self-hosting:

```bash
pnpm build
pnpm start
```

Replace `src/lib/store.ts` with a real database (Postgres + Prisma/Drizzle recommended) for production scale.

---

## Replacing the data store

`src/lib/store.ts` exposes typed records (`UserRecord`, `ReleaseRecord`, etc.) matching the schema of the existing Supabase project. To migrate:

1. Provision Postgres / Supabase.
2. Generate the schema from the type definitions.
3. Replace the in-memory helpers (`getStore`, mutations) with real DB calls.
4. Keep `src/lib/auth.ts` (JWT/cookies) — only the data layer changes.

---

## License

Proprietary. © CRY Music Media Ltd. All rights reserved.
