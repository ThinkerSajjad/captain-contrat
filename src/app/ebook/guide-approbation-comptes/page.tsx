import { Hero } from "@/components/ebook/guide-approbation-comptes/Hero";
import { GuideContent } from "@/components/ebook/guide-approbation-comptes/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-approbation-comptes/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideApprobationComptesPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 