import { GuideContent } from "@/components/ebook/ebook-new-etapes-creation/GuideContent";
import { GuideFeatures } from "@/components/ebook/ebook-new-etapes-creation/GuideFeatures";
import { Hero } from "@/components/ebook/ebook-new-etapes-creation/Hero";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";




export default function BusinessLawPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
}
