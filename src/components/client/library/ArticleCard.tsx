'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Video } from 'lucide-react';

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  articleCount: number;
  videoCount: number;
  pdfCount: number;
  ctaText?: string;
  ctaLink?: string;
}

export default function ArticleCard({
  id,
  title,
  description,
  image,
  articleCount,
  videoCount,
  pdfCount,
  ctaText,
  ctaLink = '#',
}: ArticleCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        
        <div className="flex gap-3 mb-3">
          {articleCount > 0 && (
            <div className="flex items-center text-xs text-gray-500">
              <span className="font-medium mr-1">{articleCount}</span> articles
            </div>
          )}
          
          {videoCount > 0 && (
            <div className="flex items-center text-xs text-gray-500">
              <span className="font-medium mr-1">{videoCount}</span> videos
            </div>
          )}
          
          {pdfCount > 0 && (
            <div className="flex items-center text-xs text-gray-500">
              <span className="font-medium mr-1">{pdfCount}</span> PDF
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {ctaText && (
          <div className="mt-2">
            <Link 
              href={ctaLink} 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 