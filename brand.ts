// Centralized company info for CRY Music Media
export const brand = {
  name: 'CRY Music Media',
  shortName: 'CRY',
  legalName: 'CRY Music Media Ltd.',
  ceo: 'MARUF Hussain',
  ceoTitle: 'CEO / Managing Director',
  email: 'contact@crydigitalmusic.com',
  phone: '+44 20 7060 7220',
  phoneHref: 'tel:+442070607220',
  address: {
    street: 'International House, 36–38 Cornhill',
    city: 'London',
    postcode: 'EC3V 3NG',
    country: 'United Kingdom',
  },
  url: 'https://crydigitalmusic.com',
  founded: '2021',
  tagline: 'Global music distribution, rights & royalty infrastructure for the modern independent era.',
  shortTagline: 'Distribute your sound worldwide.',
  social: {
    youtube: 'https://youtube.com/@crydigitalmusicltd',
    facebook: 'https://www.facebook.com/people/CRY-Digital-Music-Ltd/61588053947128/',
    instagram: 'https://www.instagram.com/cry_digital_music__/',
    x: 'https://x.com/hossa24312maruf',
    // Configurable — add your LinkedIn Company Page URL here when available
    linkedin: 'https://www.linkedin.com/company/cry-music-media',
  },
};

// All official social / web profiles — used as schema.org sameAs so brand
// searches surface the company across every platform.
export const sameAs = Object.values(brand.social)
  .filter((v): v is string => Boolean(v))
  .concat([
    `${brand.url}`,
    `${brand.url}/about`,
    `${brand.url}/partners`,
  ]);

// Public founder profile (for Person schema + knowledge-graph eligibility)
export const founder = {
  name: brand.ceo,
  givenName: 'MARUF',
  familyName: 'Hussain',
  jobTitle: brand.ceoTitle,
  email: brand.email,
  url: brand.url,
  sameAs: [
    'https://x.com/hossa24312maruf',
    'https://www.instagram.com/cry_digital_music__/',
    'https://www.linkedin.com/company/cry-music-media',
    `${brand.url}/about`,
  ].filter(Boolean) as string[],
};

// Configurable placeholder counters (clearly demo data; never claim as real)
export const stats = [
  { value: 180, suffix: '+', label: 'Stores & platforms' },
  { value: 210, suffix: '+', label: 'Countries & territories' },
  { value: 99.9, suffix: '%', label: 'Uptime & delivery', decimals: 1 },
  { value: 100, suffix: '%', label: 'Rights stay with you' },
];

// Configurable placeholder pricing (replace with real plans when ready)
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For debut releases & first-time artists',
    monthly: 0,
    yearly: 0,
    cta: 'Start free',
    features: [
      'Unlimited releases',
      'Distribution to 180+ stores',
      'Standard release timeline',
      'Royalty payouts (min. $50)',
      'Basic analytics',
    ],
    accent: 'cyan',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For active independent artists',
    monthly: 19,
    yearly: 190,
    highlight: true,
    cta: 'Choose Pro',
    features: [
      'Everything in Starter',
      'Priority review & 24h delivery',
      'YouTube Content ID',
      'Pre-save & smart-links',
      'Detailed analytics & exports',
      'Split payments',
    ],
    accent: 'violet',
  },
  {
    id: 'label',
    name: 'Label',
    tagline: 'For labels & rosters of artists',
    monthly: 49,
    yearly: 490,
    cta: 'Choose Label',
    features: [
      'Everything in Pro',
      'Multi-artist roster tools',
      'Bulk release submission',
      'Label-level analytics',
      'Dedicated release manager',
      'White-label smart-links',
    ],
    accent: 'mint',
  },
];

