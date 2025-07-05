import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/use-terms-conditions/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/use-terms-conditions/Hero";
import { HowToCreate } from "@/components/rediger-un-contrat/use-terms-conditions/HowToCreate";
import { NeedToKnow } from "@/components/rediger-un-contrat/use-terms-conditions/NeedToKnow";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/use-terms-conditions/SoloVsProfessional";

export default function RedigerConditionsGeneralesLocationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <HowToCreate />
    </div>
  );
}
