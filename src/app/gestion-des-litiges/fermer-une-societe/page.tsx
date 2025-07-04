import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { StandardVsSerenity } from "@/components/common/StandardVsSerenity";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/gestion-des-litiges/close-business/BusinessCreationSteps";
import { FreeGuides } from "@/components/gestion-des-litiges/close-business/FreeGuides";
import { Hero } from "@/components/gestion-des-litiges/close-business/Hero";
import { HowToCreate } from "@/components/gestion-des-litiges/close-business/HowToCreate";
import { NeedToKnow } from "@/components/gestion-des-litiges/close-business/NeedToKnow";
import { SoloVsProfessional } from "@/components/gestion-des-litiges/close-business/SoloVsProfessional";






export default function FermerUneSocietePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <StandardVsSerenity />
      <TrustMetrics />
      <TestimonialCarousel />
      <MakeAnAppointment />
      <SupportersCarousel />
      <HowToCreate />
      <FreeGuides />
    </div>
  );
} 