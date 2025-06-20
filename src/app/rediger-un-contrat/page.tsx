import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { SupportersCarousel } from "@/components/common/SupportersCarousel";
import { BusinessBenefitsAccordion } from "@/components/rediger-un-contrat/BusinessBenefitsAccordion";
import { CommercialContractHero } from "@/components/rediger-un-contrat/CommercialContractHero";
import { DiscoverAllContract } from "@/components/rediger-un-contrat/DiscoverAllContract";
import { OnlinePlatformBenefits } from "@/components/rediger-un-contrat/OnlinePlatformBenefits";
import { TrustedPartners } from "@/components/rediger-un-contrat/TrustedPartners";

export default function RedigerUnContrat() {
  return (
    <div className="min-h-screen">
        <CommercialContractHero />
        <BusinessBenefitsAccordion />
        <OnlinePlatformBenefits />
        <SupportersCarousel />
        <TrustedPartners/>
        <DiscoverAllContract/>
        <MakeAnAppointment/>
    </div>
  );
} 