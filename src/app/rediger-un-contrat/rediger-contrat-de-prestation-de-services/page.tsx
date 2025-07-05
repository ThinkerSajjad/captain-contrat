import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/service-provision-contract/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/service-provision-contract/Hero";
import { SoloVsProfessional } from "@/components/rediger-un-contrat/service-provision-contract/SoloVsProfessional";
import { FAQ } from "@/components/rediger-un-contrat/service-provision-contract/FAQ";
import EssentialsToKnow from "@/components/rediger-un-contrat/service-provision-contract/EssentialsToKnow";
import AnyQuestions from "@/components/common/AnyQuestions";

export default function RedigerContratDePrestationDeServicesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EssentialsToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <FAQ />
      <AnyQuestions />
    </div>
  );
}
