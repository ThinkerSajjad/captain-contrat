import AnyQuestions from "@/components/common/AnyQuestions";
import { BusinessBenefitsAccordion } from "@/components/rediger-un-contrat/fixed-term-contract/BusinessBenefitAccordian";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { FreeGuides } from "@/components/rediger-un-contrat/fixed-term-contract/FreeGuide";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/fixed-term-contract/BusinessCreationSteps";
import { FAQ } from "@/components/rediger-un-contrat/fixed-term-contract/FAQ";
import { Hero } from "@/components/rediger-un-contrat/fixed-term-contract/Hero";

export default function RedigerConditionsGeneralesLocationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      {/* <SoloVsProfessional /> */}
      <BusinessBenefitsAccordion />
      <AnyQuestions />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <FAQ />
      <FreeGuides />
    </div>
  );
}
