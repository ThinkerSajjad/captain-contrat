import Image from "next/image";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";

interface FeaturedBlogProps {
  article: {
    image: string;
    tag: string;
    title: string;
    description: string;
    updatedDate: string;
    readingTime: number;
    slug: string;
  };
}

export function FeaturedBlog({ article }: FeaturedBlogProps) {
  return (
    <section className="py-12">
      <PageContainer>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-[400px] w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Tag */}
            <div className="inline-block">
              <span className="text-red-500 font-medium">
                {article.tag}
              </span>
            </div>

            {/* Title */}
            <Link href={`/resources/${article.slug}`}>
              <h3 className="text-3xl lg:text-4xl font-lato font-bold text-tertiary hover:underline transition-colors mb-6">
                {article.title}
              </h3>
            </Link>

            {/* Description */}
            <p className="text-gray-700 text-lg">
              {article.description}
            </p>

            {/* Metadata */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>📅 Updated:</span>
                <time>{article.updatedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <span>⏱️ Reading time:</span>
                <span>{article.readingTime} min</span>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
} 