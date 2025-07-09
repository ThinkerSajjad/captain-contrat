import { BusinessCreationOffers } from "@/components/expertise-comptable/BusinessCreationOffers";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessSupportServices } from "@/components/expertise-comptable/BusinessSupportServices";
import { FAQ } from "@/components/expertise-comptable/FAQ";
import { Hero } from "@/components/expertise-comptable/Hero";
import { SoloVsProfessional } from "@/components/expertise-comptable/SoloVsProfessional";
import { BusinessBenefitsAccordion } from "@/components/expertise-comptable/BusinessBenefitsAccordion";

export default function ExpertiseComptablePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessSupportServices />
      <BusinessBenefitsAccordion />
      <SoloVsProfessional />
      <BusinessCreationOffers />
      <TrustMetrics />
      <TestimonialCarousel />
      <FAQ />
    </div>
  );
}
