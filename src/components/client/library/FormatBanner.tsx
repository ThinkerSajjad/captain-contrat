'use client';
import { ThumbsUp } from 'lucide-react';
import Link from 'next/link';

export default function FormatBanner() {
  return (
    <div className="bg-blue-50 p-6 rounded-lg mb-8 flex items-start">
      <div className="mr-4 bg-yellow-400 p-2 rounded-md">
        <ThumbsUp className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg mb-1">Want another format?</h3>
        <p className="text-gray-600 mb-4">Deepen your knowledge with our other content.</p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
            Watch the videos
          </button>
          <Link href="/tous-nos-guides" className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm">
            Discover the PDF guides
          </Link>
        </div>
      </div>
    </div>
  );
} 