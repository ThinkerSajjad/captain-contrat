import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";

import { FAQ } from "@/components/accompaniement/commercial-law/FAQ";
import { Hero } from "@/components/accompaniement/commercial-law/Hero";
import { WhyEntrepreneursLove } from "@/components/accompaniement/commercial-law/WhyEntrepreneursLove";
import CommittedLawyers from "@/components/accompaniement/commercial-law/Committed-lawyers";
import { FreeGuides } from "@/components/accompaniement/commercial-law/FreeGuides";

export default function BusinessLawPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <SoloVsProfessional /> */}
      <WhyEntrepreneursLove />
      <CommittedLawyers />
      {/* <OfferPricing /> */}
      <BusinessSupportServices />
      <BusinessCreationSteps />
      {/* <ExpertTrio /> */}
      {/* <BusinessStages /> */}
      {/* <LawCategories /> */}
      {/* <Guide /> */}
      <TrustedByEntrepreneurs />
      <FAQ />
      {/* <SupportersCarousel /> */}
      <FreeGuides />
      {/* <BlogCategories /> */}
    </div>
  );
}
