import { Hero } from "@/components/ebook/guide-contrats-commerciaux/Hero";
import { GuideContent } from "@/components/ebook/guide-contrats-commerciaux/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-contrats-commerciaux/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideContratsCommerciauxPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 