import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import PricingComparison from "@/components/common/PricingComparison";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/modifier-son-entreprise/share-transfer/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/modifier-son-entreprise/share-transfer/BusinessCreationSteps";
import { FAQ } from "@/components/modifier-son-entreprise/share-transfer/FAQ";
import { FreeGuides } from "@/components/modifier-son-entreprise/share-transfer/FreeGuides";
import { Hero } from "@/components/modifier-son-entreprise/share-transfer/Hero";


export default function ContractCessionPartsSocialesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <PricingComparison />
      <MakeAnAppointment />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 