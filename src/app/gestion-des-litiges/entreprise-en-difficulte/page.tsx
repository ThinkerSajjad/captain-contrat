import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { BusinessCreationSteps } from "@/components/gestion-des-litiges/company-difficulties/BusinessCreationSteps";
import { FAQ } from "@/components/gestion-des-litiges/company-difficulties/FAQ";
import { Hero } from "@/components/gestion-des-litiges/company-difficulties/Hero";
import { FinancialDifficultiesProcedures } from "@/components/gestion-des-litiges/company-difficulties/FinancialDifficultiesProcedures";
import { ReasonsToWorkWithLawyer } from "@/components/gestion-des-litiges/company-difficulties/ReasonsToWorkWithLawyer";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { FreeGuides } from "@/components/gestion-des-litiges/company-difficulties/FreeGuides";

export default function EntrepriseEnDifficultePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <FinancialDifficultiesProcedures />
      <ReasonsToWorkWithLawyer />
      <TestimonialCarousel />
      <SupportersCarousel />
      <MakeAnAppointment />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 