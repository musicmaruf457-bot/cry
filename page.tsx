import { Hero } from '@/components/site/Hero';
import { PlatformMarquee } from '@/components/site/PlatformMarquee';
import { LogoCloud } from '@/components/site/LogoCloud';
import { Stats } from '@/components/site/Stats';
import { Pillars } from '@/components/site/Pillars';
import { HowItWorks } from '@/components/site/HowItWorks';
import { Testimonials } from '@/components/site/Testimonials';
import { Pricing } from '@/components/site/Pricing';
import { FAQ } from '@/components/site/FAQ';
import { CTA } from '@/components/site/CTA';
import { MusicUniverse } from '@/components/site/MusicUniverse';
import { GlobalMarkets } from '@/components/site/GlobalMarkets';
import { ReleaseFlow } from '@/components/site/ReleaseFlow';
import { RightsManagement } from '@/components/site/RightsManagement';
import { ConsolePreview } from '@/components/site/ConsolePreview';
import { CeoSpotlight } from '@/components/site/CeoSpotlight';
import { VerifiedSystem } from '@/components/site/VerifiedSystem';
import { PartnerNetwork } from '@/components/site/PartnerNetwork';
import { CaseStudies } from '@/components/site/CaseStudies';
import { TrustedBy } from '@/components/site/TrustedBy';
import { GlobalReach } from '@/components/site/GlobalReach';
import { brand, faq } from '@/lib/brand';

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <Hero />
      <PlatformMarquee />
      <CeoSpotlight />
      <LogoCloud />
      <Stats />
      <MusicUniverse />
      <VerifiedSystem />
      <Pillars />
      <ReleaseFlow />
      <GlobalReach />
      <PartnerNetwork />
      <CaseStudies />
      <TrustedBy />
      <ConsolePreview />
      <RightsManagement />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
