import { Hero } from "@/components/ebook/guide-juridique-sasu/Hero";
import { GuideContent } from "@/components/ebook/guide-juridique-sasu/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-juridique-sasu/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideSASUPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 