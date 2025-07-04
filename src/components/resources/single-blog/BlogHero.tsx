import Link from "next/link";
import { BlogCategory } from "@/data/blogs";

interface BlogHeroProps {
  category: BlogCategory;
  title: string;
  publishedDate: string;
  readingTime: number;
}

export default function BlogHero({ 
  category, 
  title, 
  publishedDate, 
  readingTime 
}: BlogHeroProps) {
  return (
    <div className="bg-gradient-to-b from-primary to-white py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex mb-6 text-sm text-gray-500">
          <Link href="/ressources" className="hover:text-tertiary">
            Resources
          </Link>
          <span className="mx-2">›</span>
          <Link href={`/ressources?category=${encodeURIComponent(category)}`} className="hover:text-tertiary">
            {category}
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{title.split('|')[0].trim()}</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-lato font-bold text-center text-tertiary mb-4">
          {title.split('|')[0].trim()}
        </h1>

        {/* Metadata */}
        <div className="flex items-center text-sm text-gray-500 justify-center">
          <span>Updated: {publishedDate}</span>
          <span className="mx-2">•</span>
          <span>{readingTime} min</span>
        </div>
      </div>
    </div>
  );
} 