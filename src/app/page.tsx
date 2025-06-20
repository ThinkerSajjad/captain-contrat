import { Hero } from "@/components/home/Hero"
import { WhyEntrepreneursLove } from "@/components/home/WhyEntrepreneursLove"
import { BusinessPlatform } from "@/components/home/BusinessPlatform"
import { ExpertTrio } from "@/components/home/ExpertTrio"
import { SupportersCarousel } from "@/components/common/SupportersCarousel"
import { BusinessStages } from "@/components/home/BusinessStages"
import { TrustedByEntrepreneurs } from "@/components/common/TrustedByEntrepreneurs"
import { BlogCategories } from "@/components/home/BlogCategories"

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Hero />
      <WhyEntrepreneursLove />
      <BusinessPlatform />
      <ExpertTrio />
      <SupportersCarousel />
      <BusinessStages />
      <TrustedByEntrepreneurs />
      <BlogCategories />
    </div>
  )
}
