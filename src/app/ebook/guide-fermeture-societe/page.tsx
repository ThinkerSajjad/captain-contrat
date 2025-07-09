import { Hero } from "@/components/ebook/guide-fermeture-societe/Hero";
import { GuideContent } from "@/components/ebook/guide-fermeture-societe/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-fermeture-societe/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideFermetureSocietePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 