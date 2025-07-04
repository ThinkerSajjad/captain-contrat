import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { BusinessCreationOffers } from "@/components/common/BusinessCreationOffers";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessSupportServices } from "@/components/expertise-comptable/BusinessSupportServices";
import { FAQ } from "@/components/expertise-comptable/FAQ";
import { Hero } from "@/components/expertise-comptable/Hero";
import { SoloVsProfessional } from "@/components/expertise-comptable/SoloVsProfessional";


export default function ExpertiseComptablePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessSupportServices />
      <BusinessBenefitsAccordion />
      <BusinessCreationOffers />
      <SoloVsProfessional />
      <TrustMetrics />
      <TestimonialCarousel />
      <FAQ />
    </div>
  );
} 