import { BlogArticle, blogArticles } from "@/data/blogs";

// Simulating API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getBlogArticles = async (): Promise<BlogArticle[]> => {
  // Simulate API call delay
  await delay(500);
  return blogArticles;
};

export const getFeaturedArticle = async (): Promise<BlogArticle> => {
  // Simulate API call delay
  await delay(500);
  // For now, return the first article as featured
  return blogArticles[0];
}; 