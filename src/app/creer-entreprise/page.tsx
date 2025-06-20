import { BusinessCreationGuide } from "@/components/business-creation/BusinessCreationGuide";
import { BusinessCreationHero } from "@/components/business-creation/BusinessCreationHero";
import { BusinessCreationTags } from "@/components/business-creation/BusinessCreationTags";
import { BusinessCreationFAQ } from "@/components/business-creation/BusinessCreationFAQ";

import { BusinessCreationOffers } from "@/components/common/BusinessCreationOffers";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";
import { WhyEntrepreneursLove } from "@/components/home/WhyEntrepreneursLove";

export default function BusinessCreationPage() {
  return (
    <div className="min-h-screen">
      <BusinessCreationHero />
      <WhyEntrepreneursLove />
      <BusinessCreationOffers />
      <BusinessCreationSteps />
      <BusinessSupportServices />
      <BusinessCreationGuide />
      <TrustedByEntrepreneurs />
      <BusinessCreationTags />
      <BusinessCreationFAQ />
    </div>
  );
} 