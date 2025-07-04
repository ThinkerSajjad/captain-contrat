import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/modifier-son-entreprise/transform-sarl-into-sas/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/modifier-son-entreprise/transform-sarl-into-sas/BusinessCreationSteps";
import { FAQ } from "@/components/modifier-son-entreprise/transform-sarl-into-sas/FAQ";
import { FreeGuides } from "@/components/modifier-son-entreprise/transform-sarl-into-sas/FreeGuides";
import { Hero } from "@/components/modifier-son-entreprise/transform-sarl-into-sas/Hero";




export default function TransformationSarlEnSasPage() {
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