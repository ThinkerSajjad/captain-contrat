import { BlogArticle, blogArticles } from "@/data/blogs";

// Simulating API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Map blog categories to library categories
const categoryMap: Record<string, 'practical-sheets' | 'favorite-articles' | 'guides-pdf'> = {
  "Business Creation": "practical-sheets",
  "Legal": "practical-sheets",
  "Management": "practical-sheets",
  "Taxation": "favorite-articles",
  "Company Structure": "guides-pdf"
};

// Get all library articles (using blog articles)
export const getLibraryArticles = async (): Promise<BlogArticle[]> => {
  await delay(500);
  return blogArticles;
};

// Get library articles by category
export const getLibraryArticlesByCategory = async (category: string): Promise<BlogArticle[]> => {
  await delay(500);
  return blogArticles.filter(article => {
    // Map the blog category to library category
    const mappedCategory = categoryMap[article.category];
    return mappedCategory === category;
  });
};

// Search library articles
export const searchLibraryArticles = async (query: string): Promise<BlogArticle[]> => {
  await delay(500);
  const lowercaseQuery = query.toLowerCase();
  return blogArticles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) || 
    article.description.toLowerCase().includes(lowercaseQuery)
  );
}; 