import { FAQ } from "@/components/business-creation/eurl/FAQ";
import { FreeGuides } from "@/components/business-creation/eurl/FreeGuides";
import { Hero } from "@/components/business-creation/eurl/Hero";
import { HowToCreate } from "@/components/business-creation/eurl/HowToCreate";
import { NeedToKnow } from "@/components/business-creation/eurl/NeedToKnow";
import OfferPricing from "@/components/business-creation/eurl/OfferPricing";
import { SoloVsProfessional } from "@/components/business-creation/eurl/SoloVsProfessional";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";



export default function CreationSasuEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <OfferPricing />
      <BusinessSupportServices />
      <TrustedByEntrepreneurs />
      <SupportersCarousel />
      <HowToCreate />
      <FAQ />
      <FreeGuides />
    </div>
  );
} 