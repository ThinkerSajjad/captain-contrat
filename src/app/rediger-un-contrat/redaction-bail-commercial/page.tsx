import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/rediger-un-contrat/commercial-lease/BusinessCreationSteps";
import { Hero } from "@/components/rediger-un-contrat/commercial-lease/Hero";
import { FAQ } from "@/components/rediger-un-contrat/commercial-lease/FAQ";
import AnyQuestions from "@/components/common/AnyQuestions";
import { FreeGuides } from "@/components/rediger-un-contrat/commercial-lease/FreeGuides";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";

export default function RedigerContratDeLocationCommercialLeasePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      <BusinessCreationSteps />
      <TrustMetrics />
      <TestimonialCarousel />
      <MakeAnAppointment />
      <SupportersCarousel />
      <FAQ />
      <AnyQuestions />
      <FreeGuides />
    </div>
  );
}
