import { Hero } from "@/components/ebook/guide-juridique-eurl/Hero";
import { GuideContent } from "@/components/ebook/guide-juridique-eurl/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-juridique-eurl/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideEURLPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 