import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/partnership-agreement/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/partnership-agreement/Hero";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/partnership-agreement/SoloVsProfessional";
import { FAQ } from "@/components/rediger-un-contrat/partnership-agreement/FAQ";
import EssentialsToKnow from "@/components/rediger-un-contrat/partnership-agreement/EssentialsToKnow";
import AnyQuestions from "@/components/common/AnyQuestions";
import { FreeGuides } from "@/components/rediger-un-contrat/partnership-agreement/FreeGuide";
import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";

export default function RedigerContratDePrestationDeServicesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EssentialsToKnow />
      {/* <SoloVsProfessional /> */}
      <TestimonialCarousel />
      <BusinessCreationSteps />
      {/* <SupportersCarousel /> */}
      <BusinessBenefitsAccordion />
      <AnyQuestions />
      <TrustMetrics />
      <FAQ />
      <FreeGuides />
    </div>
  );
}
