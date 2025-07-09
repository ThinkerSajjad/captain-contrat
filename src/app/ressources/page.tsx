import { FeaturedBlog } from "@/components/resources/FeaturedBlog";
import { Hero } from "@/components/resources/Hero";
import { TopArticles } from "@/components/resources/TopArticles";
import { BusinessLifeStages } from "@/components/resources/BusinessLifeStages";
import { getFeaturedArticle } from "@/lib/api/blogs";
import { LegalFormsOverview } from "@/components/resources/LegalFormsOverview";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default async function ResourcesPage() {
  // Fetch data for featured article only
  const featuredArticle = await getFeaturedArticle();

  return (
    <main>
      <Hero />
      <FeaturedBlog article={featuredArticle} />
      <TopArticles />
      <BusinessLifeStages />
      <LegalFormsOverview />
      <StartBusinessSection />
    </main>
  );
} 