import { Metadata } from "next";
import { getBlogArticles } from "@/lib/api/blogs";

interface BlogLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ 
  params 
}: BlogLayoutProps): Promise<Metadata> {
  // Properly await the params
  const { slug } = await params;
  
  // Get all blog articles
  const articles = await getBlogArticles();
  
  // Find the specific article by slug
  const article = articles.find(article => article.slug === slug);
  
  if (!article) {
    return {
      title: "Blog Article | Captain Contrat",
      description: "Legal resources for your business"
    };
  }
  
  return {
    title: `${article.title} | Captain Contrat`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.image }]
    }
  };
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>;
}

export async function generateStaticParams() {
  const articles = await getBlogArticles();
  
  return articles.map((article) => ({
    slug: article.slug,
  }));
} 