// Music distribution platforms
export const platforms = [
  { name: 'Spotify', color: '#1DB954' },
  { name: 'Apple Music', color: '#FA243C' },
  { name: 'YouTube Music', color: '#FF0000' },
  { name: 'Amazon Music', color: '#00A8E1' },
  { name: 'Tidal', color: '#FFFFFF' },
  { name: 'Deezer', color: '#A238FF' },
  { name: 'TikTok', color: '#25F4EE' },
  { name: 'SoundCloud', color: '#FF5500' },
  { name: 'Pandora', color: '#3668FF' },
  { name: 'Instagram', color: '#E4405F' },
  { name: 'Shazam', color: '#0088FF' },
  { name: 'Napster', color: '#1E90FF' },
  { name: 'Audiomack', color: '#FFA200' },
  { name: 'Bandcamp', color: '#408294' },
  { name: 'Beatport', color: '#A6FF00' },
  { name: 'iHeartRadio', color: '#C6002B' },
  { name: 'Anghami', color: '#9B4BFF' },
  { name: 'JioSaavn', color: '#2BC5B4' },
  { name: 'Boomplay', color: '#FF6A00' },
  { name: 'Facebook', color: '#1877F2' },
];

// FAQ items
export const faq = [
  {
    q: 'What is CRY Music Media Distribution?',
    a: 'CRY Music Media is a global digital music distribution service built for independent artists, labels and creators. We deliver your music to leading streaming and social platforms worldwide while you keep full ownership of your rights.',
  },
  {
    q: 'Which platforms do you distribute to?',
    a: 'We distribute to 180+ platforms including Spotify, Apple Music, YouTube Music, Amazon Music, Tidal, Deezer, TikTok, Instagram, Facebook, Pandora, JioSaavn, Boomplay and many more.',
  },
  {
    q: 'Do artists keep 100% ownership of their music?',
    a: 'Yes — always. Artists and labels retain full ownership and copyright of every release. We never claim ownership or control over your catalog.',
  },
  {
    q: 'How much revenue do artists earn?',
    a: 'Artists earn up to 100% of net streaming and download revenue, minus any optional plan fees. Royalty reporting is transparent, auditable and regularly updated.',
  },
  {
    q: 'How long does a release take to go live?',
    a: 'Standard releases typically go live within 1–3 business days after approval. Priority releases can be live within 24 hours.',
  },
  {
    q: 'Do you provide royalty reports and analytics?',
    a: 'Yes. CRY Music Media offers detailed royalty reports, streaming analytics and audience insights directly from your artist dashboard.',
  },
  {
    q: 'Can I release singles, EPs and albums?',
    a: 'Absolutely. Upload singles, EPs and full-length albums with flexible scheduling, pre-save campaigns and label-grade metadata.',
  },
  {
    q: 'How do payouts work?',
    a: 'Payouts are processed monthly once your balance reaches the minimum threshold (configurable per plan). Withdraw via supported methods directly from your dashboard.',
  },
  {
    q: 'Do you offer YouTube Content ID?',
    a: 'Yes. CRY Music Media provides YouTube Content ID to help you monetize your music on YouTube and protect it from unauthorized reuploads.',
  },
  {
    q: 'Who can join CRY Music Media?',
    a: 'Independent artists, bands, producers, songwriters and labels worldwide — whether you are just starting out or already established.',
  },
];

// Service pillars
export const pillars = [
  {
    title: 'Global Distribution',
    desc: 'Release your music to 180+ stores and streaming platforms in over 210 countries — all from a single dashboard.',
    icon: 'globe',
  },
  {
    title: 'Rights & Publishing',
    desc: 'Register compositions worldwide, collect publishing royalties and protect your works with industry-grade tools.',
    icon: 'shield',
  },
  {
    title: 'YouTube CMS',
    desc: 'Monetize, claim and protect your catalog across YouTube with our Content ID and channel management suite.',
    icon: 'youtube',
  },
  {
    title: 'Royalty Accounting',
    desc: 'Transparent, auditable royalty statements. Track earnings by track, platform, country and release.',
    icon: 'coin',
  },
  {
    title: 'Smart Promotions',
    desc: 'Pre-save campaigns, smart-links, analytics & marketing tools to grow your audience worldwide.',
    icon: 'megaphone',
  },
  {
    title: 'Dedicated Support',
    desc: 'Real human support, artist success managers and a global team committed to your catalog.',
    icon: 'headset',
  },
];

