import { Hero } from "@/components/ebook/guide-pratique-pour-les-createurs/Hero";
import { GuideContent } from "@/components/ebook/guide-pratique-pour-les-createurs/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-pratique-pour-les-createurs/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideCreatorsPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 