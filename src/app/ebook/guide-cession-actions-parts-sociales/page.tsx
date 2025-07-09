import { Hero } from "@/components/ebook/guide-cession-actions/Hero";
import { GuideContent } from "@/components/ebook/guide-cession-actions/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-cession-actions/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideCessionActionsPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 