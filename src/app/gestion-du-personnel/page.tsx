import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";
import { ManageMyEmployeesHero } from "@/components/gestion-du-personnel/ManageMyEmployeesHero";
import { ManageMyEmployeesSteps } from "@/components/gestion-du-personnel/ManageMyEmployeesSteps";
import { OffersForEnterprenuers } from "@/components/gestion-du-personnel/OffersForEnterprenuers";
import { OnlinePlatformBenefits } from "@/components/gestion-du-personnel/OnlinePlatformBenefits";
import { WhyUseCaptainContrat } from "@/components/gestion-du-personnel/WhyUseCaptainContrat";
import { TrustedPartners } from "@/components/proteger-sa-societe/TrustedPartners";


export default function ManageMyEmployees() {
  return (
    <div className="min-h-screen">
        <ManageMyEmployeesHero />
        <ManageMyEmployeesSteps />
        <WhyUseCaptainContrat />
        <OnlinePlatformBenefits />
        <TrustedPartners />
        <OffersForEnterprenuers />
        <MakeAnAppointment />
    </div>
  );
} 