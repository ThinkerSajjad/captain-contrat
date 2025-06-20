
import { PricingPlans } from "@/components/common/PricingPlans";
import PageContainer from "@/components/layout/PageContainer";
import Link from "next/link";

export default function OfferPricing() {
  return (
    <div className="min-h-screen bg-lightPrimary lg:py-16 py-10">
        <PageContainer>
        <h1 className="lg:text-5xl text-4xl font-bold text-center text-tertiary lg:mb-8 mb-4">
         Our offers for creating a SAS
        </h1>
       <PricingPlans />
       <div className="flex justify-center gap-4 mt-8">
        <Link href="/creer-entreprise" className="bg-secondary-dark text-white text-sm lg:text-base lg:px-6 px-4 lg:py-3 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Create your SAS
        </Link>
        <Link href="/creer-entreprise" className="bg-white border border-gray-300 text-gray-800 text-sm lg:text-base lg:px-6 px-4 lg:py-3 py-2 rounded-full font-semibold hover:bg-gray-50 transition-all">
            Receive the details by email
        </Link>
       </div>
       </PageContainer>
    </div>
  );
} 