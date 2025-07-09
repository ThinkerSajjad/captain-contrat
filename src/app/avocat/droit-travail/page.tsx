import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";

import { FAQ } from "@/components/accompaniement/labour-law/FAQ";
import { Hero } from "@/components/accompaniement/labour-law/Hero";
import { WhyEntrepreneursLove } from "@/components/accompaniement/labour-law/WhyEntrepreneursLove";

export default function BusinessLawPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <SoloVsProfessional /> */}
      <WhyEntrepreneursLove />
      {/* <CommittedLawyers /> */}
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
      {/* <BlogCategories /> */}
    </div>
  );
}
