import { FAQ } from "@/components/business-creation/sas/FAQ";
import { FreeGuides } from "@/components/business-creation/sas/FreeGuides";
import { Guide } from "@/components/business-creation/sas/Guide";
import { Hero } from "@/components/business-creation/sas/Hero";
import OfferPricing from "@/components/business-creation/sas/OfferPricing";
import { SoloVsProfessional } from "@/components/business-creation/sas/SoloVsProfessional";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";


export default function CreationSasuEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <OfferPricing />
      <BusinessSupportServices />
      <TrustedByEntrepreneurs />
      <Guide />
      <SupportersCarousel />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 