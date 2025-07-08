import { Hero } from "@/components/ebook/guide-rgpd-entreprises/Hero";
import { GuideContent } from "@/components/ebook/guide-rgpd-entreprises/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-rgpd-entreprises/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideRGPDEntreprisesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 