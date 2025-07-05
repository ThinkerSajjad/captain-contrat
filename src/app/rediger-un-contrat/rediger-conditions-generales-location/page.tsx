import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/rental-terms-conditions/BusinessCreationSteps";
import { FAQ } from "@/components/rediger-un-contrat/rental-terms-conditions/FAQ";
import { Hero } from "@/components/rediger-un-contrat/rental-terms-conditions/Hero";

export default function RedigerConditionsGeneralesLocationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <FAQ />
    </div>
  );
}
