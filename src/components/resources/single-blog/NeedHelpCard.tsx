import Link from "next/link";
import Image from "next/image";

export default function NeedHelpCard() {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-tertiary mb-4">
        Need help managing your accounting?
      </h3>
      
      <Link 
        href="/expertise-comptable" 
        className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition-colors mb-6"
      >
        Entrust my accounting
      </Link>
      
      {/* Verified Reviews */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-2">
          <Image 
            src="/images/hero/avis-verifies-logo.png" 
            alt="Verified Reviews" 
            width={24} 
            height={24} 
          />
        </div>
        <div className="flex items-center">
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star} 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                className="mr-0.5"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600">
            4.8 <span className="underline">(443 evaluations)</span>
          </span>
        </div>
      </div>
    </div>
  );
} 