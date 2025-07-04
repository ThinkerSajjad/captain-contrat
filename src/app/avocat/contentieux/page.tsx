import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";
import { BusinessCreationSteps } from "@/components/gestion-des-litiges/litigation/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/gestion-des-litiges/litigation/BusinessSupportServices";
import { ExpertTrio } from "@/components/gestion-des-litiges/litigation/ExpertTrio";
import { FAQ } from "@/components/gestion-des-litiges/litigation/FAQ";
import { Hero } from "@/components/gestion-des-litiges/litigation/Hero";
import { WhyEntrepreneursLove } from "@/components/gestion-des-litiges/litigation/WhyEntrepreneursLove";






export default function AvocatContentieuxPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhyEntrepreneursLove />
      <BusinessSupportServices />
      <BusinessCreationSteps />
      <ExpertTrio />
      <TrustedByEntrepreneurs />
      <FAQ />
    </div>
  );
} 