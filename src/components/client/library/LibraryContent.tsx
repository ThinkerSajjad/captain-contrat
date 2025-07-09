'use client';
import { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import FormatBanner from './FormatBanner';
import { getLibraryArticlesByCategory, searchLibraryArticles } from '@/lib/api/library';
import { BlogArticle } from '@/data/blogs';

interface LibraryContentProps {
  activeTab: string;
  searchQuery: string;
}

export default function LibraryContent({ activeTab, searchQuery }: LibraryContentProps) {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('All practical sheets');

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        let fetchedArticles;
        
        if (searchQuery) {
          fetchedArticles = await searchLibraryArticles(searchQuery);
          setTitle(`Search results for "${searchQuery}"`);
        } else {
          fetchedArticles = await getLibraryArticlesByCategory(activeTab);
          
          switch (activeTab) {
            case 'practical-sheets':
              setTitle('All practical sheets');
              break;
            case 'favorite-articles':
              setTitle('Your favorite articles');
              break;
            case 'guides-pdf':
              setTitle('PDF Guides');
              break;
            default:
              setTitle('Library');
          }
        }
        
        setArticles(fetchedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [activeTab, searchQuery]);

  if (isLoading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <FormatBanner />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-t-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <FormatBanner />
        <div className="text-center py-12">
          <p className="text-gray-500">No articles found.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <FormatBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            image={article.image}
            articleCount={article.summaryItems.length}
            videoCount={0}
            pdfCount={0}
            ctaText={article.cta.buttonText}
            ctaLink={article.cta.buttonUrl}
          />
        ))}
      </div>
    </div>
  );
} 