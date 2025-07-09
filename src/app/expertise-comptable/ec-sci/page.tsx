import { BusinessCreationOffers } from "@/components/expertise-comptable/accounting-expertise/BusinessCreationOffers";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessSupportServices } from "@/components/expertise-comptable/accounting-expertise/BusinessSupportServices";
import { FAQ } from "@/components/expertise-comptable/accounting-expertise/FAQ";
import { Hero } from "@/components/expertise-comptable/accounting-expertise/Hero";
import { SoloVsProfessional } from "@/components/expertise-comptable/accounting-expertise/SoloVsProfessional";
import { BusinessBenefitsAccordion } from "@/components/expertise-comptable/accounting-expertise/BusinessBenefitsAccordion";

export default function AccountingExpertisePage() {
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
