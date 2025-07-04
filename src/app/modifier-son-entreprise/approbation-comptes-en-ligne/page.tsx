import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import PricingComparison from "@/components/common/PricingComparison";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessBenefitsAccordion } from "@/components/modifier-son-entreprise/account-approval/BusinessBenefitsAccordion";
import { BusinessCreationSteps } from "@/components/modifier-son-entreprise/account-approval/BusinessCreationSteps";
import { FAQ } from "@/components/modifier-son-entreprise/account-approval/FAQ";
import { FreeGuides } from "@/components/modifier-son-entreprise/account-approval/FreeGuides";
import { Hero } from "@/components/modifier-son-entreprise/account-approval/Hero";






export default function ApprovalAccountsOnlinePage() {
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