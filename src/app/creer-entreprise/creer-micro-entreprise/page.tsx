
import { FAQ } from "@/components/business-creation/micro-business/FAQ";
import { FreeGuides } from "@/components/business-creation/micro-business/FreeGuides";
import { Guide } from "@/components/business-creation/micro-business/Guide";
import { Hero } from "@/components/business-creation/micro-business/Hero";
import OfferPricing from "@/components/business-creation/micro-business/OfferPricing";
import { SoloVsProfessional } from "@/components/business-creation/micro-business/SoloVsProfessional";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";



export default function CreationMicroEntrepriseEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <OfferPricing />
      <BusinessSupportServices />
      <TrustedByEntrepreneurs />
      <SupportersCarousel />
      <Guide />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 