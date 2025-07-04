import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import PricingComparison from "@/components/common/PricingComparison";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/gestion-du-personnel/mutual-termination/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/gestion-du-personnel/mutual-termination/BusinessCreationSteps";
import { FAQ } from "@/components/gestion-du-personnel/mutual-termination/FAQ";
import { FreeGuides } from "@/components/gestion-du-personnel/mutual-termination/FreeGuides";
import { Hero } from "@/components/gestion-du-personnel/mutual-termination/Hero";





export default function ProcedureRuptureConventionnellePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 