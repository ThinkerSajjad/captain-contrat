
import { FAQ } from "@/components/business-creation/sci/FAQ";
import { FreeGuides } from "@/components/business-creation/sci/FreeGuides";
import { Hero } from "@/components/business-creation/sci/Hero";
import { HowToCreate } from "@/components/business-creation/sci/HowToCreate";
import { NeedToKnow } from "@/components/business-creation/sci/NeedToKnow";
import OfferPricing from "@/components/business-creation/sci/OfferPricing";
import { SoloVsProfessional } from "@/components/business-creation/sci/SoloVsProfessional";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";



export default function CreationSciEnLignePage() {
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