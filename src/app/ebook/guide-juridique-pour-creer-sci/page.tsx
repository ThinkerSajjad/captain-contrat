import { Hero } from "@/components/ebook/guide-juridique-sci/Hero";
import { GuideContent } from "@/components/ebook/guide-juridique-sci/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-juridique-sci/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideSCIPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 