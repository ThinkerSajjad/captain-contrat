import { Hero } from "@/components/ebook/guide-aide-creation/Hero";
import { GuideContent } from "@/components/ebook/guide-aide-creation/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-aide-creation/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideBusinessAssistancePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 