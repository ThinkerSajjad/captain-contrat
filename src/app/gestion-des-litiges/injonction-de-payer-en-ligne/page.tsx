import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/gestion-des-litiges/payment-order/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/gestion-des-litiges/payment-order/BusinessCreationSteps";
import { FAQ } from "@/components/gestion-des-litiges/payment-order/FAQ";
import { Hero } from "@/components/gestion-des-litiges/payment-order/Hero";







export default function FaireUneMiseDemeureEnLignePage() {
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