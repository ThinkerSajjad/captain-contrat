import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";

import { FAQ } from "@/components/accompaniement/intellectual-property-law/FAQ";
import { Hero } from "@/components/accompaniement/intellectual-property-law/Hero";
import { WhyEntrepreneursLove } from "@/components/accompaniement/intellectual-property-law/WhyEntrepreneursLove";
import CommittedLawyers from "@/components/accompaniement/intellectual-property-law/Committed-lawyers";
import { FreeGuides } from "@/components/accompaniement/intellectual-property-law/FreeGuides";

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
