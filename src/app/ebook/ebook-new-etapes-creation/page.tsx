import { Hero } from "@/components/ebook/ebook-new-etapes-creation/Hero";
import { GuideContent } from "@/components/ebook/ebook-new-etapes-creation/GuideContent";
import { GuideFeatures } from "@/components/ebook/ebook-new-etapes-creation/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function EbookNewEtapesCreationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
}
