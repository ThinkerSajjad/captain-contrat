import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";

import { FreeGuides } from "@/components/proteger-sa-societe/trademark-filling/FreeGuides";
import { Hero } from "@/components/proteger-sa-societe/trademark-filling/Hero";
import { HowToCreate } from "@/components/proteger-sa-societe/trademark-filling/HowToCreate";
import { NeedToKnow } from "@/components/proteger-sa-societe/trademark-filling/NeedToKnow";
import { SoloVsProfessional } from "@/components/proteger-sa-societe/trademark-filling/SoloVsProfessional";
import SupportService from "@/components/proteger-sa-societe/trademark-filling/SupportService";
import EntrepreneurialSupport from "@/components/proteger-sa-societe/trademark-filling/EntrepreneurialSupport";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";



export default function CreationSarlEnLignePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NeedToKnow />
      <SoloVsProfessional />
      <BusinessCreationSteps />
      <SupportService />
      <EntrepreneurialSupport />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
      <HowToCreate />
      <FreeGuides />
    </div>
  );
} 