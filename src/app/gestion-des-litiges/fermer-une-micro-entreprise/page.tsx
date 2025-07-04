import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/gestion-des-litiges/close-microbusiness/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/gestion-des-litiges/close-microbusiness/BusinessCreationSteps";
import { FAQ } from "@/components/gestion-des-litiges/close-microbusiness/FAQ";
import { Hero } from "@/components/gestion-des-litiges/close-microbusiness/Hero";

export default function FermerUneMicroEntreprisePage() {
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
    </div>
  );
} 