import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/permanent-contract/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/permanent-contract/Hero";
import { HowToCreate } from "@/components/rediger-un-contrat/permanent-contract/HowToCreate";
import { NeedToKnow } from "@/components/rediger-un-contrat/permanent-contract/NeedToKnow";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/permanent-contract/SoloVsProfessional";
import { FreeGuides } from "@/components/rediger-un-contrat/permanent-contract/FreeGuide";
import { BusinessBenefitsAccordion } from "@/components/rediger-un-contrat/permanent-contract/BusinessBenefitAccordian";
import AnyQuestions from "@/components/common/AnyQuestions";

export default function RedigerContratTravailIndeterminePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <AnyQuestions />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <HowToCreate />
      <FreeGuides />
    </div>
  );
}
