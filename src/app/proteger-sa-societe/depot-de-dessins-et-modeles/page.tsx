
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/proteger-sa-societe/design-and-model/BusinessCreationSteps";
import EntrepreneurialSupport from "@/components/proteger-sa-societe/design-and-model/EntrepreneurialSupport";
import { Hero } from "@/components/proteger-sa-societe/design-and-model/Hero";




export default function DepotDeDessinsEtModelesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <EntrepreneurialSupport />
      <TrustMetrics />
      <TestimonialCarousel />
      <SupportersCarousel />
    </div>
  );
} 