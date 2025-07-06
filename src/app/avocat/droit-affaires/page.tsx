import { FAQ } from "@/components/accompaniement/business-law/FAQ";
import { Guide } from "@/components/accompaniement/business-law/Guide";
import { Hero } from "@/components/accompaniement/business-law/Hero";
import { BusinessCreationSteps } from "@/components/common/BusinessCreationSteps";
import { BusinessSupportServices } from "@/components/common/BusinessSupportServices";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";
import { WhyEntrepreneursLove } from "@/components/accompaniement/business-law/WhyEntrepreneursLove";
import { ExpertTrio } from "@/components/accompaniement/business-law/ExpertTrio";
import { BusinessStages } from "@/components/accompaniement/business-law/BusinessStages";
import { BlogCategories } from "@/components/accompaniement/business-law/BlogCategories";
import { LawCategories } from "@/components/accompaniement/business-law/LawCategories";
import CommittedLawyers from "@/components/accompaniement/business-law/Committed-lawyers";

export default function BusinessLawPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <SoloVsProfessional /> */}
      <WhyEntrepreneursLove />
      <CommittedLawyers />
      {/* <OfferPricing /> */}
      <BusinessSupportServices />
      <BusinessCreationSteps />
      <ExpertTrio />
      <BusinessStages />
      <LawCategories />
      <Guide />
      <TrustedByEntrepreneurs />
      <FAQ />
      <SupportersCarousel />
      <BlogCategories />
    </div>
  );
}
