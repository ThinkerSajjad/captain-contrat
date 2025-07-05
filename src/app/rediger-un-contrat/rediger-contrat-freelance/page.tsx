import AnyQuestions from "@/components/common/AnyQuestions";
import { BusinessBenefitsAccordion } from "@/components/rediger-un-contrat/freelance-contract/BusinessBenefitAccordian";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { FreeGuides } from "@/components/rediger-un-contrat/freelance-contract/FreeGuide";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/freelance-contract/BusinessCreationSteps";
import { FAQ } from "@/components/rediger-un-contrat/freelance-contract/FAQ";
import { Hero } from "@/components/rediger-un-contrat/freelance-contract/Hero";

export default function RedigerConditionsGeneralesLocationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      {/* <SoloVsProfessional /> */}
      <BusinessBenefitsAccordion />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <AnyQuestions />
      <FAQ />
      <FreeGuides />
    </div>
  );
}
