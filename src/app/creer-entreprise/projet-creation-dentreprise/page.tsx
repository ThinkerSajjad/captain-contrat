
import { BusinessCreationSteps } from "@/components/business-creation/preparation-for-business-creation/BusinessCreationSteps";
import { FreeGuides } from "@/components/business-creation/preparation-for-business-creation/FreeGuides";
import { Hero } from "@/components/business-creation/preparation-for-business-creation/Hero";
import OfferPricing from "@/components/business-creation/preparation-for-business-creation/OfferPricing";
import { VideoGuide } from "@/components/business-creation/preparation-for-business-creation/VideoGuide";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs";
import { BlogCategories } from "@/components/home/BlogCategories";



export default function ProjetCreationEntreprisePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BusinessCreationSteps />
      <OfferPricing />
      <TrustedByEntrepreneurs />
      <SupportersCarousel />
      <FreeGuides />
      <VideoGuide />
      <BlogCategories />
    </div>
  );
} 