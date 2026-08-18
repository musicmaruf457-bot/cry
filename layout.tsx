import type { Metadata, Viewport } from 'next';
import './globals.css';
import { brand, sameAs, founder } from '@/lib/brand';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});
import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';
import { AmbientBackdrop } from '@/components/site/AmbientBackdrop';

const TITLE = 'CRY Music Media — Global Music Distribution & Rights';
const DESCRIPTION =
  'CRY Music Media distributes your music to 180+ streaming and social platforms worldwide. Keep 100% of your rights, get transparent royalty reports and grow your audience globally.';

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: TITLE,
    template: '%s — CRY Music Media',
  },
  description: DESCRIPTION,
  applicationName: brand.name,
  keywords: [
    'music distribution',
    'digital music distribution',
    'music streaming',
    'royalty collection',
    'YouTube CMS',
    'independent artist',
    'CRY Music Media',
    'MARUF Hussain',
  ],
  authors: [{ name: brand.ceo, url: brand.url }],
  creator: brand.name,
  publisher: brand.legalName,
  alternates: { canonical: brand.url },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: brand.url,
    siteName: brand.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/brand/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `${brand.name} — Global Music Distribution`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/brand/og-image.png'],
    creator: '@hossa24312maruf',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/brand/logo-icon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#03050F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const socialLinks = Object.values(brand.social).filter(Boolean);

const ORG_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${brand.url}#organization`,
  name: brand.name,
  legalName: brand.legalName,
  url: brand.url,
  logo: `${brand.url}/brand/logo-primary.svg`,
  image: `${brand.url}/brand/og-image.png`,
  foundingDate: brand.founded,
  description: brand.tagline,
  slogan: brand.shortTagline,
  email: brand.email,
  telephone: brand.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: brand.address.street,
    addressLocality: brand.address.city,
    postalCode: brand.address.postcode,
    addressCountry: brand.address.country,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: brand.phone,
    email: brand.email,
    contactType: 'customer support',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Music Distribution',
    'Digital Music',
    'Music Publishing',
    'Royalty Collection',
    'YouTube CMS',
    'Content ID',
    'Independent Artists',
  ],
  sameAs: sameAs,
  founder: {
    '@type': 'Person',
    name: founder.name,
    givenName: founder.givenName,
    familyName: founder.familyName,
    jobTitle: founder.jobTitle,
    email: founder.email,
    url: founder.url,
    sameAs: founder.sameAs,
  },
};

const LOCAL_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  '@id': `${brand.url}#organization`,
  name: brand.name,
  url: brand.url,
  logo: `${brand.url}/brand/logo-primary.svg`,
  email: brand.email,
  sameAs: socialLinks,
};

const WEBSITE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: brand.name,
  alternateName: ['CRY', 'CRY Music Media Ltd.', 'CRY Digital Music'],
  url: brand.url,
  inLanguage: 'en',
  publisher: { '@id': `${brand.url}#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${brand.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${brand.url}/about#founder`,
  name: founder.name,
  givenName: founder.givenName,
  familyName: founder.familyName,
  jobTitle: founder.jobTitle,
  email: founder.email,
  url: founder.url,
  worksFor: { '@id': `${brand.url}#organization` },
  sameAs: founder.sameAs,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_JSONLD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }} />
        <AmbientBackdrop />
        <SiteHeader />
        <main className="relative z-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
