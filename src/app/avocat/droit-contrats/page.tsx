import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";

import { FAQ } from "@/components/accompaniement/contract-law/FAQ";
import { Hero } from "@/components/accompaniement/contract-law/Hero";
import { WhyEntrepreneursLove } from "@/components/accompaniement/contract-law/WhyEntrepreneursLove";
import CommittedLawyers from "@/components/accompaniement/contract-law/Committed-lawyers";

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
      <SupportersCarousel />
      {/* <BlogCategories /> */}
    </div>
  );
}
