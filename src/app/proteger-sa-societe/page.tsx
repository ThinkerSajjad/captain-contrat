import { ProtectMyBrandHero } from "@/components/proteger-sa-societe/ProtectMyBrandHero";
import { ProtectMyBrandBenefits } from "@/components/proteger-sa-societe/ProtectMyBrandBenefits";
import { BrandProtectSteps } from "@/components/proteger-sa-societe/BrandProtectSteps";
import { TrustedPartners } from "@/components/proteger-sa-societe/TrustedPartners";
import { FinalQuestions } from "@/components/proteger-sa-societe/FinalQuestions";
import { ReadyToStart } from "@/components/proteger-sa-societe/ReadyToStart";
import { MakeAnAppointment } from "@/components/common/MakeAnAppointment";

export default function BusinessCreationPage() {
  return (
    <div className="min-h-screen">
        <ProtectMyBrandHero />
        <ProtectMyBrandBenefits />
        <BrandProtectSteps />
        <TrustedPartners />
        <MakeAnAppointment />
        <FinalQuestions />
        <ReadyToStart />
    </div>
  );
} 