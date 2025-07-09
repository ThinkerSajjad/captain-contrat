import { Hero } from "@/components/ebook/guide-transformation-societe/Hero";
import { GuideContent } from "@/components/ebook/guide-transformation-societe/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-transformation-societe/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideTransformationSocietePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 