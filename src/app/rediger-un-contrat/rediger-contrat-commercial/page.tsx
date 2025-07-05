import AnyQuestions from "@/components/common/AnyQuestions";
import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { FreeGuides } from "@/components/rediger-un-contrat/commercial-contract/FreeGuide";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/commercial-contract/BusinessCreationSteps";
import { FAQ } from "@/components/rediger-un-contrat/commercial-contract/FAQ";
import { Hero } from "@/components/rediger-un-contrat/commercial-contract/Hero";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/commercial-contract/SoloVsProfessional";

export default function RedigerConditionsGeneralesLocationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <SoloVsProfessional />
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
