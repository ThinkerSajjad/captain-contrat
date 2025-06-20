import { FAQ } from "@/components/business-creation/llc/FAQ";
import { FreeGuides } from "@/components/business-creation/llc/FreeGuides";
import { Hero } from "@/components/business-creation/llc/Hero";
import { HowToCreate } from "@/components/business-creation/llc/HowToCreate";
import { NeedToKnow } from "@/components/business-creation/llc/NeedToKnow";
import OfferPricing from "@/components/business-creation/llc/OfferPricing";
import { SoloVsProfessional } from "@/components/business-creation/llc/SoloVsProfessional";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";



export default function CreationSarlEnLignePage() {
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