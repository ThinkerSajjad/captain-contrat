import { Hero } from "@/components/ebook/guide-creation-entreprise/Hero";
import { GuideContent } from "@/components/ebook/guide-creation-entreprise/GuideContent";
import { GuideFeatures } from "@/components/ebook/guide-creation-entreprise/GuideFeatures";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default function GuideRegistrationPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <GuideContent />
      <GuideFeatures />
      <StartBusinessSection />
    </div>
  );
} 