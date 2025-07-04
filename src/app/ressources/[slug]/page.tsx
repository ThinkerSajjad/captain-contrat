import { notFound } from "next/navigation";
import { getBlogArticles } from "@/lib/api/blogs";
import BlogHero from "@/components/resources/single-blog/BlogHero";
import BlogSummary from "@/components/resources/single-blog/BlogSummary";
import BlogContent from "@/components/resources/single-blog/BlogContent";
import NeedHelpCard from "@/components/resources/single-blog/NeedHelpCard";
import RelatedArticles from "@/components/resources/single-blog/RelatedArticles";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  // Properly await the params
  const { slug } = await params;
  
  // Get all blog articles
  const articles = await getBlogArticles();
  
  // Find the specific article by slug
  const article = articles.find(article => article.slug === slug);
  
  // If article not found, return 404
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero section with breadcrumb, title, date */}
      <BlogHero 
        category={article.category}
        title={article.title}
        publishedDate={article.updatedDate}
        readingTime={article.readingTime}
      />
      
      {/* Main content with 3-column layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar - Summary (sticky) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <BlogSummary article={article} />
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-6">
            <BlogContent slug={article.slug} />
          </div>
          
          {/* Right sidebar - Need help card (sticky) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <NeedHelpCard />
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles section */}
      <RelatedArticles currentArticle={article} articles={articles} />
    </div>
  );
} 