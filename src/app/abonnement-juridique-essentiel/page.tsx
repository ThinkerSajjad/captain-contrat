import { BusinessCreationOffers } from "@/components/essential-support/BusinessCreationOffers";
import { BusinessSupportServices } from "@/components/essential-support/BusinessSupportServices";
import { FAQ } from "@/components/essential-support/FAQ";
import { Hero } from "@/components/essential-support/Hero";
import { BusinessBenefitsAccordion } from "@/components/essential-support/BusinessBenefitsAccordion";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";

export default function EssentialSupportPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessSupportServices />
      <BusinessBenefitsAccordion />
      {/* <SoloVsProfessional /> */}
      <BusinessCreationOffers />
      {/* <TrustMetrics /> */}
      {/* <TestimonialCarousel /> */}
      <TrustedByEntrepreneurs />
      <FAQ />
    </div>
  );
}
