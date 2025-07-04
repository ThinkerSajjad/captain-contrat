import Image from "next/image";
import Link from "next/link";
import { BlogArticle } from "@/data/blogs";

interface TopArticlesProps {
  articles: BlogArticle[];
}

export function TopArticles({ articles }: TopArticlesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lato font-bold text-tertiary mb-12">
          Our top articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col">
              {/* Image */}
              <Link href={`/ressources/${article.slug}`} className="block mb-4 relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <Link href={`/ressources/${article.slug}`}>
                  <h3 className="text-xl font-lato font-bold text-tertiary hover:underline mb-3">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {article.description}
                </p>

                {/* Metadata */}
                <div className="text-sm text-gray-500">
                  {article.updatedDate} · {article.readingTime} min
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 