import { LegalStatusChoice } from "@/components/business-creation/legal-forms/LegalStatusChoice";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { FAQ } from "@/components/gestion-des-litiges/formal-notice/FAQ";
import { Hero } from "@/components/gestion-des-litiges/formal-notice/Hero";
import { NeedToKnow } from "@/components/gestion-des-litiges/formal-notice/NeedToKnow";
import { SoloVsProfessional } from "@/components/gestion-des-litiges/formal-notice/SoloVsProfessional";





export default function FaireUneMiseDemeureEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <TestimonialCarousel />
      <MakeAnAppointment />
      <FAQ />
    </div>
  );
} 