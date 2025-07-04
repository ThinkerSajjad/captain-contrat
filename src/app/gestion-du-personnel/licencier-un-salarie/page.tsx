import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import PricingComparison from "@/components/common/PricingComparison";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/gestion-du-personnel/dismissal-procedure/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/gestion-du-personnel/dismissal-procedure/BusinessCreationSteps";
import { FAQ } from "@/components/gestion-du-personnel/dismissal-procedure/FAQ";
import { FreeGuides } from "@/components/gestion-du-personnel/dismissal-procedure/FreeGuides copy";
import { Hero } from "@/components/gestion-du-personnel/dismissal-procedure/Hero";





export default function LicencierUnSalariePage() {
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