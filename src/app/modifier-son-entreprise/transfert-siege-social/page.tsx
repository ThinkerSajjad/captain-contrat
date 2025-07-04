import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import PricingComparison from "@/components/common/PricingComparison";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/modifier-son-entreprise/transfer-office/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/modifier-son-entreprise/transfer-office/BusinessCreationSteps";
import { FAQ } from "@/components/modifier-son-entreprise/transfer-office/FAQ";
import { Hero } from "@/components/modifier-son-entreprise/transfer-office/Hero";




export default function TransfertSiegeSocialPage() {
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
    </div>
  );
} 