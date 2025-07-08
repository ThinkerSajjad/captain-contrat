import { FeaturedBlog } from "@/components/resources/FeaturedBlog";
import { Hero } from "@/components/resources/Hero";
import { TopArticles } from "@/components/resources/TopArticles";
import { BusinessLifeStages } from "@/components/resources/BusinessLifeStages";
import { getFeaturedArticle, getBlogArticles } from "@/lib/api/blogs";
import { LegalFormsOverview } from "@/components/resources/LegalFormsOverview";
import { StartBusinessSection } from "@/components/resources/StartBusinessSection";

export default async function ResourcesPage() {
  // Fetch data in parallel
  const [featuredArticle, articles] = await Promise.all([
    getFeaturedArticle(),
    getBlogArticles()
  ]);

  return (
    <main>
      <Hero />
      <FeaturedBlog article={featuredArticle} />
      <TopArticles articles={articles} />
      <BusinessLifeStages />
      <LegalFormsOverview />
      <StartBusinessSection />
    </main>
  );
} 