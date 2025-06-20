import { FAQ } from "@/components/business-creation/shareholder-agreement/FAQ";
import { FreeGuides } from "@/components/business-creation/shareholder-agreement/FreeGuides";
import { Hero } from "@/components/business-creation/shareholder-agreement/Hero";
import { WhyMakeAgreement } from "@/components/business-creation/shareholder-agreement/WhyMakeAgreement";
import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { BusinessCreationSteps } from "@/components/business-creation/shareholder-agreement/BusinessCreationSteps";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";



export default function RedigerPacteAssociesEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyMakeAgreement />
      <TestimonialCarousel />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <MakeAnAppointment />
      <TrustedByEntrepreneurs />
      <SupportersCarousel />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 