import { ModifyMyBusinessHero } from "@/components/modifier-son-entreprise/ModifyMyBusinessHero";
import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { OnlinePlatformBenefits } from "@/components/modifier-son-entreprise/OnlinePlatformBenefits";
import { ModifyStatusSteps } from "@/components/modifier-son-entreprise/ModifyStatusSteps";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { OffersForEnterprenuers } from "@/components/modifier-son-entreprise/OffersForEnterprenuers";

export default function ModifierSonEntreprisePage() {
  return (
    <div className="min-h-screen">
        <ModifyMyBusinessHero />
        <BusinessBenefitsAccordion />
        <OnlinePlatformBenefits />
        <ModifyStatusSteps />
        <TestimonialCarousel />
        <SupportersCarousel />
        <OffersForEnterprenuers />
    </div>
  );
} 