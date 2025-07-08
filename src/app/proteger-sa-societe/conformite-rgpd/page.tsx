import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TestimonialCarousel } from "@/components/common/TestimonialCarousel";
import { TrustMetrics } from "@/components/common/TrustMetrics";
import { BusinessCreationSteps } from "@/components/proteger-sa-societe/gdpr-compliance/BusinessCreationSteps";
import EntrepreneurialSupport from "@/components/proteger-sa-societe/gdpr-compliance/EntrepreneurialSupport";
import { Hero } from "@/components/proteger-sa-societe/gdpr-compliance/Hero";





export default function ConformiteRGPDPage() {
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