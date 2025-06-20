import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { Hero } from "@/components/proteger-sa-societe/art-search/Hero";

import EntrepreneurialSupport from "@/components/proteger-sa-societe/art-search/EntrepreneurialSupport";

import { FreeGuides } from "@/components/proteger-sa-societe/art-search/FreeGuides";
import { BusinessBenefitsAccordion } from "@/components/common/BusinessBenefitsAccordion";
import { FAQ } from "@/components/proteger-sa-societe/art-search/FAQ";



export default function RechercheAnterieurePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <BusinessBenefitsAccordion />
      <EntrepreneurialSupport />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 