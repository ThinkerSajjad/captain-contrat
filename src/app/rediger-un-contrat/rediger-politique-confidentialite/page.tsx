import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { Hero } from "@/components/rediger-un-contrat/privacy-policy/Hero";
import { NeedToKnow } from "@/components/rediger-un-contrat/privacy-policy/NeedToKnow";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/privacy-policy/SoloVsProfessional";
import { FAQ } from "@/components/rediger-un-contrat/privacy-policy/FAQ";

export default function RedigerPacteAssociesEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      {/* <BusinessCreationSteps /> */}
      {/* <TrustMetrics /> */}
      <TestimonialCarousel />
      {/* <SupportersCarousel /> */}
      {/* <MakeAnAppointment /> */}
      {/* <HowToCreate /> */}

      <FAQ />
    </div>
  );
}
