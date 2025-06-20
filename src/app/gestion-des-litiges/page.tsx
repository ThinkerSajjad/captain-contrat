
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { ManageDisputeHero } from "@/components/gestion-des-litiges/ManageDisputeHero";
import { ManageDisputeSteps } from "@/components/gestion-des-litiges/ManageDisputeSteps";
import { OffersForEnterprenuers } from "@/components/gestion-des-litiges/OffersForEnterprenuers";
import { OnlinePlatformBenefits } from "@/components/gestion-des-litiges/OnlinePlatformBenefits";
import { TrustedPartners } from "@/components/gestion-des-litiges/TrustedPartners";
import { WhyUseCaptainContrat } from "@/components/gestion-des-litiges/WhyUseCaptainContrat";



export default function GestionDesLitiges() {
  return (
    <div className="min-h-screen">
        <ManageDisputeHero />
        <ManageDisputeSteps />
        <WhyUseCaptainContrat />
        <OnlinePlatformBenefits />
        <OffersForEnterprenuers />
        <TrustedPartners/>
        <MakeAnAppointment/>
    </div>
  );
} 