
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { Hero } from "@/components/business-creation/legal-forms/Hero";
import { FAQ } from "@/components/business-creation/legal-forms/FAQ";
import { LegalStatusChoice } from "@/components/business-creation/legal-forms/LegalStatusChoice";
import { TrustMetrics } from "@/components/common/TrustMetrics";



export default function RedigerPacteAssociesEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LegalStatusChoice />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <FAQ />
    </div>
  );
} 