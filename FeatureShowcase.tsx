'use client';

import {
  Globe2,
  ShieldCheck,
  Youtube,
  Coins,
  Megaphone,
  Headphones,
  Music2,
  FileText,
  Users,
  Radio,
  Link2,
  Gauge,
  type LucideIcon,
} from 'lucide-react';
import { Reveal, RevealItem, RevealStagger } from './Reveal';

const features: { icon: LucideIcon; title: string; desc: string; points: string[] }[] = [
  {
    icon: Globe2,
    title: 'Global Distribution',
    desc: 'One upload reaches every major streaming and social platform — no per-store contracts, no manual deliveries.',
    points: ['180+ stores & platforms', '210+ countries & territories', 'Schedule & pre-save campaigns'],
  },
  {
    icon: ShieldCheck,
    title: 'Rights & Publishing',
    desc: 'Your copyright stays yours. Register works, collect publishing royalties and protect your catalog with industry-grade tooling.',
    points: ['100% rights retained', 'Publishing & mechanical collection', 'Ownership-first by design'],
  },
  {
    icon: Youtube,
    title: 'YouTube CMS & Content ID',
    desc: 'Monetize, claim and protect your catalog across YouTube with our Content ID and channel management suite.',
    points: ['Automatic claim detection', 'Revenue from existing uploads', 'Takedown & dispute tools'],
  },
  {
    icon: Coins,
    title: 'Royalty Accounting',
    desc: 'Transparent, auditable royalty statements. Track earnings by track, platform, country and release.',
    points: ['Real-time dashboards', 'Per-track / per-region splits', 'Downloadable statements'],
  },
  {
    icon: Megaphone,
    title: 'Smart Promotions',
    desc: 'Pre-save campaigns, smart-links, analytics & marketing tools to grow your audience worldwide.',
    points: ['Smart-links & pre-save', 'Audience insights', 'Release marketing toolkit'],
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Real human support, artist success managers and a global team committed to your catalog.',
    points: ['Artist success managers', 'Priority review tiers', '24/7 monitoring'],
  },
  {
    icon: Music2,
    title: 'Release Management',
    desc: 'Singles, EPs and albums with flexible scheduling, label-grade metadata and approval workflows.',
    points: ['ISRC / UPC assignment', 'Rich contributor credits', 'Draft → live pipeline'],
  },
  {
    icon: FileText,
    title: 'Metadata & QC',
    desc: 'Every release is validated before routing — clean metadata means faster go-live and accurate payouts.',
    points: ['Automated QC checks', 'Genre & language tagging', 'Cover-art compliance'],
  },
  {
    icon: Users,
    title: 'Label & Roster Tools',
    desc: 'Manage multiple artists, bulk-submit releases and see label-level analytics in one workspace.',
    points: ['Multi-artist rosters', 'Bulk submission', 'Team permissions'],
  },
  {
    icon: Radio,
    title: 'Analytics & Insights',
    desc: 'Understand where your audience is and which tracks convert — by platform, region and time.',
    points: ['Stream & revenue trends', 'Top regions & playlists', 'Exportable reports'],
  },
  {
    icon: Link2,
    title: 'Smart-Links',
    desc: 'One beautiful link to every store and platform your release lives on — built for sharing.',
    points: ['Auto-store routing', 'Custom branding', 'Click & convert tracking'],
  },
  {
    icon: Gauge,
    title: 'Fast Time-to-Live',
    desc: 'Standard releases go live in 1–3 business days; priority tiers can be live within 24 hours.',
    points: ['Priority 24h delivery', 'Clear status tracking', 'Calendar scheduling'],
  },
];

export function FeatureShowcase() {
  return (
    <section className="relative section">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center mb-14">
          <p className="h-eyebrow">The full suite</p>
          <h2 className="h-section mt-3">
            Everything you need to <span className="gradient-text">release, protect & grow.</span>
          </h2>
          <p className="mt-5 text-white/65 max-w-2xl mx-auto">
            A complete music infrastructure — from your first single to a full label catalog — backed by one dashboard.
          </p>
        </Reveal>

        <RevealStagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <RevealItem
                key={f.title}
                className="card relative overflow-hidden p-7 group hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 border border-white/10 text-violet-200 mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
