import { Hero } from "@/components/ebook/guide-juridique-sas/Hero";
import { GuideContent } from "@/components/ebook/guide-juridique-sas/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-juridique-sas/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideSASPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 