// Partner networks & platforms we connect artists to (for network proposals)
export const partnerTiers = [
  {
    tier: 'Global Streaming',
    desc: 'On-demand streaming to the world’s largest catalogs.',
    logos: ['Spotify', 'Apple Music', 'YouTube Music', 'Amazon Music', 'Tidal', 'Deezer'],
  },
  {
    tier: 'Social & Short-form',
    desc: 'Monetize virality across the social graph.',
    logos: ['TikTok', 'Instagram', 'Facebook', 'SoundCloud', 'Snapchat'],
  },
  {
    tier: 'Emerging & Regional',
    desc: 'Reach high-growth audiences in priority markets.',
    logos: ['Boomplay', 'JioSaavn', 'Anghami', 'Audiomack', 'KKBOX'],
  },
];

// Distribution pipeline — the "new channel" flow for network proposals
export const channelPipeline = [
  { step: '01', title: 'Ingest', desc: 'Secure delivery of mastered audio, artwork and metadata via our API.' },
  { step: '02', title: 'Validate', desc: 'ISRC/UPC assignment, rights checks and QC before routing.' },
  { step: '03', title: 'Distribute', desc: 'Push to every connected partner with scheduled release windows.' },
  { step: '04', title: 'Report', desc: 'Stream-level royalty accounting with transparent splits.' },
];

// Artist / label success stories (clearly illustrative — replace with real case studies)
export const caseStudies = [
  {
    artist: 'Northwind Records',
    type: 'Independent label',
    region: 'London · Berlin',
    stat: '+38%',
    statLabel: 'monthly revenue',
    quote:
      'Moving our 120-artist roster to CRY cut our release turnaround in half and gave us audit-grade royalty reports our artists actually trust.',
    person: 'Lena Park, Founder',
  },
  {
    artist: 'Kwame Solo',
    type: 'Afrobeats artist',
    region: 'Accra · Lagos',
    stat: '12M+',
    statLabel: 'streams in 9 months',
    quote:
      'CRY got me onto Boomplay and Audiomack the same week as Spotify. My audience in West Africa finally pays me properly.',
    person: 'Kwame Solo',
  },
  {
    artist: 'Onda Music',
    type: 'Label & publisher',
    region: 'São Paulo',
    stat: '3 days',
    statLabel: 'to full YouTube CMS claim',
    quote:
      'Content ID and publishing collection used to take months with our old distributor. With CRY it was days, and the statements are clean.',
    person: 'Sofia Almeida, A&R',
  },
];

// Press & credibility signals (illustrative — swap for real logos/quotes)
export const pressLogos = ['MusicWeek', 'Billboard', 'CMU', 'Music Business Worldwide', 'DJ Mag', 'Hypebot'];

export const trustBadges = [
  { label: '100% Rights Retained', desc: 'Artists always keep full ownership of their catalog.' },
  { label: 'SOC 2 — Aligned', desc: 'Security practices aligned to industry audit standards.' },
  { label: 'GDPR Compliant', desc: 'Data handled under UK/EU privacy regulation.' },
  { label: 'PCI-AWARE Payouts', desc: 'Royalty withdrawals via compliant processors only.' },
  { label: '24/7 Monitoring', desc: 'Anti-piracy and takedown watch across the web.' },
  { label: 'ISO 27001 — Roadmap', desc: 'Information-security certification in progress.' },
];

// Recognised regions for the global reach map
export const reachRegions = [
  { name: 'North America', stores: 42 },
  { name: 'United Kingdom', stores: 38 },
  { name: 'Europe', stores: 51 },
  { name: 'Latin America', stores: 33 },
  { name: 'Africa', stores: 29 },
  { name: 'Middle East', stores: 24 },
  { name: 'South Asia', stores: 27 },
  { name: 'East Asia', stores: 31 },
  { name: 'Southeast Asia', stores: 26 },
  { name: 'Oceania', stores: 22 },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Distribution', href: '/distribution' },
  { label: 'Features', href: '/features' },
  { label: 'Partner Network', href: '/partners' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Artists', href: '/artists' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Royalties', href: '/royalties' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
