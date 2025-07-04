
import { PricingPlans } from "@/components/common/PricingPlans";
import PageContainer from "@/components/layout/PageContainer";

export default function OfferPricing() {
  return (
    <div className="min-h-screen bg-lightPrimary lg:py-16 py-10">
        <PageContainer>
        <h1 className="lg:text-5xl text-4xl font-bold text-center text-tertiary lg:mb-8 mb-4">
        How much does it cost to create with Captain Contrat?
        </h1>
       <PricingPlans />
       
       </PageContainer>
    </div>
  );
} 