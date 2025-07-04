import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/sale-terms-conditions/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/sale-terms-conditions/Hero";
import { HowToCreate } from "@/components/rediger-un-contrat/sale-terms-conditions/HowToCreate";
import { NeedToKnow } from "@/components/rediger-un-contrat/sale-terms-conditions/NeedToKnow";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/sale-terms-conditions/SoloVsProfessional";




export default function RedigerPacteAssociesEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <HowToCreate />
    </div>
  );
} 