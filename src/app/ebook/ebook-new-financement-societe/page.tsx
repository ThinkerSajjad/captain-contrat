import { GuideContent } from "@/components/ebook/guide-for-financing/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-for-financing/GuideFeatures";
import { Hero } from "@/components/ebook/guide-for-financing/Hero";
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
