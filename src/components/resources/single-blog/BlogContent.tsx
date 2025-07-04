import Image from "next/image";
import Link from "next/link";
import { getBlogArticles } from "@/lib/api/blogs";

interface BlogContentProps {
  slug: string;
}

export default async function BlogContent({ slug }: BlogContentProps) {
  // Get the blog article data from the API
  const articles = await getBlogArticles();
  const article = articles.find(article => article.slug === slug);
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="prose prose-lg max-w-none">
      {/* Author info */}
      <div className="flex items-center mb-8 pb-6 border-b border-gray-200">
        <div className="flex-shrink-0 mr-4">
          <Image 
            src={article.author.image}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">Written by</p>
          <p className="font-medium">{article.author.name}, {article.author.title}</p>
          <p className="text-sm text-blue-600 hover:underline">
            <Link href="#">See all articles</Link>
          </p>
        </div>
      </div>

      {/* Main content with HTML from data file */}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      
      {/* CTA Banner */}
      <div className={`lg:my-10 my-6 lg:p-8 p-6 rounded-xl ${article.cta.bgColor || 'bg-primary'}`}>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-3">
          {article.cta.title}
        </h3>
        <p className="text-center text-gray-700 mb-6">
          {article.cta.description}
        </p>
        <div className="flex justify-center">
          <Link 
            href={article.cta.buttonUrl}
            className="bg-secondary-dark font-semibold hover:bg-secondary-dark/90 text-white py-3 px-8 rounded-full transition-colors"
          >
            {article.cta.buttonText}
          </Link>
        </div>
      </div>
      
      {/* Author Bio Section */}
      <div className="mt-12 mb-8">
        <div className="flex items-start">
          <Image 
            src={article.author.image}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-full mr-4"
          />
          <div>
            <p className="font-medium text-gray-800">
              Written by <Link href={article.author.linkedProfile || "#"} className="text-tertiary font-bold hover:underline">{article.author.name}</Link>
            </p>
            <p className="text-gray-700 mt-2">
              {article.author.bio}
            </p>
            
            {article.proofreader && (
              <p className="text-gray-600 text-sm mt-3">
                Proofread by <Link href="#" className="hover:underline">{article.proofreader.name}</Link>, {article.proofreader.title}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="mt-12">
        <h3 className="flex items-center text-2xl font-bold text-tertiary mb-4">
          <svg className="w-8 h-8 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          A question? Leave your comment
        </h3>
        
        <p className="text-gray-700 mb-4">Your contact details are required so that we can respond to you.</p>
        
        <form className="space-y-4">
          <div>
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={5}
              placeholder="Are you an entrepreneur? Leave us your comment and an expert will respond."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">First name / Last name <span className="text-red-500">*</span></label>
              <input 
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input 
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              type="submit"
              className="bg-secondary-dark hover:bg-secondary-dark/90 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              Post my comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 