import { Hero } from "@/components/ebook/guide-depot-marque/Hero";
import { GuideContent } from "@/components/ebook/guide-depot-marque/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-depot-marque/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideDepotMarquePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 